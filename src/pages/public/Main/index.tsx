import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

import Team from "@/sections/Team";
import AboutSection from "@/sections/About";
import WhyDahabSection from "@/sections/WhyDahab";
import TrainingProgramSection from "@/sections/TrainingProgram";
import TrainingScheduleSection from "@/sections/TrainingSchedule";
import FooterSection from "@/components/Footer";
import PricingSection from "@/sections/Price";
import Header from "@/components/Header";
import TrialSection from "@/sections/TrialTraining";
import TrainingDaySection from "@/sections/TrainingDay";
import FamilyFormatSection from "@/sections/FamilyFormat";
import FeedbacksSection from "@/sections/Feedbacks";

function MainPage() {
  const t = useTranslator();

  return (
    <>
      <Helmet>
        <title>{t.title.urlMain}</title>
      </Helmet>
      <Header />
      <AboutSection />
      <WhyDahabSection />
      <FamilyFormatSection />
      <TrialSection />
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
