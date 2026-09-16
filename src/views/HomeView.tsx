import React, { useState } from 'react';
import { ActiveTab, Shipment } from '../types';
import { MOCK_SHIPMENTS, SERVICES_DATA, RECENT_DELIVERIES } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Plane, Ship, Search, ArrowRight, ShieldCheck, Clock, Globe, 
  MapPin, CheckCircle2, ChevronRight, Package, Box, Truck, 
  FileText, Sparkles, ExternalLink, Building2, Calendar, Eye
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenTracking: (code: string) => void;
  onOpenDevis: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onOpenTracking,
  onOpenDevis
}) => {
  const [quickCode, setQuickCode] = useState('');
  const snippetShipment: Shipment = MOCK_SHIPMENTS['EP2505CN23789'];

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickCode.trim()) return;
    onOpenTracking(quickCode.trim().toUpperCase());
  };

  return (
    <div className="space-y-0">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#061124] text-white pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden">
        {/* Multimodal Cargo Background Image - enhanced visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Transport de Marchandises Chine Cameroun - Avion Cargo et Porte-Conteneurs" 
            className="w-full h-full object-cover object-center opacity-40 filter brightness-100 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/80 to-[#061124]/40"></div>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C89736_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Route pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#E0A938] text-xs font-extrabold tracking-wider uppercase shadow-xs">
                <span>—</span>
                <span>CHINE</span>
                <span>➔</span>
                <span>CAMEROUN</span>
                <span>➔</span>
                <span>AFRIQUE CENTRALE</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Votre cargo.<br />
                Notre priorité.<br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-[#C89736] bg-clip-text text-transparent">
                  Votre succès.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Nous prenons en charge vos marchandises depuis la Chine jusqu'au Cameroun et l'Afrique centrale avec sécurité, rapidité et un suivi transparent à chaque étape.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const searchSection = document.getElementById('search-bar-section');
                    searchSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-extrabold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Package className="w-5 h-5" />
                  <span>Suivre un colis</span>
                </button>

                <button
                  onClick={onOpenDevis}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-xs flex items-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Demander un devis</span>
                </button>
              </div>

              {/* 3 Key Stats Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/60 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-extrabold text-base leading-tight">24 h</strong>
                    <span className="text-[11px] text-slate-400">Super Express</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-amber-400 shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-extrabold text-base leading-tight">48 - 72 h</strong>
                    <span className="text-[11px] text-slate-400">Express Fret</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-amber-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-extrabold text-base leading-tight">FR • EN • 中文</strong>
                    <span className="text-[11px] text-slate-400">Support trilingue</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Prominent Image Showcase & Live Shipment Widget */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Highlighted Multimodal Transport Image (100% visible & sharp) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 group bg-slate-900">
                <img 
                  src="./assets/hero-cargo.jpg" 
                  alt="Transport de Marchandise - Avion Cargo, Porte-Conteneurs et Camion Fret" 
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061124]/90 via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B36]/90 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[11px] font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Flotte Multimodale Active</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
                    Chine ➔ Cameroun
                  </span>
                </div>

                {/* Bottom Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="bg-[#C89736] text-[#0B1B36] font-extrabold px-2.5 py-1 rounded-md text-[11px] shadow-sm">
                    Aérien • Maritime • Terrestre
                  </span>
                  <span className="text-[11px] text-slate-200 font-medium bg-black/60 backdrop-blur-xs px-2 py-1 rounded-md">
                    Fiable • Rapide • Sécurisé
                  </span>
                </div>
              </div>

              {/* Interactive Live Shipment Widget */}
              <div className="bg-white text-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100">
                
                {/* Route Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <div className="text-xs font-black text-[#0B1B36] flex items-center gap-1">
                      <span>CHINE</span>
                      <span>🇨🇳</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Guangzhou Hub</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2">
                    <div className="w-6 border-t-2 border-dashed border-amber-400"></div>
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shadow-xs animate-bounce">
                      <Plane className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-6 border-t-2 border-dashed border-amber-400"></div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-black text-[#0B1B36] flex items-center justify-end gap-1">
                      <span>CAMEROUN</span>
                      <span>🇨🇲</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Douala • Yaoundé</span>
                  </div>
                </div>

                {/* 6 Stages Mini Flow */}
                <div className="grid grid-cols-6 gap-1 py-3 text-center">
                  {[
                    { label: 'Réception', done: true },
                    { label: 'Contrôle', done: true },
                    { label: 'Emballage', done: true },
                    { label: 'Consolidation', done: true },
                    { label: 'Expédition', current: true },
                    { label: 'Livraison', pending: true }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        step.done 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : step.current 
                          ? 'bg-amber-500 text-white ring-2 ring-amber-200 animate-pulse' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {step.done ? '✓' : idx + 1}
                      </div>
                      <span className={`text-[9px] font-semibold truncate w-full ${
                        step.current ? 'text-amber-800 font-bold' : 'text-slate-500'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Active Tracking Snippet Card */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">N° :</span>
                      <strong className="text-xs font-mono font-bold text-[#0B1B36]">
                        {snippetShipment.code}
                      </strong>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {snippetShipment.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      <span>Lieu : </span>
                      <strong className="text-slate-800">{snippetShipment.location}</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenTracking(snippetShipment.code)}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#0B1B36] hover:bg-[#152A4A] text-white transition-colors shrink-0 shadow-xs cursor-pointer"
                  >
                    Détails
                  </button>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Assurance incluse
                  </span>
                  <button
                    onClick={() => setActiveTab('suivi')}
                    className="text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    <span>Suivre un autre colis</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FLOATING SEARCH BAR ================= */}
      <section id="search-bar-section" className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#0B1B36] text-[#C89736] flex items-center justify-center shrink-0 shadow-sm">
            <Search className="w-7 h-7" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-[#0B1B36]">
              Où se trouve votre colis ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Entrez votre numéro de suivi pour obtenir le statut de votre expédition en temps réel.
            </p>
          </div>

          <form onSubmit={handleQuickSearch} className="w-full md:w-auto flex items-center gap-2">
            <input
              type="text"
              required
              value={quickCode}
              onChange={(e) => setQuickCode(e.target.value)}
              placeholder="Ex: EP2505CN23789"
              className="w-full sm:w-64 px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-hidden font-mono font-semibold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-sm rounded-xl transition-colors shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Localiser</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* ================= NOS SERVICES HIGHLIGHTS ================= */}
      <section className="py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C89736] uppercase tracking-widest">
              SOLUTIONS LOGISTIQUES GLOBALES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36] mt-2">
              Nos services d'expédition
            </h2>
            <div className="w-16 h-1 bg-[#C89736] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm mt-4">
              Depuis nos entrepôts centraux de Guangzhou, nous coordonnons l'ensemble de vos flux vers Douala, Yaoundé et toute la zone CEMAC.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => {
              const serviceImg = service.id === 'fret-aerien'
                ? './assets/air-cargo.jpg'
                : service.id === 'fret-maritime'
                ? './assets/container-ship.jpg'
                : service.id === 'sourcing'
                ? './assets/guangzhou-hub.jpg'
                : './assets/delivery-courier.jpg';

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="h-36 w-full relative overflow-hidden bg-slate-900">
                      <img 
                        src={serviceImg} 
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#0B1B36]/90 backdrop-blur-xs text-amber-400 flex items-center justify-center shadow-md">
                        {service.id === 'fret-aerien' && <Plane className="w-5 h-5" />}
                        {service.id === 'fret-maritime' && <Ship className="w-5 h-5" />}
                        {service.id === 'sourcing' && <Search className="w-5 h-5" />}
                        {service.id === 'automobile' && <Truck className="w-5 h-5" />}
                      </div>
                      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md shadow-xs">
                        SERVICE {service.num}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-serif font-bold text-lg text-[#0B1B36] mb-2 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      <ul className="space-y-1.5 text-xs text-slate-700 mb-2">
                        {service.bullets.slice(0, 3).map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                            <span className="truncate">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setActiveTab('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#0B1B36] group-hover:text-amber-600 flex items-center justify-between w-full transition-colors cursor-pointer"
                    >
                      <span>Consulter les détails</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-extrabold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Voir l'ensemble de nos 8 services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= RECENT DELIVERIES ================= */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C89736] uppercase tracking-widest">
              HISTORIQUE RÉCENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36] mt-2">
              Livraisons récentes confirmées
            </h2>
            <div className="w-16 h-1 bg-[#C89736] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm mt-4">
              Aperçu transparent de nos dernières expéditions acheminées de la Chine vers le Cameroun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECENT_DELIVERIES.map((del) => (
              <div 
                key={del.id}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Confirmed Delivery Photo with Badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={del.image}
                      alt={del.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center text-[10px] font-black tracking-wider uppercase text-amber-900 bg-amber-200/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                        {del.route}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                        <CheckCircle2 className="w-3 h-3 text-emerald-200" />
                        {del.badge}
                      </span>
                    </div>

                    {/* Bottom Photo Metadata: Location & Date */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 font-semibold truncate drop-shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{del.destination}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-200 shrink-0 font-medium drop-shadow-sm">
                        <Calendar className="w-3 h-3 text-slate-300" />
                        {del.date}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#C89736] tracking-wide uppercase">
                        {del.category}
                      </span>
                      <button
                        onClick={() => onOpenTracking(del.trackingCode)}
                        className="text-[11px] font-mono font-bold text-slate-600 hover:text-amber-700 bg-slate-100 hover:bg-amber-50 px-2 py-0.5 rounded border border-slate-200 transition-colors cursor-pointer"
                        title="Voir les étapes de cette expédition"
                      >
                        N° {del.trackingCode}
                      </button>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0B1B36] mb-1.5 leading-snug group-hover:text-amber-800 transition-colors">
                      {del.title}
                    </h3>

                    <div className="text-xs text-slate-500 font-medium mb-3 pb-3 border-b border-slate-100 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{del.details}</span>
                    </div>

                    {/* Client testimonial */}
                    <blockquote className="text-xs text-slate-600 italic bg-slate-50/90 p-3 rounded-xl border border-slate-200/70 leading-relaxed mb-1">
                      {del.quote}
                      <footer className="text-[11px] not-italic font-bold text-slate-800 mt-1.5 flex items-center justify-between">
                        <span>— {del.client}</span>
                        <span className="text-emerald-600 text-[10px] font-semibold flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Client vérifié
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>

                {/* Card Footer with Verification and Track action */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t border-slate-100 bg-slate-50/50">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Preuve de livraison certifiée
                  </span>
                  <button
                    onClick={() => onOpenTracking(del.trackingCode)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer"
                  >
                    <span>Voir suivi</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4-STEP TIMELINE PROCESS ================= */}
      <section className="py-20 bg-gradient-to-br from-[#061124] to-[#0B1B36] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                TRANSPARENCE TOTALE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Simple pour le client.<br />
                <span className="text-[#C89736]">Maîtrisé par nos équipes.</span>
              </h2>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                De votre prise de contact initiale jusqu'à la remise physique de votre colis à Yaoundé ou Douala, chaque opération est rigoureusement tracée.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Contact', desc: 'Obtenez votre code client unique et les consignes pour vos fournisseurs.' },
                { num: '02', title: 'Réception', desc: 'Réception continue, pesée et contrôle qualité dans notre hub à Guangzhou.' },
                { num: '03', title: 'Expédition', desc: 'Conditionnement renforcé, départs aériens ou maritimes et suivi en temps réel.' },
                { num: '04', title: 'Livraison', desc: 'Dédouanement complet et livraison à votre porte ou retrait en agence.' }
              ].map((step, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4.5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#C89736] text-[#0B1B36] font-bold text-xs flex items-center justify-center mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Banner inside */}
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-900/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif font-bold text-xl text-amber-300">
                Vous préparez une expédition depuis la Chine ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Obtenez sans attendre votre code client et l'adresse officielle de dépôt pour vos fournisseurs.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('comment-ca-marche');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-white text-[#0B1B36] font-extrabold text-xs sm:text-sm hover:bg-amber-100 transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Découvrir les 5 étapes détaillées
            </button>
          </div>

        </div>
      </section>

      {/* ================= NOS 2 PILIERS LOGISTIQUES ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C89736] uppercase tracking-widest">
              INFRASTRUCTURE INTERNATIONALE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36] mt-2">
              Deux hubs stratégiques à votre service
            </h2>
            <div className="w-16 h-1 bg-[#C89736] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm mt-4">
              De la réception centralisée à Guangzhou jusqu'à la remise en main propre à Yaoundé et Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hub Chine */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src="./assets/guangzhou-hub.jpg" 
                  alt="Hub Guangzhou Emirates Premium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    🇨🇳 DÉPART CHINE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Hub International de Guangzhou
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Situé au cœur logistique de Baiyun, notre hub central de plus de 5 000 m² réceptionne vos colis de toute la Chine (Alibaba, 1688, Taobao, usines), effectue le contrôle qualité, la pesée certifiée et la consolidation.
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Pesée & Étiquetage code-barres</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Emballage sécurisé</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Caméras 24/7</span>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('adresse-chine');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full mt-2 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-amber-200"
                >
                  <span>Voir l'adresse et consignes fournisseurs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hub Cameroun */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src="./assets/delivery-courier.jpg" 
                  alt="Agences Cameroun Emirates Premium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    🇨🇲 ARRIVÉE CAMEROUN
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Agences de Yaoundé & Douala
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deux agences physiques à Yaoundé (siège) et Douala (face port autonome). Notre service de livraison locale assure le transport direct jusqu'à votre domicile ou entrepôt dans tout le Cameroun et la zone CEMAC.
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Dédouanement complet inclus</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Livraison à domicile</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-semibold">• Retrait express 6j/7</span>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('agences');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full mt-2 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-amber-200"
                >
                  <span>Découvrir nos agences au Cameroun</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <CtaBanner 
        title="Votre marchandise entre de bonnes mains."
        subtitle="Contactez-nous dès maintenant pour un devis personnalisé ou pour toute question concernant vos expéditions de Chine."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
