import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import DoctorProfile from "@/components/doctor";
import SchemaMarkup from "@/components/schema-markup";
import { doctors, getDoctorBySlug, getDoctorUrl } from "@/data/doctors";
import {
  generateBreadcrumbSchema,
  generatePhysicianSchema,
} from "@/lib/schema-data";

/**
 * Individual doctor profile page — /team/<slug>.
 *
 * Content is static for now (see `data/doctors.js`); only the "Articles by"
 * block is live, pulled from Prismic via the doctor's linked author document.
 * One route serves every doctor, so adding a profile is a data change only.
 */

const AUTHOR_FETCH_LINKS = [
  "author.name",
  "author.image",
  "author.designation",
];

const uniqueById = (docs = []) => {
  const seen = new Set();
  return docs.filter((doc) => {
    if (!doc?.id || seen.has(doc.id)) return false;
    seen.add(doc.id);
    return true;
  });
};

/** Posts written by this doctor, newest first. Never throws. */
const getDoctorBlogs = async (authorUid) => {
  if (!authorUid) return [];

  const client = createClient();
  const author = await client.getByUID("author", authorUid).catch(() => null);
  if (!author) return [];

  const orderings = {
    field: "my.blog_post.published_date",
    direction: "desc",
  };

  // Posts link an author either through the legacy single `author` field or the
  // newer repeatable `authors` group — query both and merge.
  const [legacy, grouped] = await Promise.all([
    client
      .getAllByType("blog_post", {
        filters: [prismic.filter.at("my.blog_post.author", author.id)],
        orderings,
        fetchLinks: AUTHOR_FETCH_LINKS,
      })
      .catch(() => []),
    client
      .getAllByType("blog_post", {
        filters: [
          prismic.filter.any("my.blog_post.authors.author", [author.id]),
        ],
        orderings,
        fetchLinks: AUTHOR_FETCH_LINKS,
      })
      .catch(() => []),
  ]);

  return uniqueById([...legacy, ...grouped]).sort((a, b) => {
    const aDate = a?.data?.published_date
      ? new Date(a.data.published_date).getTime()
      : 0;
    const bDate = b?.data?.published_date
      ? new Date(b.data.published_date).getTime()
      : 0;
    return bDate - aDate;
  });
};

/**
 * Pair each condition with its Prismic service page, so the tiles can show the
 * real photography and link through. Conditions without a matching page (or if
 * the fetch fails) simply come back without an image or link.
 */
const getConditions = async (specialities = []) => {
  const uids = specialities.map((item) => item.serviceUid).filter(Boolean);
  if (uids.length === 0) return specialities;

  const client = createClient();
  const pages = await client.getAllByUIDs("service_page", uids).catch(() => []);

  const byUid = new Map(pages.map((page) => [page.uid, page]));

  return specialities.map((item) => {
    const page = byUid.get(item.serviceUid);
    return {
      label: item.label,
      url: page?.url ?? null,
      image: page?.data?.featured_image ?? null,
    };
  });
};

const DoctorPage = async ({ params }) => {
  const doctor = getDoctorBySlug(params?.slug);
  if (!doctor) notFound();

  const [blogs, conditions] = await Promise.all([
    getDoctorBlogs(doctor.authorUid),
    getConditions(doctor.specialities),
  ]);

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Team", url: "https://rehabana.com/team" },
    { name: doctor.name, url: getDoctorUrl(doctor) },
  ]);

  return (
    <>
      <SchemaMarkup data={[breadcrumb, generatePhysicianSchema(doctor)]} />
      <DoctorProfile doctor={doctor} blogs={blogs} conditions={conditions} />
    </>
  );
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }) {
  const doctor = getDoctorBySlug(params?.slug);
  if (!doctor) return {};

  const title = doctor.seo?.title ?? `${doctor.name} | Rehabana`;
  const description = doctor.seo?.description ?? doctor.lead ?? "";
  const url = getDoctorUrl(doctor);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      images: doctor.image?.url ? [{ url: doctor.image.url }] : undefined,
    },
  };
}

export default DoctorPage;
