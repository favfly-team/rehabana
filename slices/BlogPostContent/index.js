import DefaultSection from "@/components/blog-post/details";

/**
 * @typedef {import("@prismicio/client").Content.BlogPostContentSlice} BlogPostContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostContentSlice>} BlogPostContentProps
 * @type {import("react").FC<BlogPostContentProps>}
 */
const BlogPostContent = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default BlogPostContent;
