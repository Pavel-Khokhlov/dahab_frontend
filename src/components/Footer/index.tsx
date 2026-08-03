import { useTranslator } from "@/context/TranslationContext";
import LogoIcon from "../LogoIcon";
import styles from "./Footer.module.scss";

const FooterSection = () => {
  const t = useTranslator();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <LogoIcon color={"var(--primary-brand)"} size={40} />
            <span className={styles.footerName}>{t.footer.molchanovs}</span>
          </div>
          <div className={styles.footerMeta}>
            <span>2020 - {currentYear}</span>
            <span className={styles.footerDot}>•</span>
            <span>{t.footer.text}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
