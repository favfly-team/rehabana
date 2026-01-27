/**
 * @typedef {import("@prismicio/client").Content.BlogPostContentSlice} BlogPostContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostContentSlice>} BlogPostContentProps
 * @type {import("react").FC<BlogPostContentProps>}
 */
const BlogPostContent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_post_content (variation: {slice.variation}).
    </section>
  );
};

export default BlogPostContent;
