const AboutSection = () => {
  return (
    <section className="cs_about cs_style_1 position-relative" id="about">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumbnail">
              <div className="cs_about_thumbnail_1">
                <img
                  src="https://medixal-html.vercel.app/assets/img/about_1.jpg"
                  alt="Image"
                />
                <a
                  href="https://www.youtube.com/embed/rRid6GCJtgc"
                  className="cs_player_btn cs_style_1 cs_video_open"
                >
                  <span className="cs_player_btn_icon cs_center">
                    <img
                      src="https://medixal-html.vercel.app/assets/img/icons/player_icon.svg"
                      alt="Icon"
                    />
                  </span>
                  <span className="cs_play_btn_text cs_fs_18 cs_semibold cs_accent_color">
                    How We Works
                  </span>
                </a>
              </div>
              <div className="cs_about_thumbnail_2">
                <img
                  src="https://medixal-html.vercel.app/assets/img/about_2.jpg"
                  alt="About Image"
                />
                <svg
                  className="cs_about_thumbnail_shape_2 cs_accent_color"
                  width={123}
                  height={125}
                  viewBox="0 0 123 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.3"
                    cx={73}
                    cy={75}
                    r="49.5"
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                  <circle
                    opacity="0.3"
                    cx={62}
                    cy={50}
                    r="49.5"
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                  <circle
                    opacity="0.3"
                    cx={50}
                    cy={72}
                    r="49.5"
                    stroke="currentColor"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
              <div className="cs_experience_box cs_center cs_accent_bg cs_radius_50">
                <p className="cs_experience_box_number cs_fs_48 cs_bold cs_white_color">
                  30+
                </p>
                <p className="cs_experience_box_title cs_fs_20 cs_medium cs_white_color">
                  Experience
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.25s"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.25s",
              animationName: "fadeInRight",
            }}
          >
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                  About us
                </p>
                <h2 className="cs_section_title cs_fs_48 mb-0">
                  Advanced technology and{" "}
                  <span className="cs_accent_color">Specialist Doctors.</span>
                </h2>
              </div>
              <p className="cs_about_text">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Wiusmod tempor incididunt incididunt ut labore et dolore magna.
              </p>
              <ul className="cs_list cs_style_1 cs_mp0">
                <li>
                  <svg
                    className="cs_accent_color"
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                      fill="currentColor"
                    />
                  </svg>
                  Top quality Technician team
                </li>
                <li>
                  <svg
                    className="cs_accent_color"
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                      fill="currentColor"
                    />
                  </svg>
                  World Class Reputed Hospital
                </li>
                <li>
                  <svg
                    className="cs_accent_color"
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                      fill="currentColor"
                    />
                  </svg>
                  Discount on all Pathology &amp; Radiology treatment
                </li>
              </ul>
              <a
                href="about.html"
                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
              >
                <span className="cs_btn_text">Info More About</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_about_shape_1">
        <img
          src="https://medixal-html.vercel.app/assets/img/about_shape_1.svg"
          alt="Shape Image"
        />
      </div>
      <div className="cs_about_shape_2">
        <img
          src="https://medixal-html.vercel.app/assets/img/about_shape_1.svg"
          alt="Shape Image"
        />
      </div>
      <div className="cs_about_shape_3">
        <img
          src="https://medixal-html.vercel.app/assets/img/about_shape_1.svg"
          alt="Shape Image"
        />
      </div>
      <div className="cs_about_shape_4">
        <img
          src="https://medixal-html.vercel.app/assets/img/about_shape_1.svg"
          alt="Shape Image"
        />
      </div>
      <div className="cs_about_shape_5">
        <img
          src="https://medixal-html.vercel.app/assets/img/about_shape_4.svg"
          alt="Shape Image"
        />
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default AboutSection;
