import { useTranslator } from "@/context/TranslationContext";
import SectionWrapper from "@/components/SectionWrapper";
import PriceItem from "@/components/PriceItem";

const data = [
  {
    title_ru: "Индивидуальная",
    title_en: "Individual",
    text_ru: `Для одного участника.`,
    text_en: `For one person`,
    price: "12 000 ₽",
  },
  {
    title_ru: "Семейная «Family 2»",
    title_en: "Семейная «Family 2»",
    text_ru: `Для взрослого и ребенка. Два инструктора. Два буйка.`,
    text_en: `Для взрослого и ребенка. Два инструктора. Два буйка.`,
    price: "20 000 ₽",
  },
  {
    title_ru: "Семейная «Family 4»",
    title_en: "Семейная «Family 4»",
    text_ru: `Для 1-2 взрослых и 1-2 детей. Два инструктора. Два буйка.
Идеальный вариант для семейного знакомства с фридайвингом.`,
    text_en: `Для 1-2 взрослых и 1-2 детей. Два инструктора. Два буйка.
Идеальный вариант для семейного знакомства с фридайвингом.`,
    price: "30 000 ₽",
  },
];

const TrialSection = () => {
  const t = useTranslator();
  return (
    <SectionWrapper id="trial" title={t.title.trial}>
      {data.map((p) => {
        return <PriceItem key={p.price} item={p} />;
      })}
    </SectionWrapper>
  );
};

export default TrialSection;
