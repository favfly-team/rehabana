"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
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
                  }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span />
                </span>
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="cs_header_social_links">
                <a href="#" className="cs_center" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="cs_center" aria-label="X (Twitter)">
                  <FaXTwitter />
                </a>
                <a href="#" className="cs_center" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="cs_center" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
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

  return (
    <li
      className={`${sub_link_item.length > 0 ? "menu-item-has-children" : ""}`}
    >
      <PrismicNextLink field={link_item} onClick={onClick}>
        {link_item.text}
      </PrismicNextLink>
      {sub_link_item.length > 0 && (
        <>
          <ul>
            {sub_link_item.map((item, index) => (
              <li key={index}>
                <PrismicNextLink field={item}>{item.text}</PrismicNextLink>
              </li>
            ))}
          </ul>

          <span className="cs_munu_dropdown_toggle">
            <span />
          </span>
        </>
      )}
    </li>
  );
};

export default Header;
