import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip annotation */}
      <a 
        id="floating-whatsapp-tooltip"
        href="https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20vos%20services%20Emirates%20Premium"
        target="_blank" 
        rel="noreferrer"
        className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-all"
      >
        <span className="text-xs font-semibold">Besoin d'aide ?</span>
        <span className="text-xs font-bold text-emerald-600">WhatsApp direct</span>
      </a>

      {/* WhatsApp Image Logo Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20vos%20services%20Emirates%20Premium"
        target="_blank"
        rel="noreferrer"
        className="relative group w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer drop-shadow-xl"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none"></span>
        <img 
          src="./assets/whatsapp-logo.webp" 
          alt="WhatsApp Emirates Premium" 
          className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white shadow-md"
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
};
