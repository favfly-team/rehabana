import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";

const BlogPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("blog_page");
  const blogsSection = await client.getSingle("blogs");

  const results = await client.getAllByType("blog_post", {
    orderings: {
      field: "my.blog_post.published_date",
      direction: "desc",
    },
  });

  return (
    <SliceZone
      slices={doc.data.slices}
      components={components}
      context={{
        blogs: results,
        blogSlice: blogsSection.data,
      }}
    />
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("blog_page");

  return Seo(page);
}

export default BlogPage;
