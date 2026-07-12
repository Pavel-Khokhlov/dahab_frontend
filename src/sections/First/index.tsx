import { useTranslator } from "@/context/TranslationContext";
import arrowDown from "@/assets/images/icons/arrow_down.svg";
import "./First.scss";

const FirstSection = () => {
  const t = useTranslator();
  return (
    <section className="first" id="main">
      <h1 className="first__title">DAHAB</h1>
      <h3 className="first__subtitle">{t.subtitle.main}</h3>
      <h6 className="first__description">{t.text.main}</h6>
      <img
        src={arrowDown}
        alt="icon arrow down"
        className="first__icon"
        width={30}
      />
    </section>
  );
};

export default FirstSection;
