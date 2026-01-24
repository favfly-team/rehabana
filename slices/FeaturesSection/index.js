/**
 * @typedef {import("@prismicio/client").Content.FeaturesSectionSlice} FeaturesSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSectionSlice>} FeaturesSectionProps
 * @type {import("react").FC<FeaturesSectionProps>}
 */
const FeaturesSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for features_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default FeaturesSection;
