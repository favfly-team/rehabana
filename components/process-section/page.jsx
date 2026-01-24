import { SectionHeading } from "@/components/ui";

const ProcessSection = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          subtitle="Work Process"
          subtitleProps={{ className: "cs_semibold" }}
          title={
            <>
              How Work Process Our <br />
              <span className="cs_accent_color">Rehabilitations</span>
            </>
          }
          className="wow fadeInUp"
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.25s",
            animationName: "fadeInUp",
          }}
        />
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_40">
          <div className="col-xl-3 col-md-6">
            <div className="cs_card cs_style_6">
              <div className="cs_card_thumbnail cs_radius_50">
                <img
                  src="https://medixal-html.vercel.app/assets/img/card_img_5.png"
                  alt="Image"
                />
              </div>
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_card_info">
                <h3 className="cs_card_title cs_fs_24 cs_semibold">
                  Get Paired with <br /> a Admit
                </h3>
                <p className="cs_card_subtitle">
                  On the other hand, we denounce with righteous indignation
                </p>
                <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
                  Step 01
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="cs_card cs_style_6 cs_column_reverse_md">
              <div className="cs_card_info">
                <h3 className="cs_card_title cs_fs_24 cs_semibold">
                  Choose your Prepared <br /> Care Center
                </h3>
                <p className="cs_card_subtitle">
                  On the other hand, we denounce with righteous indignation
                </p>
                <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
                  Step 02
                </div>
              </div>
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_card_thumbnail cs_radius_50">
                <img
                  src="https://medixal-html.vercel.app/assets/img/card_img_6.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="cs_card cs_style_6">
              <div className="cs_card_thumbnail cs_radius_50">
                <img
                  src="https://medixal-html.vercel.app/assets/img/card_img_7.png"
                  alt="Image"
                />
              </div>
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_card_info">
                <h3 className="cs_card_title cs_fs_24 cs_semibold">
                  We are Ready <br /> To Help , Faster
                </h3>
                <p className="cs_card_subtitle">
                  On the other hand, we denounce with righteous indignation
                </p>
                <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
                  Step 03
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="cs_card cs_style_6 cs_column_reverse_md">
              <div className="cs_card_info">
                <h3 className="cs_card_title cs_fs_24 cs_semibold">
                  What Rehabilitations <br /> Can Help With
                </h3>
                <p className="cs_card_subtitle">
                  On the other hand, we denounce with righteous indignation
                </p>
                <div className="cs_card_index cs_fs_20 cs_semibold cs_heading_color">
                  Step 04
                </div>
              </div>
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_card_thumbnail cs_radius_50">
                <img
                  src="https://medixal-html.vercel.app/assets/img/card_img_8.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default ProcessSection;
