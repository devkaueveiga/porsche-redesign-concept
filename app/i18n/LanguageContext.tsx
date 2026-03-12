"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";

// Tipos de idioma
export type Locale = "pt" | "en" | "es";

// Mapeamento de idiomas para dados
const translations: Record<Locale, typeof pt> = { pt, en, es };

// Contexto
interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  setLocale: () => {},
  t: pt,
});

// Hook para consumir o contexto
export function useLanguage() {
  return useContext(LanguageContext);
}

// Provider que envolve toda a aplicação
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [mounted, setMounted] = useState(false);

  // Carregar idioma salvo no localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem("porsche-lang") as Locale | null;
    if (saved && translations[saved]) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  // Salvar no localStorage ao mudar
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("porsche-lang", newLocale);
  };

  const t = translations[locale];

  // Evitar hydration mismatch — renderizar children apenas após montar
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "pt", setLocale, t: pt }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
