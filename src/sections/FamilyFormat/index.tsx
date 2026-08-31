// FamilyFormatSection.tsx
import React from "react";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import SectionCircle from "../SectionCircle";

import "./FamilyFormat.scss";

const dataPage = {
  subtitle: {
    ru: "Мы уверены, что совместные впечатления объединяют сильнее любых подарков.",
    en: "We believe that shared experiences bring families closer than any gift ever could.",
  },
  text: {
    ru: "Поэтому мы создали формат, в котором родители и дети могут открывать подводный мир вместе.",
    en: "That's why we've created a program where parents and children can discover the underwater world together.",
  },
  options: {
    ru: "Это возможность:",
    en: "It's an opportunity to:",
  },
  list: {
    ru: [
      "попробовать новое всей семьей",
      "поддерживать друг друга",
      "отдыхать активно",
      "получить общие воспоминания, которые останутся с вами на долгие годы",
    ],
    en: [
      "try something new as a family",
      "support one another",
      "enjoy an active holiday",
      "create unforgettable memories that will stay with you for years",
    ],
  },
  important: {
    ru: "Дети и родители занимаются в раздельных группах, с двумя разными тренерами. Это позволяет сделать тренировку наиболее эффективной и максимально раскрыть потенциал – Ваш и Вашего ребенка.",
    en: "Parents and children train in separate groups with two different instructors. This approach allows every participant to receive the attention they need, making each session more effective while helping both you and your child reach your full potential.",
  },
};

const FamilyFormatSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  return (
    <SectionCircle
      id="family"
      title={t.title.family}
      subtitle={dataPage.subtitle[currentLang]}
      description={dataPage.text[currentLang]}
    >
      <>
        <div className="family-format__opportunities">
          <span className="family-format__opportunities-label">
            {dataPage.options[currentLang]}
          </span>
          <ul className="family-format__list">
            {dataPage.list[currentLang].map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>

        <div className="family-format__important">
          <h3 className="family-format__important-title">
            {t.title.important}
          </h3>
          <p className="family-format__important-text">
            {dataPage.important[currentLang]}
          </p>
        </div>
      </>
    </SectionCircle>
  );
};

export default FamilyFormatSection;
