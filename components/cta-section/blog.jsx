import { asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

const BlogCTASection = ({ slice }) => {
  const { heading, description, button } = slice?.primary || {};

  return (
    <section
      className="cs_cta cs_style_1 mt-0 cs_radius_10 mb-4"
      style={{
        padding: "40px 20px",
      }}
    >
      <div className="cs_cta_in">
        <div className="cs_cta_info">
          <h2 className="cs_cta_title">{asText(heading)}</h2>
          <p className="cs_cta_subtitle mb-0">{asText(description)}</p>
        </div>
        <PrismicNextLink
          field={button}
          className="cs_btn cs_style_1 cs_accent_bg cs_radius_100"
          style={{
            padding: "10px 20px",
          }}
        >
          <span className="cs_btn_text">{button.text}</span>
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default BlogCTASection;
