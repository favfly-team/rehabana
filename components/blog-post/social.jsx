"use client";

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

const BlogPostSocial = ({ url, title, description, image }) => {
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title || "";
  const shareDescription = description || "";
  const shareImage = image || "";

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
