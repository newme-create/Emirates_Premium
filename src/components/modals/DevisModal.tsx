import React, { useState } from 'react';
import { X, Calculator, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (name: string, phone: string, estimatedPrice?: string) => void;
}

export const DevisModal: React.FC<DevisModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('air_express');
  const [destination, setDestination] = useState('Douala');
  const [weight, setWeight] = useState('10');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  // Real-time estimate calculation
  const parsedWeight = parseFloat(weight) || 0;
  let estimatedPriceStr = '';

  if (service === 'air_super') {
    estimatedPriceStr = `${(parsedWeight * 15000).toLocaleString('fr-FR')} XAF (Super Express 24H)`;
  } else if (service === 'air_express') {
    estimatedPriceStr = `${(parsedWeight * 12000).toLocaleString('fr-FR')} XAF (Service Express 48-72H, dès 5kg)`;
  } else if (service === 'air_standard') {
    estimatedPriceStr = `${(parsedWeight * 8500).toLocaleString('fr-FR')} XAF (Service Standard 7-14j, dès 100kg)`;
  } else if (service === 'air_special') {
    estimatedPriceStr = `${(parsedWeight * 9000).toLocaleString('fr-FR')} XAF (Service Spécial 10-20j, batteries/liquides)`;
  } else if (service === 'phone_bas') {
    estimatedPriceStr = `${(parsedWeight * 5000).toLocaleString('fr-FR')} XAF (Téléphones bas de gamme / Choroko au kg)`;
  } else if (service === 'phone_haut') {
    estimatedPriceStr = `10 000 à 25 000 XAF / unité (Haut de gamme selon valeur)`;
  } else if (service === 'sea_ordinary') {
    estimatedPriceStr = `${(parsedWeight * 330000).toLocaleString('fr-FR')} FCFA (${parsedWeight} CBM)`;
  } else if (service === 'sea_heavy') {
    estimatedPriceStr = `${(parsedWeight * 360000).toLocaleString('fr-FR')} FCFA (${parsedWeight} CBM)`;
  } else if (service === 'sea_machines') {
    estimatedPriceStr = `${(parsedWeight * 380000).toLocaleString('fr-FR')} FCFA (${parsedWeight} CBM)`;
  } else if (service === 'sea_special') {
    estimatedPriceStr = 'Sur devis personnalisé (Batteries & Spéciaux)';
  } else if (service === 'auto') {
    estimatedPriceStr = 'À partir de 1 850 000 FCFA (selon modèle & taxes)';
  } else {
    estimatedPriceStr = 'Sur mesure après analyse';
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    onSubmitSuccess(name, phone, estimatedPriceStr);
    onClose();
    // Reset form
    setName('');
    setPhone('');
    setEmail('');
    setDetails('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 to-[#0B1B36] text-white">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
              Tarification & Réservation Rapide
            </span>
            <h3 className="font-serif font-bold text-lg leading-tight">
              Demande de Devis Gratuit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          
          {/* Real-time estimate card */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-200/80 text-amber-900 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-amber-800 font-semibold block">Estimation indicative :</span>
                <strong className="text-sm font-extrabold text-[#0B1B36]">{estimatedPriceStr}</strong>
              </div>
            </div>
            <span className="text-[11px] text-amber-700 bg-white/80 px-2 py-0.5 rounded border border-amber-200">
              Sans frais cachés
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Jean Kamgang"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Téléphone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: +237 6 90 00 00 00"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Type de service souhaité <span className="text-red-500">*</span>
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
              >
                <optgroup label="Fret Aérien (Chine ➔ Cameroun & Afrique)">
                  <option value="air_super">🔴 1 — Super Express 24H (15 000 XAF/kg) - Marchandises urgentes</option>
                  <option value="air_express">🔵 2 — Service Express 48-72H (12 000 XAF/kg) - Dès 5 kg</option>
                  <option value="air_standard">🟢 3 — Service Standard 7-14j (8 500 XAF/kg) - Dès 100 kg sans liquide</option>
                  <option value="air_special">🟠 4 — Service Spécial 10-20j (9 000 XAF/kg) - Liquides, Batteries, MARC UP</option>
                </optgroup>
                <optgroup label="📱 Téléphones & Électronique">
                  <option value="phone_bas">📱 Téléphones Bas de gamme / Choroko (5 000 XAF/kg)</option>
                  <option value="phone_haut">📱 Téléphones Haut de gamme (10 000 – 25 000 XAF/unité)</option>
                </optgroup>
                <optgroup label="Fret Maritime Groupage CBM (Port de Douala)">
                  <option value="sea_ordinary">Maritime - Marchandises ordinaires : 330 000 FCFA/CBM</option>
                  <option value="sea_heavy">Maritime - Marchandises lourdes : 360 000 FCFA/CBM</option>
                  <option value="sea_machines">Maritime - Machines & BTP : 380 000 FCFA/CBM</option>
                  <option value="sea_special">Maritime - Batteries & produits spéciaux : Sur devis</option>
                </optgroup>
                <optgroup label="Autres Services">
                  <option value="sourcing">Sourcing & Achats Fournisseurs Chine</option>
                  <option value="auto">Automobile & Engins Industriels</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ville de destination <span className="text-red-500">*</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
              >
                <option value="Douala">Douala (Port / Agence / Domicile)</option>
                <option value="Yaoundé">Yaoundé (Siège / Domicile)</option>
                <option value="Bafoussam">Bafoussam (Ouest)</option>
                <option value="Autre Cameroun">Autre ville du Cameroun</option>
                <option value="Tchad / Ndjamena">Tchad (N'Djaména)</option>
                <option value="RCA / Bangui">RCA (Bangui)</option>
                <option value="Gabon / Congo">Gabon / Congo</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {service.startsWith('sea_') ? 'Volume estimé en CBM (m³)' : 'Poids estimé (kg)'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={service.startsWith('sea_') ? "Ex: 2.5 (CBM)" : "Ex: 15 (kg)"}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
                />
                <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400">
                  {service.startsWith('sea_') ? 'CBM' : 'kg'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {service.startsWith('sea_') 
                  ? '1 CBM = 1 mètre cube (1m x 1m x 1m). Minimum 0.5 CBM.' 
                  : 'Tarif calculé au kilogramme net ou volumétrique.'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email (optionnel)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Description de vos marchandises
            </label>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Précisez la nature des produits (ex: vêtements, pièces auto, téléphones, machines...), fournisseur chinois..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Réponse garantie en moins d'une heure avec attribution de code client.</span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer ma demande de devis</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
