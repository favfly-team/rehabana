"use client";

import { asText } from "@prismicio/client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
} from "react-share";

/**
 * @param {{ data: { url?: string, title?: import("@prismicio/client").RichTextField, description?: import("@prismicio/client").RichTextField, image?: { url?: string } }, url?: string }} props
 * Accepts Prismic blog data (title/description as rich text, image object) and optional url override.
 */
const BlogPostSocial = ({ data }) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle =
    data?.title && Array.isArray(data.title)
      ? asText(data.title)
      : (typeof data?.title === "string" ? data.title : "") || "";
  const shareDescription =
    data?.description && Array.isArray(data.description)
      ? asText(data.description)
      : (typeof data?.description === "string" ? data.description : "") || "";
  const shareImage =
    data?.image?.url ??
    (typeof data?.image === "string" ? data.image : "") ??
    "";

  const iconSize = 32;
  const iconStyle = {
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  return (
    <div className="cs_blog_social_card">
      <div className="d-flex align-items-center" style={{ gap: "12px" }}>
        <span
          className="cs_fs_16 cs_medium"
          style={{ color: "var(--heading-color)" }}
        >
          Share:
        </span>
        <div className="d-flex align-items-center" style={{ gap: "8px" }}>
          <FacebookShareButton
            url={shareUrl}
            quote={shareTitle}
            hashtag="#blog"
          >
            <FacebookIcon size={iconSize} round style={iconStyle} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={shareUrl}
            title={shareTitle}
            separator=":: "
          >
            <WhatsappIcon size={iconSize} round style={iconStyle} />
          </WhatsappShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={shareTitle}
            summary={shareDescription}
          >
            <LinkedinIcon size={iconSize} round style={iconStyle} />
          </LinkedinShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={shareTitle}
            hashtags={["blog"]}
          >
            <TwitterIcon size={iconSize} round style={iconStyle} />
          </TwitterShareButton>
          <PinterestShareButton
            url={shareUrl}
            media={shareImage}
            description={shareTitle}
          >
            <PinterestIcon size={iconSize} round style={iconStyle} />
          </PinterestShareButton>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSocial;
