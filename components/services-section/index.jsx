import { SectionHeading, Button } from "@/components/ui";

const ServicesSection = () => {
  return (
    <section className="cs_service_area cs_type_3">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="split"
          subtitle="Expertise"
          title={
            <span className="cs_accent_color">
              We offer more than Services &amp; all Solutions Medical.
            </span>
          }
          rightContent={
            <p className="cs_accent_color text-end">
              the other hand, we denounce with righteous indignation and dislike
              men who are so beguiled and demoralized
            </p>
          }
        />
        <div className="cs_height_100 cs_height_lg_40" />
        <div className="row cs_gap_y_30">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const ServiceItem = () => {
  return (
    <div className="col-lg-4">
      <div className="cs_iconbox cs_style_8 cs_white_bg cs_radius_10">
        <div className="cs_card_thumbnail cs_radius_10 mb-4">
          <img
            src="https://medixal-html.vercel.app/assets/img/service_4.jpeg"
            alt="Service Image"
            className="img-fluid cs_radius_10"
          />
        </div>
        <h3 className="cs_iconbox_title cs_fs_32 cs_medium">
          <a href="service-details.html">Chiropractic Care</a>
        </h3>
        <p className="cs_iconbox_subtitle">
          The other hand, we denounce with righteous Indignation and dislike men
          who
        </p>
        <Button href="service-details.html" variant="text">
          Get Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesSection;
