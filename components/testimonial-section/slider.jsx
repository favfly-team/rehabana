"use client";
import { FaStar, FaQuoteRight } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui";

const TestimonialSlider = ({ slice }) => {
  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_ptb_12 position-relative">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading align="center" title="What Our Patients Say" />
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
        <FaQuoteRight size={64} style={{ color: "var(--accent-color)" }} />
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
