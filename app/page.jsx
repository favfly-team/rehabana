import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import Seo from "@/lib/seo/Seo";
import BlogsSection from "@/components/blogs-section";

const HomePage = async () => {
  const client = createClient();

  const doc = await client.getSingle("home_page");
  const blogsSection = await client.getSingle("blogs");
  const blogs = await client.getByType("blog_post", {
    orderings: {
      field: "my.blog_post.published_date",
      direction: "desc",
    },
    pageSize: 3,
  });

  return (
    <>
      <SliceZoneWithContext
        slices={doc.data.slices}
        components={components}
        context={{
          blogSlice: blogsSection.data,
          blogs: blogs.results,
        }}
      />
      <BlogsSection
        slice={{ primary: blogsSection.data }}
        blogs={blogs.results}
      />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("home_page");

  return Seo(page);
}

export default HomePage;
