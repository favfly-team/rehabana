import { FaStar } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui";

const TestimonialSlider = () => {
  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_ptb_12 position-relative">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="center"
          title="What Our Patients Say"
          className="wow fadeInUp"
        />
        <div className="cs_height_50 cs_height_lg_40" />
        <TestimonialItem />
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const TestimonialItem = () => {
  return (
    <div className="cs_testimonial cs_style_3 cs_white_bg">
      <div className="cs_quote_icon position-absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M49 54.2812C57.2727 54.2812 64 47.5521 64 39.2813C64 31.73 58.3933 25.4641 51.1204 24.4314C51.7026 20.2016 53.3176 16.177 55.8409 12.687C56.3316 12.0059 56.3133 11.083 55.7896 10.4239C55.2759 9.77525 54.3831 9.52938 53.5996 9.85988C41.6941 14.8292 34 26.3796 34 39.2812C34 47.5521 40.7272 54.2812 49 54.2812ZM15 54.2812C23.2728 54.2812 30 47.5521 30 39.2812C30 31.73 24.3933 25.4641 17.1204 24.4314C17.7026 20.2016 19.3176 16.177 21.8409 12.687C22.3316 12.0059 22.3133 11.083 21.7896 10.4239C21.2759 9.77525 20.3831 9.52937 19.5996 9.85987C7.69413 14.8292 2.43924e-06 26.3796 1.31134e-06 39.2812C5.88279e-07 47.5521 6.72725 54.2812 15 54.2812Z"
            fill="var(--accent-color)"
          />
        </svg>
      </div>
      <div className="cs_avatar cs_style_1">
        <div className="cs_avatar_icon cs_radius_50">
          <img
            src="https://medixal-html.vercel.app/assets/img/avatar_2.png"
            alt="Image"
          />
        </div>
        <div className="cs_avatar_info">
          <h3 className="cs_avatar_title cs_fs_20">Dr. Mehara Banu</h3>
          <p className="cs_avatar_subtitle cs_fs_18 cs_accent_color mb-0">
            Physical therapy
          </p>
        </div>
      </div>
      <blockquote className="cs_testimonial_subtitle cs_fs_24 cs_medium cs_accent_color cs_heading_font">
        “Pain management was effective, and I was comfortable during and after
        the treatment. The staff provided emotional support and made sure I
        understood every step of my care.”
      </blockquote>
      <div className="cs_rating_container">
        <div style={{ display: "flex", gap: "4px" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              style={{
                color: star <= 4 ? "var(--accent-color)" : "var(--gray-color)",
                fontSize: "18px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
