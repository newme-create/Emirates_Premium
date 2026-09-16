/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, UserSession, ToastMessage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ToastContainer } from './components/Toast';
import { TrackingModal } from './components/modals/TrackingModal';
import { DevisModal } from './components/modals/DevisModal';
import { AuthModal } from './components/modals/AuthModal';

// Views
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { CommentCaMarcheView } from './views/CommentCaMarcheView';
import { TarifsView } from './views/TarifsView';
import { SuiviView } from './views/SuiviView';
import { AgencesView } from './views/AgencesView';
import { AdresseChineView } from './views/AdresseChineView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('accueil');
  const [user, setUser] = useState<UserSession | null>(null);
  
  // Modals state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [currentTrackingCode, setCurrentTrackingCode] = useState('EP2505CN23789');
  
  const [devisModalOpen, setDevisModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load existing user from localStorage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('ep_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.warn('Could not read user session from storage', e);
    }
  }, []);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenAuth = (mode: 'login' | 'register' = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (newUser: UserSession) => {
    setUser(newUser);
    addToast(
      'Bienvenue sur Emirates Premium',
      `Session ouverte avec succès. Votre code client : ${newUser.clientCode || 'EP-CLIENT'}`,
      'success'
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('ep_user');
    setUser(null);
    addToast('Déconnexion effectuée', 'Vous avez été déconnecté en toute sécurité.', 'info');
  };

  const handleOpenTracking = (code: string) => {
    setCurrentTrackingCode(code);
    setTrackingModalOpen(true);
  };

  const handleDevisSubmit = (name: string, phone: string, estimatedPrice?: string) => {
    addToast(
      'Demande de devis enregistrée !',
      `Merci ${name}. Estimation : ${estimatedPrice || 'En cours d\'analyse'}. Notre équipe vous contactera au ${phone} sous 60 minutes.`,
      'success'
    );
  };

  const handleCopyNotification = (customMsg?: string) => {
    addToast(
      'Copié !',
      customMsg || 'Numéro de suivi copié dans le presse-papier.',
      'info'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        onOpenDevis={() => setDevisModalOpen(true)}
      />

      {/* Main View Display */}
      <main className="flex-1">
        {activeTab === 'accueil' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenTracking={handleOpenTracking}
            onOpenDevis={() => setDevisModalOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            onOpenDevis={() => setDevisModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'comment-ca-marche' && (
          <CommentCaMarcheView
            onOpenDevis={() => setDevisModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'tarifs' && (
          <TarifsView
            onOpenDevis={() => setDevisModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'suivi' && (
          <SuiviView
            onOpenTracking={handleOpenTracking}
            onCopyToast={handleCopyNotification}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'agences' && (
          <AgencesView
            setActiveTab={setActiveTab}
            onOpenDevis={() => setDevisModalOpen(true)}
          />
        )}

        {activeTab === 'adresse-chine' && (
          <AdresseChineView
            setActiveTab={setActiveTab}
            onCopyToast={handleCopyNotification}
            onOpenDevis={() => setDevisModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            setActiveTab={setActiveTab}
            onSubmitToast={(msg) => addToast('Message expédié !', msg, 'success')}
            onOpenDevis={() => setDevisModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Quick WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Modals & Popups */}
      <TrackingModal
        isOpen={trackingModalOpen}
        trackingCode={currentTrackingCode}
        onClose={() => setTrackingModalOpen(false)}
        onCopyToast={handleCopyNotification}
      />

      <DevisModal
        isOpen={devisModalOpen}
        onClose={() => setDevisModalOpen(false)}
        onSubmitSuccess={handleDevisSubmit}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast notifications container */}
      <ToastContainer
        toasts={toasts}
        onDismiss={handleDismissToast}
      />

    </div>
  );
}
