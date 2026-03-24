import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogCategory =
  | "dental"
  | "web-design"
  | "ai"
  | "growth"
  | "seo"
  | "business";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  authorImage: string;
  category: BlogCategory;
  tags: string[];
  image?: string;
  readingTime: number;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      updated: data.updated as string | undefined,
      author: (data.author as string) || "Erik Pearson",
      authorImage:
        (data.authorImage as string) || "/images/erik-pearson-founder.png",
      category: data.category as BlogCategory,
      tags: (data.tags as string[]) || [],
      image: data.image as string | undefined,
      readingTime: calculateReadingTime(content),
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    updated: data.updated as string | undefined,
    author: (data.author as string) || "Erik Pearson",
    authorImage:
      (data.authorImage as string) || "/images/erik-pearson-founder.png",
    category: data.category as BlogCategory,
    tags: (data.tags as string[]) || [],
    image: data.image as string | undefined,
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  const all = getAllPosts().filter((p) => p.slug !== currentSlug);

  const scored = all.map((post) => {
    let score = 0;
    if (post.category === current.category) score += 3;
    score += post.tags.filter((t) => current.tags.includes(t)).length;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getAllCategories(): BlogCategory[] {
  return ["dental", "web-design", "ai", "growth", "seo", "business"];
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  dental: "Dental",
  "web-design": "Web Design",
  ai: "AI",
  growth: "Growth",
  seo: "SEO",
  business: "Business",
};

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
