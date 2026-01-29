import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";

const ProcessSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          subtitle={subheading}
          subtitleProps={{ className: "cs_semibold" }}
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
          className="wow fadeInUp"
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.25s",
            animationName: "fadeInUp",
          }}
        />
        {description && (
          <p className="text-center mt-3">
            <PrismicRichText field={description} />
          </p>
        )}
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_30 cs_gap_y_40">
              {items.map((item, index) => (
                <ProcessItem
                  key={index}
                  item={item}
                  index={index}
                  isReverse={index % 2 === 1}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const ProcessItem = ({ item, index, isReverse }) => {
  const { image, title, details } = item || {};
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="col-xl-3 col-md-6">
      <div
        className={`cs_card cs_style_6 ${isReverse ? "cs_column_reverse_md" : ""}`}
      >
        {image?.url && (
          <>
            <div className="cs_card_thumbnail cs_radius_50">
              <PrismicNextImage field={image} alt={image.alt ?? undefined} />
            </div>
            <div className="cs_height_20 cs_height_lg_20" />
          </>
        )}
        <div className="cs_card_info">
          {title?.[0]?.text && (
            <h3 className="cs_card_title cs_fs_24 cs_semibold">
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
          {details && (
            <p className="cs_card_subtitle">
              <PrismicRichText field={details} />
            </p>
          )}
          <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
            Step {stepNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
