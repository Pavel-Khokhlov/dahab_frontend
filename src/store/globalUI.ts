import React from "react";
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

// Функция для проверки наличия скролла на странице
const hasPageScroll = (): boolean => {
  if (typeof window === "undefined") return false;

  // Проверяем, есть ли скролл у документа
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Также проверяем body для надежности
  const bodyScrollHeight = document.body.scrollHeight;
  const bodyClientHeight = document.body.clientHeight;

  return (
    Math.max(scrollHeight, bodyScrollHeight) >
    Math.max(clientHeight, bodyClientHeight)
  );
};

interface GlobalUIState {
  currentLocale: LocaleType;
  setLanguage: (locale: LocaleType) => void;
  toggleLanguage: () => void;

  countryCode: string | null;
  setCountryCode: (value: string) => void;

  isGeoLoading: boolean;
  setGeoLoading: (loading: boolean) => void;

  // Новые поля для определения устройства
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  windowWidth: number;
  sliderPreview: number;
  valueHeroScrolled: number;

  setSliderPreview: (value: number) => void;
  setValueHeroScrolled: (value: number) => void;

  // Метод для обновления размеров окна
  setWindowSize: (width: number) => void;

  isPageScrolled: boolean;
  setPageScrolled: (scrolled: boolean) => void;
  pageScrollThreshold: number;

  // Текущая позиция скролла
  scrollY: number;
  setScrollY: (y: number) => void;

  // Новые поля для отслеживания наличия скролла
  hasScroll: boolean;
  setHasScroll: (has: boolean) => void;

  // Функция инициализации приложения
  initializeApp: () => void;
  checkScrollOnLoad: () => void;
  fetchUserLocation: () => Promise<void>;
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

      countryCode: null,
      setCountryCode: (value: string) => {
        set({ countryCode: value });
      },

      isGeoLoading: true,
      setGeoLoading: (loading: boolean) => {
        set({ isGeoLoading: loading });
      },

      isPageScrolled: false,
      pageScrollThreshold: 100,
      scrollY: 0,

      // Инициализация слайдера в зависимости от устройства
      sliderPreview: getSliderPreview(getDeviceType(window.innerWidth)),

      valueHeroScrolled: 0,

      hasScroll: false,

      setValueHeroScrolled: (value: number) => {
        set({ valueHeroScrolled: value });
      },

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
      // Методы для управления состоянием скролла страницы
      setPageScrolled: (scrolled: boolean) => {
        set({ isPageScrolled: scrolled });
      },

      setHasScroll: (has: boolean) => {
        set({ hasScroll: has });
      },

      setScrollY: (y: number) => {
        set({ scrollY: y });
      },
      // Функция проверки скролла при загрузке
      checkScrollOnLoad: () => {
        if (typeof window === "undefined") return;

        // Проверяем наличие скролла после полной загрузки
        const checkScroll = () => {
          const hasScroll = hasPageScroll();
          const { setHasScroll, setPageScrolled, setScrollY } = get();

          setHasScroll(hasScroll);

          // Если есть скролл, проверяем порог прокрутки
          if (hasScroll) {
            const scrollY = window.scrollY || window.pageYOffset;
            const threshold = get().pageScrollThreshold;
            setPageScrolled(scrollY > threshold);
          }
          setScrollY(window.scrollY);
        };

        // Проверяем сразу, если документ уже загружен
        if (document.readyState === "complete") {
          // Даем время на полный рендер
          setTimeout(checkScroll, 100);
        } else {
          // Ждем полной загрузки
          window.addEventListener("load", () => {
            setTimeout(checkScroll, 100);
          });
        }

        // Дополнительная проверка при изменении размера
        let resizeTimeout: ReturnType<typeof setTimeout>;
        window.addEventListener("resize", () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const hasScroll = hasPageScroll();
            get().setHasScroll(hasScroll);
          }, 200);
        });

        // Следим за изменениями в DOM (динамический контент)
        if (window.MutationObserver) {
          const observer = new MutationObserver(() => {
            const hasScroll = hasPageScroll();
            const currentHasScroll = get().hasScroll;

            if (hasScroll !== currentHasScroll) {
              get().setHasScroll(hasScroll);
            }
          });

          observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style", "class", "height", "data-*"],
          });

          // Сохраняем observer для очистки
          (window as any).__scrollObserver = observer;
        }
      },
      initializeApp: () => {
        get().checkScrollOnLoad();
        get().fetchUserLocation();
      },
      // 🔥 Основной метод для получения геолокации
      fetchUserLocation: async () => {
        const { setCountryCode, setGeoLoading } = get();

        // Пробуем несколько сервисов по очереди
        const services = [
          {
            url: "https://ipwho.is/",
            parse: (data: any) => data.country_code,
          },
          {
            url: "https://ipapi.co/json/",
            parse: (data: any) => data.country_code,
          },
        ];

        for (const service of services) {
          try {
            const response = await fetch(service.url, {
              // Таймаут, чтобы не ждать слишком долго
              signal: AbortSignal.timeout(5000),
            });

            if (!response.ok) continue;

            const data = await response.json();
            const countryCode = service.parse(data);

            if (countryCode) {
              setCountryCode(countryCode);
              setGeoLoading(false);
              console.log("🌍 Страна определена:", countryCode);
              return; // Выходим, если успешно определили
            }
          } catch (error) {
            console.warn(`⚠️ Ошибка при запросе к ${service.url}:`, error);
            continue; // Пробуем следующий сервис
          }
        }

        // Если ни один сервис не сработал
        setGeoLoading(false);
        console.warn("❌ Не удалось определить страну пользователя");
      },
    }),
    {
      name: "global-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentLocale: state.currentLocale,
        pageScrollThreshold: state.pageScrollThreshold,
      }),
    },
  ),
);

// Хук для отслеживания скролла страницы
export const usePageScroll = () => {
  const {
    isPageScrolled,
    setPageScrolled,
    pageScrollThreshold,
    scrollY,
    setScrollY,
  } = useGlobalUIStore();

  // Эффект для подписки на событие скролла страницы
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Обновляем состояние хедера на основе порога
      const scrolled = currentScrollY > pageScrollThreshold;
      if (scrolled !== isPageScrolled) {
        setPageScrolled(scrolled);
      }
    };

    // Проверяем текущую позицию при монтировании
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageScrollThreshold, isPageScrolled, setPageScrolled, setScrollY]);

  return {
    isPageScrolled,
    scrollY,
    pageScrollThreshold,
  };
};
