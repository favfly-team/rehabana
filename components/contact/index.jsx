"use client";

import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import OpnFormIframe from "@/components/form/OpnFormIframe";
import { asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

const ContactSection = ({ slice }) => {
  const { form_title, heading, phone, email, address, map_link } =
    slice?.primary || {};

  return (
    <section className="cs_contact_section">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          {/* Left column: contact info + maps */}
          <div className="col-lg-8">
            {/* Heading block */}
            <div className="cs_contact_hero mb-5">
              <h2 className="cs_fs_40 cs_fw_semibold mb-3">
                {asText(heading)}
              </h2>
              <p className="cs_contact_subtitle mb-0">
                Reach out by phone, email, or visit us at one of our centers.
              </p>
            </div>

            {/* Contact cards - horizontal layout */}
            <div className="row cs_gap_y_24 mb-5">
              <div className="col-md-4">
                <div className="cs_contact_card h-100">
                  <div className="cs_contact_card_icon cs_accent_bg">
                    <FaPhone className="cs_contact_card_icon_svg" />
                  </div>
                  <div className="cs_contact_card_body">
                    <h3 className="cs_contact_card_title">Phone</h3>
                    <div className="cs_contact_card_links">
                      {phone?.map((item, index) => (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cs_contact_card_link"
                          key={index}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cs_contact_card h-100">
                  <div className="cs_contact_card_icon cs_accent_bg">
                    <FaEnvelope className="cs_contact_card_icon_svg" />
                  </div>
                  <div className="cs_contact_card_body">
                    <h3 className="cs_contact_card_title">Email</h3>
                    <div className="cs_contact_card_links">
                      {email?.map((item, index) => (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cs_contact_card_link"
                          key={index}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cs_contact_card h-100">
                  <div className="cs_contact_card_icon cs_accent_bg">
                    <FaLocationDot className="cs_contact_card_icon_svg" />
                  </div>
                  <div className="cs_contact_card_body">
                    <h3 className="cs_contact_card_title">Addresses</h3>
                    <div className="cs_contact_card_content">
                      <PrismicRichText
                        field={address}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="mb-2 last:mb-0">{children}</p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps section */}
            {map_link?.length > 0 && (
              <div className="cs_contact_maps">
                <h3 className="cs_contact_maps_heading mb-4">Our locations</h3>
                <div className="row g-4">
                  {map_link.map((item, index) => (
                    <div
                      className={map_link.length === 1 ? "col-12" : "col-lg-6"}
                      key={index}
                    >
                      <div className="cs_contact_map_card cs_radius_5 overflow-hidden">
                        <iframe
                          src={item.url}
                          title={`Location ${index + 1}`}
                          className="cs_contact_map_iframe"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column: contact form */}
          <div className="col-lg-4">
            <div
              className="contact_form_wrapper cs_heading_font cs_bg_filed cs_hide_before_after h-100"
              style={{
                backgroundImage:
                  'url("https://images.prismic.io/rehabana/aZmlKMFoBIGEgneC_contact_form_bg_1.png?auto=format,compress")',
                padding: "30px",
              }}
            >
              <h2 className="cs_fs_32 cs_fw_semibold mb-0">{form_title}</h2>
              <div className="cs_height_45 cs_height_lg_40" />

              <OpnFormIframe height="400px" borderRadius="10px" />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default ContactSection;
