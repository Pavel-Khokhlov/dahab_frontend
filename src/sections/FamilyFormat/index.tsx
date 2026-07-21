// FamilyFormatSection.tsx
import React from "react";
import "./FamilyFormat.scss";

const FamilyFormatSection: React.FC = () => {
  return (
    <section className="family-format">
      {/* Декоративные водные элементы */}
      <div className="family-format__water-bubble family-format__water-bubble--1"></div>
      <div className="family-format__water-bubble family-format__water-bubble--2"></div>
      <div className="family-format__water-bubble family-format__water-bubble--3"></div>

      <div className="family-format__container">
        <h2 className="family-format__title">Семейный формат</h2>
        
        <p className="family-format__lead">
          Мы уверены, что совместные впечатления объединяют сильнее любых подарков.
        </p>

        <p className="family-format__description">
          Поэтому мы создали формат, в котором родители и дети могут открывать 
          подводный мир вместе.
        </p>

        <div className="family-format__opportunities">
          <span className="family-format__opportunities-label">Это возможность:</span>
          <ul className="family-format__list">
            <li>попробовать новое всей семьей;</li>
            <li>поддерживать друг друга;</li>
            <li>отдыхать активно;</li>
            <li>создать воспоминания, которые останутся на долгие годы.</li>
          </ul>
        </div>

        <div className="family-format__important">
          <h3 className="family-format__important-title">ВАЖНО!</h3>
          <p className="family-format__important-text">
            Дети и родители занимаются в раздельных группах, с двумя разными тренерами. 
            Это позволяет сделать занятия наиболее эффективными и максимально раскрыть 
            потенциал – Ваш и Вашего ребенка.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilyFormatSection;