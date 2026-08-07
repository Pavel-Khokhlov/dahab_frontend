// TrialSection.tsx
import React from "react";
import styles from "./Trial.module.scss";
import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import trialImgV from "@/assets/images/background/trialV.webp";
import trialImgH from "@/assets/images/background/trialH.webp";

interface TrialCard {
  id: string;
  title: Record<"ru" | "en", string>;
  description: Record<"ru" | "en", string>;
  price: string;
  features: Record<"ru" | "en", string[]>;
  isPopular?: boolean;
}

const TrialSection2: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore, tgStore } = useStore();
  const currentLang = globalUIStore.currentLocale;

  const currentImage = globalUIStore.isMobile ? trialImgV : trialImgH;
  const trialData: TrialCard[] = [
    {
      id: "individual",
      title: {
        ru: "Индивидуальная",
        en: "Personal",
      },
      description: {
        ru: "Для одного участника.",
        en: "For one person",
      },
      price: "12 000 ₽",
      features: {
        ru: [
          "Полный комплект оборудования (гидрокостюм, маска, ласты)",
          "Водная теория",
          "Мастер-класс по правильному надеванию гидрокостюма",
          "Полуторачасовая практика в море с инструктором",
        ],
        en: [
          "Full equipment set (wetsuit, mask, fins)",
          "Water theory",
          "Masterclass on proper wetsuit wearing",
          "1.5 hours of sea practice with instructor",
        ],
      },
    },
    {
      id: "family2",
      title: {
        ru: "«Семья 2»",
        en: "«Family 2»",
      },
      description: {
        ru: "Для взрослого и ребенка. Два инструктора. Два буйка.",
        en: "For adult and child. Two instructors. Two buoys.",
      },
      price: "20 000 ₽",
      features: {
        ru: [
          "Индивидуальный подход",
          "Два инструктора",
          "Два буйка для безопасности",
          "Идеально для общения родителя и ребенка",
        ],
        en: [
          "Individual approach",
          "Two instructors",
          "Two buoys for safety",
          "Ideal for parent-child bonding",
        ],
      },
      isPopular: true,
    },
    {
      id: "family4",
      title: {
        ru: "«Семья 4»",
        en: "«Family 4»",
      },
      description: {
        ru: "Для 1-2 взрослых и 1-2 детей. Два инструктора. Два буйка. Идеальный вариант для семейного знакомства с фридайвингом.",
        en: "For 1-2 adults and 1-2 children. Two instructors. Two buoys. Perfect for family introduction to freediving.",
      },
      price: "30 000 ₽",
      features: {
        ru: [
          "Идеально для семейного знакомства с фридайвингом",
          "Два инструктора",
          "Два буйка",
          "Гибкий состав группы",
        ],
        en: [
          "Perfect for family introduction to freediving",
          "Two instructors",
          "Two buoys",
          "Flexible group composition",
        ],
      },
    },
  ];

  const commonFeatures = {
    ru: [
      "Полный комплект оборудования (гидрокостюм, маска, ласты)",
      "Водная теория",
      "Мастер-класс по правильному надеванию гидрокостюма",
      "Полуторачасовая практика в море с инструктором",
    ],
    en: [
      "Full equipment set (wetsuit, mask, fins)",
      "Water theory",
      "Masterclass on proper wetsuit wearing",
      "1.5 hours of sea practice with instructor",
    ],
  };

  const handleBook = (message: string) => {
    tgStore.openTelegramChat(message);
  };

  return (
    <section className={styles.trialSection} aria-labelledby="trial-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="trial-heading" className={styles.heading}>
            {t.title.trial}
          </h2>
          <p className={styles.subheading}>{t.subtitle.trial}</p>
        </div>
        <div className={styles.includedWrapper}>
          <img
            src={currentImage}
            alt="picture trial training"
            className={styles.includedImage}
          />
          <div className={styles.includedBlock}>
            <h3 className={styles.includedTitle}>{t.text.include}</h3>
            <ul className={styles.includedList}>
              {commonFeatures[currentLang].map((feature, index) => (
                <li key={index}>
                  <p className="text-second">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {trialData.map((card) => (
            <article
              key={card.id}
              className={`${styles.card} ${card.isPopular ? styles.popular : ""}`}
            >
              {card.isPopular && (
                <div className={styles.popularBadge}>{t.text.popular}</div>
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title[currentLang]}</h3>
                <p className={styles.cardDescription}>
                  {card.description[currentLang]}
                </p>
                <div
                  className={styles.price}
                  aria-label={`Price: ${card.price}`}
                >
                  {card.price}
                </div>
                <ul className={styles.featuresList}>
                  {card.features[currentLang].map((feature, index) => (
                    <li key={index}>
                      <p className="text-second">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  className={styles.bookButton}
                  type="button"
                  onClick={() => handleBook(card.title[currentLang])}
                >
                  {t.button.bookin}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrialSection2;
