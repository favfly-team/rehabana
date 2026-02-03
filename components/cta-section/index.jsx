import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { createRichTextComponents } from "@/lib/richTextComponents";

const CTASection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, primary_button, secondary_button } =
    primary || {};

  return (
    <section className="cs_video_section cs_style_1 cs_accent_bg position-relative">
      <div className="container">
        <div className="cs_height_120 cs_height_lg_80" />
        <div className="cs_vider_wrapper cs_style_1">
          <div style={{ maxWidth: "650px", margin: "0 auto" }}>
            {heading?.[0]?.text && (
              <PrismicRichText
                field={heading}
                components={createRichTextComponents({
                  heading2ClassName: "cs_video_title",
                })}
              />
            )}
            {description && (
              <PrismicRichText
                field={description}
                components={createRichTextComponents({
                  paragraphClassName:
                    "cs_video_subtitle leading-relaxed text-sm",
                })}
              />
            )}
            <div className="cs_btns_group">
              {primary_button?.url && (
                <PrismicNextLink
                  field={primary_button}
                  className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_100"
                >
                  <span className="cs_btn_text">{primary_button.text}</span>
                </PrismicNextLink>
              )}
              {secondary_button?.url && (
                <PrismicNextLink
                  field={secondary_button}
                  className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_100"
                >
                  <span className="cs_btn_text">{secondary_button.text}</span>
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>

        <div className="cs_height_120 cs_height_lg_80" />
      </div>
    </section>
  );
};

export default CTASection;
