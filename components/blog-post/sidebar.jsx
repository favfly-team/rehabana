"use client";

import OpnFormIframe from "@/components/form/OpnFormIframe";

const BlogPostSidebar = () => {
  return (
    <div
      className="cs_blog_sidebar"
      style={{ position: "sticky", top: "120px" }}
    >
      <div
        className="cs_blog_sidebar_card cs_white_bg cs_radius_10"
        style={{ padding: "30px 20px" }}
      >
        <h3 className="cs_sidebar_title cs_fs_24 cs_heading_font mb-4 text-center">
          Book an Appointment
        </h3>
        <div style={{ margin: "-20px" }}>
          <OpnFormIframe className="cs_blog_form" height="400px" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSidebar;
