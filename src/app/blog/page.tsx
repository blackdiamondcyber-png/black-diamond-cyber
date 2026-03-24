import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BlogSearch } from "@/components/BlogSearch";

export const metadata: Metadata = {
  title: "Blog — Black Diamond Cyber | Web Design, AI & Growth Insights",
  description:
    "Actionable insights on AI-powered web design, local SEO, lead generation, and digital growth strategies for local businesses.",
  openGraph: {
    title: "Blog — Black Diamond Cyber",
    description:
      "Actionable insights on AI-powered web design, local SEO, and growth strategies.",
    url: "https://bd-cyber.com/blog",
    type: "website",
  },
  alternates: { canonical: "https://bd-cyber.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const serializedPosts = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    author: p.author,
    authorImage: p.authorImage,
    category: p.category,
    tags: p.tags,
    readingTime: p.readingTime,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Black Diamond Cyber Blog",
    description:
      "Insights on AI web design, local SEO, and growth for local businesses.",
    url: "https://bd-cyber.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Black Diamond Cyber",
      url: "https://bd-cyber.com",
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://bd-cyber.com/blog/${p.slug}`,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main style={{ paddingTop: "120px", minHeight: "100dvh" }}>
        {/* Header */}
        <section style={{ textAlign: "center", padding: "0 24px 64px" }}>
          <p
            className="rv"
            style={{
              fontFamily: "var(--font-instrument), serif",
              fontStyle: "italic",
              color: "#5DC4E8",
              fontSize: "1.1rem",
              marginBottom: "12px",
            }}
          >
            Content Machine
          </p>
          <h1
            className="rv"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#DEE0E7",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Insights That Drive{" "}
            <span style={{ color: "#2887CC" }}>Growth</span>
          </h1>
          <p
            className="rv"
            style={{
              color: "#7E8396",
              fontSize: "1.1rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Actionable strategies on AI-powered web design, local SEO, and
            digital growth for local businesses.
          </p>
        </section>

        {/* Categories + Search */}
        <BlogSearch categories={categories} posts={serializedPosts} />
      </main>

      <Footer />
    </>
  );
}
