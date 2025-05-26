import React, { useState, useEffect } from "react";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import matter from "gray-matter";
import { Buffer } from "buffer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
(window as any).Buffer = Buffer;

interface BlogMeta {
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

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogMeta[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const headerAnimation = useScrollAnimation();
  const filterAnimation = useScrollAnimation({ threshold: 0.2 });
  const gridAnimation = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const fetchPosts = async () => {
      const files = [
        "new-year-new-me.md",
        "feel-your-feelings.md",
        "mens-mental-health.md",
        "exploring-virtual-reality.md",
      ];
      const posts: BlogMeta[] = [];

      for (const file of files) {
        try {
          // Use correct fetch path for public/blogs/
          const res = await fetch(`/blogs/${file}`);
          if (!res.ok) {
            console.error(`Failed to fetch ${file}`, res.statusText);
            continue;
          }
          const raw = await res.text();
          const { data, content } = matter(raw);
          console.log("Loaded post:", data.title);
          posts.push({
            ...(data as Omit<BlogMeta, "slug" | "content">),
            content,
            slug: file.replace(".md", ""),
          });
        } catch (err) {
          console.error(`Error loading blog ${file}:`, err);
        }
      }

      setAllPosts(posts);
    };

    fetchPosts();
  }, []);

  const featuredPost = allPosts.length > 0 ? allPosts[0] : null;
  const remainingPosts = allPosts.length > 1 ? allPosts.slice(1) : [];

  const categories = [
    "All",
    ...Array.from(new Set(allPosts.map((post) => post.category))),
  ];

  const filteredPosts = remainingPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <section className="w-full min-h-[860px] pt-44 pb-20 px-16 mb-16 bg-gradient-to-br from-[#bcdbeb] to-[#eacfff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-start">
            <h1
              ref={headerAnimation.ref}
              className={`text-4xl md:text-5xl font-bold text-black mb-4 transition-opacity duration-700 ${
                headerAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              AnamVR Blog
            </h1>
          </div>
          {featuredPost && (
            <div
              ref={headerAnimation.ref}
              className={`mb-0 transform transition-all duration-700 ${
                headerAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-6">
                <span className="text-sm uppercase font-semibold text-black">
                  Featured Article
                </span>
              </div>
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden md:grid md:grid-cols-2 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handlePostClick(featuredPost.slug)}
              >
                <div className="md:order-2">
                  <img
                    src={featuredPost.image || "/placeholder.jpg"}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#eacfff] text-[#7745b8] text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={14} className="mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-[#7745b8] font-semibold hover:underline">
                      Read article <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="w-full px-6 pb-12 bg-white rounded-xl mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <h2 className="px-4 text-2xl font-semibold text-black">
              All Articles
            </h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <div
            ref={filterAnimation.ref}
            className={`mb-12 flex flex-col md:flex-row gap-4 items-center justify-between transition-opacity duration-700 ${
              filterAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-[#7745b8] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div
            ref={gridAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ${
              gridAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {sortedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePostClick(post.slug)}
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block bg-[#eacfff] text-[#7745b8] text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime} read
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {sortedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">
                No articles found matching your criteria.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-[#7745b8] text-white rounded-md hover:bg-[#6639a0] transition-colors"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
