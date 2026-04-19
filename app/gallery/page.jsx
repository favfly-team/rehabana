import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import Seo from "@/lib/seo/Seo";
import SchemaMarkup from "@/components/schema-markup";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-data";

const GalleryPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("gallery_page");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Gallery", url: "https://rehabana.com/gallery" },
  ]);

  const webPage = generateWebPageSchema({
    name: "Gallery | Rehabana Neuro Rehabilitation Center Kolkata",
    description:
      "View photos of Rehabana's advanced therapy equipment, rehabilitation spaces, and patient sessions at our Salt Lake and Kalighat centres.",
    url: "https://rehabana.com/gallery",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, webPage]} />
      <SliceZoneWithContext
        slices={doc.data.slices}
        components={components}
        context={{
          galleryLimit: "all",
        }}
      />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("gallery_page");

  return Seo(page);
}

export default GalleryPage;
