"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import OpnFormIframe from "./OpnFormIframe";
import Image from "next/image";

const IMAGE_URL =
  "https://images.prismic.io/rehabana/aZ2FosFoBIGEgt6C_20260107_112226.jpg";

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

  // Form submitted: listen for postMessage from OpnForm iframe to suppress for 1 day
  useEffect(() => {
    if (typeof window === "undefined" || !visible) return;

    const onMessage = (event) => {
      // Make sure that the event data has the type `form-submitted`
      if (
        event.data?.type !== "form-submitted" ||
        event.data?.form?.slug != "rc-website-contact-awwai2"
      ) {
        return;
      }

      localStorage.setItem(STORAGE_SUBMITTED_AT, String(Date.now()));
      setVisible(false);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [visible]);

  // Close on overlay click or Escape
  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, closePopup]);

  if (!visible) return null;

  return (
    <div
      className="cs_contact_popup active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
    >
      <div
        className="cs_contact_popup-overlay"
        onClick={closePopup}
        onKeyDown={(e) => e.key === "Enter" && closePopup()}
        tabIndex={0}
        role="button"
        aria-label="Close popup"
      />
      <div className="cs_contact_popup-content">
        <div className="cs_contact_popup-container">
          <button
            type="button"
            className="cs_contact_popup-close"
            onClick={closePopup}
            aria-label="Close"
          />
          <div className="cs_contact_popup-body row g-0">
            <div className="cs_contact_popup-image_col col-12 col-lg-6">
              <div className="cs_contact_popup-image_wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={IMAGE_URL}
                  priority
                  alt="Rehabana"
                  width={500}
                  height={500}
                  className="cs_contact_popup-img"
                />
              </div>
            </div>
            <div className="cs_contact_popup-form_col col-12 col-lg-6">
              <div className="cs_contact_popup-form_inner">
                <h2 id="contact-popup-title" className="cs_contact_popup-title">
                  Get in touch
                </h2>
                <OpnFormIframe
                  className="cs_contact_popup-iframe"
                  height="420px"
                  borderRadius="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cs_contact_popup {
          position: fixed;
          z-index: 1050;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          transition: left 0s 0.3s;
        }
        .cs_contact_popup.active {
          left: 0;
          transition-delay: 0s;
        }
        .cs_contact_popup-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cs_contact_popup.active .cs_contact_popup-overlay {
          opacity: 1;
        }
        .cs_contact_popup-content {
          position: absolute;
          inset: 0;
          overflow: auto;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(20px);
          opacity: 0;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }
        .cs_contact_popup.active .cs_contact_popup-content {
          transform: translateY(0);
          opacity: 1;
        }
        .cs_contact_popup-container {
          position: relative;
          background: #fff;
          max-width: 900px;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }
        .cs_contact_popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cs_contact_popup-close:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        .cs_contact_popup-close::before,
        .cs_contact_popup-close::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 18px;
          height: 2px;
          background: #333;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        .cs_contact_popup-close::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        .cs_contact_popup-body {
          min-height: 320px;
        }
        .cs_contact_popup-image_col {
          min-height: 220px;
        }
        .cs_contact_popup-image_wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 220px;
          overflow: hidden;
        }
        @media (min-width: 992px) {
          .cs_contact_popup-image_wrapper {
            min-height: 420px;
          }
        }
        .cs_contact_popup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cs_contact_popup-form_col {
          display: flex;
          align-items: stretch;
        }
        .cs_contact_popup-form_inner {
          padding: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .cs_contact_popup-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: #1a1a1a;
          text-align: center;
        }
        .cs_contact_popup-iframe {
          flex: 1;
          min-height: 380px;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-iframe {
            min-height: 320px;
          }
        }
      `}</style>
    </div>
  );
}
