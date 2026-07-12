import { reviews } from "@/data/feedbacks";
// CarouselReviews.tsx
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Feedbacks.scss";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import SectionWrapper from "@/components/SectionWrapper";

const FeedbacksSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  return (
    <SectionWrapper
      id="feedback"
      title={t.title.feedbacks}
      description={t.subtitle.feedbacks}
    >
      <Swiper
        slidesPerView={globalUIStore.sliderPreview}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Задержка между слайдами (мс)
          disableOnInteraction: true, // Остановка при взаимодействии пользователя
          pauseOnMouseEnter: true, // Пауза при наведении мыши
          stopOnLastSlide: false, // Не останавливаться на последнем слайде
        }}
        loop={false} // Бесконечная прокрутка
        speed={600}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide>
            <div
              key={`${review.id}-${index}`}
              className="review-card"
              style={{
                minWidth: globalUIStore.isMobile
                  ? "100%"
                  : "calc(33.333% - 17px)",
              }}
            >
              <div className="review-header">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="review-avatar"
                />
                <div>
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
              <div className="review-rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default FeedbacksSection;
