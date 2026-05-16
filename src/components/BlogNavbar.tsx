import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/573508804049";

export function BlogNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-[clamp(2rem,5vw,3rem)] flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-1 shrink-0">
          <span className="font-display font-bold text-3xl tracking-tight">
            <span className="text-[#00C2FF]">Z</span>enter<span className="text-[#00C2FF]">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold border border-white/20 text-foreground/80 hover:border-white/40 hover:text-white transition-all duration-200"
          >
            Ir a la Web
          </Link>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md shadow-[0_0_15px_rgba(0,194,255,0.3)] hover:shadow-[0_0_20px_rgba(0,194,255,0.5)] transition-all"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
