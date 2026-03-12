"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Locale } from "../i18n/LanguageContext";

// Bandeiras em SVG inline para funcionar em TODOS os sistemas (Windows não renderiza emoji de bandeira)
function BrazilFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 640 480" className="rounded-sm shrink-0">
      <rect width="640" height="480" fill="#009b3a"/>
      <polygon points="320,39 609,240 320,441 31,240" fill="#fedf00"/>
      <circle cx="320" cy="240" r="95" fill="#002776"/>
      <path d="M197,270 Q320,195 443,270" fill="none" stroke="#fff" strokeWidth="12"/>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 640 480" className="rounded-sm shrink-0">
      <rect width="640" height="480" fill="#fff"/>
      <rect y="0" width="640" height="37" fill="#b22234"/>
      <rect y="74" width="640" height="37" fill="#b22234"/>
      <rect y="148" width="640" height="37" fill="#b22234"/>
      <rect y="222" width="640" height="37" fill="#b22234"/>
      <rect y="296" width="640" height="37" fill="#b22234"/>
      <rect y="370" width="640" height="37" fill="#b22234"/>
      <rect y="444" width="640" height="37" fill="#b22234"/>
      <rect width="260" height="259" fill="#3c3b6e"/>
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 640 480" className="rounded-sm shrink-0">
      <rect width="640" height="480" fill="#c60b1e"/>
      <rect y="120" width="640" height="240" fill="#ffc400"/>
    </svg>
  );
}

const languages: { code: Locale; Flag: () => JSX.Element; label: string }[] = [
  { code: "pt", Flag: BrazilFlag, label: "PT" },
  { code: "en", Flag: USAFlag, label: "EN" },
  { code: "es", Flag: SpainFlag, label: "ES" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className="relative z-50 pointer-events-auto">
      {/* Botão principal com bandeira */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-white text-sm tracking-widest font-medium hover:text-porscheRed transition-colors duration-300 px-3 py-2 border border-white/20 hover:border-porscheRed/50 bg-black/30 backdrop-blur-sm"
        aria-label="Selecionar idioma"
      >
        <current.Flag />
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown de idiomas */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 bg-zinc-900/95 backdrop-blur-md border border-white/10 overflow-hidden min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm tracking-wider font-medium transition-all duration-300 ${
                  locale === lang.code
                    ? "text-porscheRed bg-porscheRed/10"
                    : "text-gray-300 hover:text-white hover:bg-porscheRed/10"
                }`}
              >
                <lang.Flag />
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
