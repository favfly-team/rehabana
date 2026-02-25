import { FaCalendarAlt } from "react-icons/fa";
import { asText } from "@prismicio/client";
import { format } from "date-fns";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { createRichTextComponents } from "@/lib/richTextComponents";

const BlogPostHero = ({ data }) => {
  const { published_date, title, description, image } = data;
  return (
    <div
      className="cs_blog_hero_card cs_white_bg cs_radius_10 mb-4"
      style={{ padding: "40px" }}
    >
      {published_date && (
        <div
          className="cs_blog_date mb-3 d-flex align-items-center"
          style={{ gap: "8px", color: "var(--body-color)" }}
        >
          <FaCalendarAlt style={{ fontSize: "16px" }} />
          <span className="cs_fs_16">
            {format(new Date(published_date), "MMM d, yyyy")}
          </span>
        </div>
      )}

      <div className="mb-4">
        <h2 className="cs_blog_title cs_fs_32 mb-2">{asText(title)}</h2>

        {description && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName:
                "cs_blog_description cs_fs_16 leading-relaxed",
            })}
          />
        )}
      </div>
      <div className="cs_blog_hero_image">
        <PrismicNextImage
          field={image}
          alt={asText(title)}
          className="img-fluid cs_radius_8"
        />
      </div>
    </div>
  );
};

export default BlogPostHero;
