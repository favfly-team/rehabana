import { SectionHeading, Button } from "@/components/ui";

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
        <SectionHeading
          align="split"
          subtitle="Blog &amp; news"
          title={
            <>
              Take a Look at The Latest <br /> Articles &amp; News
            </>
          }
          rightContent={<Button href="blog.html">See All Blogs</Button>}
          className="wow fadeInUp"
        />
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
          <h3 className="cs_post_title cs_fs_24">
            <a href={blog.link}>{blog.title}</a>
          </h3>
          <Button href={blog.link} variant="text">
            Learn More
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogsSection;
