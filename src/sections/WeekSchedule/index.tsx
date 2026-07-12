import { useTranslator } from "@/context/TranslationContext";
import training from "@/assets/images/background/training.webp";
import "./Week.scss";
import { weekSchedule } from "@/data/week";

const WeekScheduleSection = () => {
  const t = useTranslator();
  return (
    <section className="week" id="main">
      <img src={training} className="week__image" alt="picture training" />
      <h2 className="week__title">{t.title.weekSchedule}</h2>
      {weekSchedule.map((d) => {
        return (
          <p key={d.id} className="week__text">
            {d.text_en}
          </p>
        );
      })}
    </section>
  );
};

export default WeekScheduleSection;
