// TrainingProgramSection.tsx
import React from "react";
import "./TrainingProgram.scss";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";

const dataPage = {
  subtitle: {
    ru: "Мы работаем не только в воде. Каждая тренировка включает подготовку тела, дыхания и нервной системы.",
    en: "We work not only in the water. Each training session includes preparation of the body, breathing, and the nervous system.",
  },
  list: {
    ru: [
      "дыхательные практики",
      "глубокое расслабление (шавасана)",
      "развитие гибкости дыхательной мускулатуры",
      "обучение техникам продувки",
      "глубинные тренировки в море",
      "вечерние сухие тренировки",
    ],
    en: [
      "breathing practices",
      "deep relaxation (savasana)",
      "development of respiratory muscle flexibility",
      "training in equalization techniques",
      "deep training sessions in the sea",
      "evening dry (land) training sessions",
    ],
  },
  footer: {
    ru: "Такой подход позволяет сделать обучение безопасным, комфортным и максимально эффективным",
    en: "This approach makes the training safe, comfortable, and as effective as possible",
  },
};

const TrainingProgramSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  return (
    <section className="training-program">
      {/* Декоративные водные элементы */}
      <div className="training-program__water-bubble training-program__water-bubble--1"></div>
      <div className="training-program__water-bubble training-program__water-bubble--2"></div>
      <div className="training-program__water-bubble training-program__water-bubble--3"></div>

      <div className="training-program__container">
        <h2 className="training-program__title">{t.title.program}</h2>
        <p className="training-program__subtitle">
          {dataPage.subtitle[currentLang]}
        </p>

        <ul className="training-program__list">
          {dataPage.list[currentLang].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <p className="training-program__footnote">
          <em>{dataPage.footer[currentLang]}</em>
        </p>
      </div>
    </section>
  );
};

export default TrainingProgramSection;
