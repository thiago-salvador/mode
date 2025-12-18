import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Mode - MVP Development Insights & Startup Guides",
  description: "Learn how to build and launch MVPs faster. Expert insights on product development, startup validation, and the 2-week sprint methodology.",
  keywords: "MVP development, startup blog, product development, lean startup, agile development",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              The Mode Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights on MVP development, startup validation, and shipping products fast.
              Learn from 20+ real product launches.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">{post.category[0]}</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-heading text-xl font-bold mb-3 text-gray-900 group-hover:text-accentFrom transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-accentFrom font-semibold text-sm group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your MVP?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop reading. Start shipping. We&apos;ll build your MVP in 2 weeks.
          </p>
          <Link
            href="/#cta"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
