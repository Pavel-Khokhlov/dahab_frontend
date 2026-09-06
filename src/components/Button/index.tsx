import "./Button.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  message: string;
  textColor?: string;
  bgColor?: string;
  gradient?: string;
  size?: "small" | "medium" | "large";
  border?: string; // бордюр (например: "2px solid #000")
  copyPath?: string;
  onClick: (value: string) => Promise<void> | void;
}

const Button = ({
  type,
  title,
  icon,
  message,
  textColor = "#000",
  bgColor = "transparent",
  gradient,
  size = "medium",
  border = "none",
  copyPath,
  onClick,
}: ButtonProps) => {
  const handleButtonClick = (value: string) => {
    onClick(value);
  };

  // Определяем стили фона (поддержка градиента)
  const getBackgroundStyle = (): React.CSSProperties => {
    if (gradient) {
      return { background: gradient };
    }
    return { backgroundColor: bgColor };
  };

  const getSizeIcon = (v: string): number => {
    if (v === "small") return 20;
    if (v === "large") return 40;
    return 30;
  };

  return (
    <button
      className={`button ${size}`}
      type={type}
      onClick={() => handleButtonClick(message)}
      data-copy-path={copyPath}
      style={{
        color: textColor,
        border: border,
        ...getBackgroundStyle(),
      }}
    >
      {title}
      {icon && <img src={icon} width={getSizeIcon(size)} />}
    </button>
  );
};

export default Button;
