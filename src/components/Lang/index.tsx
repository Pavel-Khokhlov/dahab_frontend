import { useStore } from "@/store";
import { LOCALES } from "@/context/TranslationContext";

import "./Lang.scss";

const LanguageSwitcher2 = () => {
  const { globalUIStore } = useStore();

  return (
    <div className="language-switcher">
      <div className={`slider ${globalUIStore.currentLocale}`}>
        <button
          className="option active"
          onClick={() => globalUIStore.setLanguage(LOCALES.ENGLISH)}
        >
          <span className="lang-text">En</span>
        </button>
        <button
          className="option"
          onClick={() => globalUIStore.setLanguage(LOCALES.RUSSIAN)}
        >
          <span className="lang-text">Ру</span>
        </button>
        <div className="slider-thumb"></div>
      </div>
    </div>
  );
};

export default LanguageSwitcher2;
