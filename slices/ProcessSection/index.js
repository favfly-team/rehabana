/**
 * @typedef {import("@prismicio/client").Content.ProcessSectionSlice} ProcessSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcessSectionSlice>} ProcessSectionProps
 * @type {import("react").FC<ProcessSectionProps>}
 */
const ProcessSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for process_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default ProcessSection;
