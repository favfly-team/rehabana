"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ContactModal from "./ContactModal";

/**
 * Automatic contact popup, mounted once in the layout.
 *
 * This file owns only the "when should it appear on its own" rules; the dialog
 * itself lives in ContactModal, which is shared with the Book a Consultation
 * buttons. A manual click bypasses all of the suppression below by design.
 */

const STORAGE_SUBMITTED_AT = "rc_popup_form_submitted_at";
const STORAGE_LAST_CLOSED_AT = "rc_popup_last_closed_at";
const SUBMITTED_SUPPRESS_MS = 24 * 60 * 60 * 1000; // 1 day
const REOPEN_AFTER_CLOSE_MS = 5 * 60 * 1000; // 5 minutes
const SCROLL_DELAY_MS = 6 * 1000; // 6 seconds after scroll
const SCROLL_THRESHOLD_PX = 120; // "scroll down a little bit"

function getSubmittedAt() {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_SUBMITTED_AT);
  return v ? parseInt(v, 10) : null;
}

function getLastClosedAt() {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_LAST_CLOSED_AT);
  return v ? parseInt(v, 10) : null;
}

function canShowPopup() {
  const submittedAt = getSubmittedAt();
  if (submittedAt && Date.now() - submittedAt < SUBMITTED_SUPPRESS_MS) {
    return false;
  }
  const lastClosedAt = getLastClosedAt();
  if (lastClosedAt && Date.now() - lastClosedAt < REOPEN_AFTER_CLOSE_MS) {
    return false;
  }
  return true;
}

/** Remember a submission so the popup stops asking for a day. */
export function markContactFormSubmitted() {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_SUBMITTED_AT, String(Date.now()));
}

export default function ContactModalPopup() {
  const [visible, setVisible] = useState(false);
  const scrollTimerStarted = useRef(false);
  const openTimeoutRef = useRef(null);

  const openPopup = useCallback(() => {
    if (!canShowPopup()) return;
    setVisible(true);
    scrollTimerStarted.current = true;
  }, []);

  const closePopup = useCallback(() => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_LAST_CLOSED_AT, String(Date.now()));
    }
    scrollTimerStarted.current = false;
  }, []);

  // Scroll: once user scrolls past threshold and we can show, start 6s timer (once per cycle)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      if (scrollTimerStarted.current || !canShowPopup()) return;
      if (window.scrollY < SCROLL_THRESHOLD_PX) return;

      scrollTimerStarted.current = true;
      openTimeoutRef.current = window.setTimeout(openPopup, SCROLL_DELAY_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }
    };
  }, [openPopup]);

  return (
    <ContactModal
      open={visible}
      onClose={closePopup}
      onSubmitted={markContactFormSubmitted}
    />
  );
}
