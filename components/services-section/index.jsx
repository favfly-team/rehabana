import { FaArrowRightLong } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { SectionHeading } from "@/components/ui";

const ServicesSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section className="cs_service_area cs_type_3">
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
          rightContent={
            description && (
              <p className="cs_accent_color text-end">
                <PrismicRichText field={description} />
              </p>
            )
          }
        />
        {items && items.length > 0 && (
          <>
            <div className="cs_height_100 cs_height_lg_40" />
            <div className="row cs_gap_y_30">
              {items.map((item, index) => (
                <ServiceItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const ServiceItem = ({ item }) => {
  const { image, title, details, link } = item || {};

  return (
    <div className="col-lg-4">
      <div className="cs_iconbox cs_style_8 cs_white_bg cs_radius_10">
        {image?.url && (
          <div className="cs_card_thumbnail cs_radius_10 mb-4">
            <PrismicNextImage
              field={image}
              alt={image.alt ?? undefined}
              className="img-fluid cs_radius_10"
            />
          </div>
        )}
        {title?.[0]?.text && (
          <h3 className="cs_iconbox_title cs_fs_32 cs_medium">
            {link?.url ? (
              <PrismicNextLink field={link}>
                <PrismicRichText
                  field={title}
                  components={{
                    heading1: ({ children }) => <>{children}</>,
                    heading2: ({ children }) => <>{children}</>,
                    heading3: ({ children }) => <>{children}</>,
                  }}
                />
              </PrismicNextLink>
            ) : (
              <PrismicRichText
                field={title}
                components={{
                  heading1: ({ children }) => <>{children}</>,
                  heading2: ({ children }) => <>{children}</>,
                  heading3: ({ children }) => <>{children}</>,
                }}
              />
            )}
          </h3>
        )}
        {details && (
          <p className="cs_iconbox_subtitle">
            <PrismicRichText field={details} />
          </p>
        )}
        {link?.url && (
          <PrismicNextLink
            field={link}
            className="cs_text_btn cs_fs_18 cs_medium cs_heading_color"
          >
            <span>{link.text}</span>
            <div className="cs_text_btn_icon cs_center">
              <span>
                <FaArrowRightLong />
              </span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </PrismicNextLink>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
