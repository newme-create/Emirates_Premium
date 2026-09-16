import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl shadow-xl border flex items-start gap-3 text-slate-800 transition-all transform translate-y-0 bg-white ${
              isSuccess 
                ? 'border-emerald-200 bg-emerald-50/90 text-emerald-950' 
                : isWarning 
                ? 'border-amber-200 bg-amber-50/90 text-amber-950'
                : 'border-blue-200 bg-blue-50/90 text-blue-950'
            }`}
          >
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
            {isWarning && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
            {!isSuccess && !isWarning && <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}

            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold leading-tight">{toast.title}</h5>
              <p className="text-xs mt-0.5 text-slate-600 leading-snug">{toast.message}</p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
