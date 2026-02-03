import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const ProcessSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading primary={primary} variant="left" />
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

  const spacer = <div className="cs_height_20 cs_height_lg_20" />;

  const thumbnailOnly = image?.url && (
    <div className="cs_card_thumbnail cs_radius_50">
      <PrismicNextImage
        field={image}
        alt={image.alt ?? undefined}
        style={{
          width: "225px",
        }}
      />
    </div>
  );

  const cardInfoBlock = (
    <div className="cs_card_info">
      {title?.[0]?.text && (
        <PrismicRichText
          field={title}
          components={createRichTextComponents({
            heading3ClassName: "cs_card_title cs_fs_24 cs_semibold",
          })}
        />
      )}
      {details && (
        <PrismicRichText
          field={details}
          components={createRichTextComponents({
            paragraphClassName: "cs_card_subtitle leading-relaxed text-sm",
          })}
        />
      )}
      <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
        Step {stepNumber}
      </div>
    </div>
  );

  return (
    <div className="col-xl-3 col-md-6">
      <div
        className={`cs_card cs_style_6 ${isReverse ? "cs_column_reverse_md" : ""}`}
      >
        {isReverse ? (
          <>
            {cardInfoBlock}
            {spacer}
            {thumbnailOnly}
          </>
        ) : (
          <>
            {thumbnailOnly}
            {spacer}
            {cardInfoBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default ProcessSection;
