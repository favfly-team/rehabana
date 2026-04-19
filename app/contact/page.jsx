import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import { generateBreadcrumbSchema, contactPageSchema } from "@/lib/schema-data";

const ContactPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("contact_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Contact", url: "https://rehabana.com/contact" },
  ]);

  return (
    <>
      <SchemaMarkup data={[breadcrumb, contactPageSchema]} />
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("contact_page");

  return Seo(page);
}

export default ContactPage;
