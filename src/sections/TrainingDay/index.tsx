import dayImg from "@/assets/images/background/trainingday.webp";
import "./TrainingDay.scss";

const TrainingDaySection = () => {
  const timelineData = [
    {
      time: "08:00",
      title: "Дыхательные практики",
      description:
        "В школе фридайвинга мы начинаем день с подготовки организма.",
      items: [
        "растяжка дыхательных мышц",
        "работа с диафрагмой",
        "упражнения для межреберных мышц",
        "техники полного вдоха",
        "упражнения с задержкой дыхания",
        "глубокое расслабление (шавасана)",
      ],
      note: "Эти практики помогают снять напряжение, подготовить нервную систему и сделать последующее погружение максимально комфортным.",
    },
    {
      time: "10:00 – 10:30",
      title: "Подготовка оборудования",
      description: "Переодевание и подготовка к выходу на воду.",
      items: [],
      note: "",
    },
    {
      time: "10:30 – 12:30",
      title: "Глубинная тренировка",
      description: "",
      location: "📍 Место проведения — Lighthouse, Дахаб",
      group: "👥 Тренировки в группах не более 3 человек на одном буйке",
      attention: "Каждый участник получает максимум внимания инструктора",
      items: [
        "совершенствуем технику ныряния",
        "прислушиваемся к телу и тренируем расслабление",
        "отрабатываем компенсацию давления",
        "практикуем безопасные погружения",
        "постепенно увеличиваем глубину без спешки и стресса",
      ],
      note: "",
    },
    {
      time: "18:00 – 19:30",
      title: "Вечерняя практика",
      description: "Спокойное завершение дня. В программе:",
      items: [
        "тренировка продувки на суше",
        "растяжка на гимнастическом мяче",
        "закрепление полученных навыков",
      ],
      techs: ["Frenzel", "Reverse Packing", "Mouthfill"],
      note: "Эти навыки являются основой комфортного и безопасного погружения на большие глубины.",
    },
  ];

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
        <h2 className="training-day__title">
          Как проходит{" "}
          <span className="training-day__highlight">тренировочный день</span>
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
          <strong>От дыхания до глубины</strong> — каждый этап выстроен для
          максимального комфорта и прогресса
        </p>

        <div className="training-day__divider" />

        {/* Таймлайн в виде карточной сетки */}
        <div className="training-day__grid">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`training-day__card ${
                item.location ? "training-day__card--featured" : ""
              }`}
            >
              <span className="training-day__card-time">{item.time}</span>
              <span className="training-day__card-icon">⏱</span>
              <h4 className="training-day__card-title">{item.title}</h4>

              {item.description && (
                <p className="training-day__card-text">{item.description}</p>
              )}

              {item.location && (
                <div className="training-day__card-info">
                  <div>{item.location}</div>
                  <div>{item.group}</div>
                  <div>{item.attention}</div>
                </div>
              )}

              {item.items && item.items.length > 0 && (
                <ul className="training-day__card-list">
                  {item.items.map((li, idx) => (
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

              {item.note && (
                <div className="training-day__card-note">{item.note}</div>
              )}
            </div>
          ))}
        </div>

        {/* Футер */}
        <div className="training-day__footnote">
          <span className="training-day__footnote-icon">💙</span>
          <em>Каждое погружение — шаг к гармонии с собой и океаном</em>
        </div>
      </div>
    </section>
  );
};

export default TrainingDaySection;
