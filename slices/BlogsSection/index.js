import { createClient } from "@/prismicio";
import DefaultSection from "@/components/blogs-section";

/**
 * @typedef {import("@prismicio/client").Content.BlogsSectionSlice} BlogsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSectionSlice>} BlogsSectionProps
 * @type {import("react").FC<BlogsSectionProps>}
 */
const BlogsSection = async ({ slice }) => {
  const client = createClient();
  const { results: blogs } = await client.getByType("blog_post", {
    orderings: {
      field: "my.blog_post.published_date",
      direction: "desc",
    },
    pageSize: 3,
  });

  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} blogs={blogs} />;
  }
};

export default BlogsSection;
