// TrainingProgramSection.tsx
import React from "react";
import "./TrainingProgram.scss";

const TrainingProgramSection: React.FC = () => {
  return (
    <section className="training-program">
      {/* Декоративные водные элементы */}
      <div className="training-program__water-bubble training-program__water-bubble--1"></div>
      <div className="training-program__water-bubble training-program__water-bubble--2"></div>
      <div className="training-program__water-bubble training-program__water-bubble--3"></div>

      <div className="training-program__wave training-program__wave--top"></div>
      <div className="training-program__wave training-program__wave--bottom"></div>

      <div className="training-program__container">
        <h2 className="training-program__title">
          Комплексная программа подготовки
        </h2>
        <p className="training-program__subtitle">
          Мы работаем не только в воде. Каждая тренировка включает подготовку
          тела, дыхания и нервной системы.
        </p>

        <ul className="training-program__list">
          <li>дыхательные практики</li>
          <li>глубокое расслабление (шавасана)</li>
          <li>развитие гибкости дыхательной мускулатуры</li>
          <li>обучение техникам продувки</li>
          <li>глубинные тренировки в море</li>
          <li>вечерние сухие тренировки</li>
        </ul>

        <p className="training-program__footnote">
          <em>
            Такой подход позволяет сделать обучение безопасным, комфортным и
            максимально эффективным
          </em>
        </p>
      </div>
    </section>
  );
};

export default TrainingProgramSection;
