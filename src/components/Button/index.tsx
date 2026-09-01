import "./Button.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  isBGWhite?: boolean;
  icon?: string;
  message: string;
  onClick: (value: string) => void;
}

const Button = ({
  type,
  title,
  isBGWhite,
  icon,
  message,
  onClick,
}: ButtonProps) => {
  const handleBook = (v: string) => {
    onClick(v);
  };
  return (
    <button
      className={`button ${isBGWhite ? "text-white" : ""}`}
      type={type}
      onClick={() => handleBook(message)}
    >
      {title}
      {icon && <img src={icon} className="button__icon" />}
    </button>
  );
};

export default Button;
