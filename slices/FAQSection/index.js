/**
 * @typedef {import("@prismicio/client").Content.FaqSectionSlice} FAQSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FAQSectionSlice>} FAQSectionProps
 * @type {import("react").FC<FAQSectionProps>}
 */
const FAQSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for faq_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default FAQSection;
