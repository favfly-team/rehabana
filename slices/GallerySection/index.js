/**
 * @typedef {import("@prismicio/client").Content.GallerySectionSlice} GallerySectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySectionSlice>} GallerySectionProps
 * @type {import("react").FC<GallerySectionProps>}
 */
const GallerySection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gallery_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default GallerySection;
