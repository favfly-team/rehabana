"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FaArrowUpRightFromSquare, FaRegFileLines } from "react-icons/fa6";

// Loaded off the first-paint bundle — only needed once a certificate is opened.
const FsLightbox = dynamic(() => import("fslightbox-react"), { ssr: false });

/**
 * Timeline entries that can carry a credential, the way LinkedIn shows one:
 * issuer, date, credential ID, and a "Show credential" link.
 *
 * On top of that, `certificate` lets a visitor actually look at the document.
 * Images open in the site's existing lightbox; PDFs open in a new tab, since
 * the lightbox cannot render them.
 */
const CredentialList = ({ items = [] }) => {
  const [lightbox, setLightbox] = useState({ toggler: false, slide: 1 });

  // Only image certificates can go in the lightbox; keep their order so the
  // slide index matches.
  const imageSources = items
    .filter((item) => item.certificate?.url && !isPdf(item.certificate.url))
    .map((item) => item.certificate.url);

  const openCertificate = (url) => {
    const index = imageSources.indexOf(url);
    if (index === -1) return;
    setLightbox((prev) => ({ toggler: !prev.toggler, slide: index + 1 }));
  };

  return (
    <>
      <ol className="cs_doctor_timeline">
        {items.map((item, index) => (
          <li key={index} className="cs_doctor_timeline_item">
            <h3 className="cs_doctor_timeline_heading">{item.heading}</h3>

            {item.subheading && (
              <p className="cs_doctor_timeline_sub">{item.subheading}</p>
            )}

            {item.period && (
              <p className="cs_doctor_timeline_period">{item.period}</p>
            )}

            {item.credentialId && (
              <p className="cs_doctor_credential_id">
                Credential ID {item.credentialId}
              </p>
            )}

            <CredentialActions item={item} onPreview={openCertificate} />
          </li>
        ))}
      </ol>

      {imageSources.length > 0 && (
        <FsLightbox
          toggler={lightbox.toggler}
          sources={imageSources}
          slide={lightbox.slide}
          key={imageSources.length}
        />
      )}
    </>
  );
};

const CredentialActions = ({ item, onPreview }) => {
  const certificateUrl = item.certificate?.url;
  const hasPdf = certificateUrl && isPdf(certificateUrl);

  if (!item.credentialUrl && !certificateUrl) return null;

  return (
    <div className="cs_doctor_credential_actions">
      {item.credentialUrl && (
        <a
          href={item.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs_doctor_credential_btn"
        >
          Show credential
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      )}

      {certificateUrl &&
        (hasPdf ? (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs_doctor_credential_btn"
          >
            <FaRegFileLines aria-hidden="true" />
            View certificate
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onPreview(certificateUrl)}
            className="cs_doctor_credential_btn"
          >
            <FaRegFileLines aria-hidden="true" />
            View certificate
          </button>
        ))}
    </div>
  );
};

const isPdf = (url = "") => url.split("?")[0].toLowerCase().endsWith(".pdf");

export default CredentialList;
