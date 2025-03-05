
import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

type Language = "en" | "fr";
type TranslationRecord = Record<string, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const translations: Record<Language, TranslationRecord> = { en, fr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get language from localStorage or use browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "fr" ? "fr" : "en";
  };

  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || getBrowserLanguage()
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
