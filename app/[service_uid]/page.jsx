import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("service_page");
  return pages.map((page) => ({ service_uid: page.uid }));
}

export default async function ServicePage({ params }) {
  const client = createClient();
  const uid =
    typeof params.service_uid === "string"
      ? params.service_uid
      : params.service_uid?.[0];
  const page = await client.getByUID("service_page", uid).catch(() => null);
  if (!page) notFound();
  return <SliceZone slices={page.data.slices} components={components} />;
}
