// TrialSection.tsx
import React from "react";
import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import TgIcon from "@/assets/images/icons/telegram_black.svg";

import SectionCircle from "@/sections/SectionCircle";
import Button from "@/components/Button";

import "./DolphinPrice.scss";

interface PriceDataProps {
  title: Record<"ru" | "en", string>;
  includes: Record<"ru" | "en", string>;
  price: string;
  features: Record<"ru" | "en", string[]>;
  activitiesTitle: Record<"ru" | "en", string>;
  activities: Record<"ru" | "en", string[]>;
  additionalTitle: Record<"ru" | "en", string>;
  additionalText: Record<"ru" | "en", string>;
}

const DolphinPriceSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore, tgStore } = useStore();
  const currentLang = globalUIStore.currentLocale;

  const dolphinPriceData: PriceDataProps = {
    title: {
      ru: "Стоимость тура",
      en: "Tour price",
    },
    includes: {
      ru: "В стоимость тура входит:",
      en: "The price of the tour includes:",
    },
    price: "2190 €",
    features: {
      ru: [
        "Трансфер: встретим в аэропорту Хургады или Марса-Алама и привезем обратно после тура.",
        "Жизнь на море: целую неделю живем на яхте в открытом море, не возвращаясь на берег.",
        "Всё оплачено: все морские налоги, сборы и даже чаевые команде уже включены.",
        "Еда и напитки: полноценное питание на борту и безалкогольные напитки без ограничений.",
      ],
      en: [
        "Airport Transfers: we will meet you at Hurghada or Marsa Alam Airports and arrange your round-trip transfer to the yacht.",
        "7 days at sea: live aboard a comfortable yacht for the entire trip, exploring the Red Sea without returning to shore.",
        "All-inclusive: all marine taxes, port fees as well as crew tips are already included.",
        "Full board: enjoy freshly prepared meals throughout the trip, with unlimited non-alcoholic drinks included.",
      ],
    },
    activitiesTitle: {
      ru: "Программа и активности:",
      en: "Activities & schedule:",
    },
    activities: {
      ru: [
        "Главное: встречи и плавание с дельфинами каждый день.",
        "Фридайвинг: научим техникам правильного и безопасного погружения на глубину.",
        "Эко-привычки: расскажем, как экологично и бережно общаться с морскими жителями.",
        "Забота о теле: мягкие утренние разминки и дыхательные практики.",
        "Память о туре: в стоимость уже входит работа общего фотографа.",
      ],
      en: [
        "The Highlight: daily swimming with spinner dolphins.",
        "Freediving: learn how to move underwater effortlessly, efficiently and safely.",
        "Ocean-friendly practices: discover how to interact with marine life respectfully.",
        "Body & Breath: gentle morning warm-ups and breathing practices to help you relax and connect with the water.",
        "Professional photography: your memories are part of the experience.",
      ],
    },
    additionalTitle: {
      ru: "Оплачивается по желанию",
      en: "Paid upon request",
    },
    additionalText: {
      ru: "⭐ Личный фотограф в море и на яхте\n+ 250 €",
      en: "Personal photographer at sea and on a yacht\n+ 250 €",
    },
  };

  const handleBook = (message: string) => {
    const formatMessage = t.tgMessage.replace("{value}", message);
    tgStore.openTelegramChat(formatMessage);
  };

  return (
    <SectionCircle
      id="dolphinPrice"
      title={dolphinPriceData.title[currentLang]}
      price={dolphinPriceData.price}
    >
      <>
        <h4 className="dolphin-price__subtitle">
          {dolphinPriceData.includes[currentLang]}
        </h4>
        <ul className="dolphin-price__list">
          {dolphinPriceData.features[currentLang].map((feature, index) => (
            <li key={index} className="dolphin-price__item start">
              <p className="dolphin-price__text">
                {feature
                  .split(":")
                  .map((part, i) =>
                    i === 0 ? <strong key={i}>{part}:</strong> : part,
                  )}
              </p>
            </li>
          ))}
        </ul>
        <div className="family-format__opportunities">
          <h4 className="dolphin-price__subtitle brand">
            {dolphinPriceData.activitiesTitle[currentLang]}
          </h4>
          <ul className="family-format__list">
            {dolphinPriceData.activities[currentLang].map((activity) => {
              return (
                <li key={activity}>
                  <p className="dolphin-price__text">
                    {activity
                      .split(":")
                      .map((part, i) =>
                        i === 0 ? <strong key={i}>{part}:</strong> : part,
                      )}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          type="button"
          title={t.button.bookin}
          icon={TgIcon}
          message={"Dolphin Tour"}
          onClick={handleBook}
        />
        <h4 className="dolphin-price__subtitle top">
          {dolphinPriceData.additionalTitle[currentLang]}
        </h4>
        <p className="dolphin-price__text add">
          {dolphinPriceData.additionalText[currentLang]}
        </p>
      </>
    </SectionCircle>
  );
};

export default DolphinPriceSection;
