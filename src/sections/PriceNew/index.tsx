// PricingSection.jsx
import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import "./PricingSection.scss"; // Import the SCSS styles
import { useInView } from "react-intersection-observer";

const plans = [
  {
    id: "day",
    title: { ru: "Тренировочный день", en: "One training day" },
    description: {
      ru: "Одна полноценная глубинная тренировка.",
      en: "One dive deep training session.",
    },
    message: {
      ru: "Тренировочный день",
      en: "One training day",
    },
    price: "12 000 ₽",
    isPopular: false, // We can add a "popular" tag later
  },
  {
    id: "week",
    title: { ru: "Пакет «Неделя»", en: "Bundle «One week»" },
    description: {
      ru: "Четыре тренировочных дня.",
      en: "Four training days",
    },
    message: {
      ru: "Пакет «Неделя»",
      en: "Bundle «One week»",
    },
    price: "40 000* ₽",
    isPopular: true, // Mark the middle one as popular
    mark: {
      ru: "Стоимость одной тренировки 10 000 р",
      en: "The cost of one training is 10,000 rub",
    },
  },
  {
    id: "two-weeks",
    title: {
      ru: "Пакет «Две недели»",
      en: "Bundle «Two weeks»",
    },
    description: {
      ru: "Восемь тренировочных дней.",
      en: "Eight training days",
    },
    message: {
      ru: "Пакет «Две недели»",
      en: "Bundle «Two weeks»",
    },
    price: "72 000* ₽",
    isPopular: false,
    mark: {
      ru: "Стоимость одной тренировки 9 000 р",
      en: "The cost of one training is 9,000 rub",
    },
  },
];

const PricingSection = () => {
  const t = useTranslator();
  const { globalUIStore, tgStore } = useStore();
  const currentLang = globalUIStore.currentLocale;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleBook = (message: string) => {
    tgStore.openTelegramChat(message);
  };

  return (
    <section className="pricing-section" id="price">
      <div className="pricing-section__container">
        <h2
          ref={ref}
          className="section__title _dark"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.6s ease",
          }}
        >
          {t.title.prices}
        </h2>
        <div className="pricing-section__grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isPopular ? "pricing-card--popular" : ""}`}
            >
              {plan.isPopular && (
                <span className="pricing-card__badge">{t.text.popular}</span>
              )}
              <h3 className="pricing-card__title">{plan.title[currentLang]}</h3>
              <p className="pricing-card__description">
                {plan.description[currentLang]}
              </p>
              <p className="pricing-card__price">{plan.price}</p>
              <button
                className="pricing-card__button"
                onClick={() => handleBook(plan.message[currentLang])}
              >
                {t.button.bookin}
              </button>
              {plan.mark && (
                <p className="pricing-card__mark">
                  * {plan.mark[currentLang]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
