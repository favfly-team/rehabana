import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";

const FeaturesSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section className="cs_features cs_style_1 m-0">
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
          className="wow fadeInUp"
        />
        {description && (
          <p className="text-center mt-3">
            <PrismicRichText field={description} />
          </p>
        )}

        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40"></div>
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {items.map((item, index) => (
                <FeatureItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FeatureItem = ({ item }) => {
  const { icon, title, details } = item || {};
  return (
    <div className="col-lg-4">
      <div className="cs_iconbox cs_style_4 position-relative cs_radius_10 overflow-hidden">
        <div className="cs_iconbox_content">
          <div className="cs_iconbox_header">
            {icon?.url && (
              <div className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_color">
                <PrismicNextImage field={icon} alt={icon.alt ?? undefined} />
              </div>
            )}
            <a
              href="service-details.html"
              className="cs_iconbox_btn_icon cs_center"
            >
              <span>
                <i className="fa-solid fa-arrow-right-long" />
              </span>
              <span>
                <i className="fa-solid fa-arrow-right-long" />
              </span>
            </a>
          </div>
          {title?.[0]?.text && (
            <h3 className="cs_iconbox_title cs_fs_32 cs_bold">
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
            <p className="cs_iconbox_subtitle mb-0">
              <PrismicRichText field={details} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
