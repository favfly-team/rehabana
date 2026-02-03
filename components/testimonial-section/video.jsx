import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading, Button } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TestimonialVideoSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};

  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30">
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
              <PrismicRichText
                field={description}
                components={createRichTextComponents({
                  paragraphClassName: "mb-0 leading-relaxed text-sm",
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
                <TestimonialVideoItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const TestimonialVideoItem = ({ item }) => {
  const { image, video, name, details } = item || {};

  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_1 cs_radius_10">
        {image?.url && (
          <div className="cs_card_thumbnail cs_radius_10">
            <PrismicNextImage field={image} alt={image.alt ?? undefined} />
            {video?.url && (
              <Button
                href={video.url}
                variant="player2"
                className="cs_video_open"
              />
            )}
          </div>
        )}
        <div className="cs_card_bio">
          {name?.[0]?.text && (
            <h3 className="cs_card_title cs_fs_24 cs_bold mb-3">
              <PrismicRichText
                field={name}
                components={{
                  heading1: ({ children }) => <>{children}</>,
                  heading2: ({ children }) => <>{children}</>,
                  heading3: ({ children }) => <>{children}</>,
                }}
              />
            </h3>
          )}
          {details && (
            <PrismicRichText
              field={details}
              components={createRichTextComponents({
                paragraphClassName:
                  "cs_card_subtitle cs_fs_16 cs_heading_color mb-0 leading-relaxed",
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoSection;
