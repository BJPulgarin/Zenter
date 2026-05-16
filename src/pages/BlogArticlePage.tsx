import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import { articles, ArticleContentBlock } from "@/data/articles";
import { BlogNavbar } from "@/components/BlogNavbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();

  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const contentBlocks: ArticleContentBlock[] = article?.contentBlocks?.length
    ? article.contentBlocks
    : article?.content
    ? article.content.split("\n\n").map((paragraph) => ({ type: "paragraph", text: paragraph }))
    : [];

  if (!article) {
    setLocation("/blog");
    return null;
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans">
      <BlogNavbar />
      <main className="flex-1">
        {/* Article Hero */}
        <section className="pt-32 pb-24 bg-[#0B0F14]">
          <div className="container px-10 md:px-12 mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-[#00C2FF] hover:underline text-sm mb-8 font-medium">
              ← Volver al blog
            </Link>
            
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1F2933] border border-white/10 text-xs font-sans text-gray-300">
                {article.category}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F5F7FA] leading-tight mb-6 max-w-3xl">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 font-sans">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-gray-700">•</span>
              <span>{article.publishedAt}</span>
            </div>

            <div className="mt-10 rounded-xl overflow-hidden border border-white/5 bg-[#161B22]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full max-h-[480px] object-cover opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-[#161B22]">
          <div className="container px-10 md:px-12 mx-auto max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {contentBlocks.map((block, idx) => {
                switch (block.type) {
                  case "heading":
                    return block.level === 2 ? (
                      <h2 key={idx} className="mt-10 mb-4 font-display text-3xl text-[#F5F7FA]">
                        {block.text}
                      </h2>
                    ) : (
                      <h3 key={idx} className="mt-10 mb-4 font-display text-2xl text-[#F5F7FA]">
                        {block.text}
                      </h3>
                    );
                  case "paragraph":
                    return (
                      <p key={idx} className="font-sans text-gray-300 text-lg leading-relaxed mb-6">
                        {block.text}
                      </p>
                    );
                  case "quote":
                    return (
                      <blockquote key={idx} className="mb-8 border-l-4 border-[#00C2FF] pl-5 italic text-gray-200">
                        {block.text}
                        {block.footer ? <span className="block mt-3 text-sm text-gray-400">{block.footer}</span> : null}
                      </blockquote>
                    );
                  case "image":
                    return (
                      <figure key={idx} className="mb-10 rounded-3xl overflow-hidden border border-white/10 bg-[#111827]">
                        <img src={block.src} alt={block.alt} className="w-full object-cover" />
                        {block.caption ? (
                          <figcaption className="px-4 py-3 text-sm text-gray-400 bg-[#0B0F14]">
                            {block.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    );
                  case "divider":
                    return <hr key={idx} className="my-10 border-t border-white/10" />;
                  default:
                    return null;
                }
              })}
            </div>

            <hr className="border-t border-white/10 mt-12 mb-10" />

            {/* CTA Block */}
            <div className="bg-[#1F2933] border border-white/5 rounded-xl p-8 text-center flex flex-col items-center">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                ¿Necesitas soporte técnico especializado?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Contáctanos y cuéntanos tu caso.
              </p>
              <Button
                asChild
                className="bg-[#00C2FF] hover:bg-[#00C2FF]/90 text-gray-900 font-semibold rounded-md px-8 shadow-[0_0_15px_rgba(0,194,255,0.3)] hover:shadow-[0_0_20px_rgba(0,194,255,0.5)] transition-all"
              >
                <a href="https://wa.me/573508804049" target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#0B0F14]">
          <div className="container px-10 md:px-12 mx-auto max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F5F7FA] mb-10 text-center">
              Artículos relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedArticles.map((relArticle) => (
                <Link key={relArticle.slug} href={`/blog/${relArticle.slug}`}>
                  <div className="group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,194,255,0.08)] flex flex-col h-full cursor-pointer">
                    {/* Image */}
                    <div className="relative h-[200px] bg-[#161B22] border-b border-[#00C2FF]/10 overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent mix-blend-overlay" />
                      <img
                        src={relArticle.image}
                        alt={relArticle.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0B0F14]/80 backdrop-blur border border-white/10 text-[10px] font-sans text-gray-400">
                          {relArticle.category}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans mb-3">
                        <Clock className="w-3 h-3" />
                        <span>{relArticle.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#00C2FF] transition-colors duration-300 line-clamp-2">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-sans mb-5 line-clamp-2 flex-grow">
                        {relArticle.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-1 text-[#00C2FF] text-sm font-medium group-hover:gap-2 transition-all duration-200">
                        Leer artículo <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer hideNavigation />
    </div>
  );
}
