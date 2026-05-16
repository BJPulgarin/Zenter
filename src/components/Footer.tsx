import React from "react";
import { Link } from "wouter";
import { SiInstagram, SiTiktok, SiFacebook, SiYoutube } from "react-icons/si";
import { Phone } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer({ hideNavigation }: { hideNavigation?: boolean }) {
  const gridCols = hideNavigation
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <footer className="bg-[#0B0F14] border-t border-white/5 pt-16 pb-8">
      <div className="container px-10 md:px-12 mx-auto max-w-6xl">
        <div className={`grid ${gridCols} gap-12 lg:gap-8 mb-16`}>
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <a href="/" className="text-2xl font-display font-bold text-white mb-3">
              <span className="text-[#00C2FF]">Z</span>enter<span className="text-[#00C2FF]">.</span>
            </a>
            <p className="font-sans text-sm text-gray-500 max-w-xs mt-3">
              Infraestructura tecnológica y soporte técnico especializado en Colombia.
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-[#00C2FF] transition-colors duration-200">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00C2FF] transition-colors duration-200">
                <SiTiktok size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00C2FF] transition-colors duration-200">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00C2FF] transition-colors duration-200">
                <LinkedInIcon size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00C2FF] transition-colors duration-200">
                <SiYoutube size={18} />
              </a>
            </div>
          </div>

          {!hideNavigation && (
            <div className="flex flex-col">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Navegación</h4>
              <nav className="flex flex-col gap-3">
                <a href="#sobre-nosotros" className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors duration-200">Sobre Nosotros</a>
                <a href="#servicios" className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors duration-200">Servicios</a>
                <a href="#especialidades" className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors duration-200">Especialidades</a>
                <a href="#proyectos" className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors duration-200">Proyectos</a>
              </nav>
            </div>
          )}

          {/* Column 3 - Servicios */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Servicios</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-gray-400">Soporte técnico especializado</li>
              <li className="text-sm text-gray-400">Infraestructura tecnológica</li>
              <li className="text-sm text-gray-400">Setups &amp; Workstations</li>
              <li className="text-sm text-gray-400">Fabricación &amp; Desarrollo</li>
            </ul>
          </div>

          {/* Column 4 - Contacto */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/573508804049" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00C2FF] transition-colors">
                <Phone size={16} />
                +57 350 880 4049
              </a>
              <p className="text-xs text-gray-600 mt-2">
                Lunes a viernes, 8am – 6pm
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray-600 font-sans">
            © 2025 Zenter Colombia. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600 font-sans italic">
            Hecho con precisión técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}
