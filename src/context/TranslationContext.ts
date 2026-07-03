// context/TranslationContext.tsx
import { createContext } from "react";
import { translations } from "@/locales/translations";
import { LOCALES, type LocaleType } from "@/locales/locales";
import { useGlobalUIStore } from "@/store/GlobalUI";

export type TranslationsType = (typeof translations)[LocaleType];

export const TranslationContext = createContext<TranslationsType>(
  translations[LOCALES.ENGLISH],
);

// Хук useTranslator - использует Zustand store для получения текущего языка
export const useTranslator = (): TranslationsType => {
  const { currentLocale } = useGlobalUIStore();
  return translations[currentLocale];
};

// Хук для получения всего объекта с языком и переводами
export const useLanguage = () => {
  const { currentLocale, setLanguage, toggleLanguage } = useGlobalUIStore();
  return {
    currentLocale,
    setLanguage,
    toggleLanguage,
    t: translations[currentLocale], // текущие переводы
  };
};

// Ре-экспорт для удобства
export { LOCALES, type LocaleType };
