import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import Seo from "@/lib/seo/Seo";

const AboutPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("about_page");

  return (
    <SliceZoneWithContext slices={doc.data.slices} components={components} />
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("about_page");

  return Seo(page);
}

export default AboutPage;
