import { useStore } from "@/store";
import { LOCALES } from "@/context/TranslationContext";

import "./LanguageSwitcher.scss"

const LanguageSwitcher = () => {
  const { globalUIStore } = useStore();
  return (
    <div className="switcher">
      <button
        className={`switcher__lang-btn ${globalUIStore.currentLocale === LOCALES.ENGLISH ? "active" : ""}`}
        onClick={() => globalUIStore.setLanguage(LOCALES.ENGLISH)}
        type="button"
      >
        EN
      </button>
      <button
        className={`switcher__lang-btn ${globalUIStore.currentLocale === LOCALES.RUSSIAN ? "active" : ""}`}
        onClick={() => globalUIStore.setLanguage(LOCALES.RUSSIAN)}
        type="button"
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
