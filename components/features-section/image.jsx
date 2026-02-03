import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const FeaturesImageSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section className="cs_service_area cs_type_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="split"
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
          titleProps={{ className: "cs_fs_48 mb-3" }}
          rightContent={
            description && (
              <PrismicRichText
                field={description}
                components={createRichTextComponents({
                  paragraphClassName: "leading-relaxed text-sm",
                })}
              />
            )
          }
        />
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {items.map((item, index) => (
                <FeaturesImageItem key={index} item={item} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FeaturesImageItem = ({ item, index }) => {
  const { image, title, details } = item || {};

  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_4 cs_radius_8">
        {image?.url && (
          <div className="cs_card_thumbnail">
            <PrismicNextImage field={image} alt={image.alt ?? undefined} />
          </div>
        )}
        <div className="cs_card_header">
          {title?.[0]?.text && (
            <h3 className="cs_card_title cs_fs_24 mb-0">
              <PrismicRichText
                field={title}
                components={{
                  heading1: ({ children }) => <>{children}</>,
                  heading2: ({ children }) => <>{children}</>,
                  heading3: ({ children }) => <>{children}</>,
                }}
              />
            </h3>
          )}
          <div className="cs_card_index cs_fs_36">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        {details && (
          <PrismicRichText
            field={details}
            components={createRichTextComponents({
              paragraphClassName:
                "mb-0 cs_heading_color leading-relaxed text-sm",
            })}
          />
        )}
      </div>
    </div>
  );
};

export default FeaturesImageSection;
