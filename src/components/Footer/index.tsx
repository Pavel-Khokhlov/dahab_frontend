import LogoIcon from "../LogoIcon";
import styles from "./Footer.module.scss";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <LogoIcon color={"var(--color-lightblue)"} size={40}/>
            <span className={styles.footerName}>
              Molchanovs · Дахаб · Египет
            </span>
          </div>
          <div className={styles.footerMeta}>
            <span>2020 - 2026</span>
            <span className={styles.footerDot}>•</span>
            <span>Глубина начинается внутри</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
