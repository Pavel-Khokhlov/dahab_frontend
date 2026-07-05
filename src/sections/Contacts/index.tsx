import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import heroImg from "@/assets/hero.png";
import { useTranslator } from "@/context/TranslationContext";

const ContactSection = () => {
    const t = useTranslator();
  return (
    <section id="contact">
      <h2 className="feedback__title">{t.title.contacts}</h2>
      <h3 className="feedback__subtitle">Description</h3>
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test & FUCK <code>HMR</code>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
