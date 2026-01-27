/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSlice} TeamSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSlice>} TeamSectionProps
 * @type {import("react").FC<TeamSectionProps>}
 *
 * Variations:
 * - default: Teams grid (matches @/components/team/index.jsx) — subheading, heading, items (image, title, subtitle, link, social_links)
 * - details: Single member detail (matches @/components/team/team-details.jsx) — image, category, heading, specialty, bio, social_links, accordion_items
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
