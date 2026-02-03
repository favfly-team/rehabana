import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { BsCheck2Circle } from "react-icons/bs";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const AboutSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, list, button, image, swap_layout } =
    primary || {};

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
          <div className={`col-lg-6 ${swap ? "cs_about_content_col" : ""}`}>
            <div className="cs_about_content">
              {(subheading || heading?.[0]?.text) && (
                <SectionHeading
                  subtitle={subheading}
                  title={
                    heading?.[0]?.text ? (
                      <PrismicRichText
                        field={heading}
                        components={{
                          heading1: ({ children }) => <>{children}</>,
                          heading2: ({ children }) => <>{children}</>,
                          heading3: ({ children }) => <>{children}</>,
                        }}
                      />
                    ) : null
                  }
                />
              )}
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
                    <li key={index}>
                      <BsCheck2Circle className="cs_accent_color" size={26} />
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
