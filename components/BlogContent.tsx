import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, Tag, ChevronLeft } from "lucide-react";
import matter from "gray-matter";

export interface BlogPost {
  id: string;
  url?: string; // make optional since Markdown doesn't provide this
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export default function BlogContent() {
  const { blogId } = useParams(); // Get the blogId from URL parameters
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/blogs/${blogId}.md`);
        const raw = await response.text();
        const { data, content } = matter(raw);

        setPost({ ...data, content } as BlogPost);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Blog post not found");
        setLoading(false);
      }
    };

    fetchPost();
  }, [blogId]);

  // Function to handle go back to blog list
  const handleBackToBlog = () => {
    navigate("/blog"); // Navigate back to the blog list page
  };

  if (loading) {
    return (
      <div className="w-full pt-44 pb-20 px-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full pt-44 pb-20 px-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! {error}
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find the blog post you're looking for.
          </p>
          <button
            onClick={handleBackToBlog}
            className="px-6 py-3 bg-[#7745b8] text-white rounded-md hover:bg-[#6639a0] transition-colors inline-flex items-center"
          >
            <ChevronLeft size={16} className="mr-2" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-[#111111]">
      <div className="max-w-5xl mx-auto px-6 py-40">
        <button
          onClick={handleBackToBlog}
          className="mb-8 text-sm text-gray-600 hover:underline flex items-center"
        >
          <ChevronLeft size={16} className="mr-1" /> All posts
        </button>

        <h1 className="text-4xl md:text-7xl font-medoum mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="mb-12 p-4 overflow-hidden border-2 rounded-3xl border-black/20">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        <div className="flex sm:flex-row justify-between text-sm text-gray-600 mb-12">
          <div>
            <p className="mb-1">Written by</p>
            <p className="font-medium">{post.author}</p>
          </div>
          <div>
            <p className="mb-1">Published on</p>
            <p className="font-medium">{post.date}</p>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-16 prose-headings:font-semibold prose-h3:mt-8 prose-ul:pl-6 prose-li:marker:text-[#7745b8]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags?.length > 0 && (
          <div className="border-t pt-8 mt-16">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#f05984] text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
