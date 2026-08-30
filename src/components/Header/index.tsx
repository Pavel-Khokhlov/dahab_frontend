import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BurgerMenu from "../BurgerMenu";
import LogoMolchanovsIcon from "../LogoMolchanovsIcon";
import Menu from "../Menu";
import backBlack from "@/assets/images/icons/back-black.svg";

import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOverlay = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/dolphin") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="header">
        <button
          className="header__logo"
          onClick={() => handleLogoClick()}
          aria-label="На главную"
        >
          <LogoMolchanovsIcon
            colorIcon={"var(--primary-brand)"}
            colorText={"var(--primary-black)"}
            size={120}
          />
        </button>
        {location.pathname === "/dolphin" && (
          <button className="header__back" onClick={() => navigate(-1)}>
            <img src={backBlack} alt="button back" width={30} />
          </button>
        )}
        {location.pathname !== "/dolphin" && (
          <BurgerMenu isClicked={isMenuOpen} onClick={handleBurgerClick} />
        )}
        <Menu layout="head" />
      </div>

      {/* Molchanovs — строгое подводное меню */}
      <div
        className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}
        onClick={handleClickOverlay}
      >
        <div
          className={`dropdown-menu__body ${isMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Menu layout="burg" onClose={handleClickOverlay} />
        </div>
      </div>
    </>
  );
};

export default Header;
