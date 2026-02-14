import DefaultSection from "@/components/testimonial-section";
import TestimonialVideoSection from "@/components/testimonial-section/video";
import TestimonialSlider from "@/components/testimonial-section/slider";

const TestimonialSection = ({ slice, context }) => {
  switch (slice.variation) {
    case "global":
      switch (slice?.primary?.variation) {
        case "video":
          return (
            <TestimonialVideoSection
              slice={{
                primary:
                  context.globalTestimonials?.data?.[
                    slice?.primary?.variation
                  ]?.[0],
              }}
            />
          );
        case "slider":
          return (
            <TestimonialSlider
              slice={{
                primary:
                  context.globalTestimonials?.data?.[
                    slice?.primary?.variation
                  ]?.[0],
              }}
            />
          );
        default:
          return (
            <DefaultSection
              slice={{
                primary:
                  context.globalTestimonials?.data?.[
                    slice?.primary?.variation
                  ]?.[0],
              }}
            />
          );
      }

    case "video":
      return <TestimonialVideoSection slice={slice} />;
    case "slider":
      return <TestimonialSlider slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TestimonialSection;
