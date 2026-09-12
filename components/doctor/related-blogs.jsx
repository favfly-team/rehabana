import Link from "next/link";
import { format } from "date-fns";
import { PrismicNextImage } from "@prismicio/next";
import { FaArrowRightLong } from "react-icons/fa6";

/**
 * Articles written by this doctor.
 *
 * Posts are fetched on the page (server side) from Prismic using the doctor's
 * `authorUid`, so this stays a dumb presentational component. Renders nothing
 * when the doctor has no published posts yet.
 */
const RelatedBlogs = ({ blogs = [], doctorName }) => {
  if (!blogs.length) return null;

  return (
    <section className="cs_doctor_blogs">
      <div className="container">
        <div className="cs_doctor_blogs_head">
          <div>
            <p className="cs_doctor_eyebrow">Insights</p>
            <h2 className="cs_doctor_section_title mb-0">
              Articles by {doctorName}
            </h2>
          </div>
          <Link href="/blog" className="cs_doctor_ghost_btn">
            All Articles <FaArrowRightLong aria-hidden="true" />
          </Link>
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {blogs.slice(0, 3).map((doc) => (
            <BlogCard key={doc.id} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ doc }) => {
  const { url, data } = doc || {};
  const { published_date, meta_title, featured_image } = data || {};

  return (
    <div className="col-lg-4 col-sm-6">
      <article className="cs_post cs_style_1 cs_doctor_blog_card">
        <Link href={url || "/blog"} className="cs_post_thumbnail cs_radius_8">
          <PrismicNextImage
            field={featured_image}
            alt={meta_title || ""}
            className="img-fluid"
            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
          />
        </Link>
        <div className="cs_post_info">
          {published_date && (
            <div className="cs_post_meta">
              {format(new Date(published_date), "MMM d, yyyy")}
            </div>
          )}
          <h3 className="cs_post_title cs_fs_18 cs_semibold">
            <Link href={url || "/blog"}>{meta_title}</Link>
          </h3>
        </div>
      </article>
    </div>
  );
};

export default RelatedBlogs;
