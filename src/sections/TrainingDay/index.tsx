import dayImg from "@/assets/images/background/trainingday.webp";
import "./TrainingDay.scss";
import { useInView } from "react-intersection-observer";
import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";

export interface PageItem {
  id: string;
  icon?: string;
  time: string;
  title: Record<"ru" | "en", string>;
  location?: Record<"ru" | "en", string>;
  group?: Record<"ru" | "en", string>;
  description?: Record<"ru" | "en", string>;
  items?: Record<"ru" | "en", string[]>;
  techs?: string[];
  attention?: Record<"ru" | "en", string>;
  note?: Record<"ru" | "en", string>;
}

const pageData: PageItem[] = [
  {
    id: "breathing-practices",
    time: "08:00",
    icon: "🌬️",
    title: {
      ru: "Дыхательные практики",
      en: "Breathing practices",
    },
    description: {
      ru: "В школе фридайвинга мы начинаем день с подготовки организма.",
      en: "At the freediving school, we start the day with body preparation.",
    },
    items: {
      ru: [
        "растяжка дыхательных мышц",
        "работа с диафрагмой",
        "упражнения для межреберных мышц",
        "техники полного вдоха",
        "упражнения с задержкой дыхания",
        "глубокое расслабление (шавасана)",
      ],
      en: [],
    },
    note: {
      ru: "Эти практики помогают снять напряжение, подготовить нервную систему и сделать последующее погружение максимально комфортным.",
      en: "These practices help relieve tension, prepare the nervous system, and make the subsequent dive as comfortable as possible.",
    },
  },
  {
    id: "equipment-preparation",
    time: "10:00 – 10:30",
    icon: "🤿",
    title: {
      ru: "Подготовка оборудования",
      en: "Equipment preparation",
    },
    description: {
      ru: "Переодевание и подготовка к выходу на воду.",
      en: "Changing clothes and preparing to go out on the water.",
    },
  },
  {
    id: "depth-training",
    time: "10:30 – 12:30",
    icon: "🏊",
    title: {
      ru: "Глубинная тренировка",
      en: "Depth training",
    },
    description: {
      ru: "",
      en: "",
    },
    items: {
      ru: [
        "совершенствуем технику ныряния",
        "прислушиваемся к телу и тренируем расслабление",
        "отрабатываем компенсацию давления",
        "практикуем безопасные погружения",
        "постепенно увеличиваем глубину без спешки и стресса",
      ],
      en: [
        "improve diving technique",
        "develop body awareness and relaxation",
        "practice equalization",
        "reinforce safe diving procedures",
        "gradually increase depth without stress or pressure",
      ],
    },
    location: {
      ru: "Место проведения — Lighthouse, Дахаб",
      en: "Location: Lighthouse, Dahab",
    },
    group: {
      ru: "Тренировки в группах не более 3 человек на одном буйке",
      en: "Training in groups of no more than 3 people per buoy",
    },
    attention: {
      ru: "Каждый участник получает максимум внимания инструктора. Что мы делаем:",
      en: "Each participant receives maximum instructor attention. During the session we:",
    },
  },
  {
    id: "evening-practice",
    time: "18:00 – 19:30",
    icon: "🌅",
    title: {
      ru: "Вечерняя практика",
      en: "Evening practice",
    },
    description: {
      ru: "Спокойное завершение дня. В программе:",
      en: "A calm end to the day. The program includes:",
    },
    items: {
      ru: [
        "тренировка продувки на суше",
        "растяжка на гимнастическом мяче",
        "закрепление полученных навыков",
      ],
      en: [
        "dry equalization practice",
        "stretching for freedivers",
        "review and reinforcement of the day's skills",
      ],
    },
    techs: ["Frenzel", "Reverse Packing", "Mouthfill"],
    note: {
      ru: "Эти навыки являются основой комфортного и безопасного погружения на большие глубины.",
      en: "These skills are the foundation for comfortable and safe deep diving.",
    },
  },
];

const TrainingDaySection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  const { ref, inView } = useInView({
    triggerOnce: true, // Сработает только один раз
    threshold: 0.2, // 20% элемента видно
  });

  return (
    <section className="training-day">
      {/* Декоративные градиентные круги */}
      <div className="training-day__background">
        <div className="training-day__gradient-circle training-day__gradient-circle--1" />
        <div className="training-day__gradient-circle training-day__gradient-circle--2" />
        <div className="training-day__gradient-circle training-day__gradient-circle--3" />
      </div>

      <div className="training-day__container">
        {/* Бэдж */}
        {/* <div className="training-day__badge">
          <span className="training-day__badge-icon">🌊</span>
          Расписание дня
        </div> */}

        {/* Заголовок */}
        <h2
          ref={ref}
          className="training-day__title"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.6s ease",
          }}
        >
          {t.title.dayOne}{" "}
          <span className="training-day__highlight">{t.title.dayTwo}?</span>
        </h2>

        {/* Блок с фотографией на всю ширину */}
        <div className="why-dahab__full-image-wrapper">
          <img
            src={dayImg}
            alt="Дахаб - мировая столица фридайвинга"
            className="why-dahab__full-image"
          />
        </div>

        <p className="training-day__subtitle">
          <strong>{t.subtitle.dayOne}</strong> — {t.subtitle.dayTwo}
        </p>

        <div className="training-day__divider" />

        {/* Таймлайн в виде карточной сетки */}
        <div className="training-day__grid">
          {pageData.map((item, index) => (
            <div
              key={index}
              className={`training-day__card ${
                item.location ? "training-day__card--featured" : ""
              }`}
            >
              <span className="training-day__card-time">{item.time}</span>
              <span className="training-day__card-icon">⏱</span>
              <h4 className="training-day__card-title">
                {item.title[currentLang]}
              </h4>

              {item.description && (
                <p className="training-day__card-text">
                  {item.description[currentLang]}
                </p>
              )}

              {item.location && (
                <div className="training-day__card-info">
                  <div>{item.location[currentLang]}</div>
                  {item.group && <div>{item.group[currentLang]}</div>}
                  {item.attention && <div>{item.attention[currentLang]}</div>}
                </div>
              )}

              {item?.items && (
                <ul className="training-day__card-list">
                  {item.items[currentLang].map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              )}

              {item.techs && (
                <div className="training-day__card-techs">
                  {item.techs.map((tech, idx) => (
                    <span key={idx} className="training-day__card-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {item?.note && (
                <div className="training-day__card-note">
                  {item.note[currentLang]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Футер */}
        <div className="training-day__footnote">
          <span className="training-day__footnote-icon">💙</span>
          <em>{t.text.dayFooter}</em>
        </div>
      </div>
    </section>
  );
};

export default TrainingDaySection;
