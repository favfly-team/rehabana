import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { asText } from "@prismicio/client";
import { format } from "date-fns";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { createRichTextComponents } from "@/lib/richTextComponents";
import Link from "next/link";

const BlogPostHero = ({ data }) => {
  const { published_date, title, description, image } = data;

  const authorUid = data?.author?.uid || "";
  const authorName = data?.author?.data?.name || "Rehabana Team";
  return (
    <div className="cs_blog_hero_card cs_white_bg cs_radius_10 mb-4">
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
        <h1 className="cs_blog_title cs_semibold mb-2">{asText(title)}</h1>

        <div
          className="cs_post_meta mb-2 d-flex align-items-center"
          style={{ gap: "8px" }}
        >
          <FaUser className="cs_accent_color" />
          {authorUid ? (
            <Link href={`/authors/${authorUid}`} className="cs_accent_color">
              {authorName}
            </Link>
          ) : (
            <span className="cs_accent_color">{authorName}</span>
          )}
        </div>

        {description && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName: "cs_blog_description leading-relaxed",
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
