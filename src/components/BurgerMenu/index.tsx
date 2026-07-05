import "./Burger.scss";

interface BurgerMenuProps {
  isClicked: boolean;
  onClick: () => void;
}

const BurgerMenu = ({ isClicked, onClick }: BurgerMenuProps) => {
  return (
    <button
      className={`burger ${isClicked ? "active" : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
      type="button"
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};

export default BurgerMenu;
