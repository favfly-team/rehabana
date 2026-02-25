import { PrismicRichText } from "@prismicio/react";
import { createRichTextComponents } from "@/lib/richTextComponents";

const SecondaryHeroSection = ({ slice }) => {
  const { primary } = slice || {};
  const { heading, description, background_image } = primary || {};

  return (
    <section
      className="cs_page_heading cs_center cs_bg_filed"
      style={{ backgroundImage: `url("${background_image?.url}")` }}
    >
      <div className="container">
        <div
          className="cs_page_heading_in"
          style={{
            maxWidth: "650px",
          }}
        >
          {heading?.[0]?.text && (
            <PrismicRichText
              field={heading}
              components={createRichTextComponents({
                heading1ClassName: "cs_page_heading_title cs_fs_40",
              })}
            />
          )}
          {description?.[0]?.text && (
            <PrismicRichText
              field={description}
              components={createRichTextComponents({
                paragraphClassName: "cs_page_heading_subtitle cs_fs_16",
              })}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
