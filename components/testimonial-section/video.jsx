const TestimonialVideoSection = () => {
  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_medium cs_heading_font">
              Completed Case Studies
            </p>
            <h2 className="cs_section_title cs_fs_48 mb-0">
              Transform Our Latest Success{" "}
              <span className="cs_accent_color">Case studies</span>
            </h2>
          </div>
          <div className="cs_section_heading_right mb-0">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          <TestimonialVideoItem />
          <TestimonialVideoItem />
          <TestimonialVideoItem />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const TestimonialVideoItem = () => {
  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_1 cs_radius_10">
        <div className="cs_card_thumbnail cs_radius_10">
          <img
            src="https://medixal-html.vercel.app/assets/img/casestydy_3.jpeg"
            alt="Card Thumbnail"
          />
          <a
            href="https://www.youtube.com/embed/rRid6GCJtgc"
            className="cs_player_btn cs_style_2 cs_center cs_video_open"
          >
            <span />
          </a>
        </div>
        <div className="cs_card_bio">
          <h3 className="cs_card_title cs_fs_24 cs_bold mb-3">Ms. Mahita</h3>
          <p className="cs_card_subtitle cs_fs_16 cs_heading_color mb-0">
            After stroke, my mother wasn't active, but now she walks with
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoSection;
