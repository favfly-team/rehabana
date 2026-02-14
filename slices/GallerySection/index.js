import DefaultSection from "@/components/gallery-section";

const GallerySection = ({ slice, context }) => {
  switch (slice.variation) {
    case "global": {
      return (
        <DefaultSection
          slice={{ primary: context.globalGallery?.data?.default?.[0] }}
        />
      );
    }
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default GallerySection;
