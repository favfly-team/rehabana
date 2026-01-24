"use client";

const BlogPostSidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="cs_blog_sidebar">
      <div className="cs_blog_sidebar_card cs_white_bg cs_radius_10" style={{ padding: "40px", position: "sticky", top: "20px" }}>
        <h3 className="cs_sidebar_title cs_fs_24 cs_heading_font mb-4 text-center">
          Discover Your Perfect Diamond Jewelry
        </h3>
        <form onSubmit={handleSubmit} className="cs_blog_form">
          <div className="cs_gap_y_20">
            <div>
              <label className="cs_form_label cs_fs_14 cs_medium mb-2 d-block" style={{ color: "var(--heading-color)" }}>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="text"
                  name="name"
                  className="cs_form_field cs_type_1"
                  placeholder="Name *"
                  required
                />
              </div>
            </div>
            <div>
              <label className="cs_form_label cs_fs_14 cs_medium mb-2 d-block" style={{ color: "var(--heading-color)" }}>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="email"
                  name="email"
                  className="cs_form_field cs_type_1"
                  placeholder="Email *"
                  required
                />
              </div>
            </div>
            <div>
              <label className="cs_form_label cs_fs_14 cs_medium mb-2 d-block" style={{ color: "var(--heading-color)" }}>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5 d-flex align-items-center" style={{ gap: "8px" }}>
                <select
                  name="country_code"
                  className="cs_form_field cs_type_1"
                  style={{ width: "80px", flexShrink: 0, padding: "15px 10px" }}
                  defaultValue="+1"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+86">+86</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="cs_form_field cs_type_1"
                  placeholder="Phone *"
                  required
                  style={{ flex: 1 }}
                />
              </div>
            </div>
            <div>
              <label className="cs_form_label cs_fs_14 cs_medium mb-2 d-block" style={{ color: "var(--heading-color)" }}>
                Requirement <span style={{ color: "red" }}>*</span>
              </label>
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <textarea
                  name="requirement"
                  rows={5}
                  className="cs_form_field cs_type_1"
                  placeholder="Requirement *"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_5 w-100"
                style={{ backgroundColor: "var(--heading-color)", color: "var(--white-color)" }}
              >
                <span className="cs_btn_text">Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostSidebar;
