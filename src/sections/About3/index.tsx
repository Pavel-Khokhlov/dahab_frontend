import React, { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import { useTranslator } from "@/context/TranslationContext";
import FeatureSection from "../Feature";
import { useStore } from "@/store";

const AboutSection3: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const blockRef = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    const block = blockRef.current;

    if (!block) return; // Защита от null

    const handleScroll = () => {
      globalUIStore.setValueHeroScrolled(block.scrollTop);
    };

    // Подписываемся на событие
    block.addEventListener("scroll", handleScroll);

    // ОЧИСТКА: убираем слушатель при размонтировании
    return () => {
      block.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section ref={blockRef} className={styles.hero} id="hero">
      {/* <div className={styles.heroBackground} /> */}
      {/* <div className={styles.heroOverlay} /> */}
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
