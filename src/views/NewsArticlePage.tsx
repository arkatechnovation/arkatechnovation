'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Tag, ChevronRight, CheckCircle2 } from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { type BlogPost, getRelatedBlogs } from '@/lib/blogs';

export default function NewsArticlePage({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedBlogs(post.slug, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-[#B84E12] selection:text-white">
      {/* Top Navbar */}
      <PortfoliteNav />

      {/* Article Header & Breadcrumbs */}
      <header className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-zinc-200 bg-zinc-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#B84E12] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <Link href="/news" className="hover:text-[#B84E12] transition-colors">News & Blog</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-zinc-800 font-medium truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
          </div>

          {/* Category Pill & Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-4">
            <span className="px-3 py-1 rounded-full bg-[#FAF4EF] text-[#B84E12] font-semibold border border-[#E8742C]/25">
              {post.category}
            </span>
            <span className="text-zinc-500 flex items-center gap-1">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="text-zinc-500 flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09090B] leading-[1.12] mb-5">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author Strip */}
          <div className="mt-8 pt-6 border-t border-zinc-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-mono text-xs font-bold">
                {post.author.avatarInitials}
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">{post.author.name}</p>
                <p className="text-xs text-zinc-500 font-mono">{post.author.role}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-600 hover:text-black hover:border-zinc-300 transition-colors cursor-pointer"
            >
              <Share2 size={13} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="py-12 sm:py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Featured Image */}
        <figure className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-10">
          <img
            src={post.image}
            alt={post.alt}
            width={1200}
            height={750}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Key Takeaways Card */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/90">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B84E12] font-semibold mb-4">
              Key Insights & Strategic Takeaways
            </h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-800 leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#B84E12] mt-0.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Sections */}
        <article className="prose prose-zinc max-w-none space-y-10">
          {post.sections.map((section, idx) => (
            <section key={section.id || idx} id={section.id} className="space-y-4">
              {section.title && (
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] pt-4">
                  {section.title}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {section.callout && (
                <div className="p-5 sm:p-6 rounded-xl bg-[#FAF4EF] border-l-4 border-[#B84E12] my-6">
                  {section.callout.label && (
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B84E12] mb-1">
                      {section.callout.label}
                    </p>
                  )}
                  <p className="text-sm sm:text-base font-medium text-zinc-900 leading-snug">
                    {section.callout.text}
                  </p>
                </div>
              )}

              {section.bullets && (
                <ul className="space-y-2.5 my-4 pl-4 list-disc marker:text-[#B84E12]">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
            <Tag size={13} /> Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:text-[#B84E12] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-200">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#09090B] mb-8">
              Related Insights & Case Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group block p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-zinc-100 mb-3">
                    <img
                      src={rel.image}
                      alt={rel.alt}
                      width={360}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#B84E12] block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#B84E12] transition-colors line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Project CTA Banner */}
      <section className="py-14 bg-zinc-900 text-white border-t border-zinc-800 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8742C] font-semibold mb-1">
              Need technical execution?
            </p>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Let’s discuss your next software or SEO roadmap.
            </h3>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#E8742C] hover:bg-[#d66520] text-white text-xs font-mono font-semibold transition-all whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}

