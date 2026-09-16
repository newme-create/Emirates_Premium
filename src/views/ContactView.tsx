import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Phone, Mail, MapPin, Send, MessageSquare, Clock, 
  CheckCircle2, ShieldCheck, Globe 
} from 'lucide-react';

interface ContactViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSubmitToast: (msg: string) => void;
  onOpenDevis?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActiveTab, onSubmitToast, onOpenDevis }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Renseignement général');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    onSubmitToast('Votre message a été transmis avec succès. Notre équipe vous recontactera sous peu.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Banner with cargo background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Contact Emirates Premium" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Contact</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Contactez <span className="text-[#C89736]">Emirates Premium</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Une question sur un envoi, une demande de tarification spécifique ou un conseil logistique ? Nos conseillers sont à votre écoute en Chine et au Cameroun.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Réponse garantie sous 1 heure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Assistance personnalisée 7j/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Coordinates */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  FORMULAIRE DIRECT
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#0B1B36] mt-1">
                  Envoyez-nous un message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tous les champs marqués d'une astérisque (*) sont obligatoires.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Votre nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Alain Mbida"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+237 6..."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Objet de votre demande *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    >
                      <option value="Renseignement général">Renseignement général</option>
                      <option value="Suivi d'un colis existant">Suivi d'un colis existant</option>
                      <option value="Demande de cotation spéciale">Demande de cotation spéciale</option>
                      <option value="Sourcing / Accompagnement Chine">Sourcing / Achats usine Chine</option>
                      <option value="Automobile / Engins">Importation de véhicules</option>
                      <option value="Partenariat / Affrètement">Partenariat B2B / Conteneurs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Votre message détaillé *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Précisez votre demande, le type de marchandises, la ville de destination ou votre numéro de colis..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-extrabold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande à l'équipe</span>
                </button>
              </form>
            </div>

            {/* Right Col: 3 Agency Contact Cards with Visual Photos */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Hub Chine */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-32 w-full relative overflow-hidden bg-slate-900">
                  <img 
                    src="./assets/guangzhou-hub.jpg" 
                    alt="Hub Guangzhou" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif font-bold text-sm">Hub International Chine</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-[#0B1B36]">
                      Guangzhou
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    B6-09 & B6-11, Jufu International Logistics Park, No. 999 Helong 1st Road, Baiyun District, Guangzhou, Guangdong
                  </p>

                  <div className="pt-1">
                    <a 
                      href="https://wa.me/8613249700362" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg font-bold flex items-center gap-2 hover:bg-emerald-100 text-xs w-fit"
                    >
                      <img 
                        src="./assets/whatsapp-logo.webp" 
                        alt="WhatsApp" 
                        className="w-4 h-4 rounded-full object-cover shrink-0" 
                        referrerPolicy="no-referrer"
                      />
                      <span>WhatsApp Direct : +86 132 4970 0362</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Yaoundé */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-32 w-full relative overflow-hidden bg-slate-900">
                  <img 
                    src="./assets/yaounde-city.jpg" 
                    alt="Agence Yaoundé" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif font-bold text-sm">Agence Cameroun — Yaoundé</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-white">
                      Centre
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Avenue Charles de Gaulle, Immeuble Emirates Premium, Yaoundé
                  </p>

                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    <a href="tel:+237641196871" className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-slate-800 rounded-lg font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      +237 6 41 19 68 71
                    </a>
                    <a href="tel:+237620285079" className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-slate-800 rounded-lg font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      +237 6 20 28 50 79
                    </a>
                  </div>
                </div>
              </div>

              {/* Douala */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-32 w-full relative overflow-hidden bg-slate-900">
                  <img 
                    src="./assets/douala-port.jpg" 
                    alt="Agence Douala" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif font-bold text-sm">Agence Cameroun — Douala</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-white">
                      Littoral
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Avenue de la Liberté, Face Port Autonome de Douala
                  </p>

                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    <a href="tel:+237690937024" className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-slate-800 rounded-lg font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      +237 6 90 93 70 24
                    </a>
                    <a href="mailto:emiratespremium@gmail.com" className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-slate-800 rounded-lg font-bold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      emiratespremium@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Reusable Master CTA Banner */}
      <CtaBanner 
        title="Une question urgente ou besoin d'un devis immédiat ?"
        subtitle="Nos équipes à Guangzhou et à Douala vous répondent directement sur WhatsApp ou par devis en ligne."
        onOpenDevis={onOpenDevis || (() => {})}
      />

    </div>
  );
};
