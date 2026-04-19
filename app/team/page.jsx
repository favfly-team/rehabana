import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-data";

const TeamPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("team_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Team", url: "https://rehabana.com/team" },
  ]);

  const webPage = generateWebPageSchema({
    name: "Our Team | Rehabana Neuro Rehabilitation Center",
    description:
      "Meet the expert doctors, physiotherapists, occupational therapists, speech therapists, and care staff at Rehabana, Kolkata.",
    url: "https://rehabana.com/team",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage]} />
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("team_page");

  return Seo(page);
}

export default TeamPage;
