import type { BlogPostType } from "../data/index";
import { ArrowRight, PenLine } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface BlogPreviewProps {
  blogPosts: BlogPostType[];
}

export default function BlogPreview({ blogPosts }: BlogPreviewProps) {
  const animation = useScrollAnimation({ delay: 300 });

  return (
    <div
      ref={animation.ref}
      className={`md:col-span-3 lg:col-span-4 bg-purple-100 p-6 rounded-3xl shadow-sm h-full flex flex-col justify-between transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      {" "}
      <div className="flex flex-col">
        <h3 className="flex items-center font-bold text-xl text-purple-900 mb-3">
          <PenLine size={18} className="text-purple-900 mr-2" />
          Latest from our blog
        </h3>
        <div className="space-y-3 mb-12">
          {blogPosts.map((post) => (
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
      <button className="flex items-center text-purple-900 hover:text-purple-950 text-base font-semibold">
        View all <ArrowRight size={16} className="ml-1 font-semibold" />
      </button>
    </div>
  );
}
