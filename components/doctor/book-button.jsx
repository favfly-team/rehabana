"use client";

import { useState } from "react";
import ContactModal from "@/components/form/ContactModal";
import { markContactFormSubmitted } from "@/components/form/ContactModalPopup";

/**
 * "Book a Consultation" — opens the contact form in a dialog instead of
 * navigating to /contact, so the visitor keeps their place on the profile.
 *
 * The dialog renders nothing until it is opened, so having several of these on
 * one page costs nothing.
 */
const BookConsultationButton = ({
  className = "",
  children,
  title = "Book a consultation",
  ariaLabel,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${className} cs_btn_reset`.trim()}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmitted={markContactFormSubmitted}
        title={title}
      />
    </>
  );
};

export default BookConsultationButton;
