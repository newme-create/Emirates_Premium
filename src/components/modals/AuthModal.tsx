import React, { useState } from 'react';
import { UserSession } from '../../types';
import { X, LogIn, UserPlus, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onLoginSuccess: (user: UserSession) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
  onLoginSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  
  // Login fields
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Register fields
  const [regFullName, setRegFullName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const displayName = loginIdentifier.includes('@')
      ? loginIdentifier.split('@')[0]
      : loginIdentifier;

    const user: UserSession = {
      fullName: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email: loginIdentifier.includes('@') ? loginIdentifier : `${loginIdentifier}@client.emiratespremium.com`,
      phone: loginIdentifier.includes('+') ? loginIdentifier : '+237 6 00 00 00 00',
      isLoggedIn: true,
      clientCode: `EP-${Math.floor(1000 + Math.random() * 9000)}`
    };

    if (rememberMe) {
      localStorage.setItem('ep_user', JSON.stringify(user));
    }

    onLoginSuccess(user);
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!regFullName.trim() || !regPhone.trim() || !regEmail.trim()) {
      setErrorMessage('Veuillez renseigner toutes vos informations de contact.');
      return;
    }

    if (regPassword.length < 6) {
      setErrorMessage('Le mot de passe doit comporter au moins 6 caractères.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setErrorMessage('Les deux mots de passe ne correspondent pas.');
      return;
    }

    const randomClientCode = `EP-2025-${Math.floor(1000 + Math.random() * 9000)}`;

    const newUser: UserSession = {
      fullName: regFullName.trim(),
      phone: regPhone.trim(),
      email: regEmail.trim(),
      isLoggedIn: true,
      clientCode: randomClientCode
    };

    localStorage.setItem('ep_user', JSON.stringify(newUser));
    onLoginSuccess(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block">
              PORTAIL CLIENT CARGO
            </span>
            <h3 className="font-serif font-bold text-lg text-[#0B1B36]">
              {mode === 'login' ? 'Connexion Espace Client' : 'Créer un Compte Expéditeur'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex p-2 bg-slate-100 border-b border-slate-200/60">
          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMessage(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mode === 'login' 
                ? 'bg-white text-[#0B1B36] shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-3.5 h-3.5 text-amber-500" />
            <span>Se Connecter</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('register'); setErrorMessage(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mode === 'register' 
                ? 'bg-white text-[#0B1B36] shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5 text-amber-500" />
            <span>Nouveau Compte</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
              {errorMessage}
            </div>
          )}

          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email ou Numéro WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  placeholder="votre@email.com ou +237..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    Mot de passe *
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Un lien de réinitialisation vous sera envoyé par SMS / Email.')}
                    className="text-[11px] text-amber-600 hover:underline cursor-pointer"
                  >
                    Oublié ?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="rememberMe" className="text-xs text-slate-600 cursor-pointer">
                  Se souvenir de moi sur cet appareil
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0B1B36] hover:bg-[#152A4A] text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-amber-400" />
                <span>Accéder à mon espace</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={regFullName}
                  onChange={(e) => setRegFullName(e.target.value)}
                  placeholder="Ex: David Mengue"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Téléphone WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={regPhone}
                    onChange={(e) => setPhoneFormatted(e.target.value)}
                    placeholder="+237 6..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="email@domaine.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mot de passe *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Confirmation *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Un <strong>Code Client Unique (ex: EP-2025-XXXX)</strong> vous sera instantanément attribué pour vos fournisseurs en Chine.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Créer mon compte et recevoir mon code client</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );

  function setPhoneFormatted(val: string) {
    setRegPhone(val);
  }
};
