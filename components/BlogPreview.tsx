import { useState, useEffect } from "react";
import { ArrowRight, PenLine } from "lucide-react";
import matter from "gray-matter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  url: string;
  date: string;
}

export default function BlogPreview() {
  const animation = useScrollAnimation({ delay: 300 });
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const files = [
        "mens-mental-health.md",
        "exploring-virtual-reality.md",
        "stress-reduction-vr.md",
      ];

      const posts: BlogPost[] = [];

      for (const file of files) {
        const res = await fetch(`/blogs/${file}`);
        const raw = await res.text();
        const { data } = matter(raw);

        posts.push({
          id: file,
          title: data.title,
          readTime: data.readTime,
          date: data.date,
          url: `/blog/${file.replace(".md", "")}`,
        });
      }

      posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setRecentPosts(posts.slice(0, 2));
    };

    fetchPosts();
  }, []);

  return (
    <div
      ref={animation.ref}
      className={`col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-4 bg-purple-100 p-6 rounded-3xl shadow-sm h-full flex flex-col justify-between transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <div className="flex flex-col">
        <h3 className="flex items-center font-bold text-xl text-purple-900 mb-3">
          <PenLine size={18} className="text-purple-900 mr-2" />
          Latest from our blog
        </h3>
        <div className="space-y-3 mb-12">
          {recentPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="block hover:bg-purple-50 p-2 rounded-lg transition-colors"
            >
              <h4 className="font-medium text-purple-900 text-md">
                {post.title}
              </h4>
              <p className="text-sm text-purple-700">{post.readTime}</p>
            </a>
          ))}
        </div>
      </div>
      <a
        href="/blog"
        className="flex items-center text-purple-900 hover:text-purple-950 text-base font-semibold"
      >
        View all <ArrowRight size={16} className="ml-1 font-semibold" />
      </a>
    </div>
  );
}
