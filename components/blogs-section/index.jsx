import { FaArrowRightLong } from "react-icons/fa6";
import { PrismicNextLink } from "@prismicio/next";
import { SectionHeading, ViewAllButton } from "@/components/ui";
import { PrismicNextImage } from "@prismicio/next";
import { format } from "date-fns";

const BlogsSection = ({ slice, blogs = [] }) => {
  const { primary } = slice || {};

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading primary={primary} variant="center" />

        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_40">
          {blogs.map((doc) => (
            <BlogItem key={doc.id} doc={doc} />
          ))}
        </div>
        <ViewAllButton href="/blog" />
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const BlogItem = ({ doc }) => {
  const { url, data } = doc;
  const { published_date, meta_title, meta_description, featured_image } = data;

  return (
    <div className="col-lg-4">
      <article className="cs_post cs_style_1">
        <PrismicNextLink href={url} className="cs_post_thumbnail cs_radius_8">
          <PrismicNextImage
            field={featured_image}
            alt={meta_title}
            className="img-fluid"
          />
        </PrismicNextLink>
        <div className="cs_post_info">
          <div className="cs_post_meta">
            {format(new Date(published_date), "MMM d, yyyy")}
          </div>
          <PrismicNextLink href={url}>
            <h3 className="cs_post_title cs_fs_24">{meta_title}</h3>
          </PrismicNextLink>

          <p className="cs_post_excerpt mb-2">{meta_description}</p>

          <PrismicNextLink
            href={url}
            className="cs_text_btn cs_fs_18 cs_medium cs_heading_color"
          >
            <span>Learn More</span>
            <div className="cs_text_btn_icon cs_center">
              <span>
                <FaArrowRightLong size="1em" />
              </span>
              <span>
                <FaArrowRightLong size="1em" />
              </span>
            </div>
          </PrismicNextLink>
        </div>
      </article>
    </div>
  );
};

export default BlogsSection;
