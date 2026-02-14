"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * View All button that hides when the current path matches the target href.
 * @param {string} href - Target path (e.g. "/blog", "/services")
 * @param {string} [label="View All"] - Button label
 */
const ViewAllButton = ({ href, label = "View All" }) => {
  const pathname = usePathname();

  if (pathname === href) return null;

  return (
    <div className="text-center mt-5">
      <Link
        href={href}
        className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_100"
      >
        <span className="cs_btn_text">{label}</span>
      </Link>
    </div>
  );
};

export default ViewAllButton;
