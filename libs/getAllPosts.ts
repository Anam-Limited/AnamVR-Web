import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMeta {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  content: string;
}

export function getAllPosts(): BlogMeta[] {
  const blogDir = path.join(process.cwd(), "content/blogs");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const slug = file.replace(".md", "");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      slug,
      content,
    } as BlogMeta;
  });

  return posts;
}
