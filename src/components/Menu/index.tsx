import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslator } from "@/context/TranslationContext";
import SocialLinks from "../SocialLinks";
import Lang from "../Lang";

import "./Menu.scss";

interface MenuProps {
  layout: "burg" | "head" | "foot";
  onClose?: () => void;
}

const Menu: React.FC<MenuProps> = ({
  layout,
  onClose,
}) => {
  const t = useTranslator();
  const location = useLocation();

  const menuArr = [
    { id: "main", label: t.menu.main },
    { id: "dahab", label: t.menu.dahab },
    { id: "price", label: t.menu.prices },
    { id: "tour", label: t.menu.tour },
    { id: "team", label: t.menu.team },
    { id: "feedbacks", label: t.menu.feedbacks },
  ];

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    if (onClose) {
      onClose();
    }

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 0;
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

  if (location.pathname !== "/") return null;

  return (
    <nav
      className={`menu__wrapper ${layout}`}
      onClick={(e) => e.stopPropagation()}
    >
      {layout === "foot" && (
        <h4 className="social__title">{t.menu.navigation}:</h4>
      )}
      <ul className={`menu__list ${layout}`}>
        {menuArr.map((item) => (
          <li key={item.id} className={`menu__item ${layout}`}>
            <a
              href={`#${item.id}`}
              className={`menu__link ${layout}`}
              onClick={(e) => handleMenuItemClick(e, `#${item.id}`)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {layout !== "foot" && (
        <div className="menu__bottom">
          <Lang isMobile={layout === "burg"} />
        </div>
      )}
      {layout === "burg" && <SocialLinks position="menu" />}
    </nav>
  );
};

export default Menu;
