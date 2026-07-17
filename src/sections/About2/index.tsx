import React from "react";
import styles from "./About.module.scss";
import { useTranslator } from "@/context/TranslationContext";

const AboutSection2: React.FC = () => {
  const t = useTranslator();
  return (
    <div className={styles.app}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>{t.title.mainFirst}</span>
            <span className={styles.titleLine}>{t.title.mainSecond}</span>
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSub}>{t.subtitle.main}</p>
        </div>
        <div className={styles.scrollIndicator}>
          <span>{t.text.main}</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {/* Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
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
              </div>
              <h3 className={styles.cardTitle}>Особенное место</h3>
              <p className={styles.cardText}>
                Прозрачное Красное море, теплое солнце, размеренный ритм жизни и
                невероятная атмосфера Дахаба — пространство для настоящего
                отдыха. И взрослые, и дети смогут прочувствовать истинную магию
                этого места.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Погружение в себя</h3>
              <p className={styles.cardText}>
                Наш выезд — это не просто обучение фридайвингу. Это возможность
                научиться управлять своим дыханием, познакомиться с подводным
                миром Красного моря и получить новый опыт, который останется с
                вами на всю жизнь.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Поддержка профессионалов</h3>
              <p className={styles.cardText}>
                Программа подойдет как тем, кто делает первые шаги во
                фридайвинге, так и тем, кто уже имеет опыт и хочет
                совершенствовать свои навыки под руководством профессиональных
                инструкторов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection2;
