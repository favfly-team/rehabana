import { FaPlay } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui";

const HeroSection = ({ slice }) => {
  const { primary } = slice || {};
  const {
    subheading,
    heading,
    description,
    button,
    video_button,
    counter,
    image,
  } = primary || {};

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
          {image?.url && (
            <div className="cs_hero_thumbnail">
              <PrismicNextImage field={image} alt={image.alt ?? undefined} />
            </div>
          )}
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
            {subheading && (
              <h3 className="cs_hero_title_mini cs_fs_18 cs_accent_color cs_medium">
                {subheading}
              </h3>
            )}
            {heading?.[0]?.text && (
              <h1 className="cs_hero_title cs_fs_64">
                <PrismicRichText
                  field={heading}
                  components={{
                    heading1: ({ children }) => <>{children}</>,
                  }}
                />
              </h1>
            )}
            {description && (
              <p className="cs_hero_subtitle cs_fs_20 cs_medium cs_heading_color">
                <PrismicRichText field={description} />
              </p>
            )}
            <div className="cs_hero_btn_group">
              {button?.url && (
                <PrismicNextLink
                  field={button}
                  className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_100"
                >
                  <span className="cs_btn_text">{button.text}</span>
                </PrismicNextLink>
              )}
              {video_button?.url && (
                <Button
                  href={video_button.url}
                  variant="player"
                  playerType1={true}
                  playerIcon={<FaPlay />}
                  className="cs_video_open"
                >
                  {video_button.text}
                </Button>
              )}
            </div>
            {counter && counter.length > 0 && (
              <>
                <div className="cs_height_66 cs_height_lg_40" />
                <div className="cs_counter_1_wrap">
                  {counter.map((item, index) => (
                    <div key={index} className="cs_counter cs_style_1">
                      {item?.number && (
                        <h2 className="cs_counter_number cs_fs_48 cs_accent_color mb-0">
                          {item.number}
                        </h2>
                      )}
                      {item?.title && (
                        <p className="cs_fs_20 cs_medium mb-0">{item.title}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
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
