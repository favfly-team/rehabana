import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const BlogPostDetails = ({ slice }) => {
  const items = slice.primary?.items ?? [];

  return (
    <div
      className="cs_blog_details cs_white_bg cs_radius_10 mb-4"
      style={{ padding: "40px" }}
    >
      <div className="cs_blog_content">
        {items.map((item, index) => (
          <div key={index}>
            {item.details?.length > 0 && (
              <PrismicRichText
                field={item.details}
                components={blogRichTextComponents}
              />
            )}
            {item.image?.url && (
              <PrismicNextImage
                field={item.image}
                className="cs_blog_content_img"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const blogRichTextComponents = {
  paragraph: ({ children }) => <p>{children}</p>,
  heading2: ({ children }) => <h2>{children}</h2>,
  heading3: ({ children }) => <h3>{children}</h3>,
  heading4: ({ children }) => <h4>{children}</h4>,
  heading5: ({ children }) => <h5>{children}</h5>,
  heading6: ({ children }) => <h6>{children}</h6>,
  list: ({ children }) => <ul>{children}</ul>,
  oList: ({ children }) => <ol>{children}</ol>,
  listItem: ({ children }) => <li>{children}</li>,
  hyperlink: ({ children, node }) => (
    <a
      href={node.data?.url}
      target={node.data?.target}
      rel={node.data?.target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
};

export default BlogPostDetails;
