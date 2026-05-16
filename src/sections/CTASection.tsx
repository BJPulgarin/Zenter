import React from "react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-32 bg-[#0B0F14] overflow-hidden flex items-center justify-center">
      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,194,255,0.07) 0%, transparent 70%)" }}></div>
      
      <div className="container relative z-10 px-10 md:px-12 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-[#00C2FF] uppercase tracking-[0.2em] font-medium text-xs md:text-sm mb-6">
            ¿Listo para empezar?
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            ¿Necesitas soporte especializado o infraestructura tecnológica?
          </h2>
          
          <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Contáctanos y cuéntanos sobre tu proyecto.
          </p>
          
          <a
            href="https://wa.me/573508804049"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00C2FF] text-[#0B0F14] font-semibold px-8 py-4 rounded-xl hover:bg-[#2D9CDB] transition-all duration-300 hover:scale-105"
          >
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
