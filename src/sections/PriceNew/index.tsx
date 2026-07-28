// PricingSection.jsx
import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import "./PricingSection.scss"; // Import the SCSS styles

const PricingSection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  // Data for the pricing plans
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
      price: "40 000 ₽",
      isPopular: true, // Mark the middle one as popular
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
      price: "72 000 ₽",
      isPopular: false,
    },
  ];

  const handleBook = (message: string) => {
    window.open(`tg://t.me/@Garaihachka?text=${message}`);
  };

  return (
    <section className="pricing-section">
      <div className="pricing-section__container">
        <h2 className="section__title _dark">{t.title.prices}</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
