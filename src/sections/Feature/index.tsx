import React, { ReactNode } from "react";
import styles from "./Feature.module.scss";
import { useVisibilityObserver } from "@/hooks/useVisibilityObserver";
// import { useTranslator } from "@/context/TranslationContext";

export interface FeatureItemWithSVG {
  id: number;
  title: string;
  text: string;
  icon: ReactNode;
}

const featuresData: FeatureItemWithSVG[] = [
  {
    id: 1,
    title: "Особенное место",
    text: "Прозрачное Красное море, теплое солнце, размеренный ритм жизни и невероятная атмосфера Дахаба — пространство для настоящего отдыха. И взрослые, и дети смогут прочувствовать истинную магию этого места.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Погружение в себя",
    text: "Наш выезд — это не просто обучение фридайвингу. Это возможность научиться управлять своим дыханием, познакомиться с подводным миром Красного моря и получить новый опыт, который останется с вами на всю жизнь.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Поддержка профессионалов",
    text: "Программа подойдет как тем, кто делает первые шаги во фридайвинге, так и тем, кто уже имеет опыт и хочет совершенствовать свои навыки под руководством профессиональных инструкторов.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const FeatureCard: React.FC<{ item: FeatureItemWithSVG; index: number }> = ({
  item,
  index,
}) => {
  const { ref, isVisible } = useVisibilityObserver<HTMLDivElement>(0.7);

  return (
    <div
      ref={ref}
      className={`${styles.featureCard} ${isVisible ? styles.active : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardIcon}>{item.icon}</div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardText}>{item.text}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {featuresData.map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
