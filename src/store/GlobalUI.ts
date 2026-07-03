// store/globalUI.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LOCALES, type LocaleType } from "@/locales/locales";

interface GlobalUIState {
  currentLocale: LocaleType;
  setLanguage: (locale: LocaleType) => void;
  toggleLanguage: () => void;
}

export const useGlobalUIStore = create<GlobalUIState>()(
  persist(
    (set, get) => ({
      currentLocale: LOCALES.ENGLISH,

      setLanguage: (locale: LocaleType) => {
        set({ currentLocale: locale });
      },

      toggleLanguage: () => {
        const { currentLocale } = get();
        const newLocale =
          currentLocale === LOCALES.ENGLISH ? LOCALES.RUSSIAN : LOCALES.ENGLISH;
        set({ currentLocale: newLocale });
      },
    }),
    {
      name: "global-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ currentLocale: state.currentLocale }),
    }
  ),
);