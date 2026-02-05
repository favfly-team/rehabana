"use client";

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import BlogPostHero from "./hero";
import BlogPostSidebar from "./sidebar";
import BlogPostSocial from "./social";

const BlogPost = ({ data }) => {
  const { slices } = data;

  return (
    <div className="cs_blog_post_page cs_gray_bg">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_30">
          <div className="col-lg-8">
            {/* Hero Card - Separate */}
            <BlogPostHero data={data} />

            {/* Slice Zone: blog_post_content and any future sections (FAQ, CTA, etc.) */}
            {slices?.length > 0 && (
              <SliceZone slices={slices} components={components} />
            )}

            {/* Social Share Card - Separate */}
            <BlogPostSocial data={data} />
          </div>
          <div className="col-lg-4">
            <BlogPostSidebar />
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </div>
  );
};

export default BlogPost;
