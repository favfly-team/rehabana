import DefaultSection from "@/components/process-section/page";

/**
 * @typedef {import("@prismicio/client").Content.ProcessSectionSlice} ProcessSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcessSectionSlice>} ProcessSectionProps
 * @type {import("react").FC<ProcessSectionProps>}
 */
const ProcessSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ProcessSection;
