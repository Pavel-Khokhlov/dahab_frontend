import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import heroImg from "@/assets/hero.png";
import { useTranslator } from "@/context/TranslationContext";
import SectionWrapper from "@/components/SectionWrapper";

const ContactSection = () => {
  const t = useTranslator();
  return (
    <SectionWrapper id="contact" title={t.title.contacts}>
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
