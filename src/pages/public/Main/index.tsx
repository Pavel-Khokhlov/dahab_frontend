import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

import Header from "@/components/Header";
import First from "@/sections/First";
import Contact from "@/sections/Contacts";

import "./Main.css";
import Team from "@/sections/Team";
import FeedbacksSection from "@/sections/Feedbacks";
import PriceSection from "@/sections/Price";
import TrialSection from "@/sections/TrialTraining";

function MainPage() {
  const t = useTranslator();

  return (
    <>
      <Helmet>
        <title>{t.title.urlMain}</title>
      </Helmet>
      <Header />
      <First />
      <TrialSection />
      <PriceSection />
      <Team />
      <FeedbacksSection />
      <Contact />
    </>
  );
}

export default MainPage;
