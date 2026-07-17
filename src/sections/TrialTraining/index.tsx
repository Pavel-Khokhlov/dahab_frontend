import { useTranslator } from "@/context/TranslationContext";
import SectionWrapper from "@/components/SectionWrapper";
import PriceItem from "@/components/PriceItem";

import trialImg from "@/assets/images/background/trial.webp";

import "./Trial.scss";
import { useStore } from "@/store";

const trialData = {
  textOne_ru: `Хотите познакомиться с фридайвингом без покупки полного курса?`,
  textOne_en: `Хотите познакомиться с фридайвингом без покупки полного курса? en`,
  textTwo_ru: `Мы подготовили специальные ознакомительные программы продолжительностью 2,5 часа.`,
  textTwo_en: `Мы подготовили специальные ознакомительные программы продолжительностью 2,5 часа. en`,
  textThree_ru: `В стоимость входит:`,
  textThree_en: `В стоимость входит: en`,
  list_ru: [
    `полный комплект оборудования (гидрокостюм, маска, ласты);`,
    `вводная теоретическая лекция;`,
    `мастер-класс по правильному надеванию гидрокостюма;`,
    `полуторачасовая практика в море с инструктором.`,
  ],
  list_en: [
    `полный комплект оборудования (гидрокостюм, маска, ласты);`,
    `водная теория;`,
    `мастер-класс по правильному надеванию гидрокостюма;`,
    `полуторачасовая практика в море с инструктором.`,
  ],
};

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
  const { globalUIStore } = useStore();
  return (
    <SectionWrapper id="trial" title={t.title.trial}>
      <p className="text-main trial">
        {trialData[`textOne_${globalUIStore.currentLocale}`]}
      </p>
      <p className="text-main trial">
        {trialData[`textTwo_${globalUIStore.currentLocale}`]}
      </p>

      <div className="trial__block">
        <img
          src={trialImg}
          alt="picture trial training"
          className="trial__image"
        />
        <div className="trial__include">
          <p className="trial__text">
            {trialData[`textThree_${globalUIStore.currentLocale}`]}
          </p>
          <ul className="trial__list">
            {trialData[`list_${globalUIStore.currentLocale}`].map((i) => {
              return (
                <li key={i} className="trial__list-item">
                  <p>{i}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="trial__grid">
        {data.map((p) => {
          return <PriceItem key={p.price} item={p} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default TrialSection;
