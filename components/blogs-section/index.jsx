import { PrismicRichText } from "@prismicio/react";
import { SectionHeading, Button } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const BlogsSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description } = primary || {};

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="split"
          subtitle={subheading}
          title={
            heading?.[0]?.text ? (
              <PrismicRichText
                field={heading}
                components={{
                  heading1: ({ children }) => <>{children}</>,
                  heading2: ({ children }) => <>{children}</>,
                  heading3: ({ children }) => <>{children}</>,
                }}
              />
            ) : null
          }
          rightContent={<Button href="blog.html">See All Blogs</Button>}
          className="wow fadeInUp"
        />
        {description && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName: "text-center mt-3 leading-relaxed text-sm",
            })}
          />
        )}
        {/* Note: Blog items would typically come from a separate blog posts query */}
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_40">
          {/* Blog items will be populated from blog posts API */}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default BlogsSection;
