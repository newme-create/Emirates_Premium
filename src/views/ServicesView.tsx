import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Plane, Ship, Search, Car, Truck, PackageCheck, Home, Coins, 
  ArrowRight, ShieldCheck, Clock, CheckCircle2, Phone
} from 'lucide-react';

interface ServicesViewProps {
  onOpenDevis: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenDevis, setActiveTab }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'fret' | 'commerce' | 'logistique'>('all');

  const filteredServices = filterCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === filterCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'fret-aerien': return <Plane className="w-5 h-5" />;
      case 'fret-maritime': return <Ship className="w-5 h-5" />;
      case 'sourcing': return <Search className="w-5 h-5" />;
      case 'automobile': return <Car className="w-5 h-5" />;
      case 'trucks': return <Truck className="w-5 h-5" />;
      case 'emballage': return <PackageCheck className="w-5 h-5" />;
      case 'porte-a-porte': return <Home className="w-5 h-5" />;
      case 'consulting': return <Coins className="w-5 h-5" />;
      default: return <Plane className="w-5 h-5" />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'fret-aerien': return './assets/air-cargo.jpg';
      case 'fret-maritime': return './assets/container-ship.jpg';
      case 'sourcing': return './assets/guangzhou-hub.jpg';
      case 'automobile': return './assets/hero-cargo.jpg';
      case 'trucks': return './assets/douala-port.jpg';
      case 'emballage': return './assets/guangzhou-hub.jpg';
      case 'porte-a-porte': return './assets/delivery-courier.jpg';
      case 'consulting': return './assets/yaounde-city.jpg';
      default: return './assets/hero-cargo.jpg';
    }
  };

  return (
    <div className="space-y-0">
      
      {/* Banner with cargo hero background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Services logistiques Emirates Premium" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Services</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Nos solutions de <span className="text-[#C89736]">fret & transit</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Des solutions logistiques complètes et sur mesure pour relier la Chine au Cameroun et à l'Afrique centrale en toute sécurité, rapidité et transparence.
          </p>

          {/* Quick pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sécurité certifiée sur toute la chaîne</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Super Express 24h & Maritime CBM</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Équipe dédiée bilingue Français-Chinois</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'Tous nos services (8)' },
              { id: 'fret', label: 'Fret Aérien & Maritime' },
              { id: 'commerce', label: 'Sourcing & Achats Chine' },
              { id: 'logistique', label: 'Logistique, Emballage & Dédouanement' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#0B1B36] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with real photo */}
                  <div className="h-40 relative overflow-hidden bg-slate-900">
                    <img 
                      src={getServiceImage(srv.id)} 
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xs border border-white/20 text-amber-400 flex items-center justify-center shadow-lg">
                      {getServiceIcon(srv.id)}
                    </div>
                    <span className="absolute top-3 right-3 font-mono text-[11px] font-black text-amber-300 bg-[#0B1B36]/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-amber-500/30">
                      EP #{srv.num}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-[#0B1B36] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-5">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {srv.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenDevis}
                    className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-[#C89736] hover:text-[#0B1B36] text-[#0B1B36] font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-amber-200 cursor-pointer"
                  >
                    <span>Demander un devis pour ce service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Reusable Master CTA Banner with cargo image & WhatsApp logo */}
      <CtaBanner 
        title="Besoin d'un accompagnement personnalisé ou d'une cotation spéciale ?"
        subtitle="Nos conseillers basés à Guangzhou et à Douala étudient votre cahier des charges et vous apportent la solution la plus économique et fiable."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
