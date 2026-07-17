import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

// import Header from "@/components/Header";
// import First from "@/sections/First";
// import Contact from "@/sections/Contacts";

import "./Main.css";
import Team from "@/sections/Team";
import FeedbacksSection from "@/sections/Feedbacks";
import PriceSection from "@/sections/Price";
import TrialSection from "@/sections/TrialTraining";
// import AboutSection from "@/sections/About";
import TrainingProgramSection from "@/sections/TrainingProgram";
import TrainingScheduleSection from "@/sections/TrainingSchedule";
import WhyDahabSection from "@/sections/WhyDahab";
import AboutSection2 from "@/sections/About2";
import FooterSection from "@/components/Footer";
import PricingSection from "@/sections/PriceNew";
import Header from "@/components/Header";
import TrialSection2 from "@/sections/TrialTraining2";

function MainPage() {
  const t = useTranslator();

  return (
    <>
      <Helmet>
        <title>{t.title.urlMain}</title>
      </Helmet>
      <Header />
      {/* <First /> */}
      {/* <AboutSection /> */}
      <AboutSection2 />
      <WhyDahabSection />
      {/* <TrialSection /> */}
      <TrialSection2 />
      {/* <PriceSection /> */}
      <PricingSection />
      <TrainingScheduleSection />
      <Team />
      <TrainingProgramSection />
      <FeedbacksSection />
      {/* <Contact /> */}
      <FooterSection />
    </>
  );
}

export default MainPage;
