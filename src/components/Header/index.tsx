import { useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu";

import LogoMolchanovsIcon from "../LogoMolchanovsIcon";
import NavigationMenu from "../NavigationMenu";

import "./Header.scss";
import { useStore } from "@/store";

const Header = () => {
  const { globalUIStore } = useStore();

  const isMobile = globalUIStore.deviceType === "mobile";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
  }, [isMenuOpen]);

  return (
    <>
      <div className={`header ${isMobile ? "mobile" : ""}`}>
        <button
          className="header__logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="На главную"
        >
          <LogoMolchanovsIcon
            colorIcon={"var(--primary-brand)"}
            colorText={"var(--primary-black)"}
            size={120}
          />
        </button>
        {/* {location.pathname === "/schedule" && (
          <button className="header__back" onClick={() => navigate(-1)}>
            <img
              src={isMenuOpen || scrollY > 280 ? backBlack : backWhite}
              alt="button back"
              width={30}
            />
          </button>
        )} */}
        {isMobile ? (
          <BurgerMenu isClicked={isMenuOpen} onClick={handleBurgerClick} />
        ) : (
          <NavigationMenu layout="head" isOpen={true} />
        )}
      </div>

      {/* Molchanovs — строгое подводное меню */}
      <div
        className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}
        onClick={handleClickOverlay}
      >
        <NavigationMenu
          layout="burger"
          isOpen={isMenuOpen}
          onClose={handleClickOverlay}
        />
      </div>
    </>
  );
};

export default Header;
