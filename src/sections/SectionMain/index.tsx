import { useTranslator } from "@/context/TranslationContext";

import "./SectionMain.scss";

export interface SectionMainProps {
  id: "main" | "dolphin";
  titleFirst: string;
  titleSecond: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const SectionMain = ({
  id,
  titleFirst,
  titleSecond,
  subtitle,
  children,
}: SectionMainProps) => {
  const t = useTranslator();
  return (
    <section className="first" id={id}>
      <div className="first__content">
        <h1 className="first__title">
          <span className="first__lines">{titleFirst}</span>
          <span className="first__lines">{titleSecond}</span>
        </h1>
        <div className="first__divider" />
        <p className="first__subtitle">{subtitle}</p>
        <div className="first__scroll">
          <span>{t.text.main}</span>
          <div className="first__line" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionMain;
