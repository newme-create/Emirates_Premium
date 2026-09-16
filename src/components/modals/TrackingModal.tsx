import React from 'react';
import { Shipment } from '../../types';
import { MOCK_SHIPMENTS } from '../../data/mockData';
import { X, Plane, Ship, Package, CheckCircle2, Clock, MapPin, Copy, MessageSquare, ShieldCheck } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  trackingCode: string;
  onClose: () => void;
  onCopyToast: () => void;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  trackingCode,
  onClose,
  onCopyToast
}) => {
  if (!isOpen) return null;

  const normalizedCode = trackingCode.trim().toUpperCase() || 'EP2505CN23789';
  const shipment: Shipment = MOCK_SHIPMENTS[normalizedCode] || {
    code: normalizedCode,
    status: 'En cours de traitement au Hub',
    statusType: 'processing',
    origin: 'Hub Guangzhou (Chine)',
    destination: 'Cameroun (Douala / Yaoundé)',
    weight: '35 kg',
    volume: '0,25 m³',
    service: 'Fret Régulier',
    transportMode: normalizedCode.includes('MAR') ? 'Maritime' : 'Aérien',
    lastUpdate: 'Aujourd\'hui',
    location: 'Hub International Guangzhou, Chine',
    estimatedDelivery: '3 à 7 jours ouvrables',
    referenceClient: 'EP-CLIENT-REC',
    packagesCount: 1,
    declaredValue: 'En cours d\'évaluation',
    timeline: [
      { step: 'Réception au Hub de Guangzhou', date: 'Enregistré', location: 'Guangzhou', done: true },
      { step: 'Contrôle qualité & Pesée', date: 'Validé', location: 'Guangzhou', done: true },
      { step: 'Préparation & Consolidation vol/conteneur', date: 'En cours', location: 'Hub Guangzhou', done: false, current: true },
      { step: 'Expédition transcontinentale', date: 'En attente', location: 'Transit', done: false },
      { step: 'Dédouanement et livraison finale', date: 'En attente', location: 'Cameroun', done: false }
    ]
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shipment.code);
    onCopyToast();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B36] text-amber-400 flex items-center justify-center shadow-xs">
              {shipment.transportMode === 'Maritime' ? (
                <Ship className="w-5 h-5" />
              ) : (
                <Plane className="w-5 h-5" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-[#0B1B36]">
                  Détails de l'expédition
                </h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  {shipment.status}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-mono font-bold text-slate-600">
                  {shipment.code}
                </span>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-amber-600 p-0.5 cursor-pointer"
                  title="Copier le code"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Route Summary Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Origine :</span>
              <strong className="text-slate-800 font-bold block truncate">{shipment.origin}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Destination :</span>
              <strong className="text-slate-800 font-bold block truncate">{shipment.destination}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Poids & Volume :</span>
              <strong className="text-slate-800 font-bold block">{shipment.weight} • {shipment.volume}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Livraison estimée :</span>
              <strong className="text-amber-700 font-bold block">{shipment.estimatedDelivery}</strong>
            </div>
          </div>

          {/* Current Status banner */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-900 block">
                Localisation actuelle : {shipment.location}
              </span>
              <span className="text-[11px] text-amber-700">
                Dernière mise à jour confirmée : {shipment.lastUpdate}
              </span>
            </div>
          </div>

          {/* Timeline History */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#0B1B36] mb-3">
              Historique et progression de l'acheminement
            </h4>
            <div className="space-y-3 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {shipment.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-3 text-xs">
                  <div className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-xs ${
                    step.done 
                      ? 'bg-emerald-500 text-white' 
                      : step.current 
                      ? 'bg-amber-500 text-white ring-4 ring-amber-100' 
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    {step.done ? (
                      <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <strong className={`font-bold ${step.done || step.current ? 'text-slate-800' : 'text-slate-400'}`}>
                        {step.step}
                      </strong>
                      <span className="text-[11px] text-slate-400">{step.date}</span>
                    </div>
                    {step.location && (
                      <span className="text-[11px] text-slate-500 block">{step.location}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Delivery Proof Photo if available */}
          {shipment.proofImage && (
            <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-4">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Preuve photographique de remise / livraison
                </span>
                <span className="text-[10px] font-bold uppercase bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full">
                  Remise certifiée
                </span>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-emerald-200 shadow-xs max-h-56 bg-slate-100">
                <img 
                  src={shipment.proofImage} 
                  alt={`Preuve de livraison pour le dossier ${shipment.code}`}
                  className="w-full h-full object-cover max-h-56"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-emerald-700 mt-2 flex items-center justify-between">
                <span>Dossier scellé et archivé par l'agent Emirates Premium.</span>
                <span className="font-mono text-[10px] font-bold text-emerald-900">REF: {shipment.code}</span>
              </p>
            </div>
          )}

          {/* Extra Shipment details */}
          <div className="border-t border-slate-100 pt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
            <div>
              <span className="text-slate-400 text-[11px] block">Réf. Client</span>
              <span className="font-semibold">{shipment.referenceClient || 'N/A'}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">Nombre de colis</span>
              <span className="font-semibold">{shipment.packagesCount || 1} colis</span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">Valeur déclarée</span>
              <span className="font-semibold">{shipment.declaredValue || 'Conforme'}</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <a
            href={`https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20mon%20colis%20${shipment.code}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#112340] hover:bg-[#18315b] text-white text-xs font-bold transition-colors shadow-xs border border-slate-700"
          >
            <img 
              src="./assets/whatsapp-logo.webp" 
              alt="WhatsApp" 
              className="w-4 h-4 rounded-full object-cover shrink-0" 
              referrerPolicy="no-referrer"
            />
            <span>Assistance WhatsApp pour ce colis</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
