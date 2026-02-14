"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaQuoteRight } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading, ViewAllButton } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TestimonialSlider = ({ slice }) => {
  const { primary } = slice || {};
  const items = primary?.items ?? [];

  if (!items.length) return null;

  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_20 cs_ptb_12 position-relative">
      <div className="cs_height_100 cs_height_lg_60" />
      <div className="container">
        <SectionHeading
          primary={primary}
          variant="center"
          includeDescription={false}
        />
        <div className="cs_height_40 cs_height_lg_30" />
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 4000,
            speed: 800,
            perPage: 2,
            perMove: 1,
            arrows: true,
            pagination: true,
            rewind: true,
            gap: "1rem",
            breakpoints: {
              768: {
                perPage: 1,
              },
            },
          }}
        >
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <TestimonialItem item={item} />
            </SplideSlide>
          ))}
        </Splide>
        <ViewAllButton href="/testimonials" />
      </div>
      <div className="cs_height_100 cs_height_lg_60" />
    </section>
  );
};

const TestimonialItem = ({ item }) => {
  const { image, name, info, quote } = item || {};

  return (
    <div className="cs_testimonial cs_style_3 cs_white_bg !p-5">
      <div
        className="cs_quote_icon position-absolute opacity-80"
        style={{ top: "0.75rem", right: "0.75rem" }}
      >
        <QuoteSVG size={24} />
      </div>
      <div className="cs_avatar cs_style_1 mb-3">
        <div
          className="cs_avatar_icon cs_radius_50 overflow-hidden"
          style={{ width: 52, height: 52, minWidth: 52, minHeight: 52 }}
        >
          {image?.url ? (
            <PrismicNextImage
              field={image}
              alt={image.alt ?? undefined}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src="https://medixal-html.vercel.app/assets/img/avatar_2.png"
              alt=""
            />
          )}
        </div>
        <div className="cs_avatar_info">
          {name?.[0]?.text && (
            <PrismicRichText
              field={name}
              components={createRichTextComponents({
                heading3ClassName: "cs_avatar_title cs_fs_18 mb-0",
              })}
            />
          )}
          {info && (
            <p className="cs_avatar_subtitle cs_fs_16 cs_accent_color mb-0">
              {info}
            </p>
          )}
        </div>
      </div>
      {quote?.[0]?.text && (
        <PrismicRichText
          field={quote}
          components={createRichTextComponents({
            paragraphClassName:
              "cs_testimonial_subtitle cs_fs_16 cs_medium cs_accent_color cs_heading_font leading-snug mb-3",
          })}
        />
      )}
      <div className="cs_rating_container">
        <div style={{ display: "flex", gap: "2px" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              style={{
                color: star <= 4 ? "var(--accent-color)" : "var(--gray-color)",
                fontSize: "14px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const QuoteSVG = ({ size = 64 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M49 54.2812C57.2727 54.2812 64 47.5521 64 39.2813C64 31.73 58.3933 25.4641 51.1204 24.4314C51.7026 20.2016 53.3176 16.177 55.8409 12.687C56.3316 12.0059 56.3133 11.083 55.7896 10.4239C55.2759 9.77525 54.3831 9.52938 53.5996 9.85988C41.6941 14.8292 34 26.3796 34 39.2812C34 47.5521 40.7272 54.2812 49 54.2812ZM15 54.2812C23.2728 54.2812 30 47.5521 30 39.2812C30 31.73 24.3933 25.4641 17.1204 24.4314C17.7026 20.2016 19.3176 16.177 21.8409 12.687C22.3316 12.0059 22.3133 11.083 21.7896 10.4239C21.2759 9.77525 20.3831 9.52937 19.5996 9.85987C7.69413 14.8292 2.43924e-06 26.3796 1.31134e-06 39.2812C5.88279e-07 47.5521 6.72725 54.2812 15 54.2812Z"
        fill="var(--accent-color)"
      ></path>
    </svg>
  );
};

export default TestimonialSlider;
