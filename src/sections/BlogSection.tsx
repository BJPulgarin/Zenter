import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { articles } from "../data/articles";

const BLOG_URL = "/blog";

const previewArticles = articles.slice(0, 3);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 bg-[#0B0F14] overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
            Blog
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F7FA] leading-[1.1] mb-6">
            Conocimiento técnico especializado.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Artículos y guías sobre infraestructura, optimización y soporte técnico especializado.
          </p>
        </motion.div>

        {/* 3-card preview grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14"
        >
          {previewArticles.map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`}>
              <motion.div
                variants={cardVariants}
                className="group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,194,255,0.08)] flex flex-col h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[200px] bg-[#161B22] border-b border-[#00C2FF]/10 overflow-hidden">
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

        {/* CTA — go to full blog */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href={BLOG_URL}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/15 text-[#F5F7FA] hover:border-[#00C2FF]/50 hover:text-[#00C2FF] hover:shadow-[0_0_20px_rgba(0,194,255,0.08)] transition-all duration-300"
          >
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
