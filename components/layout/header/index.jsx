"use client";

import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Testimonial",
      href: "/testimonial",
    },
    {
      label: "Blogs",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`cs_site_header cs_style_1 cs_sticky_header cs_heading_font cs_heading_color ${
        isScrolled ? "cs_sticky_active" : ""
      }`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <a className="cs_site_branding" href="index.html">
                <img
                  src="https://www.rehabana.com/wp-content/uploads/2025/12/Rehabana-logo.png"
                  alt="Logo"
                  style={{ height: "60px" }}
                />
              </a>
              <div className="cs_nav cs_fs_18 cs_medium">
                <div className="cs_nav_list_wrap">
                  <ul className="cs_nav_list">
                    {navItems.map((item) => (
                      <NavItem key={item.href} item={item} />
                    ))}
                  </ul>
                </div>
                <span className="cs_menu_toggle">
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

const NavItem = ({ item }) => {
  return (
    <li>
      <a href={item.href}>{item.label}</a>
    </li>
  );
};

export default Header;
