import React from 'react';
import { ActiveTab } from '../types';
import { Phone, Mail, Globe, MapPin, ArrowRight, ShieldCheck, Clock, Download, FileArchive } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#061124] text-slate-300 pt-16 pb-8 border-t-2 border-[#C89736]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/80 bg-slate-900 flex items-center justify-center shadow-lg">
                <span className="font-serif font-bold text-xl text-amber-400">E</span>
                <span className="font-serif font-bold text-xl text-white -ml-0.5">P</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-tight">
                  EMIRATES PREMIUM
                </span>
                <span className="text-[9px] font-bold text-[#C89736] tracking-wider block">
                  INTERNATIONAL CARGO HUB
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Spécialiste du transit et du fret international reliant la Chine au Cameroun et à toute l'Afrique centrale. Sécurité, rapidité et transparence absolue.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Agrément Fret & Dédouanement</span>
            </div>
          </div>

          {/* Col 2: Hub Chine Guangzhou */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="text-base">🇨🇳</span> HUB CHINE — GUANGZHOU
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              B6-09 & B6-11, Jufu International Logistics Park,<br />
              No. 999 Helong 1st Road, Baiyun District,<br />
              Guangzhou, Guangdong, Chine
            </p>
            <div className="text-xs space-y-1 pt-1">
              <div className="text-slate-400 text-[11px]">Téléphone / WhatsApp / WeChat :</div>
              <a 
                href="https://wa.me/8613249700362" 
                target="_blank" 
                rel="noreferrer" 
                className="text-amber-400 font-bold hover:underline flex items-center gap-1.5"
              >
                <img 
                  src="./assets/whatsapp-logo.webp" 
                  alt="WhatsApp" 
                  className="w-3.5 h-3.5 rounded-full object-cover shrink-0" 
                  referrerPolicy="no-referrer"
                />
                +86 132 4970 0362
              </a>
            </div>
            <button
              onClick={() => {
                setActiveTab('adresse-chine');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-amber-500 hover:text-amber-400 font-medium flex items-center gap-1 text-left mt-1 cursor-pointer"
            >
              <span>Consignes fournisseurs Chine</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Col 3: Yaoundé Cameroun */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="text-base">🇨🇲</span> CAMEROUN — YAOUNDÉ
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Avenue Charles de Gaulle,<br />
              Immeuble Emirates Premium,<br />
              Yaoundé, Cameroun
            </p>
            <div className="text-xs space-y-2 pt-1">
              <a href="tel:+237641196871" className="text-white hover:text-amber-400 font-medium flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-amber-400" />
                +237 6 41 19 68 71
              </a>
              <a href="tel:+237620285079" className="text-white hover:text-amber-400 font-medium flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-amber-400" />
                +237 6 20 28 50 79
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>Ouvert Lun - Sam 08h-18h</span>
            </div>
          </div>

          {/* Col 4: Douala Cameroun */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="text-base">⚓</span> CAMEROUN — DOUALA
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Avenue de la Liberté,<br />
              Face Port Autonome de Douala,<br />
              Douala, Cameroun
            </p>
            <div className="text-xs space-y-2 pt-1">
              <a href="tel:+237690937024" className="text-white hover:text-amber-400 font-medium flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-amber-400" />
                +237 6 90 93 70 24
              </a>
              <a href="mailto:emiratespremium@gmail.com" className="text-slate-300 hover:text-amber-400 text-xs flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-amber-400" />
                emiratespremium@gmail.com
              </a>
              <a href="https://www.emiratespremium.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-400 text-xs flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-amber-400" />
                www.emiratespremium.com
              </a>
            </div>
          </div>

          {/* Col 5: Route Tag & Navigation Shortcuts */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-4 text-center">
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">
                CHINE ➔ CAMEROUN
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                ➔ AFRIQUE CENTRALE
              </span>
              <div className="text-[10px] text-slate-400 mt-2">
                Tchad • RCA • Gabon • Congo
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-400">
              <button 
                onClick={() => { setActiveTab('tarifs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-amber-400 block cursor-pointer"
              >
                • Grille des tarifs au kg et CBM
              </button>
              <button 
                onClick={() => { setActiveTab('suivi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-amber-400 block cursor-pointer"
              >
                • Suivi direct par numéro de colis
              </button>
              <button 
                onClick={() => { setActiveTab('agences'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-amber-400 block cursor-pointer"
              >
                • Adresses physiques des agences
              </button>
            </div>

            {/* Direct Source Code Download Button */}
            <div className="pt-2">
              <a
                href="./emirates-premium-cargo-source.zip"
                download="emirates-premium-cargo-source.zip"
                className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-bold transition-all shadow-xs"
                title="Télécharger l'intégralité du code source du projet (archive .ZIP)"
              >
                <FileArchive className="w-4 h-4 text-[#C89736]" />
                <span>Télécharger Code Source (.ZIP)</span>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Emirates Premium International Cargo. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Conditions Générales de Transport</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Politique de Confidentialité</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
