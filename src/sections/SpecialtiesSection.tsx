import React from "react";
import { motion } from "framer-motion";
import { Thermometer, Layers, Activity, Monitor, Video, Wifi, Network, Globe, Wrench, Shield } from "lucide-react";

const specialties = [
  { icon: Thermometer, label: "Optimización térmica avanzada" },
  { icon: Activity, label: "Diagnóstico de estabilidad" },
  { icon: Monitor, label: "Workstations premium" },
  { icon: Wifi, label: "Infraestructura para streaming" },
  { icon: Network, label: "Redes y conectividad" },
  { icon: Globe, label: "Soporte remoto" },
  { icon: Wrench, label: "Ensambles personalizados" },
  { icon: Shield, label: "Mantenimiento especializado" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-5xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
            Especialidades
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Capacidades técnicas de alto nivel.
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Un equipo especializado en las tecnologías que mantienen su infraestructura operando al máximo.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2 bg-[#1F2933] border border-white/5 rounded-full px-5 py-3 hover:border-[#00C2FF]/40 hover:bg-[#253240] transition-all duration-300 group cursor-default"
            >
              <specialty.icon className="w-4 h-4 text-muted-foreground group-hover:text-[#00C2FF] transition-colors" />
              <span className="font-sans text-sm md:text-base text-[#F5F7FA] group-hover:text-[#F5F7FA]/90 transition-colors">
                {specialty.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}