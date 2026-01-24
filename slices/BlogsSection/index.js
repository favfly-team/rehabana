/**
 * @typedef {import("@prismicio/client").Content.BlogsSectionSlice} BlogsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSectionSlice>} BlogsSectionProps
 * @type {import("react").FC<BlogsSectionProps>}
 */
const BlogsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blogs_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default BlogsSection;
