import { PrismicNextImage } from "@prismicio/next";
import { SectionHeading } from "@/components/ui";
import { asText } from "@prismicio/client";

const FeaturesImageSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};

  return (
    <section className="cs_service_area cs_type_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading primary={primary} variant="center" />
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {items.map((item, index) => (
                <FeaturesImageItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FeaturesImageItem = ({ item }) => {
  const { image, title, details } = item || {};

  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_4 cs_radius_8 h-100">
        {image?.url && (
          <div className="cs_card_thumbnail">
            <PrismicNextImage field={image} alt={image.alt ?? undefined} />
          </div>
        )}
        <div className="cs_card_header">
          <h3 className="cs_card_title cs_fs_20 mb-0">{asText(title)}</h3>
        </div>
        {details && <p className="cs_card_subtitle mb-0">{asText(details)}</p>}
      </div>
    </div>
  );
};

export default FeaturesImageSection;
