import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-data";

const AboutPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("about_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "About", url: "https://rehabana.com/about" },
  ]);

  const webPage = generateWebPageSchema({
    name: "About Rehabana | Neuro Rehabilitation Center",
    description:
      "Rehabana is East India's first dedicated neuro rehabilitation center in Kolkata, delivering doctor-led, technology-enabled recovery programs.",
    url: "https://rehabana.com/about",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage]} />
      <SliceZoneWithContext slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("about_page");

  return Seo(page);
}

export default AboutPage;
