"use client";

import { useState, useEffect, useRef } from "react";

const OPNFORM_BASE = "https://opnform.com/forms/rc-website-contact-awwai2";
const PAGE_URL_PARAM = "2ca0592f-67df-448c-a78a-c592f2f696fa";

/**
 * Shared OpnForm iframe component. Embeds the RC website contact form
 * (https://opnform.com/forms/rc-website-contact-awwai2) for use across
 * hero, contact, CTA, and blog sidebar sections. Passes current page URL
 * as the hidden field value. Loads iframe only when the section is in view.
 */
const OpnFormIframe = ({
  className = "",
  title = "RC Website Contact Form",
  height = "500px",
  borderRadius = "inherit",
}) => {
  const containerRef = useRef(null);
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting || src) return;
        const pageUrl = window.location.href;
        const params = new URLSearchParams({ [PAGE_URL_PARAM]: pageUrl });
        setSrc(`${OPNFORM_BASE}?${params.toString()}`);
      },
      { rootMargin: "100px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  const handleIframeLoad = () => setLoading(false);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        minHeight: height,
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {loading && (
        <div
          aria-hidden="true"
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "absolute",
            inset: 0,
            minHeight: height,
            borderRadius: borderRadius,
          }}
        >
          <div
            className="spinner-border text-black"
            style={{ width: "2rem", height: "2rem" }}
            role="status"
          ></div>
        </div>
      )}
      {src && (
        <iframe
          src={src}
          title={title}
          onLoad={handleIframeLoad}
          style={{
            width: "100%",
            minHeight: height,
            border: "none",
            borderRadius: borderRadius,
            opacity: loading ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default OpnFormIframe;
