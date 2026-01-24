const CTAFormSection = () => {
  return (
    <section className="cs_accent_bg">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_white_color">Appointment</p>
              <h2 className="cs_section_title cs_fs_48 cs_white_color mb-0">
                Get Amazing Treatment For our Specialist Doctors
              </h2>
            </div>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_gap_y_40">
              <div className="col-12">
                <div className="cs_iconbox cs_style_3">
                  <div className="cs_iconbox_icon cs_center">
                    <img
                      src="https://medixal-html.vercel.app/assets/img/icons/security_icon.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_iconbox_text">
                    <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                      100% Safe and Trusted
                    </h3>
                    <p className="cs_iconbox_subtitle cs_white_color mb-0">
                      Far far away, behind the word bore et dolore magna aliqua.
                      Ut enim ad on minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cs_iconbox cs_style_3">
                  <div className="cs_iconbox_icon cs_center">
                    <img
                      src="https://medixal-html.vercel.app/assets/img/icons/surgery_icon.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_iconbox_text">
                    <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                      Specialist eye Surgery
                    </h3>
                    <p className="cs_iconbox_subtitle cs_white_color mb-0">
                      Far far away, behind the word bore et dolore magna aliqua.
                      Ut enim ad on minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cs_iconbox cs_style_3">
                  <div className="cs_iconbox_icon cs_center">
                    <img
                      src="https://medixal-html.vercel.app/assets/img/icons/support_icon.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_iconbox_text">
                    <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                      24/7 Take care Staff
                    </h3>
                    <p className="cs_iconbox_subtitle cs_white_color mb-0">
                      Far far away, behind the word bore et dolore magna aliqua.
                      Ut enim ad on minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.25s"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.25s",
              animationName: "fadeInRight",
            }}
          >
            <div className="cs_appointment_form_wrapper cs_type_1 cs_radius_10">
              <h3 className="cs_appointment_heading">Make an Appointment</h3>
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
