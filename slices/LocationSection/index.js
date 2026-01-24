/**
 * @typedef {import("@prismicio/client").Content.LocationSectionSlice} LocationSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationSectionSlice>} LocationSectionProps
 * @type {import("react").FC<LocationSectionProps>}
 */
const LocationSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for location_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default LocationSection;
