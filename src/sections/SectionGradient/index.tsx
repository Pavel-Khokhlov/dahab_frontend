import { useInView } from "react-intersection-observer";

import "./SectionGradient.scss";

export interface SectionMainProps {
  id: "dahab" | "dolphin";
  titleOne: string;
  titleTwo: string;
  textOne?: string;
  textTwo?: string;
  description?: string;
  imagePath?: string;
  children: React.ReactNode;
}

const SectionGradient = ({
  id,
  titleOne,
  titleTwo,
  textOne,
  textTwo,
  description,
  imagePath,
  children,
}: SectionMainProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Сработает только один раз
    threshold: 0.2, // 20% элемента видно
  });
  return (
    <section className="gradient" id={id}>
      <div className="gradient__background">
        <div className="gradient__gradient-circle gradient__gradient-circle--1"></div>
        <div className="gradient__gradient-circle gradient__gradient-circle--2"></div>
        <div className="gradient__gradient-circle gradient__gradient-circle--3"></div>
      </div>

      <div className="gradient__container">
        <h2
          ref={ref}
          className="gradient__title"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.6s ease",
          }}
        >
          {titleOne} <span className="gradient__highlight">{titleTwo}</span>
        </h2>

        {/* Блок с фотографией на всю ширину */}
        {imagePath && (
          <div className="gradient__full-image-wrapper">
            <img
              src={imagePath}
              alt="Дахаб - мировая столица фридайвинга"
              className="gradient__full-image"
            />
          </div>
        )}

        {textOne && textTwo && (
          <p className="gradient__subtitle">
            {textOne} <strong>{textTwo}</strong>
          </p>
        )}
        <div className="gradient__divider"></div>
        {description && <p className="gradient__description">{description}</p>}
        {children}
      </div>
    </section>
  );
};

export default SectionGradient;
