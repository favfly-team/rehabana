import { SectionHeading, Button } from "@/components/ui";

const CTAForm2Section = () => {
  return (
    <>
      <div>
        <div
          className="cs_video_section cs_style_3 cs_bg_filed"
          style={{
            backgroundImage:
              'url("https://medixal-html.vercel.app/assets/img/video_bg_2.jpeg")',
          }}
        >
          <Button
            href="https://www.youtube.com/embed/rRid6GCJtgc"
            variant="player2"
            className="cs_video_open"
          />
        </div>
        <section className="cs_appointment cs_style_1">
          <div className="container-fluid">
            <div className="cs_appointment_form_wrapper cs_type_2 cs_radius_8">
              <div className="cs_appointment_form cs_radius_8">
                <SectionHeading
                  align="split"
                  subtitle="Our Services"
                  title={
                    <>
                      Get Complete Optical <br />
                      Services: Save 15%{" "}
                    </>
                  }
                  titleProps={{ className: "cs_fs_36 mb-0" }}
                  rightContent={
                    <p className="text-end">
                      Eye care have seen significant advancements and noteworthy
                      changes. Heidelberg Engineering
                    </p>
                  }
                />
                <div className="cs_height_50 cs_height_lg_40" />
                <form className="row cs_row_gap_30 cs_gap_y_30">
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        type="text"
                        name="name"
                        className="cs_form_field cs_type_1"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        type="text"
                        name="phone"
                        className="cs_form_field cs_type_1"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        type="text"
                        name="email"
                        className="cs_form_field cs_type_1"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        type="text"
                        name="email"
                        className="cs_form_field cs_type_1"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        type="text"
                        name="date"
                        className="cs_date cs_form_field hasDatepicker"
                        id="datepicker"
                        placeholder="DD MM  YY"
                      />
                      <span className="cs_input_icon position-absolute">
                        <i className="fa-regular fa-calendar-days" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="cs_form_field_wrapper cs_type_1 cs_radius_8">
                      <input
                        name="utime"
                        type="text"
                        id="utime"
                        placeholder="Choose Time"
                        className="cs_form_field cs_time"
                      />
                      <span className="cs_input_icon position-absolute">
                        <i className="fa-solid fa-clock" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg  cs_radius_100"
                    >
                      <span className="cs_btn_text">Make An Appointment</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CTAForm2Section;
