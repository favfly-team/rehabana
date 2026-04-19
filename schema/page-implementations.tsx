// =============================================================================
// PAGE-LEVEL SCHEMA IMPLEMENTATIONS
// Copy the relevant schema into each page's layout.tsx or page.tsx
// =============================================================================

// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx — ROOT LAYOUT (site-wide schemas)
// ─────────────────────────────────────────────────────────────────────────────
// These schemas load on EVERY page across the entire site.

import SchemaMarkup from "@/components/SchemaMarkup";
import {
  organizationSchema,
  websiteSchema,
  saltlakeLocationSchema,
  kalighatLocationSchema,
} from "@/lib/schema-data";

// Inside your RootLayout component's <body> or <head>:
// <SchemaMarkup data={[
//   organizationSchema,
//   websiteSchema,
//   saltlakeLocationSchema,
//   kalighatLocationSchema,
// ]} />

// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx — HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────

import {
  homepageFaqSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema-data";

export default function HomePage() {
  const homeBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
  ]);

  const homeWebPage = generateWebPageSchema({
    name: "Best Neuro Rehabilitation Centre in Kolkata | Rehabana",
    description:
      "Rehabana is a PMR MD doctor-led Neuro Rehabilitation Center in Kolkata for stroke, spinal cord injury, Parkinson's and more.",
    url: "https://rehabana.com",
  });

  return (
    <>
      <SchemaMarkup
        data={[homeBreadcrumb, homeWebPage, homepageFaqSchema]}
      />
      {/* ...rest of page */}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/about/page.tsx — ABOUT PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function AboutPage() {
  const aboutBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "About", url: "https://rehabana.com/about" },
  ]);

  const aboutWebPage = generateWebPageSchema({
    name: "About Rehabana | Neuro Rehabilitation Center",
    description:
      "Rehabana is East India's first dedicated neuro rehabilitation center in Kolkata, delivering doctor-led, technology-enabled recovery programs.",
    url: "https://rehabana.com/about",
  });

  return (
    <>
      <SchemaMarkup data={[aboutBreadcrumb, aboutWebPage]} />
      {/* ...rest of page */}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/services/page.tsx — SERVICES LISTING PAGE
// ─────────────────────────────────────────────────────────────────────────────

import { servicesListSchema } from "@/lib/schema-data";

export function ServicesPage() {
  const servicesBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Services", url: "https://rehabana.com/services" },
  ]);

  const servicesWebPage = generateWebPageSchema({
    name: "Doctor-Led Neuro Rehabilitation Services in Kolkata | Rehabana",
    description:
      "Explore advanced, doctor-led neuro rehabilitation services in Kolkata at Rehabana. Stroke, spinal cord injury, Parkinson's & brain injury rehab.",
    url: "https://rehabana.com/services",
  });

  return (
    <>
      <SchemaMarkup
        data={[servicesBreadcrumb, servicesWebPage, servicesListSchema]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INDIVIDUAL SERVICE PAGES — Example for each service route
// ─────────────────────────────────────────────────────────────────────────────
// Use generateMedicalServiceSchema() for each service page.
// Below is one example; repeat the pattern for all 17 service pages.

import { generateMedicalServiceSchema, services } from "@/lib/schema-data";

// app/occupational-therapy-in-kolkata/page.tsx
export function OccupationalTherapyPage() {
  const service = services.find(
    (s) => s.url === "https://rehabana.com/occupational-therapy-in-kolkata"
  )!;

  const serviceBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Services", url: "https://rehabana.com/services" },
    { name: service.name, url: service.url },
  ]);

  const serviceSchema = generateMedicalServiceSchema(service);

  const serviceWebPage = generateWebPageSchema({
    name: `${service.name} in Kolkata | Rehabana`,
    description: service.description,
    url: service.url,
  });

  return (
    <>
      <SchemaMarkup
        data={[serviceBreadcrumb, serviceWebPage, serviceSchema]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/team/page.tsx — TEAM PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function TeamPage() {
  const teamBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Team", url: "https://rehabana.com/team" },
  ]);

  const teamWebPage = generateWebPageSchema({
    name: "Our Team | Rehabana Neuro Rehabilitation Center",
    description:
      "Meet the expert doctors, physiotherapists, occupational therapists, speech therapists, and care staff at Rehabana, Kolkata.",
    url: "https://rehabana.com/team",
  });

  return (
    <>
      <SchemaMarkup data={[teamBreadcrumb, teamWebPage]} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/contact/page.tsx — CONTACT PAGE
// ─────────────────────────────────────────────────────────────────────────────

import { contactPageSchema } from "@/lib/schema-data";

export function ContactPage() {
  const contactBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Contact", url: "https://rehabana.com/contact" },
  ]);

  return (
    <>
      <SchemaMarkup data={[contactBreadcrumb, contactPageSchema]} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/testimonials/page.tsx — TESTIMONIALS PAGE
// ─────────────────────────────────────────────────────────────────────────────

import { aggregateRatingSchema } from "@/lib/schema-data";

export function TestimonialsPage() {
  const testimonialsBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Testimonials", url: "https://rehabana.com/testimonials" },
  ]);

  const testimonialsWebPage = generateWebPageSchema({
    name: "Patient Testimonials | Rehabana Neuro Rehabilitation Center",
    description:
      "Real recovery stories from patients and families at Rehabana. Hear about meaningful rehabilitation experiences and outcomes.",
    url: "https://rehabana.com/testimonials",
  });

  return (
    <>
      <SchemaMarkup
        data={[
          testimonialsBreadcrumb,
          testimonialsWebPage,
          aggregateRatingSchema,
        ]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/gallery/page.tsx — GALLERY PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function GalleryPage() {
  const galleryBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Gallery", url: "https://rehabana.com/gallery" },
  ]);

  const galleryWebPage = generateWebPageSchema({
    name: "Gallery | Rehabana Neuro Rehabilitation Center Kolkata",
    description:
      "View photos of Rehabana's advanced therapy equipment, rehabilitation spaces, and patient sessions at our Salt Lake and Kalighat centres.",
    url: "https://rehabana.com/gallery",
  });

  return (
    <>
      <SchemaMarkup data={[galleryBreadcrumb, galleryWebPage]} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/blog/page.tsx — BLOG LISTING PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function BlogPage() {
  const blogBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Blog", url: "https://rehabana.com/blog" },
  ]);

  const blogWebPage = generateWebPageSchema({
    name: "Neuro Rehab Blogs & Recovery Insights | Rehabana",
    description:
      "Expert neuro rehabilitation tips from doctors at Rehabana, Kolkata — guidance on stroke recovery, spinal cord injury rehab, Parkinson's care.",
    url: "https://rehabana.com/blog",
  });

  return (
    <>
      <SchemaMarkup data={[blogBreadcrumb, blogWebPage]} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/blog/[slug]/page.tsx — INDIVIDUAL BLOG POST
// ─────────────────────────────────────────────────────────────────────────────
// Use generateArticleSchema() dynamically with your CMS/Prismic data.

import { generateArticleSchema } from "@/lib/schema-data";

export function BlogPostPage({
  post,
}: {
  post: {
    title: string;
    description: string;
    slug: string;
    image: string;
    datePublished: string;
    dateModified?: string;
  };
}) {
  const postUrl = `https://rehabana.com/${post.slug}`;

  const articleBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Blog", url: "https://rehabana.com/blog" },
    { name: post.title, url: postUrl },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    url: postUrl,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  return (
    <>
      <SchemaMarkup data={[articleBreadcrumb, articleSchema]} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// app/privacy-policy/page.tsx & app/terms-conditions/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export function PrivacyPolicyPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Privacy Policy", url: "https://rehabana.com/privacy-policy" },
  ]);

  return <SchemaMarkup data={[breadcrumb]} />;
}

export function TermsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    {
      name: "Terms & Conditions",
      url: "https://rehabana.com/terms-conditions",
    },
  ]);

  return <SchemaMarkup data={[breadcrumb]} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// app/our-vision/page.tsx — VISION PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function OurVisionPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rehabana.com" },
    { name: "Our Vision", url: "https://rehabana.com/our-vision" },
  ]);

  const visionWebPage = generateWebPageSchema({
    name: "Our Vision | Rehabana Neuro Rehabilitation Center",
    description:
      "Discover Rehabana's vision for advancing neuro rehabilitation in Eastern India through doctor-led care, technology, and compassion.",
    url: "https://rehabana.com/our-vision",
  });

  return (
    <>
      <SchemaMarkup data={[breadcrumb, visionWebPage]} />
    </>
  );
}
