import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const CTAFormSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, items, form_title } = primary || {};

  return (
    <section className="cs_accent_bg">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <SectionHeading
              subtitle={subheading}
              subtitleProps={{ className: "cs_white_color" }}
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
              titleProps={{ className: "cs_fs_48 cs_white_color mb-0" }}
            />
            {items && items.length > 0 && (
              <>
                <div className="cs_height_50 cs_height_lg_40" />
                <div className="row cs_gap_y_40">
                  {items.map((item, index) => (
                    <div key={index} className="col-12">
                      <div className="cs_iconbox cs_style_3">
                        {item?.icon?.url && (
                          <div className="cs_iconbox_icon cs_center">
                            <PrismicNextImage
                              field={item.icon}
                              alt={item.icon.alt ?? undefined}
                            />
                          </div>
                        )}
                        <div className="cs_iconbox_text">
                          {item?.title?.[0]?.text && (
                            <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                              <PrismicRichText
                                field={item.title}
                                components={{
                                  heading1: ({ children }) => <>{children}</>,
                                  heading2: ({ children }) => <>{children}</>,
                                  heading3: ({ children }) => <>{children}</>,
                                }}
                              />
                            </h3>
                          )}
                          {item?.details && (
                            <PrismicRichText
                              field={item.details}
                              components={createRichTextComponents({
                                paragraphClassName:
                                  "cs_iconbox_subtitle cs_white_color mb-0 leading-relaxed text-sm",
                              })}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="col-lg-6">
            <div className="cs_appointment_form_wrapper cs_type_1 cs_radius_10">
              <h3 className="cs_appointment_heading">{form_title}</h3>
              <form className="cs_appointment_form row cs_gap_y_30">
                <div className="col-md-6">
                  <div className="cs_form_field_wrapper cs_radius_10">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_fs_14"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_form_field_wrapper cs_radius_10">
                    <input
                      type="text"
                      name="phone"
                      className="cs_form_field cs_fs_14"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_form_field_wrapper cs_radius_8">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_fs_14"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_form_field_wrapper cs_radius_10">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_fs_14"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="cs_form_field_wrapper cs_radius_10">
                    <textarea
                      name="Message"
                      rows={6}
                      className="cs_form_field cs_fs_14"
                      placeholder="Write Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg  cs_radius_100"
                  >
                    <span className="cs_btn_text">Book An Appointment</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default CTAFormSection;
