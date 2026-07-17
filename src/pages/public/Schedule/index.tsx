import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

import Header from "@/components/Header";
import Contact from "@/sections/Contacts";

import "./Schedule.css";
import First from "@/sections/First";

function SchedulePage() {
  const t = useTranslator();

  return (
    <>
      <Helmet>
        <title>{t.title.urlSchedule}</title>
      </Helmet>
      <Header />
      <First />
      <Contact />
    </>
  );
}

export default SchedulePage;
