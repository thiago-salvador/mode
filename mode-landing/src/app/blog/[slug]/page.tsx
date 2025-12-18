import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Mode Blog`,
    description: post.description,
    keywords: post.category,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-heading text-4xl font-bold mt-12 mb-6 text-gray-900 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-heading text-3xl font-bold mt-10 mb-4 text-gray-900">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-heading text-2xl font-bold mt-8 mb-3 text-gray-900">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ol>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-gray-900">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-accentFrom hover:text-accentTo font-semibold underline transition-colors"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-accentFrom pl-4 italic text-gray-600 my-6">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                  {children}
                </code>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-16 mt-12">
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

      {/* More Articles */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl font-bold mb-8 text-gray-900">
          More from the blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {getAllBlogPosts()
            .filter((p) => p.slug !== post.slug)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-xs text-gray-500 mb-2">{relatedPost.category}</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-gray-900 group-hover:text-accentFrom transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {relatedPost.description}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
