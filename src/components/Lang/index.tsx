import { useStore } from "@/store";
import { LOCALES } from "@/context/TranslationContext";
import FlagRu from "@/assets/images/icons/ru.svg";
import FlagEn from "@/assets/images/icons/gb.svg";

import "./Lang.scss";

interface LangProps {
  isMobile: boolean;
}

const Lang = ({ isMobile }: LangProps) => {
  const { globalUIStore } = useStore();

  const currentFlag = globalUIStore.currentLocale !== "ru" ? FlagRu : FlagEn;

  return (
    <div className="language-switcher">
      {isMobile ? (
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
      ) : (
        <button
          className="lang__flag"
          onClick={() => globalUIStore.toggleLanguage()}
        >
          <img
            src={currentFlag}
            alt={`flag ${globalUIStore.currentLocale}`}
            className="lang__flag-img"
          />
        </button>
      )}
    </div>
  );
};

export default Lang;
