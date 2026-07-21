import React from "react";
import styles from "./Divider.module.scss";

interface DividerProps {
  /**
   * Цвет разделителя или градиент
   * @example "#ff0000" - сплошной цвет
   * @example "linear-gradient(to right, transparent, #ff0000)" - градиент
   * @example "transparent" - прозрачный
   */
  color?: string;
  /**
   * Ширина разделителя в пикселях или процентах
   * @example "100%" - полная ширина
   * @example "50px" - фиксированная ширина
   */
  width?: string | number;
  /**
   * Толщина линии
   * @default "1px"
   */
  height?: string | number;
  /**
   * Направление градиента (если используется gradient)
   * @default "to right"
   */
  gradientDirection?: string;
  /**
   * Дополнительные CSS классы
   */
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = `linear-gradient(to right, transparent 20%, var(--color-teal), transparent 80%)`,
  width = "90%",
  height = "1px",
  gradientDirection = "to right",
  className = "",
}) => {
  // Проверяем, является ли цвет градиентом
  const isGradient =
    color?.includes("gradient") || color?.includes("gradient(");

  // Если цвет начинается с 'linear-gradient' или 'radial-gradient', используем как есть
  const finalBackground = isGradient
    ? color
    : `linear-gradient(${gradientDirection}, transparent 20%, ${color}, transparent 80%)`;

  return (
    <div
      className={`${styles.divider} ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        background: finalBackground,
        borderRadius: "2px",
      }}
    />
  );
};

export default Divider;
