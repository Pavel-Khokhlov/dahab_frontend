import { useStore } from "@/store";
import "./DolphinEquipment.scss";

interface EquipmentDataProps {
  title: Record<"ru" | "en", string>;
  equipments: Record<"ru" | "en", string[]>;
  subtitle: Record<"ru" | "en", string>;
  additionalText: Record<"ru" | "en", string>;
}

const dolphinEquipmentData: EquipmentDataProps = {
  title: {
    ru: "Что взять с собой:",
    en: "What to pack?",
  },
  equipments: {
    ru: [
      "Маска и трубка: ваш главный инструмент для наблюдения за дельфинами.",
      "Ласты: помогут двигаться под водой мягко, быстро и бесшумно.",
      "Гидрокостюм (2–3 мм): защитит от солнца, ветра и сохранит тепло при долгом плавании.",
      "Пояс: необходим для правильной регулировки плавучести (особенно для фридайвинга).",
    ],
    en: [
      "Mask & snorkel: your essential tools for observing dolphins and exploring the reef from the surface.",
      "Fins: for smooth, efficient and quiet movement through the water.",
      "Wetsuit (2–3 мм): provides sun and wind protection, keeping you warm during long swims.",
      "Weight belt: for proper buoyancy adjustment when freediving.",
    ],
  },
  subtitle: {
    ru: "Нет своего снаряжения?",
    en: "No equipment?",
  },
  additionalText: {
    ru: "Всё предоставим: возможна аренда полного комплекта оборудования на месте (оплачивается отдельно). Согласовывается заранее.",
    en: "No problem: A full set of equipment can be rented locally. Equipment rental is to be arranged in advance and for extra payment.",
  },
};

const DolphinEquipmentSection = () => {
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;
  return (
    <section className="dolphin-equipment">
      <h2 className="dolphin-equipment__title">
        {dolphinEquipmentData.title[currentLang]}
      </h2>
      <ul className="dolphin-equipment__list">
        {dolphinEquipmentData.equipments[currentLang].map((equipment) => {
          return (
            <li key={equipment}>
              <p className="dolphin-equipment__text equipment">
                {equipment
                  .split(":")
                  .map((part, i) =>
                    i === 0 ? <strong key={i}>{part}:</strong> : part,
                  )}
              </p>
            </li>
          );
        })}
      </ul>
      <h4 className="dolphin-equipment__subtitle add">
        {dolphinEquipmentData.subtitle[currentLang]}
      </h4>
      <p className="dolphin-equipment__text add">
        {dolphinEquipmentData.additionalText[currentLang]}
      </p>
    </section>
  );
};

export default DolphinEquipmentSection;
