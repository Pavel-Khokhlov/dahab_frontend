import { LOCALES } from "@/context/TranslationContext";
import "./Header.scss";
import { useStore } from "@/store";
import { usePageScroll } from "@/store/globalUI";

const Header = () => {
  const { globalUIStore } = useStore();
  const { scrollY } = usePageScroll();
  const opacity = Math.min(scrollY / 400, 0.95);
  const shadow = Math.min(scrollY / 800, 0.15);
  return (
    <header
      className="header"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        boxShadow: `4px 0 16px rgba(0, 0, 0, ${shadow})`
      }}
    >
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
    </header>
  );
};

export default Header;
