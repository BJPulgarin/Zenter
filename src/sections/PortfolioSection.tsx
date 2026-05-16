import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "RTX 3080 Workstation",
    category: "Workstation",
    status: "Vendida",
    image: "/assets/projects/rtx3080-build.jpg"
  },
  {
    title: "Setup Streaming Dual Monitor",
    category: "Setup & Streaming",
    status: "Entregada",
    image: "/assets/projects/streaming-setup.jpg"
  },
  {
    title: "Optimización térmica RTX 3080",
    category: "Optimización",
    status: "Proyecto completado",
    image: "/assets/projects/thermal-optimization.jpg"
  },
  {
    title: "Estación de trabajo edición profesional",
    category: "Workstation",
    status: "Entregada",
    image: "/assets/projects/editing-workstation.jpg"
  },
  {
    title: "Setup webcam premium",
    category: "Setup & Webcam",
    status: "Proyecto completado",
    image: "/assets/projects/webcam-setup.jpg"
  },
  {
    title: "Infraestructura de red pequeña empresa",
    category: "Infraestructura",
    status: "Proyecto completado",
    image: "/assets/projects/network-infrastructure.jpg"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Vendida":
      return "bg-amber-500/15 text-amber-400 border border-amber-500/30";
    case "Entregada":
      return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30";
    case "Proyecto completado":
      return "bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/25";
    default:
      return "bg-white/10 text-white border border-white/20";
  }
};

export function PortfolioSection() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32 bg-[#161B22] overflow-hidden">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-xs tracking-widest text-[#00C2FF] uppercase font-medium mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F7FA] leading-[1.1] mb-6">
            Proyectos realizados.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Cada proyecto refleja nuestro compromiso con la calidad técnica y la atención al detalle.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#1F2933] border border-white/5 hover:border-[#00C2FF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,194,255,0.08)] flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-[220px] bg-[#1F2933] border-b border-[#00C2FF]/10 overflow-hidden">
                {/* Subtle gradient pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent mix-blend-overlay"></div>
                {/* Tech grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                
                {/* PROJECT IMAGE — {project.image} — Recommended: 800x600 */}
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0B0F14]/80 backdrop-blur border border-white/10 text-[10px] sm:text-xs font-sans text-[#9CA3AF]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 md:p-6 flex flex-col flex-grow relative z-10">
                <h3 className="font-display text-lg font-semibold text-[#F5F7FA] mb-4">
                  {project.title}
                </h3>
                <div className="mt-auto">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
