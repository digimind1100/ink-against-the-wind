import React from "react";
import Navbar from "../Navbar";

  
const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Stories Matter in Difficult Times",
    excerpt:
      "Stories preserve memory, challenge silence, and give meaning to chaos. In times of uncertainty, storytelling becomes an act of resistance.",
    category: "Essays & Reflections",
    date: "March 12, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Behind the Making of My Latest Book",
    excerpt:
      "Every book has a hidden journey — drafts rewritten, ideas abandoned, and truths slowly revealed through patience.",
    category: "Behind the Books",
    date: "February 28, 2025",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Writing Discipline vs Inspiration",
    excerpt:
      "Waiting for inspiration is a luxury. Discipline is what allows writers to show up even when words resist.",
    category: "Writing & Craft",
    date: "February 10, 2025",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Literature as Social Memory",
    excerpt:
      "Books often carry what societies choose to forget. Literature becomes a quiet archive of human experience.",
    category: "Society & Culture",
    date: "January 22, 2025",
    readTime: "7 min read",
  },
];

const Blog = () => {
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const otherPosts = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <main className="bg-black text-gray-200 pt-28 pb-20">
        <Navbar />
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            Notes, Essays & Reflections
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400">
            A space for ideas, writing insights, and thoughts beyond the books.
          </p>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-16">
            <span className="text-xs uppercase tracking-widest text-yellow-400">
              Featured Essay
            </span>
            <h2 className="text-2xl md:text-3xl font-serif mt-3 mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-400 mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span>{featuredPost.category}</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="flex gap-3 overflow-x-auto pb-6 mb-12">
          {[
            "All",
            "Writing & Craft",
            "Behind the Books",
            "Essays & Reflections",
            "Society & Culture",
          ].map((cat) => (
            <button
              key={cat}
              className="border border-gray-700 px-4 py-1.5 rounded-full text-sm whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-800 rounded-xl p-6 bg-gray-950 hover:border-gray-700 transition"
            >
              <span className="text-xs text-gray-500">
                {post.category}
              </span>
              <h3 className="text-xl font-serif mt-2 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </section>

        {/* Reflection */}
        <section className="max-w-3xl mx-auto text-center italic text-gray-400 mt-24">
          <p>
            I write to preserve voices, question silence, and document the unseen.
            Writing, for me, is not performance — it is responsibility.
          </p>
        </section>

        {/* Community */}
        <section className="mt-24 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-serif mb-3">
            Join the Conversation
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Thoughtful writing takes time. If these words resonate with you,
            feel free to follow along or write back.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Blog;
