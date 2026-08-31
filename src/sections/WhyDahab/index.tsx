// WhyDahabSection.tsx
import React from "react";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import { useInView } from "react-intersection-observer";

import icons from "@/assets/images/icons_dahab";
import SectionGradient from "../SectionGradient";
import BlueHoleImg from "@/assets/images/background/bluehole.webp";

import "./WhyDahab.scss";
interface WhyDahabItem {
  id: string;
  type: string;
  title: Record<"ru" | "en", string>;
  text: Record<"ru" | "en", string>;
  featured?: boolean;
}

// data.ts
const whyDahabData: WhyDahabItem[] = [
  {
    id: "warm-water",
    type: "temp",
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
    type: "eye",
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
    type: "wave",
    title: { ru: "Отсутствие сильных волн", en: "No strong waves" },
    text: {
      ru: "Защищённая бухта для спокойных тренировок",
      en: "Sheltered bay for peaceful training",
    },
  },
  {
    id: "accessibility",
    type: "location",
    title: { ru: "Доступность локаций", en: "Accessible locations" },
    text: {
      ru: "Лучшие места для погружения рядом",
      en: "Best dive sites nearby",
    },
  },
  {
    id: "atmosphere",
    type: "happy",
    title: { ru: "Уникальная атмосфера", en: "Unique atmosphere" },
    text: {
      ru: "Спокойствие и свобода в каждом вдохе",
      en: "Peace and freedom in every breath",
    },
    featured: true,
  },
];

const WhyDahabCard: React.FC<{ item: WhyDahabItem; index: number }> = ({
  item,
  index,
}) => {
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  const { ref, inView } = useInView({
    triggerOnce: true, // Сработает только один раз
    threshold: 0.2, // 20% элемента видно
  });

  const iconUrl = icons[item.type];
  return (
    <div
      ref={ref}
      className={`
        why-dahab__card 
        ${item.featured ? "_featured" : ""} 
        ${inView ? "_active" : ""}
      `}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img src={iconUrl} className="why-dahab__card-icon" />
      <h3 className="why-dahab__card-title">{item.title[currentLang]}</h3>
      <p className="why-dahab__card-text">{item.text[currentLang]}</p>
    </div>
  );
};

const WhyDahabSection: React.FC = () => {
  const t = useTranslator();
  return (
    <SectionGradient
      id="dahab"
      titleOne={t.title.why}
      titleTwo={t.title.dahab}
      textOne={t.text.dahabTextOne}
      textTwo={t.text.dahabTextTwo}
      imagePath={BlueHoleImg}
    >
      <>
        <div className="why-dahab__grid">
          {whyDahabData.map((item, index) => (
            <WhyDahabCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="why-dahab__footnote">
          <img src={icons.star} className="why-dahab__card-icon" />
          <em>{t.text.dahabFooter}</em>
        </div>
      </>
    </SectionGradient>
  );
};

export default WhyDahabSection;
