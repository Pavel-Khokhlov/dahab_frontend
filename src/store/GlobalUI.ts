// store/globalUI.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LOCALES, type LocaleType } from "@/locales/locales";

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

// Константы для слайдера
const SLIDER_PREVIEW = {
  MOBILE: 1.2,
  TABLET: 2.1,
  DESKTOP: 3.2,
} as const;

// Типы устройств
export type DeviceType = "mobile" | "tablet" | "desktop";

// Функция для определения типа устройства
const getDeviceType = (width: number): DeviceType => {
  if (width < BREAKPOINTS.MOBILE) return "mobile";
  if (width < BREAKPOINTS.TABLET) return "tablet";
  return "desktop";
};

// Функция для проверки мобильного устройства
const isMobileDevice = (width: number): boolean => {
  return width < BREAKPOINTS.MOBILE;
};

// Функция для получения значения слайдера в зависимости от устройства
const getSliderPreview = (deviceType: DeviceType): number => {
  switch (deviceType) {
    case "mobile":
      return SLIDER_PREVIEW.MOBILE;
    case "tablet":
      return SLIDER_PREVIEW.TABLET;
    case "desktop":
      return SLIDER_PREVIEW.DESKTOP;
    default:
      return SLIDER_PREVIEW.DESKTOP;
  }
};

interface GlobalUIState {
  currentLocale: LocaleType;
  setLanguage: (locale: LocaleType) => void;
  toggleLanguage: () => void;

  // Новые поля для определения устройства
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  windowWidth: number;
  sliderPreview: number;

  setSliderPreview: (value: number) => void;

  // Метод для обновления размеров окна
  setWindowSize: (width: number) => void;
}

export const useGlobalUIStore = create<GlobalUIState>()(
  persist(
    (set, get) => ({
      currentLocale: LOCALES.ENGLISH,

      // Инициализация состояния устройства
      deviceType: getDeviceType(window.innerWidth),
      isMobile: isMobileDevice(window.innerWidth),
      isTablet: getDeviceType(window.innerWidth) === "tablet",
      isDesktop: getDeviceType(window.innerWidth) === "desktop",
      windowWidth: window.innerWidth,

      // Инициализация слайдера в зависимости от устройства
      sliderPreview: getSliderPreview(getDeviceType(window.innerWidth)),

      setLanguage: (locale: LocaleType) => {
        set({ currentLocale: locale });
      },

      toggleLanguage: () => {
        const { currentLocale } = get();
        const newLocale =
          currentLocale === LOCALES.ENGLISH ? LOCALES.RUSSIAN : LOCALES.ENGLISH;
        set({ currentLocale: newLocale });
      },

      setSliderPreview: (value: number) => {
        set({ sliderPreview: value });
      },

      setWindowSize: (width: number) => {
        const deviceType = getDeviceType(width);
        const isMobile = isMobileDevice(width);
        const isTablet = deviceType === "tablet";
        const isDesktop = deviceType === "desktop";

        // Автоматически обновляем sliderPreview при изменении устройства
        const sliderPreview = getSliderPreview(deviceType);

        set({
          windowWidth: width,
          deviceType,
          isMobile,
          isTablet,
          isDesktop,
          sliderPreview,
        });
      },
    }),
    {
      name: "global-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ currentLocale: state.currentLocale }),
    },
  ),
);
