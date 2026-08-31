import React from "react";
import { useTranslator } from "@/context/TranslationContext";
import LogoIcon from "@/components/LogoIcon";
import icons from "@/assets/images/icons_schedule";

import "./TrainingSchedule.scss";
import SectionCircle from "../SectionCircle";

const TrainingScheduleSection: React.FC = () => {
  const t = useTranslator();

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
    <SectionCircle id="schedule" title={t.title.weekSchedule}>
      <>
        <div className="schedule__grid">
          {schedule.map((item, index) => {
            const iconUrl = icons[item.type];
            return (
              <div
                key={item.day}
                className={`schedule__item visible`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={iconUrl} className="day-icon" />
                <div className="day-name">{t.week[item.day]}</div>
                <div className="day-type">{t.text[item.type]}</div>
              </div>
            );
          })}
        </div>

        <div className={`schedule__note visible`}>
          <p className="schedule__note-text">{t.text.weekFooter}</p>
        </div>

        <LogoIcon color={"var(--primary-brand)"} size={40} />
        <div className={`brand-section visible`}>
          <span className="brand-name">molchanovs</span>
        </div>
      </>
    </SectionCircle>
  );
};

export default TrainingScheduleSection;
