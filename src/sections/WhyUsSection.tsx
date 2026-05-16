import React from "react";
import { motion } from "framer-motion";
import { Search, Cpu, User, Zap } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico real",
    description: "Analizamos problemas técnicos a profundidad para encontrar soluciones reales."
  },
  {
    number: "02",
    icon: Cpu,
    title: "Soporte especializado",
    description: "Enfoque técnico moderno orientado a estabilidad y rendimiento."
  },
  {
    number: "03",
    icon: User,
    title: "Atención personalizada",
    description: "Cada entorno tecnológico tiene necesidades diferentes."
  },
  {
    number: "04",
    icon: Zap,
    title: "Tecnología moderna",
    description: "Trabajamos con hardware moderno, infraestructura y soluciones actuales."
  }
];

export function WhyUsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#161B22] overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Compromiso técnico con cada proyecto.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253240] shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,194,255,0.15)] overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl md:text-7xl font-display font-bold text-[#00C2FF]/20 opacity-20 select-none pointer-events-none group-hover:text-[#00C2FF]/30 transition-colors duration-300">
                {reason.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00C2FF]/10 flex items-center justify-center mb-6 border border-[#00C2FF]/20 group-hover:bg-[#00C2FF]/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-[#00C2FF]" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#9CA3AF] font-sans text-base leading-relaxed max-w-[85%]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}