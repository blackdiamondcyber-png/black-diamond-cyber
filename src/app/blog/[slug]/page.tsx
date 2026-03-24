import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
  CATEGORY_LABELS,
} from "@/lib/blog";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Black Diamond Cyber`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://bd-cyber.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: `https://bd-cyber.com/blog/${slug}` },
  };
}

function ShareButtons({ url, title }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,.06)",
          color: "#7E8396",
          fontSize: ".85rem",
          textDecoration: "none",
          transition: "color .2s, border-color .2s",
        }}
      >
        Share on X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,.06)",
          color: "#7E8396",
          fontSize: ".85rem",
          textDecoration: "none",
          transition: "color .2s, border-color .2s",
        }}
      >
        Share on LinkedIn
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,.06)",
          color: "#7E8396",
          fontSize: ".85rem",
          textDecoration: "none",
          transition: "color .2s, border-color .2s",
        }}
      >
        Share on Facebook
      </a>
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const postUrl = `https://bd-cyber.com/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    url: postUrl,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://bd-cyber.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Black Diamond Cyber",
      url: "https://bd-cyber.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bd-cyber.com/apple-touch-icon.png",
      },
    },
    image: `https://bd-cyber.com/api/og?title=${encodeURIComponent(post.title)}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main style={{ paddingTop: "120px", minHeight: "100dvh" }}>
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* Breadcrumb */}
          <div
            className="rv"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              fontSize: ".85rem",
            }}
          >
            <Link
              href="/blog"
              style={{ color: "#7E8396", textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ color: "#474C5E" }}>/</span>
            <span style={{ color: "#5DC4E8" }}>
              {CATEGORY_LABELS[post.category]}
            </span>
          </div>

          {/* Header */}
          <header className="rv" style={{ marginBottom: "48px" }}>
            <span
              style={{
                fontSize: ".75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "#5DC4E8",
                background: "rgba(93,196,232,.08)",
                padding: "4px 10px",
                borderRadius: "6px",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              {CATEGORY_LABELS[post.category]}
            </span>

            <h1
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
                color: "#DEE0E7",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                color: "#7E8396",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {post.description}
            </p>

            {/* Author + Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <p
                    style={{
                      fontSize: ".9rem",
                      color: "#DEE0E7",
                      fontWeight: 500,
                    }}
                  >
                    {post.author}
                  </p>
                  <p style={{ fontSize: ".8rem", color: "#7E8396" }}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    &middot; {post.readingTime} min read
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(40,135,204,.2), transparent)",
              marginBottom: "48px",
            }}
          />

          {/* MDX Content */}
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "48px",
              marginBottom: "32px",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: ".8rem",
                  color: "#7E8396",
                  background: "rgba(255,255,255,.03)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,.04)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.04)",
              paddingTop: "24px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                color: "#7E8396",
                fontSize: ".85rem",
                marginBottom: "12px",
              }}
            >
              Share this article
            </p>
            <ShareButtons url={postUrl} title={post.title} />
          </div>

          {/* Author Box */}
          <div
            style={{
              background: "rgba(12,15,22,.8)",
              border: "1px solid rgba(255,255,255,.04)",
              borderRadius: "16px",
              padding: "28px",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              marginBottom: "64px",
            }}
          >
            <Image
              src={post.authorImage}
              alt={post.author}
              width={64}
              height={64}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontWeight: 600,
                  color: "#DEE0E7",
                  fontSize: "1rem",
                  marginBottom: "6px",
                }}
              >
                {post.author}
              </p>
              <p
                style={{
                  color: "#7E8396",
                  fontSize: ".9rem",
                  lineHeight: 1.6,
                }}
              >
                Founder of Black Diamond Cyber. Former enterprise sales rep
                turned AI-powered web design specialist. Builds premium websites
                and growth systems for local service businesses.
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 24px 80px",
            }}
          >
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(40,135,204,.15), transparent)",
                marginBottom: "48px",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "#DEE0E7",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              Related Articles
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  style={{
                    display: "block",
                    background: "rgba(12,15,22,.8)",
                    border: "1px solid rgba(255,255,255,.04)",
                    borderRadius: "16px",
                    padding: "24px",
                    textDecoration: "none",
                    transition: "border-color .3s",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      color: "#5DC4E8",
                    }}
                  >
                    {CATEGORY_LABELS[rp.category]}
                  </span>
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "#DEE0E7",
                      lineHeight: 1.35,
                      marginTop: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {rp.title}
                  </h3>
                  <p style={{ fontSize: ".85rem", color: "#7E8396" }}>
                    {rp.readingTime} min read
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "48px 24px 80px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#DEE0E7",
              marginBottom: "12px",
            }}
          >
            Ready to Upgrade Your Website?
          </h2>
          <p
            style={{
              color: "#7E8396",
              marginBottom: "24px",
              lineHeight: 1.6,
            }}
          >
            Get a free audit and see exactly where your current site is losing
            customers.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/free-audit"
              className="bp"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Free Website Audit
            </Link>
            <Link
              href="/#book"
              className="bs"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book a Strategy Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
