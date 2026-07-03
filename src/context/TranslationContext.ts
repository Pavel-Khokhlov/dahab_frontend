// context/TranslationContext.tsx
import { createContext } from "react";
import { translations } from "@/locales/translations";
import { LOCALES, type LocaleType } from "@/locales/locales";
import { useStore } from "@/store";

export type TranslationsType = (typeof translations)[LocaleType];

export const TranslationContext = createContext<TranslationsType>(
  translations[LOCALES.ENGLISH as keyof typeof translations],
);

// Хук useTranslator - использует Zustand store для получения текущего языка
export const useTranslator = (): TranslationsType => {
  const { globalUIStore } = useStore();
  return translations[globalUIStore.currentLocale as keyof typeof translations];
};

// Хук для получения всего объекта с языком и переводами
export const useLanguage = () => {
  const { globalUIStore } = useStore();
  return {
    currentLocale: globalUIStore.currentLocale,
    setLanguage: globalUIStore.setLanguage,
    toggleLanguage: globalUIStore.toggleLanguage,
    t: translations[globalUIStore.currentLocale as keyof typeof translations], // текущие переводы
  };
};

// Ре-экспорт для удобства
export { LOCALES, type LocaleType };
