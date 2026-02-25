import DefaultSection from "@/components/blogs-section";

/**
 * @typedef {import("@prismicio/client").Content.BlogsSectionSlice} BlogsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSectionSlice>} BlogsSectionProps
 * @type {import("react").FC<BlogsSectionProps>}
 */
const BlogsSection = async ({ slice, context }) => {
  switch (slice.variation) {
    default:
      return (
        <DefaultSection
          slice={{ primary: context?.blogSlice }}
          blogs={context?.blogs}
        />
      );
  }
};

export default BlogsSection;
