import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
      {/* CSS-only Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Radial Glow */}
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #F5F7FA 1px, transparent 1px), linear-gradient(to bottom, #F5F7FA 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 60% at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at center, black 40%, transparent 100%)'
          }}
        />
        
        {/* Recommended Image Placeholder */}
        {/* <img src="/assets/images/hero-bg.jpg" alt="Server Room" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" /> */}
      </div>

      <div className="container relative z-10 px-10 md:px-12 mx-auto text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            <span className="block">Infraestructura tecnológica y</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              soporte especializado.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
            Ayudamos a personas y negocios a mantener sus sistemas funcionando con estabilidad, rendimiento y soporte técnico real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/573508804049"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center px-8 h-12 rounded-md text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(0,194,255,0.3)] hover:shadow-[0_0_25px_rgba(0,194,255,0.5)] transition-all duration-200"
          >
            Contactar por WhatsApp
          </a>

          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer inline-flex items-center justify-center px-8 h-12 rounded-md text-base font-semibold border border-white/20 text-foreground/80 hover:border-[#00C2FF]/50 hover:text-white transition-all duration-200"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </section>
  );
}
