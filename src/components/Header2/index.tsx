import { useEffect, useState } from "react";
import { usePageScroll } from "@/store/globalUI";
import BurgerMenu from "../BurgerMenu";

import "./Header.scss";
import { useTranslator } from "@/context/TranslationContext";
import backBlack from "@/assets/images/icons/back-black.svg";
import backWhite from "@/assets/images/icons/back-white.svg";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher2 from "../Lang";
import LogoMolchanovsIcon from "../LogoMolchanovsIcon";

const Header2 = () => {
  const t = useTranslator();
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = usePageScroll();

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

  const handleClickOverlay = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
     if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen])

  return (
    <>
      <div className="header">
        <button
          className="header__logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="На главную"
        >
          <LogoMolchanovsIcon
            colorIcon={"var(--color-lightblue)"}
            colorText={"var(--primary-black)"}
            size={120}
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
      <nav
        className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}
        onClick={handleClickOverlay}
      >
        {/* Декоративный элемент — сонар/волна */}
        {/* <div className="dropdown-menu__sonar" /> */}

        <div
          className={`dropdown-menu__inner ${isMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="dropdown-menu__list">
            <li className="dropdown-menu__item">
              <a href="#main" onClick={(e) => handleMenuItemClick(e, "#main")}>
                {t.title.main}
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#about"
                onClick={(e) => handleMenuItemClick(e, "#about")}
              >
                <span className="item-label">{t.title.about}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a href="#team" onClick={(e) => handleMenuItemClick(e, "#team")}>
                <span className="item-label">{t.title.team}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#feedbacks"
                onClick={(e) => handleMenuItemClick(e, "#feedbacks")}
              >
                <span className="item-label">{t.title.feedbacks}</span>
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                href="#contact"
                onClick={(e) => handleMenuItemClick(e, "#contact")}
              >
                <span className="item-label">{t.title.contacts}</span>
              </a>
            </li>
          </ul>

          <div className="dropdown-menu__bottom">
            <LanguageSwitcher2 />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header2;
