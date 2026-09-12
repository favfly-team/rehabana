"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import OpnFormIframe from "./OpnFormIframe";

/**
 * The contact dialog itself — presentation only, fully controlled.
 *
 * Split out of ContactModalPopup so the same dialog can be opened two ways:
 * automatically on scroll (ContactModalPopup, mounted once in the layout) and
 * on demand from a button (BookConsultationButton). The auto-popup's
 * localStorage suppression stays in ContactModalPopup — a click must always
 * open, even if the visitor dismissed the automatic one a minute ago.
 */

export const CONTACT_FORM_SLUG = "rc-website-contact-awwai2";

const IMAGE_URL =
  "https://images.prismic.io/rehabana/aZ2FosFoBIGEgt6C_20260107_112226.jpg";

const ContactModal = ({
  open,
  onClose,
  onSubmitted,
  title = "Get in touch",
}) => {
  // Portals need the DOM, so wait for mount before rendering one.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Escape to close.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // OpnForm posts a message up when the form is submitted.
  useEffect(() => {
    if (!open) return;
    const onMessage = (event) => {
      if (
        event.data?.type !== "form-submitted" ||
        event.data?.form?.slug != CONTACT_FORM_SLUG
      ) {
        return;
      }
      onSubmitted?.();
      onClose?.();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [open, onClose, onSubmitted]);

  if (!open || !mounted) return null;

  // Rendered into <body>, not where the trigger sits.
  //
  // The booking-card button lives inside `.cs_doctor_rail_inner`, which is
  // position:sticky — and sticky creates a stacking context. A dialog rendered
  // in there is trapped: its z-index is compared only against the rail's
  // siblings, so later sections (the condition tiles) paint over it no matter
  // how high the number goes. A portal to <body> is the actual fix.
  return createPortal(
    <div
      className="cs_contact_popup active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
    >
      <div
        className="cs_contact_popup-overlay"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose?.()}
        tabIndex={0}
        role="button"
        aria-label="Close popup"
      />
      <div className="cs_contact_popup-content">
        <div className="cs_contact_popup-container">
          <button
            type="button"
            className="cs_contact_popup-close"
            onClick={onClose}
            aria-label="Close"
          />
          <div className="cs_contact_popup-body row g-0">
            <div className="cs_contact_popup-image_col col-12 col-lg-6">
              <div className="cs_contact_popup-image_wrapper">
                <Image
                  src={IMAGE_URL}
                  priority
                  alt="Rehabana"
                  width={500}
                  height={500}
                  sizes="(max-width: 991px) 100vw, 450px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="cs_contact_popup-img"
                />
              </div>
            </div>
            <div className="cs_contact_popup-form_col col-12 col-lg-6">
              <div className="cs_contact_popup-form_inner">
                <h2 id="contact-popup-title" className="cs_contact_popup-title">
                  {title}
                </h2>
                <OpnFormIframe
                  className="cs_contact_popup-iframe"
                  height="380px"
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
          /* Above the sticky header (101) and anything else on the site. Only
             meaningful because the dialog is portalled to <body>. */
          z-index: 9999;
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
          -webkit-overflow-scrolling: touch;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(20px);
          opacity: 0;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-content {
            align-items: flex-start;
            padding: 10px;
          }
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
        @media (max-width: 991px) {
          .cs_contact_popup-container {
            border-radius: 10px;
            margin: auto 0;
          }
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
        @media (max-width: 991px) {
          .cs_contact_popup-close {
            top: 10px;
            right: 10px;
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .cs_contact_popup-close::before,
          .cs_contact_popup-close::after {
            width: 14px;
            background: #333;
          }
        }
        .cs_contact_popup-close:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 991px) {
          .cs_contact_popup-close:hover {
            background: #fff;
          }
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
        @media (max-width: 991px) {
          .cs_contact_popup-image_col {
            min-height: 0;
            max-height: 220px;
            flex-shrink: 0;
          }
        }
        .cs_contact_popup-image_wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 220px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-image_wrapper {
            min-height: 180px;
            max-height: 220px;
            aspect-ratio: 16 / 10;
          }
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
          min-width: 0;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-form_inner {
            padding: 20px 16px 28px;
            padding-bottom: max(28px, env(safe-area-inset-bottom));
          }
        }
        .cs_contact_popup-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: #1a1a1a;
          text-align: center;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-title {
            font-size: 1.35rem;
            margin-bottom: 0.75rem;
          }
        }
        .cs_contact_popup-iframe {
          flex: 1;
          min-height: 380px;
        }
        @media (max-width: 991px) {
          .cs_contact_popup-iframe {
            min-height: 340px;
          }
        }
      `}</style>
    </div>,
    document.body,
  );
};

export default ContactModal;
