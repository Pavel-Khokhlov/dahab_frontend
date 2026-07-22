import React from "react";
import styles from "./About.module.scss";
import { useTranslator } from "@/context/TranslationContext";
import FeatureSection from "../Feature";

const AboutSection3: React.FC = () => {
  const t = useTranslator();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine}>{t.title.mainFirst}</span>
          <span className={styles.titleLine}>{t.title.mainSecond}</span>
        </h1>
        <div className={styles.heroDivider} />
        <p className={styles.heroSub}>{t.subtitle.main}</p>
        <div className={styles.scrollIndicator}>
          <span>{t.text.main}</span>
          <div className={styles.scrollLine} />
        </div>
        <FeatureSection />
      </div>
    </section>
  );
};

export default AboutSection3;
