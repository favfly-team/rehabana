import { SectionHeading } from "@/components/ui";
import OpnFormIframe from "@/components/form/OpnFormIframe";

const CTAForm2Section = ({ slice }) => {
  const { primary } = slice || {};
  const { background_image } = primary || {};

  return (
    <>
      <div>
        {background_image?.url && (
          <div
            className="cs_video_section cs_style_3 cs_bg_filed"
            style={{
              backgroundImage: `url("${background_image.url}")`,
            }}
          />
        )}
        <section className="cs_appointment cs_style_1">
          <div className="container-fluid">
            <div className="cs_appointment_form_wrapper cs_type_2 cs_radius_8">
              <div className="cs_appointment_form cs_radius_8 row">
                <div className="col-lg-6">
                  <SectionHeading primary={primary} variant="left" />
                </div>
                <div className="col-lg-6">
                  <div style={{ margin: "0 -20px" }}>
                    <OpnFormIframe height="400px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CTAForm2Section;
