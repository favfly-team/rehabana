/**
 * @typedef {import("@prismicio/client").Content.CtaFormSectionSlice} CTAFormSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CTAFormSectionSlice>} CTAFormSectionProps
 * @type {import("react").FC<CTAFormSectionProps>}
 */
const CTAFormSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_form_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default CTAFormSection;
