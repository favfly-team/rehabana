/**
 * @typedef {import("@prismicio/client").Content.FeaturesImageSectionSlice} FeaturesImageSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesImageSectionSlice>} FeaturesImageSectionProps
 * @type {import("react").FC<FeaturesImageSectionProps>}
 */
const FeaturesImageSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for features_image_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default FeaturesImageSection;
