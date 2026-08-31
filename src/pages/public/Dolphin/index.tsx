import { Helmet } from "react-helmet-async";
import { useTranslator } from "@/context/TranslationContext";

import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SectionMain from "@/sections/SectionMain";
import DolphinHouseSection from "@/sections/Dolphin/DolphinHouse";


function DolphinPage() {
  const t = useTranslator();

  return (
    <>
      <Helmet>
        <title>{t.title.urlDolphin}</title>
      </Helmet>
      <Header />
      <SectionMain
        id={"dolphin"}
        titleFirst={t.title.dolphinFirst}
        titleSecond={t.title.dolphinSecond}
        subtitle={t.subtitle.dolphin}
      />
      <DolphinHouseSection />
      <FooterSection />
    </>
  );
}

export default DolphinPage;
