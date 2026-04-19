import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  servicesListSchema,
} from "@/lib/schema-data";

const ServicesPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("services_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Services", url: "https://rehabana.com/services" },
  ]);

  const webPage = generateWebPageSchema({
    name: "Doctor-Led Neuro Rehabilitation Services in Kolkata | Rehabana",
    description:
      "Explore advanced, doctor-led neuro rehabilitation services in Kolkata at Rehabana. Stroke, spinal cord injury, Parkinson's & brain injury rehab.",
    url: "https://rehabana.com/services",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage, servicesListSchema]} />
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("services_page");

  return Seo(page);
}

export default ServicesPage;
