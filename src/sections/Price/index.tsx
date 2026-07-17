import { useTranslator } from "@/context/TranslationContext";

import SectionWrapper from "@/components/SectionWrapper";
import PriceItem from "@/components/PriceItem";

const data = [
  {
    title_ru: "Тренировочный день",
    title_en: "Один тренировочный день",
    text_ru: `
Одна полноценная глубинная тренировка.`,
    text_en: `12 000 ₽ (или евро по текущему курсу)
Включает одну полноценную глубинную тренировку.`,
    price: "12 000 ₽",
  },
  {
    title_ru: "Пакет «Неделя»",
    title_en: "Пакет «Неделя»",
    text_ru: `Четыре тренировочных дня.`,
    text_en: `40 000 ₽ (или евро по текущему курсу)
4 тренировочных дня.`,
    price: "40 000 ₽",
  },
  {
    title_ru: "Пакет «Две недели»",
    title_en: "Пакет «Две недели»",
    text_ru: `Восемь тренировочных дней.`,
    text_en: `72 000 ₽ (или евро по текущему курсу)
8 тренировочных дней.`,
    price: "72 000 ₽",
  },
];

const PriceSection = () => {
  const t = useTranslator();
  return (
    <SectionWrapper id="price" title={t.title.prices}>
      <div className="trial__grid">
        {data.map((p) => {
          return <PriceItem key={p.price} item={p} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default PriceSection;
