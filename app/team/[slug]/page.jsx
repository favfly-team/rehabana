import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import DoctorProfile from "@/components/doctor";
import SchemaMarkup from "@/components/schema-markup";
import { getAllDoctors, getDoctorBySlug, getDoctorUrl } from "@/lib/doctors";
import {
  generateBreadcrumbSchema,
  generatePhysicianSchema,
} from "@/lib/schema-data";

/**
 * Individual doctor profile page — /team/<slug>.
 *
 * Everything on it comes from the Prismic `doctor` document (see
 * `lib/doctors.js`), including the conditions, which arrive with their service
 * page already attached. The only extra query is the "Articles by" block,
 * which has to be looked up from the other direction.
 *
 * One route serves every doctor, so adding a profile is a content change only.
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
const getDoctorBlogs = async (authorId) => {
  if (!authorId) return [];

  const client = createClient();

  const orderings = {
    field: "my.blog_post.published_date",
    direction: "desc",
  };

  // Posts link an author either through the legacy single `author` field or the
  // newer repeatable `authors` group — query both and merge.
  const [legacy, grouped] = await Promise.all([
    client
      .getAllByType("blog_post", {
        filters: [prismic.filter.at("my.blog_post.author", authorId)],
        orderings,
        fetchLinks: AUTHOR_FETCH_LINKS,
      })
      .catch(() => []),
    client
      .getAllByType("blog_post", {
        filters: [
          prismic.filter.any("my.blog_post.authors.author", [authorId]),
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

const DoctorPage = async ({ params }) => {
  const doctor = await getDoctorBySlug(params?.slug);
  if (!doctor) notFound();

  const blogs = await getDoctorBlogs(doctor.authorId);

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Team", url: "https://rehabana.com/team" },
    { name: doctor.name, url: getDoctorUrl(doctor) },
  ]);

  return (
    <>
      <SchemaMarkup data={[breadcrumb, generatePhysicianSchema(doctor)]} />
      <DoctorProfile
        doctor={doctor}
        blogs={blogs}
        conditions={doctor.conditions}
      />
    </>
  );
};

export async function generateStaticParams() {
  const doctors = await getAllDoctors();
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }) {
  const doctor = await getDoctorBySlug(params?.slug);
  if (!doctor) return {};

  const title = doctor.seo?.title || `${doctor.name} | Rehabana`;
  const description = doctor.seo?.description || doctor.lead || "";
  const url = getDoctorUrl(doctor);
  const image = doctor.seo?.image || doctor.image?.url;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default DoctorPage;
