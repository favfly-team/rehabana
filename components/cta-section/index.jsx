const CTASection = () => {
  return (
    <section className="cs_video_section cs_style_1 cs_accent_bg position-relative">
      <div className="container">
        <div className="cs_vider_wrapper cs_style_1">
          <h2 className="cs_video_title">
            We are Provide All Medical Service <br />
            For Your <span className="cs_accent_color">Health</span> Needs.
          </h2>
          <p className="cs_video_subtitle">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad <br /> minim veniam, quis nostrud.
          </p>
          <div className="cs_btns_group">
            <a
              href="about.html"
              className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
            >
              <span className="cs_btn_text">Learn More</span>
            </a>
            <a
              href="contact.html"
              className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
            >
              <span className="cs_btn_text">Contact Now</span>
            </a>
          </div>
        </div>

        <div className="cs_height_120 cs_height_lg_80" />
      </div>
    </section>
  );
};

export default CTASection;
