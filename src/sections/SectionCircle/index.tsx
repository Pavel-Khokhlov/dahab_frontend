import "./SectionCircle.scss";

export interface SectionMainProps {
  id: "family" | "program" | "schedule";
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
}

const SectionCircle = ({
  id,
  title,
  subtitle,
  description,
  children,
}: SectionMainProps) => {
  return (
    <section className="circle" id={id}>
      {/* Декоративные водные элементы */}
      <div className="circle__water-bubble circle__water-bubble--1"></div>
      <div className="circle__water-bubble circle__water-bubble--2"></div>
      <div className="circle__water-bubble circle__water-bubble--3"></div>

      <div className="circle__container">
        <h2 className="circle__title">{title}</h2>

        {subtitle && <p className="circle__subtitle">{subtitle}</p>}

        {description && (
          <p className="circle__description">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionCircle;
