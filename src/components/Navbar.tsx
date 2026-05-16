import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Especialidades", href: "#especialidades" },
  { name: "Proyectos", href: "#proyectos" },
];

const BLOG_URL = "/blog";
const WHATSAPP_URL = "https://wa.me/573508804049";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
        {/* Logo — left */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 shrink-0"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="font-display font-bold text-3xl tracking-tight">
            <span className="text-[#00C2FF]">Z</span>enter<span className="text-[#00C2FF]">.</span>
          </span>
        </Link>

        {/* Desktop Nav — middle, equal gap on both sides */}
        <nav className="hidden min-[1031px]:flex items-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button block — right */}
        <div className="hidden min-[1031px]:flex items-center gap-3">
          <Link
            href={BLOG_URL}
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold border border-white/20 text-foreground/80 hover:border-white/40 hover:text-white transition-all duration-200"
          >
            Blog
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

        {/* Mobile Toggle */}
        <button
          className="max-[1030px]:block hidden text-foreground z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 bg-background/95 backdrop-blur-xl border-b border-white/10 p-10 flex flex-col gap-6 hidden max-[1030px]:flex shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary block transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href={BLOG_URL}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold border border-white/20 text-foreground/80 hover:border-white/40 hover:text-white transition-all duration-200 w-full"
              >
                Ir al Blog
              </Link>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md w-full"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
