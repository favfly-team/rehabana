"use client";

const OPNFORM_URL = "https://opnform.com/forms/rc-website-contact-awwai2";

/**
 * Shared OpnForm iframe component. Embeds the RC website contact form
 * (https://opnform.com/forms/rc-website-contact-awwai2) for use across
 * hero, contact, CTA, and blog sidebar sections.
 */
const OpnFormIframe = ({
  className = "",
  title = "RC Website Contact Form",
  height = "500px",
  borderRadius = "inherit",
}) => {
  return (
    <div
      className={className}
      style={{ minHeight: height, width: "100%", overflow: "hidden" }}
    >
      <iframe
        src={OPNFORM_URL}
        title={title}
        style={{
          width: "100%",
          minHeight: height,
          border: "none",
          borderRadius: borderRadius,
        }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default OpnFormIframe;
