import React from 'react';
import { ActiveTab } from '../types';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Copy, CheckCircle2, AlertTriangle, Phone, MapPin, 
  ShieldCheck, ArrowRight 
} from 'lucide-react';

interface AdresseChineViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onCopyToast: (msg?: string) => void;
  onOpenDevis: () => void;
}

export const AdresseChineView: React.FC<AdresseChineViewProps> = ({
  setActiveTab,
  onCopyToast,
  onOpenDevis
}) => {
  const addressChinese = '广东省广州市白云区鹤龙一路999号聚富国际物流园 B6-09 & B6-11 档';
  const addressEnglish = 'B6-09 & B6-11, Jufu International Logistics Park, No. 999 Helong 1st Road, Baiyun District, Guangzhou, Guangdong, China';
  const contactPhone = '+86 132 4970 0362';
  const recipientName = 'Emirates Premium Cargo (收件人: 阿联酋优质货运)';

  const fullLabelText = `收件人 (Destinataire): ${recipientName} + [VOTRE CODE CLIENT & NOM]
电话 (Téléphone / WeChat): ${contactPhone}
地址 (Adresse): ${addressChinese}
Postcode / 邮编: 510440`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onCopyToast(`${label} copié dans le presse-papier !`);
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Banner with cargo background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="./assets/hero-cargo.jpg" 
            alt="Hub Chine Emirates Premium" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Hub Chine (Guangzhou)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Adresse officielle du <span className="text-[#C89736]">Hub Chine (Guangzhou)</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            À transmettre directement à vos fournisseurs chinois (Alibaba, 1688, Taobao, usines) pour la livraison de vos colis à notre entrepôt central.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Entrepôt sécurisé 24h/24 avec pesée certifiée</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>WeChat & WhatsApp local : +86 132 4970 0362</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Master Address Card */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Guangzhou Hub Visual Card */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                  <img 
                    src="./assets/guangzhou-hub.jpg" 
                    alt="Entrepôt Guangzhou Emirates Premium" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-3 left-4">
                    <span className="text-[10px] font-bold bg-[#C89736] text-[#0B1B36] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      ENTREPÔT CENTRAL & LOGISTIQUE
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-serif font-bold text-xl drop-shadow-md">
                        Jufu International Logistics Park — Guangzhou
                      </h3>
                      <p className="text-xs text-slate-300">Baiyun District, Guangdong, Chine</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/80 text-white text-xs font-bold">
                      Réception 7j/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Golden Warning Notice */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-4 shadow-xs">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-950 text-sm mb-1">
                    Consigne impérative pour vos fournisseurs :
                  </h4>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Exigez de votre fournisseur qu'il inscrive clairement sur chaque carton : 
                    <strong className="block text-sm font-extrabold text-[#0B1B36] mt-1 p-2 bg-white/80 rounded-lg border border-amber-200">
                      [VOTRE CODE CLIENT] + [VOTRE NOM] + [VOTRE NUMÉRO CAMEROUN]
                    </strong>
                    Sans cette mention, l'identification de votre colis peut subir des retards lors du déchargement.
                  </p>
                </div>
              </div>

              {/* Chinese & English Address Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                
                {/* Chinese Address (Characters) */}
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      Adresse en Chinois (à copier pour le fournisseur / 1688 / Taobao)
                    </span>
                    <button
                      onClick={() => copyToClipboard(addressChinese, 'Adresse chinoise')}
                      className="text-xs font-bold text-[#0B1B36] hover:text-amber-600 flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier Hanzi</span>
                    </button>
                  </div>

                  <p className="font-sans font-bold text-base sm:text-lg text-slate-900 pt-2 select-all">
                    {addressChinese}
                  </p>
                </div>

                {/* English / Pinyin Address */}
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full">
                      Adresse en Anglais / Pinyin (pour factures & transit)
                    </span>
                    <button
                      onClick={() => copyToClipboard(addressEnglish, 'Adresse anglaise')}
                      className="text-xs font-bold text-[#0B1B36] hover:text-amber-600 flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier Anglais</span>
                    </button>
                  </div>

                  <p className="text-sm font-medium text-slate-800 pt-2 select-all">
                    {addressEnglish}
                  </p>
                </div>

                {/* Contact Phone & Recipient */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 text-xs block mb-1">Téléphone de l'entrepôt (WeChat) :</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold text-sm">{contactPhone}</strong>
                      <button
                        onClick={() => copyToClipboard(contactPhone, 'Numéro de téléphone')}
                        className="text-xs text-amber-700 hover:underline cursor-pointer"
                      >
                        Copier
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 text-xs block mb-1">Nom du contact au Hub :</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold text-sm">Emirates Premium Hub</strong>
                      <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Guangzhou
                      </span>
                    </div>
                  </div>
                </div>

                {/* Complete Formatted Label */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-serif font-bold text-sm text-[#0B1B36]">
                      Bordereau prêt à l'envoi pour votre fournisseur
                    </h5>
                    <button
                      onClick={() => copyToClipboard(fullLabelText, 'Bordereau complet')}
                      className="px-4 py-2 bg-[#0B1B36] hover:bg-[#152A4A] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copier le texte complet</span>
                    </button>
                  </div>

                  <pre className="p-4 bg-slate-900 text-slate-200 text-xs rounded-xl font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {fullLabelText}
                  </pre>
                </div>

              </div>

            </div>

            {/* Right Col: Practical Tips & WhatsApp Support */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Important Checks */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#0B1B36]">
                  Recommandations avant expédition
                </h4>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Demandez au fournisseur le <strong>numéro de suivi interne chinois</strong> (SF Express, ZTO, YTO, etc.) dès expédition de l'usine.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Transmettez ce numéro à notre équipe WhatsApp pour nous permettre de pré-enregistrer votre colis.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exigez un emballage renforcé (carton double cannelure et film étanche) pour les articles fragiles.</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Hub Box with authentic WhatsApp logo */}
              <div className="bg-[#0B1B36] text-white rounded-2xl p-6 shadow-md border border-slate-700 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/10 p-1 flex items-center justify-center">
                    <img 
                      src="./assets/whatsapp-logo.webp" 
                      alt="WhatsApp" 
                      className="w-full h-full object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-base text-white">
                      Agent de réception Chine
                    </h5>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      En ligne sur WhatsApp
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Vous avez un doute ou votre fournisseur a besoin de communiquer directement en chinois avec notre entrepôt ? Contactez notre agent bilingue.
                </p>

                <a
                  href={`https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20annoncer%20un%20colis%20pour%20l%27entrep%C3%B4t%20de%20Guangzhou.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#112340] hover:bg-[#18315b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2.5 shadow-xs transition-colors border border-slate-600"
                >
                  <img 
                    src="./assets/whatsapp-logo.webp" 
                    alt="WhatsApp" 
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <span>Écrire à l'entrepôt (+86 132 4970 0362)</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Master CTA Banner */}
      <CtaBanner 
        title="Prêt à envoyer vos colis à notre Hub Chine ?"
        subtitle="Obtenez dès maintenant votre code client personnalisé et démarrez vos expéditions."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
