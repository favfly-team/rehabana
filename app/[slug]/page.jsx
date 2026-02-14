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

  const blogPost = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [service, blog] = await Promise.all([servicePage, blogPost]);

  if (service === null && blog === null) {
    notFound();
  }

  // Same blogs section as home page: config + recent posts
  const blogsSection = await client.getSingle("blogs");
  const blogs = await client.getByType("blog_post", {
    orderings: {
      field: "my.blog_post.published_date",
      direction: "desc",
    },
    pageSize: 3,
  });

  // Handle service page
  if (service) {
    return (
      <>
        <SliceZoneWithContext
          slices={service.data.slices}
          components={components}
        />
        <BlogsSection
          slice={{ primary: blogsSection.data }}
          blogs={blogs.results}
        />
      </>
    );
  }

  if (blog) {
    return (
      <>
        <BlogPost data={blog.data} />
        <BlogsSection
          slice={{ primary: blogsSection.data }}
          blogs={blogs.results}
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
