import type { BlogPostType } from "../data/index";

interface BlogPreviewProps {
  blogPosts: BlogPostType[];
}

export default function BlogPreview({ blogPosts }: BlogPreviewProps) {
  return (
    <div className="bg-purple-100 p-6 rounded-3xl shadow-sm h-full">
      <h3 className="font-bold text-xl text-purple-900 mb-3">
        Latest from our blog
      </h3>
      <div className="space-y-3">
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
  );
}
