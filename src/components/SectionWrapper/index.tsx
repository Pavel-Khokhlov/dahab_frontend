import "./Section.scss";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  isWhite?: boolean;
  children: React.ReactNode;
}

const SectionWrapper = ({
  id,
  title,
  description,
  isWhite,
  children,
}: SectionProps) => {
  return (
    <section id={id} className={`section ${id}`}>
      <h2 className={`section__title ${isWhite ? "_dark" : "_light"}`}>
        {title}
      </h2>
      {description && (
        <h3 className={`section__subtitle  ${isWhite ? "_dark" : "_light"}`}>
          {description}
        </h3>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
