import React from 'react';
import { Send } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  onOpenDevis: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Besoin d'un service sur mesure ?",
  subtitle = "Notre équipe est à votre disposition pour vous accompagner dans toutes vos expéditions.",
  onOpenDevis
}) => {
  return (
    <section id="cta-banner-section" className="relative bg-[#061124] text-white overflow-hidden py-14 sm:py-16 border-t border-b border-amber-500/20">
      {/* Background cargo transport image with navy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./assets/hero-cargo.jpg" 
          alt="Transport de Marchandise Emirates Premium" 
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-center lg:text-left max-w-2xl space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            {/* Demander un devis button */}
            <button
              id="cta-banner-devis-btn"
              onClick={onOpenDevis}
              className="px-6 py-3.5 rounded-xl bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-extrabold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Demander un devis</span>
            </button>

            {/* WhatsApp button with authentic WhatsApp logo image */}
            <a
              id="cta-banner-whatsapp-btn"
              href="https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20vos%20services%20Emirates%20Premium"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#112340] hover:bg-[#18315b] border border-white/20 text-white font-bold text-sm sm:text-base flex items-center gap-3 transition-all shadow-md hover:scale-102 cursor-pointer"
            >
              <img 
                src="./assets/whatsapp-logo.webp" 
                alt="Logo WhatsApp" 
                className="w-6 h-6 rounded-full object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Discuter sur WhatsApp</span>
                <span className="text-sm font-extrabold text-emerald-400">+86 132 4970 0362</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
