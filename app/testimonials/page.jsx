import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Seo from "@/lib/seo/Seo";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";

/** Build testimonial slices from global testimonials so all three components (default, video, slider) render. */
function buildTestimonialSlices(pageSlices, globalTestimonials) {
  const data = globalTestimonials?.data;
  const defaultPrimary = data?.default?.[0];
  const videoPrimary = data?.video?.[0];
  const sliderPrimary = data?.slider?.[0];

  const slices = [];

  if (defaultPrimary) {
    slices.push({
      slice_type: "testimonial_section",
      variation: "default",
      primary: defaultPrimary,
      items: [],
    });
  }
  if (videoPrimary) {
    slices.push({
      slice_type: "testimonial_section",
      variation: "video",
      primary: videoPrimary,
      items: [],
    });
  }
  if (sliderPrimary) {
    slices.push({
      slice_type: "testimonial_section",
      variation: "slider",
      primary: sliderPrimary,
      items: [],
    });
  }

  return slices.length > 0 ? slices : pageSlices ?? [];
}

const TestimonialsPage = async () => {
  const client = createClient();

  const [doc, globalTestimonials] = await Promise.all([
    client.getSingle("testimonials_page"),
    client.getSingle("testimonials").catch(() => null),
  ]);

  const slices = buildTestimonialSlices(doc.data.slices, globalTestimonials);

  return (
    <>
      <SliceZoneWithContext slices={slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("testimonials_page");

  return Seo(page);
}

export default TestimonialsPage;
