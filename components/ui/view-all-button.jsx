"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";

/**
 * View All button that hides when the current path matches the target href.
 * @param {string} href - Target path (e.g. "/blog", "/services")
 * @param {string} [label="View All"] - Button label
 */
const ViewAllButton = ({ href, label = "View All", prismic = false }) => {
  const pathname = usePathname();

  if (pathname === href) return null;

  if (prismic) {
    return (
      <div className="text-center mt-5">
        <PrismicNextLink
          field={href}
          className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100"
        >
          <span className="cs_btn_text">{label}</span>
        </PrismicNextLink>
      </div>
    );
  }

  return (
    <div className="text-center mt-5">
      <Link
        href={href}
        className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100"
      >
        <span className="cs_btn_text">{label}</span>
      </Link>
    </div>
  );
};

export default ViewAllButton;
