const FeaturesImageSection = () => {
  return (
    <section className="cs_service_area cs_type_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div
          className="cs_section_heading cs_style_1 cs_type_1 wow fadeInUp"
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.25s",
            animationName: "fadeInUp",
          }}
        >
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs_18 cs_medium cs_accent_color cs_heading_font">
              Our Features
            </p>
            <h2 className="cs_section_title cs_fs_48 mb-3">
              Our Top Notch Features
            </h2>
            <p>Our features are designed to help you achieve your goals.</p>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          <FeaturesImageItem />
          <FeaturesImageItem />
          <FeaturesImageItem />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FeaturesImageItem = () => {
  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_4 cs_radius_8">
        <div className="cs_card_thumbnail">
          <img
            src="https://medixal-html.vercel.app/assets/img/service_4.jpeg"
            alt="Image"
          />
        </div>
        <div className="cs_card_header">
          <h3 className="cs_card_title cs_fs_24 mb-0">Eye Exam</h3>
          <div className="cs_card_index cs_fs_36">01</div>
        </div>
        <p className="mb-0 cs_heading_color">
          What is the Eye Exam? This is a Very Most important Every eye.
        </p>
      </div>
    </div>
  );
};

export default FeaturesImageSection;
