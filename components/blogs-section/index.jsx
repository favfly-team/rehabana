import { FaArrowRightLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { PrismicNextLink } from "@prismicio/next";
import { SectionHeading, ViewAllButton } from "@/components/ui";
import { PrismicNextImage } from "@prismicio/next";
import { format } from "date-fns";
import Link from "next/link";
import { getBlogAuthors } from "@/lib/blog-authors";

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

  const authors = getBlogAuthors(data);
  const hasRealAuthors = !(authors.length === 1 && authors[0]?.name === "Rehabana Team" && !authors[0]?.uid);

  return (
    <div className="col-lg-4">
      <article className="cs_post cs_style_1">
        <PrismicNextLink href={url} className="cs_post_thumbnail cs_radius_8">
          <PrismicNextImage
            field={featured_image}
            alt={meta_title}
            className="img-fluid"
            sizes="(max-width: 991px) 100vw, 33vw"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </PrismicNextLink>
        <div className="cs_post_info">
          <div className="cs_post_meta_row">
            <div className="cs_post_meta">
              {format(new Date(published_date), "MMM d, yyyy")}
            </div>
            <span className="cs_post_meta_divider" aria-hidden="true">
              ·
            </span>

            <div
              className={`cs_post_author cs_post_author--compact ${
                hasRealAuthors ? "cs_post_author--emphasis" : ""
              }`}
            >
              <FaUser className="cs_post_author_icon" />
              <span className="cs_post_author_items">
                {authors.map((author, index) => (
                  <span
                    key={`${author.uid || author.name}-${index}`}
                    className="cs_post_author_item"
                  >
                    {author.uid ? (
                      <Link
                        href={`/authors/${author.uid}`}
                        className="cs_post_author_link"
                      >
                        {author.name}
                      </Link>
                    ) : (
                      <span className="cs_post_author_text">{author.name}</span>
                    )}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <PrismicNextLink href={url}>
            <h3 className="cs_post_title cs_fs_20 cs_semibold">{meta_title}</h3>
          </PrismicNextLink>

          <p className="cs_post_excerpt mb-2">{meta_description}</p>

          <PrismicNextLink
            href={url}
            className="cs_text_btn cs_fs_16 cs_heading_color"
          >
            <span>Read More</span>
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
