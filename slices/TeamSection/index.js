import DefaultSection from "@/components/team";
import TeamDetails from "@/components/team/team-details";

/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSlice} TeamSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSlice>} TeamSectionProps
 * @type {import("react").FC<TeamSectionProps>}
 */
const TeamSection = ({ slice }) => {
  switch (slice.variation) {
    case "details":
      return <TeamDetails slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TeamSection;
