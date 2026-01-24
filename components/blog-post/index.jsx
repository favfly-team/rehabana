"use client";
import BlogPostHero from "./hero";
import BlogPostDetails from "./details";
import BlogPostSidebar from "./sidebar";
import BlogPostSocial from "./social";

const BlogPost = ({
  date,
  title,
  heroImage,
  content,
  shareUrl,
  shareTitle,
  shareDescription,
  shareImage,
}) => {
  return (
    <div className="cs_blog_post_page cs_gray_bg">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_30">
          <div className="col-lg-8">
            {/* Hero Card - Separate */}
            <BlogPostHero date={date} title={title} image={heroImage} />

            {/* Blog Details Card - Separate */}
            <BlogPostDetails content={content} />

            {/* Add more sections here in the future */}

            {/* Social Share Card - Separate */}
            <BlogPostSocial
              url={shareUrl}
              title={shareTitle || title}
              description={shareDescription}
              image={shareImage || heroImage}
            />
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
