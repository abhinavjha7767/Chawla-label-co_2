import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageProviderState = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.English;
};

const initialState: LanguageProviderState = {
  language: "English",
  setLanguage: () => null,
  t: translations.English,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "English",
  storageKey = "vite-ui-language",
}: {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage,
  );

  useEffect(() => {
    localStorage.setItem(storageKey, language);
  }, [language, storageKey]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
