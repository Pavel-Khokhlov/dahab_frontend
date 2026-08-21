import React, { useEffect, useRef, useState } from "react";
import { useTranslator } from "@/context/TranslationContext";
import LogoIcon from "@/components/LogoIcon";
import icons from "@/assets/images/icons_schedule";

import "./TrainingSchedule.scss";

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
    { day: "monday", type: "training" },
    { day: "tuesday", type: "training" },
    { day: "wednesday", type: "lecture" },
    { day: "thursday", type: "relax" },
    { day: "friday", type: "training" },
    { day: "saturday", type: "training" },
    { day: "sunday", type: "relax" },
  ] as const;

  return (
    <section className="schedule__wrapper" ref={sectionRef}>
      <div className={`schedule__body ${isVisible ? "visible" : ""}`}>
        <h2 className="schedule__title">{t.title.weekSchedule}</h2>

        <div className="schedule__grid">
          {schedule.map((item, index) => {
            const iconUrl = icons[item.type];
            return (
              <div
                key={item.day}
                className={`schedule__item ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={iconUrl} className="day-icon" />
                <div className="day-name">{t.week[item.day]}</div>
                <div className="day-type">{t.text[item.type]}</div>
              </div>
            );
          })}
        </div>

        <div className={`schedule__note ${isVisible ? "visible" : ""}`}>
          <p className="schedule__note-text">{t.text.weekFooter}</p>
        </div>

        <LogoIcon color={"var(--primary-brand)"} size={40} />
        <div className={`brand-section ${isVisible ? "visible" : ""}`}>
          <span className="brand-name">molchanovs</span>
        </div>
      </div>
    </section>
  );
};

export default TrainingScheduleSection;
