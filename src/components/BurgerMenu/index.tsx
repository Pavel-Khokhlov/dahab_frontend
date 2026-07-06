import { usePageScroll } from "@/store/globalUI";
import "./Burger.scss";

interface BurgerMenuProps {
  isClicked: boolean;
  onClick: () => void;
}

const BurgerMenu = ({ isClicked, onClick }: BurgerMenuProps) => {
  const { scrollY } = usePageScroll();
  return (
    <button
      className={`burger ${isClicked ? "active" : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
      type="button"
    >
      <span
        className={`burger-line ${isClicked || scrollY > 280 ? "_active" : ""}`}
      ></span>
      <span
        className={`burger-line ${isClicked || scrollY > 280 ? "_active" : ""}`}
      ></span>
      <span
        className={`burger-line ${isClicked || scrollY > 280 ? "_active" : ""}`}
      ></span>
    </button>
  );
};

export default BurgerMenu;
