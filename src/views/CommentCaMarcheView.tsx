import React from 'react';
import { ActiveTab } from '../types';
import { PROCESS_5_STEPS } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  UserCheck, PackageOpen, ShieldCheck, PlaneTakeoff, Truck, 
  ArrowRight, Check, MapPin, Clock, Headphones
} from 'lucide-react';

interface CommentCaMarcheViewProps {
  onOpenDevis: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const CommentCaMarcheView: React.FC<CommentCaMarcheViewProps> = ({
  onOpenDevis,
  setActiveTab
}) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01': return <UserCheck className="w-5 h-5" />;
      case '02': return <PackageOpen className="w-5 h-5" />;
      case '03': return <ShieldCheck className="w-5 h-5" />;
      case '04': return <PlaneTakeoff className="w-5 h-5" />;
      case '05': return <Truck className="w-5 h-5" />;
      default: return <UserCheck className="w-5 h-5" />;
    }
  };

  const getStepImage = (num: string) => {
    switch (num) {
      case '01': return './assets/guangzhou-hub.jpg';
      case '02': return './assets/guangzhou-hub.jpg';
      case '03': return './assets/air-cargo.jpg';
      case '04': return './assets/douala-port.jpg';
      case '05': return './assets/delivery-courier.jpg';
      default: return './assets/hero-cargo.jpg';
    }
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Banner with Cargo Plane & Ship background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Processus logistique Emirates Premium" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Comment ça marche</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Comment ça <span className="text-[#C89736]">marche ?</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Un processus fluide, transparent et sécurisé, de votre premier contact jusqu'à la remise en main propre de vos marchandises au Cameroun et en Afrique centrale.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sécurité garantie sur toute la chaîne logistique</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Suivi en temps réel de votre colis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Headphones className="w-4 h-4 text-amber-400" />
              <span>Accompagnement personnalisé permanent</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Cards Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C89736] uppercase tracking-widest">
              UN PROCESSUS SIMPLE ET ÉPROUVÉ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36] mt-2">
              5 étapes pour une expédition réussie
            </h2>
            <div className="w-16 h-1 bg-[#C89736] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {PROCESS_5_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Photo thumbnail */}
                  <div className="h-28 w-full relative overflow-hidden bg-slate-900">
                    <img 
                      src={getStepImage(step.num)} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                    
                    <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-[#C89736] text-[#0B1B36] font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {step.num}
                    </span>
                    <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#0B1B36]/90 backdrop-blur-xs text-amber-400 flex items-center justify-center shadow-sm">
                      {getStepIcon(step.num)}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif font-bold text-base text-[#0B1B36] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[64px]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Badge Pill */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 text-center">
                    <span className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-2.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-bold">
                      <span>✓</span>
                      <span>{step.badge}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Route Map & Why Choose Us (2-Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Route Map Box */}
            <div className="lg:col-span-7 bg-[#EBF3FA] rounded-2xl border border-[#D0E2F2] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#0B1B36] mb-2">
                  De la Chine au Cameroun et partout en Afrique centrale
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Grâce à notre réseau international et à nos partenaires de confiance, nous assurons un transport rapide, sécurisé et sans tracas.
                </p>
              </div>

              {/* Graphic Diagram */}
              <div className="bg-white/80 rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 my-4 shadow-xs">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B36] text-white text-xs font-bold shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span>Chine (Guangzhou Hub)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1.5">Réception, pesée & consolidation</span>
                </div>

                <div className="flex flex-col items-center gap-1 px-4">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Aérien (24-72h) / Maritime</span>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
                    <span className="w-12 border-t-2 border-dashed border-amber-400"></span>
                    <span>✈️ / 🚢</span>
                    <span className="w-12 border-t-2 border-dashed border-amber-400"></span>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B36] text-white text-xs font-bold shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Cameroun (Douala / Yaoundé)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1.5">Dédouanement & remise client</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  Hub logistique Baiyun Guangzhou
                </span>
                <span className="text-amber-700 font-bold">
                  Couverture Tchad • RCA • Gabon • Congo
                </span>
              </div>
            </div>

            {/* Why Choose Emirates Premium Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#0B1B36] mb-6">
                  Pourquoi choisir Emirates Premium ?
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  {[
                    'Plus de 5 ans d\'expérience dans le fret Chine - Afrique',
                    'Équipe professionnelle bilingue réactive 7j/7',
                    'Suivi de colis par satellite en temps réel',
                    'Service de sourcing et accompagnement commercial usine',
                    'Présence physique vérifiable en Chine et au Cameroun',
                    'Tarifs transparents sans aucune surprise au dédouanement'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C89736] text-[#0B1B36] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenDevis}
                  className="w-full py-3 bg-[#0B1B36] hover:bg-[#152A4A] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Démarrer une expédition avec nous</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Master CTA Banner with cargo background and authentic WhatsApp logo */}
      <CtaBanner 
        title="Votre marchandise entre de bonnes mains."
        subtitle="Contactez-nous dès maintenant pour un devis personnalisé ou pour toute question sur la consignation de vos colis à Guangzhou."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
