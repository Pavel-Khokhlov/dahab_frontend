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
    { day: "monday", type: "training", icon: "🏊" },
    { day: "tuesday", type: "training", icon: "🏊" },
    { day: "wednesday", type: "lecture", icon: "📚" },
    { day: "thursday", type: "relax", icon: "🧘" },
    { day: "friday", type: "training", icon: "🏊" },
    { day: "saturday", type: "training", icon: "🏊" },
    { day: "sunday", type: "relax", icon: "🌅" },
  ] as const;

  return (
    <section className="training-schedule" ref={sectionRef}>
      <div className={`schedule-container ${isVisible ? "visible" : ""}`}>
        <h2 className="section__title">{t.title.weekSchedule}</h2>

        <div className="schedule-grid">
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className={`schedule-item ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="day-icon">{item.icon}</div>
              <div className="day-name">{t.week[item.day]}</div>
              <div className="day-type">{t.text[item.type]}</div>
            </div>
          ))}
        </div>

        <div className={`schedule-note ${isVisible ? "visible" : ""}`}>
          <p className="note-text">{t.text.weekFooter}</p>
        </div>

        <LogoIcon color={"var(--color-lightblue)"} size={40} />
        <div className={`brand-section ${isVisible ? "visible" : ""}`}>
          <span className="brand-name">molchanovs</span>
        </div>
      </div>
    </section>
  );
};

export default TrainingScheduleSection;
