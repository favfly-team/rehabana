import DefaultSection from "@/components/testimonial-section";
import TestimonialVideoSection from "@/components/testimonial-section/video";
import TestimonialSlider from "@/components/testimonial-section/slider";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @type {import("react").FC<TestimonialSectionProps>}
 */
const TestimonialSection = ({ slice }) => {
  switch (slice.variation) {
    case "video":
      return <TestimonialVideoSection slice={slice} />;
    case "slider":
      return <TestimonialSlider slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TestimonialSection;
