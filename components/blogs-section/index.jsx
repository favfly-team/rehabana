import { FaArrowRightLong } from "react-icons/fa6";

const BlogsSection = () => {
  const blogData = [
    {
      id: 1,
      title: "Medi Tips How to Physical Fitness your Health",
      date: "August 04, 2024",
      image: "https://medixal-html.vercel.app/assets/img/post_1.jpeg",
      link: "blog-details.html",
    },
    {
      id: 2,
      title: "How to Get Best Care 7 Step for your Eyes",
      date: "August 15, 2024",
      image: "https://medixal-html.vercel.app/assets/img/post_2.jpeg",
      link: "blog-details.html",
    },
    {
      id: 3,
      title: "Improve your heart health with genetic testing.",
      date: "September 01, 2024",
      image: "https://medixal-html.vercel.app/assets/img/post_3.jpeg",
      link: "blog-details.html",
    },
  ];

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 wow fadeInUp">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs_18 cs_medium cs_accent_color cs_heading_font">
              Blog &amp; news
            </p>
            <h2 className="cs_section_title cs_fs_48 mb-0">
              Take a Look at The Latest <br /> Articles &amp; News
            </h2>
          </div>
          <div className="cs_section_heading_right">
            <a
              href="blog.html"
              className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg  cs_radius_100"
            >
              <span className="cs_btn_text">See All Blogs</span>
            </a>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_40">
          {blogData.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const BlogItem = ({ blog }) => {
  return (
    <div className="col-lg-4">
      <article className="cs_post cs_style_1">
        <a href={blog.link} className="cs_post_thumbnail cs_radius_8">
          <img src={blog.image} alt="Post Thumbnail" className="img-fluid" />
        </a>
        <div className="cs_post_info">
          <div className="cs_post_meta">{blog.date}</div>
          <h3 className="cs_post_title cs_fs_32">
            <a href={blog.link}>{blog.title}</a>
          </h3>
          <a href={blog.link} className="cs_text_btn cs_fs_18 cs_heading_color">
            <span>Learn More</span>
            <div className="cs_text_btn_icon cs_center">
              <span>
                <FaArrowRightLong />
              </span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogsSection;
