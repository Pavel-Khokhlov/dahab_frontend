import { useEffect, useState } from "react";
import { usePageScroll } from "@/store/globalUI";
import BurgerMenu from "../BurgerMenu";

import "./Header.scss";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslator } from "@/context/TranslationContext";
import whiteLogoUrl from "@/assets/images/logo/MolchanovsLogoWhite.svg";
import blackLogoUrl from "@/assets/images/logo/MolchanovsLogoBlack.svg";

const MAX_OPACITY = 0.95;
const MAX_SHADOW = 0.15;

const Header = () => {
  const t = useTranslator();
  const { scrollY } = usePageScroll();
  const opacity = Math.min(scrollY / 400, MAX_OPACITY);
  const shadow = Math.min(scrollY / 800, MAX_SHADOW);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();

    // Закрываем меню
    setIsMenuOpen(false);

    // Небольшая задержка для плавного закрытия меню
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Учитываем высоту фиксированного хедера (если есть)
        const headerHeight = 80; // Настройте под ваш хедер
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Задержка соответствует времени анимации закрытия меню
  };
  // Block scroll when menu is open
  useEffect(() => {
    console.log("HEADER", isMenuOpen);
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Optional: prevent scrolling on html as well for better compatibility
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);
  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${isMenuOpen ? MAX_OPACITY : opacity})`,
          boxShadow: `4px 0 16px rgba(0, 0, 0, ${isMenuOpen ? MAX_SHADOW : shadow})`,
        }}
      >
        <button
          className="header__logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="На главную"
        >
          <img
            src={isMenuOpen || scrollY > 280 ? blackLogoUrl : whiteLogoUrl}
            alt="Logo"
            width={130}
          />
        </button>
        <h5 className="header__menu">menu</h5>
        <BurgerMenu isClicked={isMenuOpen} onClick={handleClick} />
      </div>
      {/* Dropdown Menu */}
      <nav className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <a href="#main" onClick={(e) => handleMenuItemClick(e, "#main")}>
              {t.title.main}
            </a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#about" onClick={(e) => handleMenuItemClick(e, "#about")}>
              {t.title.about}
            </a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#team" onClick={(e) => handleMenuItemClick(e, "#team")}>
              {t.title.team}
            </a>
          </li>
          <li className="dropdown-menu__item">
            <a
              href="#feedbacks"
              onClick={(e) => handleMenuItemClick(e, "#feedbacks")}
            >
              {t.title.feedbacks}
            </a>
          </li>
          <li className="dropdown-menu__item">
            <a
              href="#contact"
              onClick={(e) => handleMenuItemClick(e, "#contact")}
            >
              {t.title.contacts}
            </a>
          </li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </>
  );
};

export default Header;
