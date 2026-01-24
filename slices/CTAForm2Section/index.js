/**
 * @typedef {import("@prismicio/client").Content.CtaForm2SectionSlice} CTAForm2SectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CTAForm2SectionSlice>} CTAForm2SectionProps
 * @type {import("react").FC<CTAForm2SectionProps>}
 */
const CTAForm2Section = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_form2_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default CTAForm2Section;
