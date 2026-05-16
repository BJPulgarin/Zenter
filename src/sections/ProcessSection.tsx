import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Analizamos el problema y el entorno tecnológico."
  },
  {
    number: "2",
    title: "Propuesta",
    description: "Definimos la mejor solución para estabilidad y rendimiento."
  },
  {
    number: "3",
    title: "Implementación",
    description: "Ejecutamos mejoras, mantenimiento o infraestructura."
  },
  {
    number: "4",
    title: "Seguimiento",
    description: "Verificamos estabilidad y funcionamiento."
  }
];

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
            Proceso
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Cómo trabajamos.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Un proceso claro, estructurado y orientado a resultados.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative justify-between items-start max-w-5xl mx-auto">
          {/* Connecting Line Base */}
          <div className="absolute top-6 left-[12%] right-[12%] h-[1px] bg-white/10" />
          
          {/* Animated Connecting Line */}
          <motion.div 
            className="absolute top-6 left-[12%] h-[1px] bg-[#00C2FF]/50" 
            initial={{ width: "0%" }}
            whileInView={{ width: "76%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center w-48"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#00C2FF]/50 bg-[#161B22] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,194,255,0.15)]">
                <span className="font-display font-bold text-[#00C2FF]">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#9CA3AF] font-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-10 relative pl-4 mx-auto max-w-sm">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-[38px] w-[1px] bg-white/10" />
          
          {/* Animated Vertical Connecting Line */}
          <motion.div 
            className="absolute top-6 left-[38px] w-[1px] bg-[#00C2FF]/50" 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-start gap-6"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border-2 border-[#00C2FF]/50 bg-[#161B22] flex items-center justify-center shadow-[0_0_15px_rgba(0,194,255,0.15)]">
                <span className="font-display font-bold text-[#00C2FF]">{step.number}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] font-sans text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}