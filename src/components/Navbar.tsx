import React, { useState } from 'react';
import { ActiveTab, UserSession } from '../types';
import { ChevronDown, Phone, LogIn, UserCheck, Menu, X, Download, FileArchive } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  user: UserSession | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onLogout: () => void;
  onOpenDevis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  user,
  onOpenAuth,
  onLogout,
  onOpenDevis
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [agenciesDropdownOpen, setAgenciesDropdownOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAgenciesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-12 h-12 rounded-full border-2 border-amber-500/80 p-0.5 bg-gradient-to-br from-slate-900 to-[#0B1B36] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-xl tracking-tight text-amber-400">E</span>
              <span className="font-serif font-bold text-xl tracking-tight text-white -ml-0.5">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg sm:text-xl text-[#0B1B36] leading-tight tracking-wide">
                EMIRATES PREMIUM
              </span>
              <span className="text-[10px] font-bold text-[#C89736] tracking-wider uppercase">
                INTERNATIONAL CARGO HUB • CHINA • AFRICA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('accueil')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'accueil'
                  ? 'text-amber-600 bg-amber-50/80 font-bold'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Accueil
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                  activeTab === 'services'
                    ? 'text-amber-600 bg-amber-50/80 font-bold'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Fret Aérien (Express & Standard)</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">24-72h</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Fret Maritime (CBM & Conteneurs)</span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">CBM</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    Sourcing & Négociation Chine
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    Automobile Premium & Engins
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    Emballage sécurisé & Reconditionnement
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    Livraison Porte-à-porte au Cameroun
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('comment-ca-marche')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'comment-ca-marche'
                  ? 'text-amber-600 bg-amber-50/80 font-bold'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Comment ça marche
            </button>

            <button
              onClick={() => handleNavClick('tarifs')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'tarifs'
                  ? 'text-amber-600 bg-amber-50/80 font-bold'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Tarifs
            </button>

            <button
              onClick={() => handleNavClick('suivi')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'suivi'
                  ? 'text-amber-600 bg-amber-50/80 font-bold'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Suivi de colis
            </button>

            {/* Agences Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAgenciesDropdownOpen(true)}
              onMouseLeave={() => setAgenciesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('agences')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                  activeTab === 'agences' || activeTab === 'adresse-chine'
                    ? 'text-amber-600 bg-amber-50/80 font-bold'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                Nos agences
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {agenciesDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('adresse-chine')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    🇨🇳 Chine (Hub Guangzhou)
                  </button>
                  <button
                    onClick={() => handleNavClick('agences')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                  >
                    🇨🇲 Cameroun (Yaoundé & Douala)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'contact'
                  ? 'text-amber-600 bg-amber-50/80 font-bold'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions: Devis + Single Connexion/User Button + Code ZIP + Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href="./emirates-premium-cargo-source.zip"
              download="emirates-premium-cargo-source.zip"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors shadow-2xs"
              title="Télécharger l'intégralité du code source du projet (.ZIP)"
            >
              <FileArchive className="w-3.5 h-3.5 text-amber-600" />
              <span>Code (.ZIP)</span>
              <Download className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={onOpenDevis}
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold rounded-lg border border-amber-600 text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              Devis Gratuit
            </button>

            {user ? (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-bold">{user.fullName.split(' ')[0]}</span>
                <button
                  onClick={onLogout}
                  className="text-slate-400 hover:text-red-600 ml-1 cursor-pointer transition-colors text-[11px]"
                  title="Déconnexion"
                >
                  (Quitter)
                </button>
              </div>
            ) : (
              <button
                onClick={() => onOpenAuth('login')}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-[#0B1B36] text-white hover:bg-[#152A4A] transition-colors shadow-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Connexion</span>
              </button>
            )}

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <button
            onClick={() => handleNavClick('accueil')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'accueil' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'services' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Services (Fret, Sourcing, Auto)
          </button>
          <button
            onClick={() => handleNavClick('comment-ca-marche')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'comment-ca-marche' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Comment ça marche (5 étapes)
          </button>
          <button
            onClick={() => handleNavClick('tarifs')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'tarifs' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Tarifs Fret Aérien & Maritime
          </button>
          <button
            onClick={() => handleNavClick('suivi')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'suivi' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Suivi de colis en temps réel
          </button>
          <button
            onClick={() => handleNavClick('adresse-chine')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'adresse-chine' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            🇨🇳 Hub Chine (Guangzhou)
          </button>
          <button
            onClick={() => handleNavClick('agences')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'agences' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            🇨🇲 Nos Agences au Cameroun (Douala & Yaoundé)
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm ${
              activeTab === 'contact' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700'
            }`}
          >
            Contact & WhatsApp Direct
          </button>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDevis();
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-[#0B1B36] font-bold text-sm rounded-lg text-center shadow-xs"
            >
              Demander un devis gratuit
            </button>

            <a
              href="./emirates-premium-cargo-source.zip"
              download="emirates-premium-cargo-source.zip"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-lg text-center border border-slate-300 flex items-center justify-center gap-2"
            >
              <FileArchive className="w-4 h-4 text-amber-600" />
              <span>Télécharger le Code Source (.ZIP)</span>
              <Download className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
