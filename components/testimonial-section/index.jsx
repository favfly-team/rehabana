"use client";

import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide-core.min.css";
import { FaStar } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TestimonialSection = ({ slice }) => {
  const { primary } = slice || {};
  const items = primary?.items ?? [];
  const imageSliderRef = useRef(null);
  const contentSliderRef = useRef(null);

  useEffect(() => {
    if (imageSliderRef.current?.splide && contentSliderRef.current?.splide) {
      imageSliderRef.current.sync(contentSliderRef.current.splide);
    }
  }, [items.length]);

  if (!items.length) return null;

  const hasImages = items.some((item) => item?.image?.url);

  return (
    <section className="cs_testimonial cs_style_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          primary={primary}
          variant="center"
          descriptionClassName="text-center mt-3 leading-relaxed text-sm"
        />
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_gap_y_30 align-items-center">
          {hasImages && (
            <div className="col-lg-6">
              <Splide
                ref={imageSliderRef}
                options={{
                  type: "fade",
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                  rewind: true,
                  interval: 4000,
                  speed: 800,
                  autoplay: true,
                }}
              >
                {items.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="cs_testimonial_left">
                      <div className="cs_testimonial_thumbnail cs_type_1">
                        {item?.image?.url ? (
                          <PrismicNextImage
                            field={item.image}
                            alt={item.image.alt ?? undefined}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          <div className="cs_testimonial_placeholder" />
                        )}
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          )}
          <div className={hasImages ? "col-lg-6" : "col-12"}>
            <div className="cs_testimonial_content">
              <Splide
                ref={contentSliderRef}
                options={{
                  type: "slide",
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                  rewind: true,
                }}
              >
                {items.map((item, index) => (
                  <SplideSlide key={index}>
                    <TestimonialItem item={item} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const TestimonialItem = ({ item }) => {
  const { review, name, info } = item || {};

  return (
    <div className="cs_testimonial cs_style_1">
      <div className="cs_quote_icon">
        <QuoteSVG />
      </div>
      {review && (
        <PrismicRichText
          field={review}
          components={createRichTextComponents({
            paragraphClassName:
              "cs_testimonial_subtitle cs_fs_32 leading-relaxed",
          })}
        />
      )}
      <div className="cs_avatar cs_style_1">
        <div className="cs_rating_container">
          <div style={{ display: "flex", gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                style={{
                  color:
                    star <= 4 ? "var(--accent-color)" : "var(--gray-color)",
                  fontSize: "18px",
                }}
              />
            ))}
          </div>
        </div>
        <div className="cs_avatar_info">
          {name && <h3 className="cs_avatar_title cs_fs_24">{name}</h3>}
          {info && <p className="cs_avatar_subtitle cs_fs_18 mb-0">{info}</p>}
        </div>
      </div>
    </div>
  );
};

const QuoteSVG = () => {
  return (
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
      ></path>
    </svg>
  );
};

export default TestimonialSection;
