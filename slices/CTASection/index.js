import DefaultSection from "@/components/cta-section";
import CTAFormSection from "@/components/cta-section/form";
import CTAForm2Section from "@/components/cta-section/form2";
import BlogCTASection from "@/components/cta-section/blog";

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
    case "blog":
      return <BlogCTASection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CTASection;
