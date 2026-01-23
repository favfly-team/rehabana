const HeroSection = () => {
  return (
    <section
      className="cs_hero cs_style_1 cs_type_5 cs_bg_filed position-relative"
      style={{
        backgroundImage:
          'url("https://medixal-html.vercel.app/assets/img/hero_bg_3.png")',
      }}
    >
      <div className="container">
        <div className="cs_hero_content_wrapper">
          <div className="cs_hero_thumbnail">
            <img
              src="https://medixal-html.vercel.app/assets/img/hero_img_1.jpeg"
              alt="Image"
            />
          </div>
          <div
            className="cs_hero_content wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.25s"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.25s",
              animationName: "fadeInRight",
            }}
          >
            <h3 className="cs_hero_title_mini cs_fs_18 cs_accent_color cs_semibold">
              Welcome to Medixal
            </h3>
            <h1 className="cs_hero_title cs_fs_70">
              See the Whole world clearly and transparently
            </h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_medium cs_heading_color">
              Recent developments in eye care have seen significant advancements
              and noteworthy changes. Heidelberg Engineering
            </p>
            <div className="cs_hero_btn_group">
              <a
                href="appointment.html"
                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
              >
                <span className="cs_btn_text">Make An Appointment</span>
              </a>
              <a
                href="https://www.youtube.com/embed/rRid6GCJtgc"
                className="cs_player_btn cs_style_1 cs_type_1 cs_video_open"
              >
                <span className="cs_player_btn_icon cs_center">
                  <i className="fa-solid fa-play" />
                </span>
                <span className="cs_play_btn_text cs_fs_18 cs_semibold cs_accent_color">
                  See How We Works
                </span>
              </a>
            </div>
            <div className="cs_height_66 cs_height_lg_40" />
            <div className="cs_counter_1_wrap">
              <div className="cs_counter cs_style_1">
                <h2 className="cs_counter_number cs_fs_48 cs_accent_color mb-0">
                  40+
                </h2>
                <p className=" cs_fs_20 cs_medium mb-0">
                  High Qualified Doctors
                </p>
              </div>
              <div className="cs_counter cs_style_1">
                <h2 className="cs_counter_number cs_fs_48 cs_accent_color mb-0">
                  24/7
                </h2>
                <p className=" cs_fs_20 cs_medium mb-0">Emergency Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_hero_shape_2 position-absolute">
          <img
            src="https://medixal-html.vercel.app/assets/img/hero_shape_1.svg"
            alt="Shape"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
