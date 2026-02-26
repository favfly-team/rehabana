import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import OpnFormIframe from "@/components/form/OpnFormIframe";
import { createRichTextComponents } from "@/lib/richTextComponents";

const CTAFormSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items, form_title } = primary || {};

  return (
    <section className="cs_accent_bg">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <SectionHeading
              primary={primary}
              variant="left"
              subtitleClassName="cs_fs_18 cs_white_color"
              titleClassName="cs_fs_32 cs_white_color mb-0"
            />
            <CTAFormItems items={items} />
          </div>

          <CTAForm formTitle={form_title} height="400px" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

// Single item in the left column (icon + title + details)
const CTAFormItem = ({ item }) => {
  const { icon, title, details } = item || {};

  return (
    <div className="col-12">
      <div className="cs_iconbox cs_style_3">
        {icon?.url && (
          <div className="cs_iconbox_icon cs_center">
            <PrismicNextImage
              field={icon}
              alt={icon.alt ?? undefined}
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        )}
        <div className="cs_iconbox_text">
          {title?.[0]?.text && (
            <PrismicRichText
              field={title}
              components={createRichTextComponents({
                heading3ClassName: "cs_iconbox_title cs_fs_24 cs_white_color",
              })}
            />
          )}
          {details && (
            <PrismicRichText
              field={details}
              components={createRichTextComponents({
                paragraphClassName:
                  "cs_iconbox_subtitle cs_white_color mb-0 leading-relaxed text-sm",
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// List of items (left column content)
const CTAFormItems = ({ items }) => {
  if (!items?.length) return null;

  return (
    <>
      <div className="cs_height_50 cs_height_lg_40" />
      <div className="row cs_gap_y_40">
        {items.map((item, index) => (
          <CTAFormItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

// Appointment form (right column) – OpnForm iframe
const CTAForm = ({ formTitle }) => {
  return (
    <div className="col-lg-6">
      <div className="cs_appointment_form_wrapper cs_type_1 cs_radius_10">
        {formTitle && <h3 className="cs_appointment_heading">{formTitle}</h3>}
        <div style={{ margin: "-20px" }}>
          <OpnFormIframe className="cs_appointment_form" />
        </div>
      </div>
    </div>
  );
};

export default CTAFormSection;
