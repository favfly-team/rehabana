/**
 * @typedef {import("@prismicio/client").Content.CtaSectionSlice} CTASectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CTASectionSlice>} CTASectionProps
 * @type {import("react").FC<CTASectionProps>}
 */
const CTASection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default CTASection;
