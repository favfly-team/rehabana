import DefaultSection from "@/components/features-section";
import FeaturesImageSection from "@/components/features-section/image";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSectionSlice} FeaturesSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSectionSlice>} FeaturesSectionProps
 * @type {import("react").FC<FeaturesSectionProps>}
 */
const FeaturesSection = ({ slice }) => {
  switch (slice.variation) {
    case "image":
      return <FeaturesImageSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FeaturesSection;
