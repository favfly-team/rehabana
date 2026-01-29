import DefaultSection from "@/components/hero-section";
import SecondaryHeroSection from "@/components/hero-section/secondary";
import HeroSectionForm from "@/components/hero-section/form";

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @type {import("react").FC<HeroSectionProps>}
 */
const HeroSection = ({ slice }) => {
  switch (slice.variation) {
    case "secondary":
      return <SecondaryHeroSection slice={slice} />;
    case "form":
      return <HeroSectionForm slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default HeroSection;
