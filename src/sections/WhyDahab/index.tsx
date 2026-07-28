// WhyDahabSection.tsx
import React from "react";
import dahabImg from "@/assets/images/background/bluehole.webp";
import "./WhyDahab.scss";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import { useVisibilityObserver } from "@/hooks/useVisibilityObserver";

export interface WhyDahabItem {
  id: string;
  icon: string;
  title: Record<"ru" | "en", string>;
  text: Record<"ru" | "en", string>;
  featured?: boolean;
}

// data.ts
const whyDahabData: WhyDahabItem[] = [
  {
    id: "warm-water",
    icon: "🌡️",
    title: {
      ru: "Тёплая вода",
      en: "Warm water",
    },
    text: {
      ru: "Комфортная температура круглый год",
      en: "Comfortable temperature all year round",
    },
  },
  {
    id: "visibility",
    icon: "👁️",
    title: {
      ru: "Отличная видимость",
      en: "Great visibility",
    },
    text: {
      ru: "Прозрачность до 30+ метров",
      en: "Visibility up to 30+ meters",
    },
  },
  {
    id: "no-waves",
    icon: "🌊",
    title: { ru: "Отсутствие сильных волн", en: "No strong waves" },
    text: {
      ru: "Защищённая бухта для спокойных тренировок",
      en: "Sheltered bay for peaceful training",
    },
  },
  {
    id: "accessibility",
    icon: "📍",
    title: { ru: "Доступность локаций", en: "Accessible locations" },
    text: {
      ru: "Лучшие места для погружения рядом",
      en: "Best dive sites nearby",
    },
  },
  {
    id: "atmosphere",
    icon: "✨",
    title: { ru: "Уникальная атмосфера", en: "Unique atmosphere" },
    text: {
      ru: "Спокойствие и свобода в каждом вдохе",
      en: "Peace and freedom in every breath",
    },
    featured: true,
  },
];

const WhyDahabSection: React.FC = () => {
  const t = useTranslator();

  const WhyDahabCard: React.FC<{ item: WhyDahabItem; index: number }> = ({
    item,
    index,
  }) => {
    const { globalUIStore } = useStore();
    const currentLang = globalUIStore.currentLocale;
    const { ref, isVisible } = useVisibilityObserver<HTMLDivElement>(0.7);
    return (
      <div
        ref={ref}
        className={`why-dahab__card ${item.featured ? "why-dahab__card--featured" : ""} ${isVisible ? "_active" : ""}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <div className="why-dahab__card-icon">{item.icon}</div>
        <h3 className="why-dahab__card-title">{item.title[currentLang]}</h3>
        <p className="why-dahab__card-text">{item.text[currentLang]}</p>
      </div>
    );
  };
  return (
    <section className="why-dahab">
      <div className="why-dahab__background">
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--1"></div>
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--2"></div>
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--3"></div>
      </div>

      <div className="why-dahab__container">
        <h2 className="why-dahab__title">
          {t.title.why}{" "}
          <span className="why-dahab__highlight">{t.title.dahab}</span>?
        </h2>

        {/* Блок с фотографией на всю ширину */}
        <div className="why-dahab__full-image-wrapper">
          <img
            src={dahabImg}
            alt="Дахаб - мировая столица фридайвинга"
            className="why-dahab__full-image"
          />
        </div>

        <p className="why-dahab__subtitle">
          {t.text.dahabTextOne} <strong>{t.text.dahabTextTwo}</strong>
        </p>

        <div className="why-dahab__divider"></div>

        <p className="why-dahab__description">{t.text.dahabConditions}</p>

        <div className="why-dahab__grid">
          {whyDahabData.map((item, index) => (
            <WhyDahabCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="why-dahab__footnote">
          <span className="why-dahab__footnote-icon">⭐</span>
          <em>{t.text.dahabFooter}</em>
        </div>
      </div>
    </section>
  );
};

export default WhyDahabSection;
