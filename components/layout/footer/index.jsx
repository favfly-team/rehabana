"use client";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import BrandMark from "../BrandMark";
import Link from "next/link";

const Footer = ({ data }) => {
  // ==== INITIALIZE STATE ====
  const { logo, social_link, description, items, contact_info } = data;

  // ==== SOCIAL ICONS ====
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
    <footer className="cs_footer cs_style_1 cs_accent_bg">
      <div className="container cs_white_color relative">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_footer_text_widget">
                <PrismicNextImage
                  field={logo}
                  style={{
                    height: "80px",
                    width: "auto",
                    filter: "brightness(100)",
                  }}
                />

                <p>{asText(description)}</p>
              </div>

              {/* // ==== Social Links ==== */}
              <div className="cs_social_btns cs_style_1">
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

          {items?.map((item, index) => (
            <FooterLinkList key={index} data={item} />
          ))}
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_semibold">
                {contact_info?.[0]?.title}
              </h2>

              <PrismicRichText
                field={contact_info?.[0]?.contact_details}
                components={{
                  paragraph: ({ children }) => (
                    <p className="cs_footer_widget_menu">{children}</p>
                  ),
                  hyperlink: ({ children, node }) => (
                    <a href={node.data.url} target="_blank">
                      {children}
                    </a>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_copyright mb-0">
              Rehabana © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <ul className="cs_footer_widget_menu">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BrandMark />
    </footer>
  );
};

const FooterLinkList = ({ data }) => {
  const { title, links } = data;

  return (
    <div className="cs_footer_col">
      <div className="cs_footer_widget">
        <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_semibold">
          {title}
        </h2>
        <ul className="cs_footer_widget_menu">
          {links?.map((link, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{link?.text}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
