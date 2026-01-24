import { FaCalendarAlt } from "react-icons/fa";

const BlogPostHero = ({ date, title, image }) => {
  return (
    <div
      className="cs_blog_hero_card cs_white_bg cs_radius_10 mb-4"
      style={{ padding: "40px" }}
    >
      {date && (
        <div
          className="cs_blog_date mb-3 d-flex align-items-center"
          style={{ gap: "8px", color: "var(--body-color)" }}
        >
          <FaCalendarAlt style={{ fontSize: "16px" }} />
          <span className="cs_fs_16">{date}</span>
        </div>
      )}
      {title && <h2 className="cs_blog_title cs_fs_32 mb-4">{title}</h2>}
      {image && (
        <div className="cs_blog_hero_image">
          <img
            src={image}
            alt={title || "Blog Post"}
            className="img-fluid cs_radius_8"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPostHero;
