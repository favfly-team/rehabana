import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { asText, asHTML } from "@prismicio/client";
import Seo from "@/lib/seo/Seo";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog-post";
import Log from "@/components/log";
const CustomPage = async ({ params }) => {
  const client = createClient();

  const servicePage = await client
    .getByUID("service_page", params.slug)
    .catch(() => null);

  const blogPost = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [service, blog] = await Promise.all([servicePage, blogPost]);

  if (service === null && blog === null) {
    notFound();
  }

  // Handle service page
  if (service) {
    return (
      <>
        <Log data={service.data} />
        <SliceZone slices={service.data.slices} components={components} />
      </>
    );
  }

  // Handle blog post
  if (blog) {
    // Render slices content as HTML
    const slicesContent = blog.data.slices
      .map((slice) => {
        if (slice.slice_type === "blog_post_content") {
          return slice.primary.items
            .map((item) => {
              let html = "";
              if (item.details) {
                html += asHTML(item.details);
              }
              if (item.image?.url) {
                html += `<img src="${item.image.url}" alt="${item.image.alt || ""}" />`;
              }
              return html;
            })
            .join("");
        }
        return "";
      })
      .join("");

    const formattedDate = blog.data.published_date
      ? new Date(blog.data.published_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

    return (
      <>
        <BlogPost
          date={formattedDate}
          title={asText(blog.data.title)}
          heroImage={blog.data.image?.url}
          content={slicesContent}
          shareUrl={blog.url}
          shareTitle={asText(blog.data.title)}
          shareDescription={asText(blog.data.description) || undefined}
          shareImage={blog.data.image?.url}
        />
      </>
    );
  }
};

export async function generateStaticParams() {
  const client = createClient();

  const servicePages = await client.getAllByType("service_page");
  const blogPosts = await client.getAllByType("blog_post");

  const [services, blogs] = await Promise.all([servicePages, blogPosts]);

  const docs = [...services, ...blogs];

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const servicePage = await client
    .getByUID("service_page", params.slug)
    .catch(() => null);

  const blogPost = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [service, blog] = await Promise.all([servicePage, blogPost]);

  if (service === null && blog === null) {
    notFound();
  }

  const page = service || blog;

  return Seo(page);
}

export default CustomPage;
