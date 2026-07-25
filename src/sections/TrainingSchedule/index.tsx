// TrainingSchedule.tsx
import React, { useEffect, useRef, useState } from "react";
import "./TrainingSchedule.scss";
import { useTranslator } from "@/context/TranslationContext";
import LogoIcon from "@/components/LogoIcon";

const TrainingScheduleSection: React.FC = () => {
  const t = useTranslator();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // const today = new Date();
  // const dayOfWeek = today.getDay();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const schedule = [
    { day: "Понедельник", type: "тренировка", icon: "🏊" },
    { day: "Вторник", type: "тренировка", icon: "🏊" },
    { day: "Среда", type: "лекция и восстановление", icon: "📚" },
    { day: "Четверг", type: "день отдыха", icon: "🧘" },
    { day: "Пятница", type: "тренировка", icon: "🏊" },
    { day: "Суббота", type: "тренировка", icon: "🏊" },
    { day: "Воскресенье", type: "свободный день", icon: "🌅" },
  ];

  return (
    <section className="training-schedule" ref={sectionRef}>
      <div className={`schedule-container ${isVisible ? "visible" : ""}`}>
        <h2 className="schedule-title">{t.title.weekSchedule}</h2>

        <div className="schedule-grid">
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className={`schedule-item ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="day-icon">{item.icon}</div>
              <div className="day-name">{item.day}</div>
              <div className="day-type">{item.type}</div>
            </div>
          ))}
        </div>

        <div className={`schedule-note ${isVisible ? "visible" : ""}`}>
          <p className="note-text">
            🌊 Между тренировками предусмотрено достаточно времени для отдыха,
            экскурсий, семейных прогулок, снорклинга или знакомства с атмосферой
            Дахаба
          </p>
        </div>

        <LogoIcon color={"var(--color-lightblue)"} size={40}/>
        <div className={`brand-section ${isVisible ? "visible" : ""}`}>
          <span className="brand-name">molchanovs</span>
        </div>
      </div>
    </section>
  );
};

export default TrainingScheduleSection;
