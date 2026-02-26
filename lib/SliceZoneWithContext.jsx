import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Server component that fetches global singletons (Gallery, Testimonials) and
 * renders SliceZone with context so slices can use the same data across all pages.
 */

export async function SliceZoneWithContext({ slices, components, context }) {
  return (
    <Suspense>
      <SliceZoneWithGlobalContext
        slices={slices}
        components={components}
        context={context}
      />
    </Suspense>
  );
}

async function SliceZoneWithGlobalContext({ slices, components, context }) {
  const client = createClient();
  const [globalGallery, globalTestimonials] = await Promise.all([
    client.getSingle("gallery").catch(() => null),
    client.getSingle("testimonials").catch(() => null),
  ]);

  return (
    <SliceZone
      slices={slices}
      components={components}
      context={{ globalGallery, globalTestimonials, ...context }}
    />
  );
}
