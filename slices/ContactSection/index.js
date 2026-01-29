import DefaultSection from "@/components/contact";
import LocationSection from "@/components/contact/location-section";

/**
 * @typedef {import("@prismicio/client").Content.ContactSectionSlice} ContactSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSectionSlice>} ContactSectionProps
 * @type {import("react").FC<ContactSectionProps>}
 */
const ContactSection = ({ slice }) => {
  switch (slice.variation) {
    case "location":
      return <LocationSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ContactSection;
