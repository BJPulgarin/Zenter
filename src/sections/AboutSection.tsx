import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/3] bg-[#1F2933] border border-white/5 rounded-xl ring-1 ring-[#00C2FF]/10 overflow-hidden shadow-2xl">
              {/* ABOUT IMAGE — /assets/images/about-workstation.jpg — Recommended: 1120x840 */}
              <img src="/assets/images/about-workstation.jpg" alt="Workstation Setup Zenter Colombia" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2FF]/10 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="text-[#00C2FF] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                Sobre Nosotros
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
                Más allá de reparar equipos.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground font-sans">
              <p>
                Zenter Colombia es una empresa especializada en soporte técnico avanzado, infraestructura tecnológica y soluciones digitales para personas y negocios que dependen de la tecnología para operar.
              </p>
              <p>
                Nuestro enfoque va más allá de la reparación de equipos. Buscamos optimizar, estabilizar y garantizar el máximo rendimiento de cada entorno tecnológico, asegurando continuidad, eficiencia y escalabilidad.
              </p>
              <p>
                Trabajamos con setups profesionales, estaciones de trabajo de alto rendimiento, entornos de streaming, redes, mantenimiento especializado y soluciones tecnológicas modernas adaptadas a cada necesidad.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
