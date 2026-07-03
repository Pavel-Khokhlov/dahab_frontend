import { LOCALES } from "@/context/TranslationContext";
import "./Header.scss";
import { useStore } from "@/store";

const Header = () => {
  const { globalUIStore } = useStore();
  return (
    <div className="header">
      <h2 className="header__logo">LOGO</h2>
      <div className="header__language-switcher">
        <button
          className={`header__lang-btn ${globalUIStore.currentLocale === LOCALES.ENGLISH ? "active" : ""}`}
          onClick={() => globalUIStore.setLanguage(LOCALES.ENGLISH)}
        >
          EN
        </button>
        <button
          className={`header__lang-btn ${globalUIStore.currentLocale === LOCALES.RUSSIAN ? "active" : ""}`}
          onClick={() => globalUIStore.setLanguage(LOCALES.RUSSIAN)}
        >
          RU
        </button>
        {/* Опционально: кнопка для переключения */}
        <button
          className="header__lang-toggle"
          onClick={globalUIStore.toggleLanguage}
          title="Toggle language"
        >
          🔄
        </button>
      </div>
      <h5 className="header__menu">menu</h5>
    </div>
  );
};

export default Header;
