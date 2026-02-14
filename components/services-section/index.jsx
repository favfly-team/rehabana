import { FaArrowRightLong } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const ServicesSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};

  return (
    <section className="cs_service_area cs_type_3">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          primary={primary}
          variant="split"
          descriptionClassName="cs_accent_color text-end leading-relaxed text-sm"
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
  const { data, url } = item?.service || {};
  const { meta_title, meta_description, featured_image } = data || {};

  return (
    <div className="col-lg-4">
      <div className="cs_iconbox cs_style_8 cs_white_bg cs_radius_10 h-100">
        {featured_image?.url && (
          <div className="cs_card_thumbnail cs_radius_10 mb-4">
            <PrismicNextImage
              field={featured_image}
              className="img-fluid cs_radius_10"
            />
          </div>
        )}
        <PrismicNextLink href={url}>
          <h3 className="cs_iconbox_title cs_fs_24 cs_medium">{meta_title}</h3>
        </PrismicNextLink>

        <p className="cs_iconbox_subtitle leading-relaxed text-sm">
          {meta_description}
        </p>

        <PrismicNextLink
          href={url}
          className="cs_text_btn cs_fs_16 cs_heading_color"
        >
          <span>Learn More</span>
          <div className="cs_text_btn_icon cs_center">
            <span>
              <FaArrowRightLong />
            </span>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default ServicesSection;
