import DefaultSection from "@/components/faq-section";

/**
 * @typedef {import("@prismicio/client").Content.FaqSectionSlice} FAQSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FAQSectionSlice>} FAQSectionProps
 * @type {import("react").FC<FAQSectionProps>}
 */
const FAQSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FAQSection;
