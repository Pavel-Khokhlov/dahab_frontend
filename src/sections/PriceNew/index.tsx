// PricingSection.jsx
import "./PricingSection.scss"; // Import the SCSS styles

const PricingSection = () => {
  // Data for the pricing plans
  const plans = [
    {
      id: "day",
      title: "Тренировочный день",
      description: "Одна полноценная глубинная тренировка.",
      price: "12 000 ₽",
      isPopular: false, // We can add a "popular" tag later
    },
    {
      id: "week",
      title: "Пакет «Неделя»",
      description: "Четыре тренировочных дня.",
      price: "40 000 ₽",
      isPopular: true, // Mark the middle one as popular
    },
    {
      id: "two-weeks",
      title: "Пакет «Две недели»",
      description: "Восемь тренировочных дней.",
      price: "72 000 ₽",
      isPopular: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-section__container">
        <h2 className="pricing-section__title">Стоимость тренировок</h2>
        <div className="pricing-section__grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isPopular ? "pricing-card--popular" : ""}`}
            >
              {plan.isPopular && (
                <span className="pricing-card__badge">Популярный</span>
              )}
              <h3 className="pricing-card__title">{plan.title}</h3>
              <p className="pricing-card__description">{plan.description}</p>
              <p className="pricing-card__price">{plan.price}</p>
              {/* <button className="pricing-card__button">Выбрать</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
