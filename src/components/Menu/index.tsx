import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslator } from "@/context/TranslationContext";
import SocialLinks from "../SocialLinks";
import Lang from "../Lang";
import Button from "../Button";
import LinkIcon from "@/assets/images/socials/icons8-link-96.png";

import { useCustomToast } from "@/hooks/useCustomToast.js";

import "./Menu.scss";
interface MenuProps {
  layout: "burg" | "head" | "foot";
  onClose?: () => void;
}

const Menu: React.FC<MenuProps> = ({ layout, onClose }) => {
  const t = useTranslator();
  const navigate = useNavigate();
  const { showSuccess } = useCustomToast();

  const menuArr = [
    { id: "main", label: t.menu.main },
    { id: "dahab", label: t.menu.dahab },
    { id: "price", label: t.menu.prices },
    {
      id: "dolphin",
      label: t.menu.tour,
      options: [" 07.11-14.11.2026", " 26.12-02.01.2027"],
    },
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
      if (targetId.includes("dolphin")) {
        console.log("targetId", targetId);
        navigate("/dolphin");
      }
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

  const handleCopyUrl = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showSuccess(t.toast.successCopied);
      // onClose();
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
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
        {menuArr.map((item) => {
          if (item.options) {
            return (
              <li key={item.id} className={`menu__item ${layout} column`}>
                <p className={`menu__link ${layout}`}>{item.label}</p>
                {item.options.map((option: string) => (
                  <a
                    key={option}
                    href={`#${item.id}`}
                    className={`menu__link ${layout} data`}
                    onClick={(e) => handleMenuItemClick(e, `#${item.id}`)}
                  >
                    {option}
                  </a>
                ))}
              </li>
            );
          } else {
            return (
              <li key={item.id} className={`menu__item ${layout}`}>
                <a
                  href={`#${item.id}`}
                  className={`menu__link ${layout}`}
                  onClick={(e) => handleMenuItemClick(e, `#${item.id}`)}
                >
                  {item.label}
                </a>
              </li>
            );
          }
        })}
      </ul>

      {layout !== "foot" && (
        <div className="menu__bottom">
          <Lang isMobile={layout === "burg"} />
        </div>
      )}
      {layout === "burg" && <SocialLinks position="menu" />}
      {layout === "burg" && (
        <Button
          type="button"
          title={t.button.share}
          size="small"
          message="https://dahab.family-freediving.com"
          onClick={handleCopyUrl}
          icon={LinkIcon}
          copyPath="https://dahab.family-freediving.com"
        />
      )}
    </nav>
  );
};

export default Menu;
