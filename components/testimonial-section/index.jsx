import { FaStar, FaQuoteRight } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TestimonialSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section className="cs_testimonial cs_style_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="center"
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
        {description && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName: "text-center mt-3 leading-relaxed text-sm",
            })}
          />
        )}
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_gap_y_30 align-items-center">
              {items[0]?.image?.url && (
                <div className="col-lg-6">
                  <div className="cs_testimonial_left">
                    <div className="cs_testimonial_thumbnail cs_type_1">
                      <PrismicNextImage
                        field={items[0].image}
                        alt={items[0].image.alt ?? undefined}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="col-lg-6">
                <div className="cs_testimonial_content">
                  {items.map((item, index) => (
                    <TestimonialItem key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
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
        <FaQuoteRight size={64} style={{ color: "var(--accent-color)" }} />
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
export default TestimonialSection;
