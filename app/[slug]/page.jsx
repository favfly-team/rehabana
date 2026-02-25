import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZoneWithContext } from "@/lib/SliceZoneWithContext";
import Seo from "@/lib/seo/Seo";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog-post";
import BlogsSection from "@/components/blogs-section";

const CustomPage = async ({ params }) => {
  const client = createClient();

  const servicePage = await client
    .getByUID("service_page", params.slug)
    .catch(() => null);

  const customPage = await client
    .getByUID("custom_page", params.slug)
    .catch(() => null);

  const blogPost = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  const { results: blogs } = await client.getByType("blog_post", {
    orderings: {
      field: "my.blog_post.published_date",
      direction: "desc",
    },
    pageSize: 3,
  });

  // Wait for the promises to resolve
  const [service, custom, blog] = await Promise.all([
    servicePage,
    customPage,
    blogPost,
  ]);

  if (service === null && custom === null && blog === null) {
    notFound();
  }

  // Same blogs section as home page: config + recent posts
  const blogsSection = await client.getSingle("blogs");

  // Handle service page
  if (service) {
    return (
      <>
        <SliceZoneWithContext
          slices={service.data.slices}
          components={components}
          context={{ blogs, blogSlice: blogsSection.data }}
        />
        <BlogsSection slice={{ primary: blogsSection.data }} blogs={blogs} />
      </>
    );
  }

  if (custom) {
    return (
      <SliceZoneWithContext
        slices={custom.data.slices}
        components={components}
        context={{ blogs, blogSlice: blogsSection.data }}
      />
    );
  }

  if (blog) {
    return (
      <>
        <BlogPost data={blog.data} />
        <BlogsSection
          slice={{ primary: blogsSection.data }}
          context={{ blogs }}
        />
      </>
    );
  }
};

export async function generateStaticParams() {
  const client = createClient();

  const servicePages = await client.getAllByType("service_page");
  const blogPosts = await client.getAllByType("blog_post");
  const customPages = await client.getAllByType("custom_page");

  const [services, blogs, custom] = await Promise.all([
    servicePages,
    blogPosts,
    customPages,
  ]);

  const docs = [...services, ...blogs, ...custom];

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

  const customPage = await client
    .getByUID("custom_page", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [service, blog, custom] = await Promise.all([
    servicePage,
    blogPost,
    customPage,
  ]);

  if (service === null && blog === null && custom === null) {
    notFound();
  }

  const page = service || blog || custom;

  return Seo(page);
}

export default CustomPage;
