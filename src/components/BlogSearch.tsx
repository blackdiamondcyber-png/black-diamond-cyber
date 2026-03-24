"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type BlogCategory =
  | "dental"
  | "web-design"
  | "ai"
  | "growth"
  | "seo"
  | "business";

export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage: string;
  category: BlogCategory;
  tags: string[];
  readingTime: number;
}

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  dental: "Dental",
  "web-design": "Web Design",
  ai: "AI",
  growth: "Growth",
  seo: "SEO",
  business: "Business",
};

function BlogPostCard({ post }: { post: BlogPostData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display: "block",
        background: "rgba(12,15,22,.8)",
        border: "1px solid rgba(255,255,255,.04)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color .3s, transform .3s",
        textDecoration: "none",
      }}
      className="blog-card"
    >
      <div style={{ padding: "28px 28px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
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
            }}
          >
            {CATEGORY_LABELS[post.category]}
          </span>
          <span style={{ fontSize: ".8rem", color: "#7E8396" }}>
            {post.readingTime} min read
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 600,
            fontSize: "1.25rem",
            color: "#DEE0E7",
            lineHeight: 1.35,
            marginBottom: "12px",
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            color: "#7E8396",
            fontSize: ".95rem",
            lineHeight: 1.6,
            marginBottom: "20px",
          }}
        >
          {post.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderTop: "1px solid rgba(255,255,255,.04)",
            paddingTop: "16px",
          }}
        >
          <Image
            src={post.authorImage}
            alt={post.author}
            width={36}
            height={36}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <p
              style={{
                fontSize: ".85rem",
                color: "#DEE0E7",
                fontWeight: 500,
              }}
            >
              {post.author}
            </p>
            <p style={{ fontSize: ".8rem", color: "#7E8396" }}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BlogSearch({
  categories,
  posts,
}: {
  categories: BlogCategory[];
  posts: BlogPostData[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all"
  );

  const filtered = posts.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      style={{
        padding: "0 24px 80px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Search */}
      <div
        className="rv"
        style={{
          marginBottom: "24px",
          maxWidth: "480px",
          margin: "0 auto 24px",
        }}
      >
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 20px",
            background: "rgba(12,15,22,.8)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: "12px",
            color: "#DEE0E7",
            fontSize: "1rem",
            fontFamily: "var(--font-outfit), sans-serif",
            outline: "none",
          }}
        />
      </div>

      {/* Category Filters */}
      <div
        className="rv"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        <button
          onClick={() => setActiveCategory("all")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            border: "1px solid",
            borderColor:
              activeCategory === "all"
                ? "#2887CC"
                : "rgba(255,255,255,.06)",
            background:
              activeCategory === "all"
                ? "rgba(40,135,204,.12)"
                : "transparent",
            color: activeCategory === "all" ? "#5DC4E8" : "#7E8396",
            fontSize: ".85rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all .2s",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              border: "1px solid",
              borderColor:
                activeCategory === cat
                  ? "#2887CC"
                  : "rgba(255,255,255,.06)",
              background:
                activeCategory === cat
                  ? "rgba(40,135,204,.12)"
                  : "transparent",
              color: activeCategory === cat ? "#5DC4E8" : "#7E8396",
              fontSize: ".85rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all .2s",
              fontFamily: "var(--font-outfit), sans-serif",
            }}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#7E8396",
            fontSize: "1.1rem",
            padding: "60px 0",
          }}
        >
          No articles found. Try a different search or category.
        </p>
      )}
    </section>
  );
}
