"use client";

import { FaCheck } from "react-icons/fa6";

const HeroSectionForm = () => {
  const features = [
    "Enhanced User Experience",
    "More Conversion Rates",
    "Optimisation of Product Listings",
    "Customised Marketing Strategies",
  ];

  return (
    <section
      className="cs_hero cs_style_1 cs_type_5 cs_bg_filed position-relative"
      style={{
        backgroundImage:
          'url("https://medixal-html.vercel.app/assets/img/hero_bg_3.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="cs_height_120 cs_height_lg_80" />
        <div className="row cs_gap_y_40 align-items-center">
          <div className="col-lg-6">
            <div className="cs_hero_content">
              <h3 className="cs_hero_title_mini cs_fs_14 cs_medium cs_uppercase mb-3">
                E-STORE MANAGEMENT MADE EASY!
              </h3>
              <h1 className="cs_hero_title cs_fs_40 mb-4">
                Looking For The Best Flipkart Seller Account Management
                Services?
              </h1>
              <p className="cs_hero_subtitle cs_fs_16 cs_medium mb-4">
                Our expert eCommerce Specialists will help your business thrive
                on different platforms. Reach your ROI targets faster and
                experience 3x growth of business sales with our expertise. We
                are here to transform your eCommerce success!
              </p>
              <div className="row" style={{ gap: "10px" }}>
                {features.map((feature, index) => (
                  <div
                    className="cs_iconbox cs_style_11 d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <div
                      className="cs_iconbox_icon cs_center cs_radius_50 text-white cs_accent_bg mb-0"
                      style={{
                        width: "32px",
                        height: "32px",
                        minWidth: "32px",
                      }}
                    >
                      <FaCheck style={{ fontSize: "14px" }} />
                    </div>
                    <p className="cs_iconbox_text mb-0 cs_fs_16">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="cs_appointment_form_wrapper cs_type_1 cs_radius_10 cs_white_bg"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="cs_appointment_heading cs_fs_20 cs_medium mb-4">
                Talk To An E-commerce Expert
              </h3>
              <form className="cs_appointment_form row cs_gap_y_30">
                <div className="col-12">
                  <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_type_1"
                      placeholder="Name *"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                    <input
                      type="email"
                      name="email"
                      className="cs_form_field cs_type_1"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                    <input
                      type="text"
                      name="phone"
                      className="cs_form_field cs_type_1"
                      placeholder="Phone Number *"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                    <textarea
                      name="requirement"
                      rows={5}
                      className="cs_form_field cs_type_1"
                      placeholder="Requirement *"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_5 w-100"
                  >
                    <span className="cs_btn_text">Get a Free Consultation</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80" />
      </div>
    </section>
  );
};

export default HeroSectionForm;
