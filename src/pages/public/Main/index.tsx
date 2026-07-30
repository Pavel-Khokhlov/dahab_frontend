import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

// import Header from "@/components/Header";
// import First from "@/sections/First";
// import Contact from "@/sections/Contacts";

import Team from "@/sections/Team";
import FeedbacksSection from "@/sections/Feedbacks";
// import PriceSection from "@/sections/Price";
// import TrialSection from "@/sections/TrialTraining";
// import AboutSection from "@/sections/About";
import TrainingProgramSection from "@/sections/TrainingProgram";
import TrainingScheduleSection from "@/sections/TrainingSchedule";
import WhyDahabSection from "@/sections/WhyDahab";
// import AboutSection2 from "@/sections/About2";
import FooterSection from "@/components/Footer";
import PricingSection from "@/sections/PriceNew";
import Header from "@/components/Header2";
import TrialSection2 from "@/sections/TrialTraining2";
// import FeatureSection from "@/sections/Feature";
import TrainingDaySection from "@/sections/TrainingDay";
import FamilyFormatSection from "@/sections/FamilyFormat";
import AboutSection3 from "@/sections/About3";

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
      <AboutSection3 />
      {/* <FeatureSection /> */}
      <WhyDahabSection />
      {/* <TrialSection /> */}
      <FamilyFormatSection />
      <TrialSection2 />
      {/* <PriceSection /> */}
      <TrainingProgramSection />
      <TrainingDaySection />
      <PricingSection />
      <TrainingScheduleSection />
      <Team />
      <FeedbacksSection />
      {/* <Contact /> */}
      <FooterSection />
    </>
  );
}

export default MainPage;
