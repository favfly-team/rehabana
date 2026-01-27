/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSlice} TeamSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSlice>} TeamSectionProps
 * @type {import("react").FC<TeamSectionProps>}
 */
const TeamSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for team_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default TeamSection;
