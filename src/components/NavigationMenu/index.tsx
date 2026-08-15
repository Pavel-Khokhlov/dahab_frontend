import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslator } from "@/context/TranslationContext";
import Lang from "../Lang";

import "./NavigationMenu.scss";
import SocialLinks from "../SocialLinks";

interface NavigationMenuProps {
  layout: "burger" | "head" | "foot";
  isOpen: boolean;
  onClose?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  layout,
  isOpen,
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (location.pathname !== "/") return null;

  return (
    <nav
      className={`menu__body ${isOpen ? "open" : ""} ${layout}`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className={`menu__list ${layout}`}>
        {menuArr.map((item) => (
          <li key={item.id} className={`menu__item ${layout}`}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleMenuItemClick(e, `#${item.id}`)}
            >
              <span className="menu__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="menu__bottom">
        <Lang isMobile={layout === "burger"} />
      </div>
      {layout === "burger" && <SocialLinks position="menu" />}
    </nav>
  );
};

export default NavigationMenu;
