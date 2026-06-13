import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const BlogPostDetails = ({ slice }) => {
  const items = slice.primary?.items ?? [];

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      <div className="cs_blog_details cs_white_bg cs_radius_10 mb-4">
        <div className="cs_blog_content">
          {items.map((item, index) => (
            <div key={index}>
              {item?.details?.length > 0 && (
                <PrismicRichText
                  field={item.details}
                  components={blogRichTextComponents}
                />
              )}
              {item?.image?.url && (
                <PrismicNextImage
                  field={item.image}
                  className="cs_blog_content_img"
                />
              )}

              {item?.pdf?.length > 0 && (
                <div className="cs_pdf_cards">
                  {item.pdf.map(
                    (pdf, pdfIndex) =>
                      pdf?.url && (
                        <PdfCard key={pdf.key ?? pdfIndex} pdf={pdf} />
                      ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const formatFileSize = (bytes) => {
  const size = Number(bytes);
  if (!size) return "";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(0)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const PdfCard = ({ pdf }) => {
  const title = pdf.text || pdf.name || "PDF Document";
  const fileSize = formatFileSize(pdf.size);

  return (
    <a
      href={pdf.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cs_pdf_card"
    >
      <span className="cs_pdf_card_icon" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M9 3.5h14.5L33 13v19.5a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4v-25a4 4 0 0 1 2-3.5Z"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path
            d="M23 3.5 33 13h-6.5a3.5 3.5 0 0 1-3.5-3.5V3.5Z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <path
            d="M9.5 3.5H23L33 13v19.5a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4v-25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M23 3.5V9.5a3.5 3.5 0 0 0 3.5 3.5H33"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect
            x="11"
            y="22.5"
            width="18"
            height="10"
            rx="2.5"
            fill="currentColor"
          />
          <text
            x="20"
            y="29.8"
            textAnchor="middle"
            fill="#fff"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.5"
            fontFamily="var(--font-poppins), sans-serif"
          >
            PDF
          </text>
        </svg>
      </span>

      <span className="cs_pdf_card_body">
        <span className="cs_pdf_card_title">{title}</span>
        <span className="cs_pdf_card_meta">
          PDF{fileSize ? ` · ${fileSize}` : ""}
        </span>
      </span>

      <span className="cs_pdf_card_action">
        <span className="cs_pdf_card_action_label">Download</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
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
  embed: ({ node }) => {
    const { oembed } = node;
    if (!oembed?.html) return null;

    return (
      <div
        className="iframe-container"
        dangerouslySetInnerHTML={{ __html: oembed.html }}
      />
    );
  },
};

export default BlogPostDetails;
