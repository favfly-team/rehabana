import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-data";

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

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Blog", url: "https://rehabana.com/blog" },
  ]);

  const webPage = generateWebPageSchema({
    name: "Neuro Rehab Blogs & Recovery Insights | Rehabana",
    description:
      "Expert neuro rehabilitation tips from doctors at Rehabana, Kolkata — guidance on stroke recovery, spinal cord injury rehab, Parkinson's care.",
    url: "https://rehabana.com/blog",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage]} />
      <SliceZone
        slices={doc.data.slices}
        components={components}
        context={{
          blogs: results,
          blogSlice: blogsSection.data,
        }}
      />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("blog_page");

  return Seo(page);
}

export default BlogPage;
