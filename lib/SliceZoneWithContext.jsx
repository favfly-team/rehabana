import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

/**
 * Server component that fetches the global Gallery singleton and renders
 * SliceZone with context so slices (e.g. GallerySection "global" variation)
 * can use the same data across all pages.
 */
export async function SliceZoneWithContext({ slices, components }) {
  const client = createClient();
  const globalGallery = await client
    .getSingle("gallery")
    .catch(() => null);

  return (
    <SliceZone
      slices={slices}
      components={components}
      context={{ globalGallery }}
    />
  );
}
