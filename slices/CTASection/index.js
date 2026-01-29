import DefaultSection from "@/components/cta-section";
import CTAFormSection from "@/components/cta-section/form";
import CTAForm2Section from "@/components/cta-section/form2";

/**
 * @typedef {import("@prismicio/client").Content.CtaSectionSlice} CTASectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CTASectionSlice>} CTASectionProps
 * @type {import("react").FC<CTASectionProps>}
 */
const CTASection = ({ slice }) => {
  switch (slice.variation) {
    case "form":
      return <CTAFormSection slice={slice} />;
    case "form2":
      return <CTAForm2Section slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CTASection;
