import DefaultSection from "@/components/gallery-section";

const GallerySection = ({ slice, context }) => {
  switch (slice.variation) {
    case "global": {
      return (
        <DefaultSection
          slice={{ primary: context.globalGallery?.data?.default?.[0] }}
          galleryLimit={context?.galleryLimit}
        />
      );
    }
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default GallerySection;
