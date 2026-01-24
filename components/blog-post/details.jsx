const BlogPostDetails = ({ content }) => {
  return (
    <div
      className="cs_blog_details cs_white_bg cs_radius_10 mb-4"
      style={{ padding: "40px" }}
    >
      <div
        className="cs_blog_content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx global>{`
        .cs_blog_content {
          color: var(--body-color);
          font-size: 16px;
          line-height: 1.8;
        }
        .cs_blog_content h2,
        .cs_blog_content h3,
        .cs_blog_content h4,
        .cs_blog_content h5,
        .cs_blog_content h6 {
          color: var(--heading-color);
          font-family: var(--heading-font);
          font-weight: 700;
          margin-top: 30px;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .cs_blog_content h2 {
          font-size: 24px;
        }
        .cs_blog_content h3 {
          font-size: 22px;
        }
        .cs_blog_content h4 {
          font-size: 20px;
        }
        .cs_blog_content h5 {
          font-size: 18px;
        }
        .cs_blog_content h6 {
          font-size: 16px;
        }
        .cs_blog_content p {
          margin-bottom: 20px;
          line-height: 1.8;
        }
        .cs_blog_content p:last-child {
          margin-bottom: 0;
        }
        .cs_blog_content ul,
        .cs_blog_content ol {
          margin: 0 0 25px 0;
          padding-left: 20px;
        }
        .cs_blog_content ul li,
        .cs_blog_content ol li {
          margin-bottom: 10px;
          line-height: 1.8;
        }
        .cs_blog_content ul li:last-child,
        .cs_blog_content ol li:last-child {
          margin-bottom: 0;
        }
        .cs_blog_content a {
          color: var(--accent-color);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cs_blog_content a:hover {
          text-decoration: underline;
        }
        .cs_blog_content strong {
          font-weight: 700;
          color: var(--heading-color);
        }
        .cs_blog_content em {
          font-style: italic;
        }
        .cs_blog_content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 30px 0;
        }
        .cs_blog_content blockquote {
          margin: 25px 0;
          padding: 20px;
          border-left: 4px solid var(--accent-color);
          background-color: rgba(0, 0, 0, 0.02);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetails;
