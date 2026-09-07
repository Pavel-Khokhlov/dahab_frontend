import { useState, useRef, useEffect } from "react";
import { useTranslator } from "@/context/TranslationContext";
import { useNavigate } from "react-router-dom";

import "./Menu.scss";
import Lang from "../Lang";
import SocialLinks from "../SocialLinks";
import Button from "../Button";
import LinkIcon from "@/assets/images/socials/icons8-link-96.png";

import { useCustomToast } from "@/hooks/useCustomToast.js";

interface MenuProps {
  layout: "burg" | "head" | "foot";
  onClose?: () => void;
}

const Menu: React.FC<MenuProps> = ({ layout, onClose }) => {
  const t = useTranslator();
  const navigate = useNavigate();
  const { showSuccess } = useCustomToast();
  const [openTour, setOpenTour] = useState(false);
  const tourRef = useRef<HTMLLIElement>(null);

  const menuArr = [
    { id: "main", label: t.menu.main },
    { id: "dahab", label: t.menu.dahab },
    { id: "price", label: t.menu.prices },
    {
      id: "dolphin",
      label: t.menu.tour,
      options: ["🐬 07.11-14.11.2026", "🐬 26.12-02.01.2027"],
    },
    { id: "team", label: t.menu.team },
    { id: "feedbacks", label: t.menu.feedbacks },
  ];

  // Закрытие при клике вне блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tourRef.current && !tourRef.current.contains(event.target as Node)) {
        setOpenTour(false);
      }
    };

    if (openTour) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openTour]);

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
        navigate("/dolphin");
        window.scrollTo(0, 0);
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
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
  };

  // Переключение блока Tour
  const toggleTour = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenTour(!openTour);
  };

  // Обработка клика по опции тура
  /* const handleTourOptionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    option: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Selected tour:", option);
    setOpenTour(false);
    // Здесь ваша логика перехода на страницу тура
    // navigate(`/dolphin?date=${option}`);
  }; */

  if (location.pathname !== "/") return null;

  // Определяем, нужно ли показывать выпадающий блок (только для head/десктоп)
  const showDropdown = layout === "head";

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
              <li
                key={item.id}
                ref={tourRef}
                className={`menu__item ${layout} column tour-item ${
                  showDropdown ? "has-dropdown" : ""
                }`}
              >
                {/* Заголовок кнопки Tour */}
                <button
                  className={`menu__link ${layout} tour-toggle ${openTour ? "active" : ""}`}
                  onClick={toggleTour}
                  aria-expanded={openTour}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="tour-arrow">{openTour ? "▲" : "▼"}</span>
                </button>

                {/* Выпадающий блок для десктопа */}
                {showDropdown && (
                  <div className={`tour-dropdown ${openTour ? "open" : ""}`}>
                    <div className="tour-dropdown-content">
                      {item.options.map((option: string) => (
                        <a
                          key={option}
                          href="#"
                          className="tour-dropdown-item"
                          // onClick={(e) => handleTourOptionClick(e, option)}
                          onClick={(e) => handleMenuItemClick(e, `#${item.id}`)}
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Для мобильной версии и футера показываем как раньше */}
                {!showDropdown && (
                  <div className={`tour-options ${openTour ? "open" : ""}`}>
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
                  </div>
                )}
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
