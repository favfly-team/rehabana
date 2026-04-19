import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Seo from "@/lib/seo/Seo";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import SchemaMarkup from "@/components/schema-markup";
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  aggregateRatingSchema,
} from "@/lib/schema-data";

const TestimonialsPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("testimonials_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Testimonials", url: "https://rehabana.com/testimonials" },
  ]);

  const webPage = generateWebPageSchema({
    name: "Patient Testimonials | Rehabana Neuro Rehabilitation Center",
    description:
      "Real recovery stories from patients and families at Rehabana. Hear about meaningful rehabilitation experiences and outcomes.",
    url: "https://rehabana.com/testimonials",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage, aggregateRatingSchema]} />
      <SliceZoneWithContext
        slices={doc.data.slices}
        components={components}
        context={{
          testimonialLimit: "all",
        }}
      />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("testimonials_page");

  return Seo(page);
}

export default TestimonialsPage;
