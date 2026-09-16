import React, { useState } from 'react';
import { ActiveTab, Shipment } from '../types';
import { MOCK_SHIPMENTS } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Search, Package, Plane, Ship, MapPin, CheckCircle2, Clock, 
  Copy, ShieldCheck, AlertCircle, Compass, Radio
} from 'lucide-react';

interface SuiviViewProps {
  onOpenTracking: (code: string) => void;
  onCopyToast: () => void;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDevis?: () => void;
}

export const SuiviView: React.FC<SuiviViewProps> = ({
  onOpenTracking,
  onCopyToast,
  setActiveTab,
  onOpenDevis = () => {}
}) => {
  const [inputCode, setInputCode] = useState('EP2505CN23789');
  const [searchedCode, setSearchedCode] = useState('EP2505CN23789');

  const activeShipment: Shipment = MOCK_SHIPMENTS[searchedCode] || {
    code: searchedCode,
    status: 'Expédition enregistrée dans le système',
    statusType: 'processing',
    origin: 'Hub International Guangzhou (Chine)',
    destination: 'Cameroun (Douala / Yaoundé)',
    weight: '25 kg',
    volume: '0,18 m³',
    service: 'Fret Express',
    transportMode: searchedCode.includes('MAR') ? 'Maritime' : 'Aérien',
    lastUpdate: 'Aujourd\'hui 08:30 UTC',
    location: 'Centre de tri Guangzhou',
    estimatedDelivery: '3 à 5 jours ouvrables',
    referenceClient: 'EP-CLIENT-REC',
    packagesCount: 1,
    declaredValue: 'Conforme',
    timeline: [
      { step: 'Réception au Hub de Guangzhou', date: 'Validé', location: 'Guangzhou', done: true },
      { step: 'Contrôle qualité & Pesée électronique', date: 'Validé', location: 'Guangzhou', done: true },
      { step: 'Préparation & Consolidation vol', date: 'En cours', location: 'Hub Guangzhou', done: false, current: true },
      { step: 'Départ transcontinental', date: 'Programmé', location: 'Transit international', done: false },
      { step: 'Dédouanement & Retrait Cameroun', date: 'En attente', location: 'Douala / Yaoundé', done: false }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    setSearchedCode(inputCode.trim().toUpperCase());
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    onCopyToast();
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Banner with Cargo Plane & Ship Background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Suivi de colis Emirates Premium"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Suivi de colis</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Suivi de votre <span className="text-[#C89736]">expédition</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Consultez en direct l'emplacement géographique et le statut d'acheminement de vos colis depuis nos entrepôts de Chine jusqu'à leur remise au Cameroun.
          </p>

          {/* Search Box inside Hero */}
          <div className="mt-8 max-w-3xl">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="relative flex-1">
                <input
                  type="text"
                  required
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Entrez votre code de suivi (ex: EP2505CN23789)..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white text-slate-800 placeholder-slate-400 focus:outline-hidden font-mono font-bold"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Localiser le colis</span>
              </button>
            </form>

            {/* Quick Demo Pill Links */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-300">
              <span className="text-slate-400">Exemples de dossiers :</span>
              {[
                { code: 'EP2505CN23789', label: 'En vol' },
                { code: 'EP9988CN00123', label: 'Express Livré (Yaoundé)' },
                { code: 'EP3344CN77610', label: 'Maritime Livré (Douala)' },
                { code: 'EP7722CN99104', label: 'Auto Livré (Yaoundé)' }
              ].map((demo) => (
                <button
                  key={demo.code}
                  type="button"
                  onClick={() => {
                    setInputCode(demo.code);
                    setSearchedCode(demo.code);
                  }}
                  className="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-md font-mono text-[11px] font-bold text-amber-300 cursor-pointer transition-colors flex items-center gap-1"
                >
                  <span>{demo.code}</span>
                  <span className="text-[10px] text-emerald-300 font-sans font-medium">({demo.label})</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Tracking Results Content */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Shipment Details Card */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Primary Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
                
                {/* Header with status pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1B36] text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                      {activeShipment.transportMode === 'Maritime' ? (
                        <Ship className="w-7 h-7" />
                      ) : (
                        <Plane className="w-7 h-7" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-extrabold text-[#0B1B36]">
                          {activeShipment.code}
                        </span>
                        <button
                          onClick={() => handleCopy(activeShipment.code)}
                          className="text-slate-400 hover:text-amber-600 p-1 cursor-pointer"
                          title="Copier le numéro"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-slate-500">
                        Mode : {activeShipment.transportMode} • Service : {activeShipment.service}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                      {activeShipment.status}
                    </span>
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-100 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Origine</span>
                    <strong className="text-slate-800 font-bold block mt-0.5 truncate">{activeShipment.origin}</strong>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Destination</span>
                    <strong className="text-slate-800 font-bold block mt-0.5 truncate">{activeShipment.destination}</strong>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Poids & Volume</span>
                    <strong className="text-slate-800 font-bold block mt-0.5">{activeShipment.weight} • {activeShipment.volume}</strong>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Livraison estimée</span>
                    <strong className="text-amber-700 font-bold block mt-0.5">{activeShipment.estimatedDelivery}</strong>
                  </div>
                </div>

                {/* Timeline Component */}
                <div className="pt-6">
                  <h3 className="font-serif font-bold text-lg text-[#0B1B36] mb-6">
                    Étapes du parcours
                  </h3>

                  <div className="space-y-6 relative pl-7 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {activeShipment.timeline.map((step: any, idx: number) => (
                      <div key={idx} className="relative flex items-start gap-4">
                        <div className={`absolute -left-7 top-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold shadow-xs ${
                          step.done 
                            ? 'bg-emerald-500 text-white' 
                            : step.current 
                            ? 'bg-amber-500 text-white ring-4 ring-amber-100' 
                            : 'bg-slate-200 text-slate-400'
                        }`}>
                          {step.done ? <CheckCircle2 className="w-4 h-4 stroke-[3]" /> : idx + 1}
                        </div>

                        <div className="flex-1 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className={`text-sm font-bold ${step.done || step.current ? 'text-slate-900' : 'text-slate-500'}`}>
                              {step.step}
                            </h4>
                            <span className="text-xs font-semibold text-slate-500">{step.date}</span>
                          </div>
                          {step.location && (
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span>{step.location}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirmed Delivery Proof Photo if available */}
                {activeShipment.proofImage && (
                  <div className="mt-8 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-serif font-bold text-base text-emerald-950">
                          Preuve photographique de livraison confirmée
                        </h4>
                      </div>
                      <span className="text-xs font-bold uppercase bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Remis & Conforme
                      </span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-emerald-200 shadow-sm max-h-80 bg-slate-100">
                      <img 
                        src={activeShipment.proofImage} 
                        alt={`Preuve de livraison ${activeShipment.code}`}
                        className="w-full h-full object-cover max-h-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-3 text-xs text-emerald-800">
                      <span>Prise de vue archivée au hub de déchargement / remise client.</span>
                      <span className="font-mono font-bold text-emerald-900">REF CONTRAT : {activeShipment.code}</span>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Right Column: Satellite Radar & Assistance Box */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Satellite Tracking Box */}
              <div className="bg-[#0B1B36] text-white rounded-2xl p-6 shadow-md border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                    RADAR SATELLITE ACTIF
                  </span>
                  <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded font-mono text-slate-300">
                    LIVE UTC
                  </span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Position :</span>
                    <span className="text-emerald-400 font-bold">{activeShipment.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vecteur :</span>
                    <span className="text-slate-200">Guangzhou (CAN) ➔ Douala (DLA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Statut douane :</span>
                    <span className="text-amber-400 font-bold">En règle • Pré-déclaré</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dernier ping :</span>
                    <span className="text-slate-400">{activeShipment.lastUpdate}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  Toutes les expéditions gérées par Emirates Premium bénéficient d'un balisage d'entrepôt et de conteneur certifié.
                </p>
              </div>

              {/* Direct WhatsApp Escalation with authentic WhatsApp Logo */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="./assets/whatsapp-logo.webp" 
                    alt="WhatsApp" 
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#0B1B36]">
                      Votre colis est bloqué ?
                    </h4>
                    <span className="text-[11px] text-slate-500">Support 24h/7j direct</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Notre équipe de dispatching est joignable sur WhatsApp pour vous fournir des photos de conditionnement, confirmer l'heure de vol ou organiser la livraison à domicile.
                </p>

                <a
                  href={`https://wa.me/8613249700362?text=Bonjour,%20je%20suis%20le%20destinataire%20du%20colis%20${activeShipment.code}.%20Pouvez-vous%20me%20renseigner%20?`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#112340] hover:bg-[#18315b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2.5 shadow-xs transition-colors border border-slate-200"
                >
                  <img 
                    src="./assets/whatsapp-logo.webp" 
                    alt="Logo WhatsApp" 
                    className="w-5 h-5 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <span>Discuter sur WhatsApp (+86 132 4970 0362)</span>
                </a>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantie livraison sans perte ni avarie.</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Reusable Master CTA Banner with cargo image & WhatsApp logo */}
      <CtaBanner 
        title="Besoin d'un service sur mesure ?"
        subtitle="Notre équipe est à votre disposition pour vous accompagner dans toutes vos expéditions."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
