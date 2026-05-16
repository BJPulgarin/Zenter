import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { BlogNavbar } from "@/components/BlogNavbar";
import { Footer } from "@/components/Footer";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function BlogListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans">
      <BlogNavbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative pt-28 pb-24 bg-[#0B0F14] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2FF]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container px-10 md:px-12 mx-auto max-w-4xl text-center relative z-10">
            <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
              Blog
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F5F7FA] leading-[1.1] mb-6">
              Conocimiento técnico.
            </h1>
            <p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
              Artículos y guías especializadas sobre infraestructura, hardware y soporte técnico.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-[#161B22]">
          <div className="container px-10 md:px-12 mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {articles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <motion.div
                    variants={cardVariants}
                    className="group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,194,255,0.08)] flex flex-col h-full cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-[200px] bg-[#161B22] border-b border-[#00C2FF]/10 overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent mix-blend-overlay" />
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                      />
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0B0F14]/80 backdrop-blur border border-white/10 text-[10px] font-sans text-gray-400">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans mb-3">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#00C2FF] transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-sans mb-5 line-clamp-2 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-1 text-[#00C2FF] text-sm font-medium group-hover:gap-2 transition-all duration-200">
                        Leer artículo <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer hideNavigation />
    </div>
  );
}
