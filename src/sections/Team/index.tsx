import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import { team } from "@/data/team";
import { motion } from "framer-motion";

import "./Team.scss";
import SectionWrapper from "@/components/SectionWrapper";
import Divider from "@/elements/Divider";

const TeamSection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <SectionWrapper id="team" title={t.title.team} isWhite={true}>
      <div className="team__header">
        <p className="team__description text-main black indent">
          В Дахабе, Египет, команда Molchanovs предлагает уникальную возможность
          освоить фридайвинг в идеальных условиях Красного моря — от пологой
          лагуны Lighthouse до легендарного Blue Hole — под руководством
          сертифицированных инструкторов, которые проводят обучение по
          прогрессивной системе Wave от начального уровня (12–16 м) до
          продвинутых глубин (40+ м), сочетая методики задержки дыхания,
          безопасность, философию чемпионов и открыть для себя глубину с первого
          вдоха.
        </p>
        <div className="team__stats">
          <div className="team__stat-item">
            <span className="team__stat-number">500+</span>
            <span className="team__stat-label">Клиентов</span>
          </div>
          <div className="team__stat-item">
            <span className="team__stat-number">40+</span>
            <span className="team__stat-label">Макс. глубина</span>
          </div>
          <div className="team__stat-item">
            <span className="team__stat-number">100%</span>
            <span className="team__stat-label">Безопасность</span>
          </div>
        </div>
      </div>

      <div className="team__grid">
        {team.map((member, index) => (
          <motion.div
            className="team__card"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <div className="team__card-image-wrapper">
              <div className="team__card-image">
                <img
                  src={member.image}
                  alt={
                    `picture portrait ` +
                    member[`name_${globalUIStore.currentLocale}`]
                  }
                  loading="lazy"
                />
                <div className="team__card-overlay">
                  <span className="team__card-badge">Инструктор</span>
                </div>
              </div>
            </div>

            <div className="team__card-content">
              <h3 className="team__card-name">
                {member[`name_${globalUIStore.currentLocale}`]}
              </h3>

              <div className="team__card-positions">
                {member[`position_${globalUIStore.currentLocale}`].map(
                  (p, idx) => (
                    <span key={idx} className="team__card-position">
                      {p}
                    </span>
                  ),
                )}
              </div>

              <Divider color={`var(--color-teal)`}/>

              <div className="team__card-descriptions">
                {member[`description_${globalUIStore.currentLocale}`].map(
                  (d, idx) => (
                    <p
                      key={idx}
                      className="team__card-description text-inside black"
                    >
                      {d}
                    </p>
                  ),
                )}
              </div>

              {/* <div className="team__card-footer">
                <button className="team__card-button">
                  <span>Подробнее</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
