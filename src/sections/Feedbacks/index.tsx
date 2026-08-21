import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import { reviews } from "@/data/feedbacks";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Feedbacks.scss";
import { useInView } from "react-intersection-observer";
import avatars from "@/assets/images/avatars";
import InstagramIcon from "@/assets/images/icons/insta.png";
import TelegramIcon from "@/assets/images/icons/tg.png";

// Иконка цитаты
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

// Иконка звезды
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill={filled ? "#f6ad55" : "rgba(255,255,255,0.1)"}
    style={{
      filter: filled ? "drop-shadow(0 0 6px rgba(246,173,85,0.2))" : "none",
    }}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Иконка навигации
const NavArrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

const getSrc = (url: string) => {
  if (url?.includes("instagram.com") || url?.includes("instagram")) {
    return InstagramIcon;
  }
  return TelegramIcon; // Иконка по умолчанию
};

const isTg = (url: string | undefined) => {
  return url?.includes("tg://resolve");
};

const FeedbacksSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const { ref, inView } = useInView({
    triggerOnce: true, // Сработает только один раз
    threshold: 0.2, // 20% элемента видно
  });

  return (
    <section id="feedbacks" className="feedback-section">
      {/* Океанический оверлей */}
      <div className="feedback-section__ocean-overlay" />

      {/* Декоративные градиентные круги */}
      <div className="feedback-section__gradient-circle feedback-section__gradient-circle--1" />
      <div className="feedback-section__gradient-circle feedback-section__gradient-circle--2" />
      <div className="feedback-section__gradient-circle feedback-section__gradient-circle--3" />

      <div className="feedback-section__container">
        {/* Хедер с заголовком */}
        <div className="feedback-section__header">
          <div className="feedback-section__badge">
            <span className="feedback-section__badge-dot" />
            {t.subtitle.feedbacks}
          </div>
          <h2
            ref={ref}
            className="feedback-section__title"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(50px)",
              transition: "all 0.6s ease",
            }}
          >
            {t.title.feedbacks}
          </h2>
          <div className="feedback-section__divider" />
        </div>

        {/* Описание */}
        <p className="feedback-section__description">{t.text.feedback}</p>

        {/* Карусель */}
        <div className="feedback-section__carousel-wrapper">
          <Swiper
            slidesPerView={globalUIStore.sliderPreview || 3}
            spaceBetween={24}
            centeredSlides={true}
            loop={false}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            navigation={{
              prevEl: ".feedback-section__nav--prev",
              nextEl: ".feedback-section__nav--next",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="feedback-section__swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`}>
                <div className="feedback-card">
                  {/* Эффект ряби при наведении */}
                  <div className="feedback-card__ripple" />

                  {/* Угловые акценты */}
                  <div className="feedback-card__corner feedback-card__corner--tl" />
                  <div className="feedback-card__corner feedback-card__corner--tr" />
                  <div className="feedback-card__corner feedback-card__corner--bl" />
                  <div className="feedback-card__corner feedback-card__corner--br" />

                  {/* Иконка цитаты */}
                  <div className="feedback-card__quote-icon">
                    <QuoteIcon />
                  </div>

                  <div className="feedback-card__content">
                    {review.text.map((rev, index) => {
                      return (
                        <p key={index} className="feedback-card__text">
                          {rev}
                        </p>
                      );
                    })}
                  </div>
                  {/* Рейтинг */}
                  <div className="feedback-card__rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < review.rating} />
                    ))}
                  </div>

                  {/* Футер с информацией об авторе */}
                  <div className="feedback-card__footer">
                    <div className="feedback-card__avatar-wrapper">
                      <img
                        src={avatars[review.avatar]}
                        alt={review.name}
                        className="feedback-card__avatar"
                      />
                      <div className="feedback-card__avatar-ring" />
                    </div>
                    {isTg(review.link) ||
                    (globalUIStore.countryCode !== null &&
                      globalUIStore.countryCode !== "RU") ? (
                      <a
                        className="feedback-card__info"
                        href={review.link}
                        target="_blank"
                      >
                        <h4 className="feedback-card__name">{review.name}</h4>
                        {review.link && (
                          <img
                            src={getSrc(review.link)}
                            alt="telegram icon"
                            className="feedback-card__social"
                          />
                        )}
                      </a>
                    ) : (
                      <div className="feedback-card__info">
                        <h4 className="feedback-card__name">{review.name}</h4>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Навигационные кнопки */}
          <button
            className="feedback-section__nav feedback-section__nav--prev"
            aria-label="Предыдущий отзыв"
          >
            <NavArrow direction="left" />
          </button>
          <button
            className="feedback-section__nav feedback-section__nav--next"
            aria-label="Следующий отзыв"
          >
            <NavArrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;
