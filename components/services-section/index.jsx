import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSection = () => {
  return (
    <section className="cs_service_area cs_type_3">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs_18 cs_medium cs_accent_color cs_heading_font">
              Expertise
            </p>
            <h2 className="cs_section_title cs_accent_color mb-0">
              We offer more than Services &amp; all Solutions Medical.
            </h2>
          </div>
          <div className="cs_section_heading_right cs_accent_color text-end">
            the other hand, we denounce with righteous indignation and dislike
            men who are so beguiled and demoralized
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_40" />
        <div className="row cs_gap_y_30">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const ServiceItem = () => {
  return (
    <div className="col-lg-4">
      <div className="cs_iconbox cs_style_8 cs_white_bg cs_radius_10">
        <div className="cs_card_thumbnail cs_radius_10 mb-4">
          <img
            src="https://medixal-html.vercel.app/assets/img/service_4.jpeg"
            alt="Service Image"
            className="img-fluid cs_radius_10"
          />
        </div>
        <h3 className="cs_iconbox_title cs_fs_32 cs_medium">
          <a href="service-details.html">Chiropractic Care</a>
        </h3>
        <p className="cs_iconbox_subtitle">
          The other hand, we denounce with righteous Indignation and dislike men
          who
        </p>
        <a
          href="service-details.html"
          className="cs_text_btn cs_fs_18 cs_medium cs_heading_color"
        >
          <span>Get Services</span>
          <div className="cs_text_btn_icon cs_center">
            <span>
              <FaArrowRightLong />
            </span>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServicesSection;
