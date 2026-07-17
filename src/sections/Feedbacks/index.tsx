import { reviews } from "@/data/feedbacks";
// CarouselReviews.tsx
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";
import SectionWrapper from "@/components/SectionWrapper";

import "./Feedbacks.scss";

const FeedbacksSection: React.FC = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  return (
    <SectionWrapper
      id="feedback"
      title={t.title.feedbacks}
    >
      <p className="text-main light indent">
        От всего сердца благодарим каждого, кто выбрал команду Molchanovs в
        Дахебе для своего погружения в мир фридайвинга. Ваши тёплые слова,
        искренние рекомендации друзьям и подробные отзывы — это не просто
        приятные эмоции, а настоящая поддержка, которая вдохновляет нас
        становиться ещё лучше. Мы помним каждый ваш рассказ о первых метрах под
        водой, о преодолении себя и о том удивительном чувстве свободы, которое
        дарит Красное море. Именно благодаря вам новички узнают, что в Дахебе
        есть место, где учат безопасно и с душой, а опытные атлеты находят здесь
        профессиональную команду для новых рекордов. Ваше доверие и рекомендации
        помогают нам расти, и мы обещаем продолжать делиться с вами только
        лучшими методиками Molchanovs, теплом моря и искренним отношением к
        каждому гостю. Спасибо, что вы с нами — вы делаете сообщество Molchanovs
        в Египте по-настоящему живым и сильным!
      </p>
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
