import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { 
  PRICING_AIR_PLANS, 
  PRICING_MARITIME_CATEGORIES,
  PHONE_PRICING_DATA,
  MERCHANDISE_CATEGORIES,
  COMPANY_VALUES,
  COMPLEMENTARY_SERVICES,
  AGENCIES_DATA
} from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Plane, Ship, Clock, CheckCircle2, ShieldCheck, ArrowRight, 
  Smartphone, Laptop, Shirt, Sparkles, Wrench, Package, Boxes, Zap, 
  Calculator, HelpCircle, FileCheck, Truck, Shield, Gem, ThumbsUp, Users,
  AlertCircle, PhoneCall, ExternalLink, MapPin, Mail, Globe, MessageSquare, Info
} from 'lucide-react';

interface TarifsViewProps {
  onOpenDevis: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const TarifsView: React.FC<TarifsViewProps> = ({ onOpenDevis, setActiveTab }) => {
  // Air Calculator state
  const [selectedAirPlanId, setSelectedAirPlanId] = useState<string>('super-express');
  const [airWeightKg, setAirWeightKg] = useState<string>('15');
  
  // Phone Calculator state
  const [phoneCalcType, setPhoneCalcType] = useState<'bas' | 'haut'>('bas');
  const [phoneBasWeight, setPhoneBasWeight] = useState<string>('5');
  const [phoneHautUnits, setPhoneHautUnits] = useState<string>('3');
  const [phoneHautValueTier, setPhoneHautValueTier] = useState<number>(15000); // 10000 - 25000

  // Maritime Calculator state
  const [selectedMaritimeCategory, setSelectedMaritimeCategory] = useState<string>('ordinaires');
  const [inputCbm, setInputCbm] = useState<string>('2');

  // Air calculation
  const currentAirPlan = PRICING_AIR_PLANS.find(p => p.id === selectedAirPlanId) || PRICING_AIR_PLANS[0];
  const parsedAirWeight = Math.max(0.1, parseFloat(airWeightKg) || 1);
  const estimatedAirTotal = ((currentAirPlan.pricePerKg || 15000) * parsedAirWeight).toLocaleString('fr-FR') + ' XAF';

  // Phone calculation
  const parsedPhoneBasWeight = Math.max(0.1, parseFloat(phoneBasWeight) || 1);
  const estimatedPhoneBasTotal = (5000 * parsedPhoneBasWeight).toLocaleString('fr-FR') + ' XAF';
  const parsedPhoneHautUnits = Math.max(1, parseInt(phoneHautUnits) || 1);
  const estimatedPhoneHautTotal = (phoneHautValueTier * parsedPhoneHautUnits).toLocaleString('fr-FR') + ' XAF';

  // Maritime calculation
  const currentMaritimeCategory = PRICING_MARITIME_CATEGORIES.find(c => c.id === selectedMaritimeCategory) || PRICING_MARITIME_CATEGORIES[0];
  const parsedCbm = Math.max(0.1, parseFloat(inputCbm) || 1);
  const estimatedMaritimeTotal = currentMaritimeCategory.pricePerCbm 
    ? (parsedCbm * currentMaritimeCategory.pricePerCbm).toLocaleString('fr-FR') + ' FCFA'
    : 'Sur devis personnalisé';

  return (
    <div className="space-y-0">
      
      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Tarifs Emirates Premium Cargo Chine Cameroun" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Tarifs Officiels</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#E0A938] text-xs font-extrabold tracking-wider uppercase mb-4">
            <span>✈️ CARGO CHINE ➔ CAMEROUN & AFRIQUE 🇨🇲🌍</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-3 text-white">
            Le monde plus proche <span className="text-[#C89736]">de vous !</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-8">
            Le spécialiste du cargo <strong>Chine ➔ Cameroun et partout en Afrique</strong>. 
            Découvrez nos 4 solutions d'expédition aérienne et notre grille maritime sans frais cachés.
          </p>

          {/* Nos 3 Engagements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Notre promesse</span>
                <strong className="text-sm text-white block">VOTRE CARGO. EN TOUTE SÉCURITÉ</strong>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Gem className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Notre priorité</span>
                <strong className="text-sm text-white block">VOTRE SATISFACTION ABSOLUE</strong>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Notre engagement</span>
                <strong className="text-sm text-white block">VOTRE SUCCÈS COMMERCIAL</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FRET AÉRIEN SECTION ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 shadow-xs">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                  SUR L'AVION • DÉPARTS RÉGULIERS GUANGZHOU
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36]">
                  Nos 4 solutions d'expédition aérienne
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Des solutions taillées sur mesure et adaptées précisément à votre niveau d'urgence et la nature de vos colis.
                </p>
              </div>
            </div>

            {/* Guaranteed Delays Badge Box */}
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xs flex items-center gap-4 text-xs">
              <span className="font-bold text-[#0B1B36] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                Délais :
              </span>
              <div className="border-l border-slate-200 pl-3 flex items-center gap-4 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[10px]">Super Express</span>
                  <strong className="text-red-700 font-extrabold">24H</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Express</span>
                  <strong className="text-blue-700 font-extrabold">48-72H</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Standard</span>
                  <strong className="text-emerald-700 font-extrabold">7-14j ouvrables</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Spécial</span>
                  <strong className="text-orange-700 font-extrabold">10-20j ouvrables</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Air Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PRICING_AIR_PLANS.map((plan) => {
              const isSuper = plan.id === 'super-express';
              const isExpress = plan.id === 'express';
              const isStandard = plan.id === 'standard';
              const isSpecial = plan.id === 'special';

              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs relative ${
                    isSuper
                      ? 'border-2 border-red-500 shadow-lg ring-4 ring-red-500/10'
                      : isExpress
                      ? 'border-2 border-blue-500 shadow-md ring-4 ring-blue-500/10'
                      : isStandard
                      ? 'border-2 border-emerald-500/80 shadow-xs'
                      : 'border-2 border-orange-500/80 shadow-xs'
                  }`}
                >
                  {/* Card Visual Top Banner */}
                  <div className={`h-28 w-full relative overflow-hidden bg-slate-900`}>
                    <img 
                      src="./assets/air-cargo.jpg" 
                      alt={plan.name}
                      className="w-full h-full object-cover object-center filter brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20"></div>
                    
                    {/* Badge top */}
                    <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[#0B1B36] text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <span>{plan.colorBadge}</span>
                        <span>{plan.badgeNumber} — {plan.name}</span>
                      </span>
                      {plan.popular && (
                        <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-bold flex items-center gap-1 text-amber-300 drop-shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{plan.delay}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#0B1B36] mb-1">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                        {plan.subtitle}
                      </p>

                      {/* Pricing block */}
                      <div className="mb-4 pb-4 border-b border-slate-100 bg-slate-50/70 p-3 rounded-xl">
                        <div className="flex items-baseline gap-1">
                          <span className={`font-serif text-2xl sm:text-3xl font-extrabold ${
                            isSuper ? 'text-red-700' :
                            isExpress ? 'text-blue-800' :
                            isStandard ? 'text-emerald-700' :
                            'text-orange-700'
                          }`}>
                            {plan.price}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">
                            {plan.unit}
                          </span>
                        </div>
                        {plan.condition && (
                          <div className="mt-1.5 flex items-start gap-1 text-[11px] font-medium text-slate-600">
                            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{plan.condition}</span>
                          </div>
                        )}
                      </div>

                      {/* Features list */}
                      <ul className="space-y-2 text-xs text-slate-700 mb-6">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setSelectedAirPlanId(plan.id);
                          const sim = document.getElementById('air-simulator-section');
                          sim?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Calculator className="w-3.5 h-3.5 text-amber-600" />
                        <span>Simuler ce tarif</span>
                      </button>

                      <button
                        onClick={onOpenDevis}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                          isSuper
                            ? 'bg-red-700 hover:bg-red-800 text-white'
                            : isExpress
                            ? 'bg-blue-800 hover:bg-blue-900 text-white'
                            : isStandard
                            ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                            : 'bg-orange-600 hover:bg-orange-700 text-white'
                        }`}
                      >
                        <span>Choisir cette formule</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= TABLEAU RÉCAPITULATIF OFFICIEL DES OFFRES ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  BARÈME OFFICIEL AIR CARGO
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-1">
                  📊 Récapitulatif officiel des offres aériennes
                </h3>
              </div>
              <span className="text-xs text-slate-300 font-mono">
                Départ : Hub Guangzhou (CAN) ➔ Douala / Yaoundé
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 sm:px-6">Service</th>
                    <th className="py-3.5 px-4 text-center">Délai</th>
                    <th className="py-3.5 px-4 text-right">Tarif</th>
                    <th className="py-3.5 px-4 sm:px-6">Conditions & Spécificités</th>
                    <th className="py-3.5 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-red-50/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🔴</span>
                        <div>
                          <strong className="text-slate-900 block">1 — Super Express 24H</strong>
                          <span className="text-[11px] text-red-700 font-semibold">Priorité maximale</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-red-700 font-mono">
                      24H
                    </td>
                    <td className="py-4 px-4 text-right font-extrabold text-red-700 text-base font-serif whitespace-nowrap">
                      15.000 XAF/kg
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs">
                      Marchandises urgentes, priorité maximale sur tous les vols cargo.
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={onOpenDevis}
                        className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs cursor-pointer shadow-xs"
                      >
                        Réserver
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🔵</span>
                        <div>
                          <strong className="text-slate-900 block">2 — Service Express</strong>
                          <span className="text-[11px] text-blue-700 font-semibold">À partir de 5 kg</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-blue-800 font-mono">
                      48 à 72H
                    </td>
                    <td className="py-4 px-4 text-right font-extrabold text-blue-800 text-base font-serif whitespace-nowrap">
                      12.000 XAF/kg
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs">
                      Colis normal et sensible. Applicable à partir de 5 KG.
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={onOpenDevis}
                        className="px-3 py-1.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs cursor-pointer shadow-xs"
                      >
                        Réserver
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🟢</span>
                        <div>
                          <strong className="text-slate-900 block">3 — Service Standard</strong>
                          <span className="text-[11px] text-emerald-700 font-semibold">À partir de 100 kg</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-emerald-800 font-mono">
                      7 à 14 jours ouvrables
                    </td>
                    <td className="py-4 px-4 text-right font-extrabold text-emerald-800 text-base font-serif whitespace-nowrap">
                      8.500 XAF/kg
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs">
                      Colis normal sans liquide et appareil, sans batterie incorporée. Applicable à partir de 100 KG.
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={onOpenDevis}
                        className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs cursor-pointer shadow-xs"
                      >
                        Réserver
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-orange-50/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🟠</span>
                        <div>
                          <strong className="text-slate-900 block">4 — Service Spécial</strong>
                          <span className="text-[11px] text-orange-700 font-semibold">Négociable dès 100 kg</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-orange-800 font-mono">
                      10 à 20 jours ouvrables
                    </td>
                    <td className="py-4 px-4 text-right font-extrabold text-orange-800 text-base font-serif whitespace-nowrap">
                      9.000 XAF/kg
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs">
                      Colis sensible, liquide, batterie incorporée, MARC UP, etc. Négociable à partir de 100 KG.
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={onOpenDevis}
                        className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                      >
                        Réserver
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
              ⚡ Tous nos tarifs aériens incluent la pesée électronique certifiée, le suivi personnalisé et les démarches complètes d'acheminement.
            </div>
          </div>

          {/* ================= SIMULATEUR DE FRET AÉRIEN & TÉLÉPHONES ================= */}
          <div id="air-simulator-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Simulator Column: Air Cargo General Simulator */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0B1B36]">
                    Simulateur de Fret Aérien
                  </h3>
                  <p className="text-xs text-slate-500">
                    Estimez votre coût d'expédition selon le poids et la formule.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Solution Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Sélectionnez la solution d'expédition :
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRICING_AIR_PLANS.map(plan => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedAirPlanId(plan.id)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          selectedAirPlanId === plan.id
                            ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                          <span>{plan.colorBadge}</span>
                          <span className="truncate">{plan.name}</span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 block mt-0.5">
                          {plan.price}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          {plan.delay}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weight Input */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      Poids estimé de vos colis (en KG) :
                    </label>
                    <span className="text-xs font-mono text-amber-700 font-bold">
                      {parsedAirWeight} KG
                    </span>
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={airWeightKg}
                    onChange={(e) => setAirWeightKg(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm font-mono font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    placeholder="Ex: 15"
                  />

                  {/* Quick weight pills */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {['5', '10', '25', '50', '100', '250'].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setAirWeightKg(w)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                          airWeightKg === w
                            ? 'bg-[#0B1B36] text-white font-bold'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {w} kg
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition reminder alert */}
                {selectedAirPlanId === 'express' && parsedAirWeight < 5 && (
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Rappel : Le <strong>Service Express</strong> est applicable à partir de 5 KG.</span>
                  </div>
                )}

                {selectedAirPlanId === 'standard' && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-1">
                    <div className="flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Conditions Service Standard (8.500 XAF/kg) :</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      • Applicable à partir de 100 KG {parsedAirWeight < 100 ? '(votre saisie actuelle est inférieure à 100 kg)' : '✓'}<br />
                      • Colis normal sans liquide et sans appareil, sans batterie incorporée.
                    </p>
                  </div>
                )}

                {selectedAirPlanId === 'special' && (
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs space-y-1">
                    <div className="flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Service Spécial (9.000 XAF/kg) :</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      • Adapté aux colis sensibles, liquides, batteries incorporées et articles MARC UP.<br />
                      • <strong>Tarif négociable à partir de 100 KG</strong>.
                    </p>
                  </div>
                )}

                {/* Air Result Box */}
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Formule :</span>
                    <span className="font-semibold text-white">{currentAirPlan.name} ({currentAirPlan.delay})</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Base tarifaire :</span>
                    <span className="font-mono text-slate-200">{currentAirPlan.price}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-300">Estimation totale :</span>
                    <span className="font-mono text-xl font-extrabold text-[#E0A938]">
                      {estimatedAirTotal}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenDevis}
                  className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirmer cette expédition par devis</span>
                </button>
              </div>
            </div>

            {/* Right Simulator Column: Dedicated Phone Calculator */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-[#0B1B36] text-white rounded-2xl p-6 shadow-md border border-slate-700">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    Simulateur Tarification Téléphone
                  </h3>
                  <p className="text-xs text-slate-300">
                    Tarifs spécifiques téléphones bas de gamme & haut de gamme.
                  </p>
                </div>
              </div>

              {/* Toggle Phone Category */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPhoneCalcType('bas')}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    phoneCalcType === 'bas'
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-xs'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  <span className="text-xs block">Bas de gamme / Choroko</span>
                  <strong className="text-sm font-mono block mt-0.5">5.000 XAF / KG</strong>
                </button>

                <button
                  type="button"
                  onClick={() => setPhoneCalcType('haut')}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    phoneCalcType === 'haut'
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-xs'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  <span className="text-xs block">Haut de gamme</span>
                  <strong className="text-sm font-mono block mt-0.5">10.000 – 25.000 / unité</strong>
                </button>
              </div>

              {/* Dynamic Inputs depending on type */}
              {phoneCalcType === 'bas' ? (
                <div className="space-y-4">
                  <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                    💡 <strong>Téléphones Bas de gamme / Choroko</strong> : Facturés au poids réel au kilo (5 000 XAF/kg). Convient aux téléphones basiques et modèles à touches.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1">
                      Poids total des téléphones (KG) :
                    </label>
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={phoneBasWeight}
                      onChange={(e) => setPhoneBasWeight(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm font-mono text-white focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      placeholder="Ex: 5"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Tarif appliqué :</span>
                      <span className="font-mono text-slate-200">5.000 XAF / KG</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Poids calculé :</span>
                      <span className="font-mono text-slate-200">{parsedPhoneBasWeight} KG</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-300">Total estimé :</span>
                      <span className="font-mono text-xl font-extrabold text-[#E0A938]">
                        {estimatedPhoneBasTotal}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                    💡 <strong>Téléphones Haut de gamme</strong> : Tarif par unité entre 10 000 XAF et 25 000 XAF <em>en fonction de la valeur marchande du téléphone</em> (iPhone, Samsung Galaxy, smartphones récents).
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1">
                      Nombre d'appareils (unités) :
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={phoneHautUnits}
                      onChange={(e) => setPhoneHautUnits(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm font-mono text-white focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      placeholder="Ex: 3"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-slate-300 font-bold">Valeur estimée de l'appareil :</span>
                      <span className="font-mono text-amber-300 font-bold">
                        {phoneHautValueTier.toLocaleString('fr-FR')} XAF / unité
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="25000"
                      step="2500"
                      value={phoneHautValueTier}
                      onChange={(e) => setPhoneHautValueTier(parseInt(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>10.000 XAF (Milieu/entrée gamme)</span>
                      <span>25.000 XAF (Ultra haut de gamme)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Quantité :</span>
                      <span className="font-mono text-slate-200">{parsedPhoneHautUnits} unité(s)</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Tarif unitaire :</span>
                      <span className="font-mono text-slate-200">{phoneHautValueTier.toLocaleString('fr-FR')} XAF</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-300">Total estimé :</span>
                      <span className="font-mono text-xl font-extrabold text-[#E0A938]">
                        {estimatedPhoneHautTotal}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={onOpenDevis}
                className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Smartphone className="w-4 h-4" />
                <span>Expédier mes téléphones en toute sécurité</span>
              </button>
            </div>

          </div>

          {/* ================= SECTION EXPÉDIEZ VOS MARCHANDISES (5 CATÉGORIES) ================= */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                EXPÉDIEZ VOS MARCHANDISES EN TOUTE CONFIANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36] mt-1">
                Catégories de produits les plus expédiées
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Chaque type de marchandise bénéficie d'un conditionnement et d'un protocole de transport optimisé.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {MERCHANDISE_CATEGORIES.map((cat) => (
                <div 
                  key={cat.id} 
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-center flex flex-col items-center justify-between group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 text-[#0B1B36] flex items-center justify-center mb-3 transition-colors">
                    {cat.id === 'telephones' && <Smartphone className="w-7 h-7 text-amber-600" />}
                    {cat.id === 'ordinateurs' && <Laptop className="w-7 h-7 text-blue-600" />}
                    {cat.id === 'vetements' && <Shirt className="w-7 h-7 text-emerald-600" />}
                    {cat.id === 'cosmetiques' && <Sparkles className="w-7 h-7 text-purple-600" />}
                    {cat.id === 'pieces-auto' && <Wrench className="w-7 h-7 text-orange-600" />}
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#0B1B36] mb-1">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {cat.description}
                  </p>

                  <button
                    type="button"
                    onClick={onOpenDevis}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Cotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= FRET MARITIME SECTION ================= */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                  SUR LA MER • GROUPAGE LCL & CONTENEURS COMPLETS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36]">
                  Fret maritime
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Économique, fiable et parfaitement adapté aux gros volumes et matériels lourds.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs flex items-center gap-3 text-xs">
              <Clock className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-slate-400 block text-[10px]">Délai moyen de traversée</span>
                <strong className="text-slate-800 font-extrabold">20 à 45 jours (Chine ➔ Douala)</strong>
              </div>
            </div>
          </div>

          {/* Maritime Grid Container */}
          <div className="space-y-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (8 cols): Official CBM Rates Table */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Barème Officiel Groupage Maritime (LCL / CBM)
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#0B1B36] mt-1">
                      Grille tarifaire au mètre cube (CBM)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Départ : Guangzhou / Shenzhen ➔ Port de Douala
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4 sm:px-6">Catégorie</th>
                        <th className="py-3.5 px-4 text-right sm:text-center">Tarif</th>
                        <th className="py-3.5 px-4 sm:px-6">Exemples de marchandises</th>
                        <th className="py-3.5 px-4 text-right">Simulation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PRICING_MARITIME_CATEGORIES.map((item) => {
                        const isSelected = selectedMaritimeCategory === item.id;
                        return (
                          <tr 
                            key={item.id} 
                            onClick={() => setSelectedMaritimeCategory(item.id)}
                            className={`transition-colors cursor-pointer hover:bg-slate-50/80 ${
                              isSelected ? 'bg-amber-50/50' : ''
                            }`}
                          >
                            <td className="py-4 px-4 sm:px-6">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  item.id === 'ordinaires' ? 'bg-emerald-100 text-emerald-700' :
                                  item.id === 'lourdes' ? 'bg-blue-100 text-blue-700' :
                                  item.id === 'machines' ? 'bg-amber-100 text-amber-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {item.id === 'ordinaires' && <Package className="w-4 h-4" />}
                                  {item.id === 'lourdes' && <Boxes className="w-4 h-4" />}
                                  {item.id === 'machines' && <Wrench className="w-4 h-4" />}
                                  {item.id === 'batteries-speciaux' && <Zap className="w-4 h-4" />}
                                </div>
                                <div>
                                  <span className="font-bold text-slate-900 block">
                                    {item.category}
                                  </span>
                                  <span className="text-[11px] text-slate-400">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td className="py-4 px-4 text-right sm:text-center">
                              <span className="font-extrabold text-[#0B1B36] sm:text-base font-serif whitespace-nowrap">
                                {item.tariff}
                              </span>
                            </td>

                            <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs leading-relaxed max-w-xs">
                              {item.examples}
                            </td>

                            <td className="py-4 px-4 text-right">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedMaritimeCategory(item.id);
                                }}
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#0B1B36] text-amber-400 shadow-xs' 
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                              >
                                {isSelected ? 'Sélectionné' : 'Calculer'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] text-slate-600">
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dédouanement portuaire
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dépotage sécurisé Douala
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Manutention portuaire incluse
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Suivi satellite navire
                  </span>
                </div>
              </div>

              {/* Right Column (4 cols): Live CBM Simulator & Port Info */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Live CBM Calculator Card */}
                <div className="bg-[#0B1B36] text-white rounded-2xl p-6 shadow-md border border-slate-700">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">
                        Simulateur Maritime CBM
                      </h4>
                      <p className="text-xs text-slate-300">
                        Calcul direct selon le volume cubique
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-400 block mb-1">Catégorie sélectionnée :</span>
                      <div className="p-2.5 bg-slate-800 rounded-lg text-xs font-semibold text-amber-300 border border-slate-700">
                        {currentMaritimeCategory.category}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-300">
                          Volume estimé en CBM (m³) :
                        </label>
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          {parsedCbm} m³
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0.1"
                        step="0.5"
                        value={inputCbm}
                        onChange={(e) => setInputCbm(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                        placeholder="Ex: 2"
                      />
                      
                      {/* Quick CBM pills */}
                      <div className="flex items-center gap-1.5 mt-2">
                        {['1', '2', '3', '5', '8'].map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setInputCbm(vol)}
                            className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                              inputCbm === vol
                                ? 'bg-amber-400 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            {vol} CBM
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculation summary */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2 mt-4">
                      <div className="flex justify-between items-center text-slate-400 text-[11px]">
                        <span>Tarif de base :</span>
                        <span className="text-slate-200 font-semibold">{currentMaritimeCategory.tariff}</span>
                      </div>
                      {currentMaritimeCategory.pricePerCbm && (
                        <div className="flex justify-between items-center text-slate-400 text-[11px]">
                          <span>Formule de calcul :</span>
                          <span className="font-mono text-slate-300">{parsedCbm} CBM × {currentMaritimeCategory.pricePerCbm.toLocaleString('fr-FR')}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                        <span className="text-slate-300 font-bold text-xs">Total estimé :</span>
                        <span className="font-mono text-base font-extrabold text-[#E0A938]">
                          {estimatedMaritimeTotal}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenDevis}
                      className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Réserver ce volume par devis</span>
                    </button>
                  </div>
                </div>

                {/* Additional Full Container Loads (FCL) Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <h4 className="font-serif font-bold text-sm text-[#0B1B36] mb-2 flex items-center gap-1.5">
                    <Ship className="w-4 h-4 text-blue-600" />
                    <span>Besoin d'un conteneur entier (FCL) ?</span>
                  </h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Pour les importateurs avec de gros volumes réguliers :
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-slate-800">Conteneur 20FT (~33 m³)</span>
                      <strong className="text-blue-900 font-mono">1 850 000 FCFA</strong>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-slate-800">Conteneur 40FT (~67 m³)</span>
                      <strong className="text-blue-900 font-mono">3 200 000 FCFA</strong>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ================= SERVICES COMPLÉMENTAIRES ================= */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                UNE PRISE EN CHARGE GLOBALE DE BOUT EN BOUT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36] mt-1">
                ✈️ Nos services complémentaires
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Un accompagnement logistique complet pour vous simplifier la vie et protéger vos marchandises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPLEMENTARY_SERVICES.map((srv) => (
                <div key={srv.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#0B1B36] flex items-center justify-center shrink-0">
                    {srv.id === 'fret-aerien' && <Plane className="w-6 h-6 text-amber-600" />}
                    {srv.id === 'fret-maritime' && <Ship className="w-6 h-6 text-blue-600" />}
                    {srv.id === 'dedouanement' && <FileCheck className="w-6 h-6 text-emerald-600" />}
                    {srv.id === 'porte-a-porte' && <Truck className="w-6 h-6 text-indigo-600" />}
                    {srv.id === 'emballage' && <Package className="w-6 h-6 text-amber-600" />}
                    {srv.id === 'assurance' && <Shield className="w-6 h-6 text-red-600" />}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#0B1B36] mb-1">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= LES 4 VALEURS D'EMIRATES PREMIUM ================= */}
          <div className="bg-[#061124] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                NOTRE ADN & ENGAGEMENT QUALITÉ
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                ⭐ Les 4 valeurs d’Emirates Premium
              </h3>
              <p className="text-slate-300 text-sm mt-3">
                Ces principes fondateurs guident chacune de nos expéditions entre la Chine et l'Afrique.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPANY_VALUES.map((val) => (
                <div key={val.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      {val.id === 'rapidite' && <Gem className="w-5 h-5" />}
                      {val.id === 'fiabilite' && <ThumbsUp className="w-5 h-5" />}
                      {val.id === 'securite' && <ShieldCheck className="w-5 h-5" />}
                      {val.id === 'professionnalisme' && <Users className="w-5 h-5" />}
                    </div>
                    <span className="font-serif text-lg text-amber-400 font-bold">
                      {val.titleZh}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-white mb-1.5">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Commercial Messages */}
            <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  NOTRE DEVISE
                </span>
                <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                  "Votre cargo, notre engagement du port à votre porte !"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  VISION CONTINENTALE
                </span>
                <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                  "AFRIQUE : NOTRE DESTINATION, VOTRE OPPORTUNITÉ."
                </p>
              </div>
            </div>

          </div>

          {/* ================= SECTION CONTACTS & ADRESSE EN CHINE ================= */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                CONTACTEZ-NOUS • 联系我们
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36] mt-1">
                Nos permanences directes Chine & Cameroun
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Discutez directement avec nos conseillers sur WhatsApp ou par téléphone pour toute question sur nos tarifs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Chine */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-[#0B1B36] text-sm">
                  <span>🇨🇳</span>
                  <span>Chine (Guangzhou)</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                  <a href="https://wa.me/8613249700362" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+86 132 4970 0362</span>
                  </a>
                  <a href="https://wa.me/8613226412565" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+86 132 2641 2565</span>
                  </a>
                </div>
              </div>

              {/* Douala */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-[#0B1B36] text-sm">
                  <span>🇨🇲</span>
                  <span>Douala (Cameroun)</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                  <a href="https://wa.me/237682283033" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+237 682 283 033</span>
                  </a>
                </div>
              </div>

              {/* Yaoundé */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-[#0B1B36] text-sm">
                  <span>🇨🇲</span>
                  <span>Yaoundé (Cameroun)</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                  <a href="https://wa.me/237694865935" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+237 694 865 935</span>
                  </a>
                  <a href="https://wa.me/237678709605" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+237 678 709 605</span>
                  </a>
                </div>
              </div>

              {/* Service Commercial */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-[#0B1B36] text-sm">
                  <span>📞</span>
                  <span>Service Commercial 🇨🇲</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                  <a href="https://wa.me/237658688529" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-amber-900 font-bold hover:text-emerald-700 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+237 658 688 529</span>
                  </a>
                  <span className="text-[10px] text-slate-500 font-sans block">Assistance continue 7j/7</span>
                </div>
              </div>
            </div>

            {/* Official Address in China */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>🇨🇳 ADRESSE OFFICIELLE EN CHINE • 中国地址</span>
                </div>
                <p className="font-mono text-xs sm:text-sm text-slate-200">
                  广州市白云区三元里大道华峰城B6-9-11
                </p>
                <p className="text-xs text-slate-400">
                  B6-9-11, Anhua Home Furnishing & Decoration City, Sanyuanli Avenue, Baiyun District, Guangzhou, China.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono shrink-0">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Emiratespremium@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>www.emiratespremium.com</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Reusable Master CTA Banner with cargo image & WhatsApp logo */}
      <CtaBanner 
        title="Votre cargo, notre engagement du port à votre porte !"
        subtitle="Nos équipes de Guangzhou, Douala et Yaoundé sont mobilisées pour vous offrir la meilleure cotation aérienne et maritime."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
