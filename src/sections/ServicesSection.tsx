import React from "react";
import { motion } from "framer-motion";
import { Wrench, Server, Monitor, Layers } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soporte técnico especializado",
    description: "Diagnóstico y solución de problemas técnicos con enfoque profesional y especializado."
  },
  {
    icon: Server,
    title: "Infraestructura tecnológica",
    description: "Diseño y optimización de infraestructura tecnológica para operaciones estables y eficientes."
  },
  {
    icon: Monitor,
    title: "Setups & Workstations",
    description: "Construcción y optimización de equipos profesionales de alto rendimiento."
  },
  {
    icon: Layers,
    title: "Fabricación & Desarrollo",
    description: "Desarrollo de soluciones técnicas y fabricación personalizada mediante tecnologías modernas."
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-[#161B22] overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-[#00C2FF] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
            Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Soluciones tecnológicas especializadas.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Ofrecemos servicios diseñados para mantener su infraestructura tecnológica en óptimas condiciones.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253240] shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,194,255,0.15)]"
            >
              <div className="w-14 h-14 rounded-lg bg-[#00C2FF]/10 flex items-center justify-center mb-6 border border-[#00C2FF]/20 group-hover:bg-[#00C2FF]/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#00C2FF]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-[#9CA3AF] font-sans text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
