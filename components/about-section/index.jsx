import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { BsCheck2Circle } from "react-icons/bs";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const AboutSection = ({ slice }) => {
  const { primary } = slice || {};
  const { description, list, button, image, swap_layout } = primary || {};

  const swap = swap_layout || false;
  return (
    <section
      className={`cs_about cs_style_1 position-relative ${
        swap ? "cs_about_swap" : ""
      }`}
      id="about"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className={`col-lg-6 ${swap ? "cs_about_thumbnail_col" : ""}`}>
            <div className="cs_about_thumbnail">
              {image?.url && (
                <PrismicNextImage field={image} alt={image.alt ?? undefined} />
              )}
            </div>
          </div>
          <div className={`col-lg-6 ${swap ? "cs_about_content_col" : ""}`}>
            <div className="cs_about_content">
              <SectionHeading
                primary={primary}
                variant="left"
                includeDescription={false}
              />
              {description && (
                <PrismicRichText
                  field={description}
                  components={createRichTextComponents({
                    paragraphClassName: "cs_about_text leading-relaxed",
                  })}
                />
              )}
              {list && list.length > 0 && (
                <ul className="cs_list cs_style_1 cs_mp0">
                  {list.map((item, index) => (
                    <li key={index} className="">
                      <BsCheck2Circle className="cs_accent_color" size={20} />
                      {item?.text}
                    </li>
                  ))}
                </ul>
              )}
              {button?.url && (
                <PrismicNextLink
                  field={button}
                  className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_100"
                >
                  <span className="cs_btn_text">{button.text}</span>
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default AboutSection;
