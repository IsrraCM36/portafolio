import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const DownloadDialog = ({ isOpen, onClose, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef(null);
  const firedRef = useRef(false); // evita múltiples disparos

  useEffect(() => {
    if (!isOpen) return;
    setProgress(0);
    setIsComplete(false);
    firedRef.current = false;

    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            setIsComplete(true);

            // Disparar descarga exactamente al completar (una sola vez)
            if (!firedRef.current) {
              firedRef.current = true;
              onComplete?.(); // <<<<< AQUÍ se dispara la descarga
            }

            // Cierra tras una breve pausa
            setTimeout(() => {
              onClose?.();
              setProgress(0);
              setIsComplete(false);
            }, 1200);

            return 100;
          }
          const step = Math.random() * 4 + 2; // 2–6%
          return Math.min(prev + step, 100);
        });
      }, 110);
    }, 200);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen, onClose, onComplete]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" aria-hidden={!isOpen} role="presentation">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4" role="dialog" aria-modal="true">
        <div className="relative w-[92vw] max-w-xs rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 ring-1 ring-white/10">
          <div className="p-3.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-xs text-white/90" role="status" aria-live="polite">
                {isComplete ? "Completado" : "Descargando..."}
              </p>
              <div className={`transition-all duration-300 ${isComplete ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-1.5 rounded-full transition-[width] duration-300 ease-out bg-white"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] leading-none">
              <span className="text-white/70">
                {isComplete ? "100%" : `${Math.round(progress)}%`}
              </span>
              <span className="text-white/50">{isComplete ? "Listo" : "Preparando archivo..."}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDialog;
