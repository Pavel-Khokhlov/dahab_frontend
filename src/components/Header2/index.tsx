import { useEffect, useState } from "react";
import { usePageScroll } from "@/store/globalUI";
import BurgerMenu from "../BurgerMenu";

import "./Header.scss";
import { useTranslator } from "@/context/TranslationContext";
import whiteLogoUrl from "@/assets/images/logo/MolchanovsLogoWhite.svg";
import blackLogoUrl from "@/assets/images/logo/MolchanovsLogoBlack.svg";
import backBlack from "@/assets/images/icons/back-black.svg";
import backWhite from "@/assets/images/icons/back-white.svg";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher2 from "../Lang";

const MAX_OPACITY = 0.95;
const MAX_SHADOW = 0.15;

const Header2 = () => {
  const t = useTranslator();
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = usePageScroll();
  const opacity = Math.min(scrollY / 300, MAX_OPACITY);
  const shadow = Math.min(scrollY / 600, MAX_SHADOW);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 50;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

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
            width={120}
          />
        </button>
        <h5 className="header__menu">menu</h5>
        {location.pathname === "/schedule" && (
          <button className="header__back" onClick={() => navigate(-1)}>
            <img
              src={isMenuOpen || scrollY > 280 ? backBlack : backWhite}
              alt="button back"
              width={30}
            />
          </button>
        )}
        {location.pathname === "/" && (
          <BurgerMenu isClicked={isMenuOpen} onClick={handleClick} />
        )}
      </div>

      {/* Molchanovs — строгое подводное меню */}
      <nav className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Декоративный элемент — сонар/волна */}
        <div className="dropdown-menu__sonar" />

        <div className="dropdown-menu__inner">
          <ul className="dropdown-menu__list">
            <li className="dropdown-menu__item">
              <a href="#main" onClick={(e) => handleMenuItemClick(e, "#main")}>
                <span className="item-index">— 01</span>
                <span className="item-label">{t.title.main}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#about"
                onClick={(e) => handleMenuItemClick(e, "#about")}
              >
                <span className="item-index">— 02</span>
                <span className="item-label">{t.title.about}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a href="#team" onClick={(e) => handleMenuItemClick(e, "#team")}>
                <span className="item-index">— 03</span>
                <span className="item-label">{t.title.team}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#feedbacks"
                onClick={(e) => handleMenuItemClick(e, "#feedbacks")}
              >
                <span className="item-index">— 04</span>
                <span className="item-label">{t.title.feedbacks}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#contact"
                onClick={(e) => handleMenuItemClick(e, "#contact")}
              >
                <span className="item-index">— 05</span>
                <span className="item-label">{t.title.contacts}</span>
              </a>
            </li>
          </ul>

          <div className="dropdown-menu__bottom">
            <LanguageSwitcher2 />
            <div className="depth-badge">
              <span className="depth-icon">⟐</span>
              <span className="depth-text">-42m</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header2;
