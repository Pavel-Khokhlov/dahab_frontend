// WhyDahabSection.tsx
import React from "react";
import dahabImg from "@/assets/images/background/bluehole.webp";
import "./WhyDahab.scss";

const WhyDahabSection: React.FC = () => {
  return (
    <section className="why-dahab">
      <div className="why-dahab__background">
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--1"></div>
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--2"></div>
        <div className="why-dahab__gradient-circle why-dahab__gradient-circle--3"></div>
      </div>

      <div className="why-dahab__container">
        {/* <div className="why-dahab__badge">
          <span className="why-dahab__badge-icon">🌊</span>
          Дахаб
        </div> */}

        <h2 className="why-dahab__title">
          Почему именно <span className="why-dahab__highlight">Дахаб</span>?
        </h2>

        {/* Блок с фотографией на всю ширину */}
        <div className="why-dahab__full-image-wrapper">
          <img
            src={dahabImg}
            alt="Дахаб - мировая столица фридайвинга"
            className="why-dahab__full-image"
          />
        </div>

        <p className="why-dahab__subtitle">
          Дахаб по праву считается <strong>мировой столицей фридайвинга</strong>
        </p>

        <div className="why-dahab__divider"></div>

        <p className="why-dahab__description">
          Здесь практически идеальные условия:
        </p>

        <div className="why-dahab__grid">
          <div className="why-dahab__card">
            <div className="why-dahab__card-icon">🌡️</div>
            <h3 className="why-dahab__card-title">Тёплая вода</h3>
            <p className="why-dahab__card-text">
              Комфортная температура круглый год
            </p>
          </div>

          <div className="why-dahab__card">
            <div className="why-dahab__card-icon">👁️</div>
            <h3 className="why-dahab__card-title">Отличная видимость</h3>
            <p className="why-dahab__card-text">Прозрачность до 30+ метров</p>
          </div>

          <div className="why-dahab__card">
            <div className="why-dahab__card-icon">🌊</div>
            <h3 className="why-dahab__card-title">Отсутствие сильных волн</h3>
            <p className="why-dahab__card-text">
              Защищённая бухта для спокойных тренировок
            </p>
          </div>

          <div className="why-dahab__card">
            <div className="why-dahab__card-icon">📍</div>
            <h3 className="why-dahab__card-title">Доступность локаций</h3>
            <p className="why-dahab__card-text">
              Лучшие места для погружения рядом
            </p>
          </div>

          <div className="why-dahab__card why-dahab__card--featured">
            <div className="why-dahab__card-icon">✨</div>
            <h3 className="why-dahab__card-title">Уникальная атмосфера</h3>
            <p className="why-dahab__card-text">
              Спокойствие и свобода в каждом вдохе
            </p>
          </div>
        </div>

        <div className="why-dahab__footnote">
          <span className="why-dahab__footnote-icon">⭐</span>
          <em>Именно сюда ежегодно приезжают лучшие фридайверы мира</em>
        </div>
      </div>
    </section>
  );
};

export default WhyDahabSection;
