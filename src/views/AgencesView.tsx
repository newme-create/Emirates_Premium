import React from 'react';
import { ActiveTab } from '../types';
import { AGENCIES_DATA } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, 
  Building2, CheckCircle2 
} from 'lucide-react';

interface AgencesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDevis: () => void;
}

export const AgencesView: React.FC<AgencesViewProps> = ({ setActiveTab, onOpenDevis }) => {
  const getAgencyImage = (city: string) => {
    if (city.toLowerCase().includes('yaoundé') || city.toLowerCase().includes('yaounde')) {
      return './assets/yaounde-city.jpg';
    }
    return './assets/douala-port.jpg';
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Banner with Cargo Plane & Ship background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Agences Emirates Premium Cameroun" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Nos Agences</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Nos agences au <span className="text-[#C89736]">Cameroun</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Retrouvez nos équipes à Yaoundé et Douala pour le retrait de vos colis, vos démarches de dédouanement et le conseil pour vos importations de Chine.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Présence physique agréée à Yaoundé & Douala</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Accueil 6 jours sur 7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cameroon Agencies Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {AGENCIES_DATA.map((agency) => (
              <div
                key={agency.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Agency City Visual Photo */}
                  <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                    <img 
                      src={getAgencyImage(agency.city)} 
                      alt={`Agence ${agency.city}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute top-3 left-4">
                      <span className="text-[10px] font-bold bg-[#C89736] text-[#0B1B36] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        {agency.tag || `${agency.country.toUpperCase()}`}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <h3 className="font-serif font-bold text-2xl text-white drop-shadow-md">
                        {agency.city}
                      </h3>
                      <span className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{agency.country}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-sm mb-0.5">Adresse :</strong>
                        <p className="text-slate-600 leading-relaxed">{agency.address}</p>
                        {agency.addressZh && (
                          <p className="text-amber-800/80 font-mono text-[11px] mt-1 bg-amber-50/80 px-2 py-1 rounded border border-amber-200/60">
                            {agency.addressZh}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-sm mb-0.5">Horaires d'ouverture :</strong>
                        <p className="text-slate-600 leading-relaxed">{agency.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-sm mb-1">Téléphones directs :</strong>
                        <div className="flex flex-wrap gap-2">
                          {agency.phones.map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone.replace(/\s+/g, '')}`}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-amber-100 rounded-lg font-bold text-slate-800 hover:text-amber-900 transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {agency.email && (
                      <div className="flex items-start gap-3 text-xs text-slate-700">
                        <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900 font-bold text-sm mb-0.5">Email :</strong>
                          <a href={`mailto:${agency.email}`} className="text-amber-700 font-semibold hover:underline">
                            {agency.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Services at agency */}
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wide">
                        Services disponibles à cette agence :
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                        {agency.services.map((srv, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{srv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex gap-3">
                  <a
                    href={`tel:${agency.phones[0].replace(/\s+/g, '')}`}
                    className="flex-1 py-2.5 bg-[#0B1B36] hover:bg-[#152A4A] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Appeler l'agence</span>
                  </a>

                  <a
                    href="https://wa.me/8613249700362"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 bg-[#112340] hover:bg-[#18315b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-300"
                  >
                    <img 
                      src="./assets/whatsapp-logo.webp" 
                      alt="WhatsApp" 
                      className="w-4 h-4 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guangzhou Hub Callout Banner with photo */}
          <div className="bg-gradient-to-br from-[#061124] to-[#0B1B36] rounded-3xl overflow-hidden text-white shadow-xl flex flex-col md:flex-row items-stretch justify-between border-2 border-amber-500/30">
            <div className="p-8 sm:p-10 space-y-4 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">
                <span>🇨🇳</span>
                <span>HUB INTERNATIONAL EN CHINE</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Vous achetez en Chine ? Transmettez notre adresse de Guangzhou à vos fournisseurs
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Retrouvez l'adresse complète en caractères chinois (Hanzi) et en pinyin pour vos livraisons 1688, Taobao, Alibaba ou usines physiques.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveTab('adresse-chine');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-extrabold text-sm rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Voir l'adresse du Hub Chine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Guangzhou hub visual */}
            <div className="w-full md:w-72 lg:w-96 relative min-h-[220px]">
              <img 
                src="./assets/guangzhou-hub.jpg" 
                alt="Hub Emirates Premium Guangzhou Chine" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#061124] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-xs p-2 rounded-lg text-left text-[11px] text-slate-200">
                <strong className="text-amber-400 block font-bold">Guangzhou Logistics Park</strong>
                <span>Entrepôt & Pesée électronique</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Master CTA Banner with cargo image & WhatsApp logo */}
      <CtaBanner 
        title="Une question pour nos agences ?"
        subtitle="Nos agents à Douala et Yaoundé sont à votre disposition pour vous accueillir et vous conseiller."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
