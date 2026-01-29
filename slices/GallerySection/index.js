import DefaultSection from "@/components/gallery-section";

/**
 * @typedef {import("@prismicio/client").Content.GallerySectionSlice} GallerySectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySectionSlice>} GallerySectionProps
 * @type {import("react").FC<GallerySectionProps>}
 */
const GallerySection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default GallerySection;
