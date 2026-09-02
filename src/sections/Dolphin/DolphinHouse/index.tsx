// WhyDahabSection.tsx
import React from "react";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import { useInView } from "react-intersection-observer";

import icons from "@/assets/images/icons_dahab";
import SectionGradient from "@/sections/SectionGradient";
import DolphinHouseImg from "@/assets/images/background/dolphin-house.webp";

import "./DolphinHouse.scss";

interface WhyDahabItem {
  id: string;
  type: string;
  title: Record<"ru" | "en", string>;
  text: Record<"ru" | "en", string>;
  featured?: boolean;
}

// data.ts
const DolphinHaouseData: WhyDahabItem[] = [
  {
    id: "location-one",
    type: "location",
    title: {
      ru: "Локация No1 в мире",
      en: "The world's #1 location",
    },
    text: {
      ru: "безопасное плавание с дельфинами в живой природе.",
      en: "safety free swim with dolphins in the wild.",
    },
  },
  {
    id: "dolphin",
    type: "dolphin",
    title: {
      ru: "Естественная среда",
      en: "True Natural Sanctuary",
    },
    text: {
      ru: "здесь живут, играют и воспитывают малышей десятки дельфиньих семей.",
      en: "home to dozens of dolphin families, who live, play, and raise their calves in complete freedom.",
    },
  },
  {
    id: "love",
    type: "love",
    title: { ru: "Идеальные условия", en: "Picture-Perfect Conditions" },
    text: {
      ru: "абсолютно спокойная и прозрачная вода, защищенная от открытого моря.",
      en: "enjoy sheer calmness and crystal-clear waters, perfectly sheltered from the open sea.",
    },
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

const DolphinHouseSection: React.FC = () => {
  const t = useTranslator();
  return (
    <SectionGradient
      id="dolphin"
      titleOne={t.title.dolphinOne}
      titleTwo={t.title.dolphinTwo}
      textOne={t.text.dolphinTextOne}
      textTwo={t.text.dolphinTextTwo}
      imagePath={DolphinHouseImg}
    >
      <>
        <div className="why-dahab__grid">
          {DolphinHaouseData.map((item, index) => (
            <WhyDahabCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="why-dahab__footnote">
          <img src={icons.star} className="why-dahab__card-icon" />
          <em>{t.text.dolphinFooter}</em>
        </div>
      </>
    </SectionGradient>
  );
};

export default DolphinHouseSection;
