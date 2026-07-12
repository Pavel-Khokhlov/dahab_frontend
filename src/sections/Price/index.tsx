import { useTranslator } from "@/context/TranslationContext";

import "./Price.scss";
import SectionWrapper from "@/components/SectionWrapper";

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
      {data.map((p) => {
        return (
          <div key={p.price} className="price__wrapper">
            <h3 className="price__title">{p.title_ru}</h3>
            <p className="price__text">{p.text_ru}</p>
            <p className="price__value">{p.price}</p>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default PriceSection;
