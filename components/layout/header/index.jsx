"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Header = ({ data }) => {
  // ==== INITIALIZE STATE ====
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { logo, link_items, social_link } = data;

  const socialIcons = {
    facebook: <FaFacebookF />,
    x: <FaXTwitter />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
  };

  const socialLinksWithIcons = social_link?.map((item) => {
    const domain = new URL(item.url).hostname?.split(".");
    const icon = socialIcons[domain[domain.length - 2].toLowerCase()];
    return {
      icon: icon,
      url: item.url,
    };
  });

  return (
    <header
      className={`cs_site_header cs_style_1 cs_sticky_header cs_heading_font cs_heading_color
         ${isScrolled ? "cs_sticky_active" : ""}
      `}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              {/* // ==== Logo ==== */}
              <Link className="cs_site_branding" href="/" aria-label="Home">
                <PrismicNextImage
                  field={logo}
                  style={{ width: "auto", height: "60px" }}
                />
              </Link>
              <div className="cs_nav cs_fs_18 cs_medium">
                <div
                  className={`cs_nav_list_wrap ${isMenuOpen ? "cs_active" : ""}`}
                >
                  {/* // ==== Navigation Items ==== */}
                  <ul className="cs_nav_list">
                    {link_items.map((item, index) => (
                      <NavItem
                        key={index}
                        item={item}
                        onClick={() => setIsMenuOpen(false)}
                      />
                    ))}
                  </ul>
                </div>

                {/* // ==== Mobile Menu Button ==== */}
                <span
                  className="cs_menu_toggle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#fff",
                    padding: "8px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span />
                </span>
              </div>
            </div>

            {/* // ==== Social Links ==== */}
            <div className="cs_main_header_right">
              <div className="cs_header_social_links">
                {socialLinksWithIcons.map((item, index) => (
                  <a
                    href={item?.url}
                    target="_blank"
                    className="cs_center"
                    key={index}
                  >
                    {item?.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ item, onClick }) => {
  const { link_item, sub_link_item } = item;
  // ==== INITIALIZE STATE ====
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname();

  const isActive = pathname === link_item.url;

  return (
    <li
      className={`${sub_link_item.length > 0 ? "menu-item-has-children" : ""}`}
    >
      <PrismicNextLink
        field={link_item}
        onClick={onClick}
        className={isActive ? "active" : ""}
      >
        {link_item.text}
      </PrismicNextLink>
      {sub_link_item.length > 0 && (
        <>
          <ul style={{ display: isDropdownOpen ? "block" : "none" }}>
            {sub_link_item.map((item, index) => (
              <li key={index}>
                <PrismicNextLink
                  field={item}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onClick();
                  }}
                >
                  {item.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>

          <span
            className="cs_munu_dropdown_toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span />
          </span>
        </>
      )}
    </li>
  );
};

export default Header;
