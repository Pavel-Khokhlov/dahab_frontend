import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import { team } from "@/data/team";
import { motion, Variants } from "framer-motion";

import SectionWrapper from "@/components/SectionWrapper";
import Divider from "@/elements/Divider";
import InstaIcon from "@/assets/images/icons/insta.png";
import TgIcon from "@/assets/images/icons/tg.png";

import "./Team.scss";

const teamData = {
  description: {
    ru: "Откройте для себя фридайвинг в Дахабе вместе с командой Molchanovs. Мы обучаем по международной системе Molchanovs Wave в лучших локациях Красного моря — от спокойного Lighthouse до легендарного Blue Hole. Независимо от вашего опыта, наши сертифицированные инструкторы помогут пройти путь от первых погружений до продвинутых глубин 40+ метров — безопасно, уверенно и с удовольствием.",
    en: "Discover freediving in Dahab with the Molchanova team. We teach using the international Molchanovs Wave system in the best locations of the Red Sea — from the calm Lighthouse to the legendary Blue Hole. Regardless of your experience, our certified instructors will help you go from the first dives to advanced depths of 40+ meters — safely, confidently and with pleasure.",
  },
};

const TeamSection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  const currentLang = globalUIStore.currentLocale;

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
  } satisfies Variants;

  return (
    <SectionWrapper id="team" title={t.title.team} isWhite={true}>
      <div className="team__header">
        <p className="team__description text-main black indent">
          {teamData.description[currentLang]}
        </p>
        <div className="team__stats">
          <div className="team__stat-item">
            <span className="team__stat-number">500+</span>
            <span className="team__stat-label">{t.text.clients}</span>
          </div>
          <div className="team__stat-item">
            <span className="team__stat-number">40+</span>
            <span className="team__stat-label">{t.text.maxDepth}</span>
          </div>
          <div className="team__stat-item">
            <span className="team__stat-number">100%</span>
            <span className="team__stat-label">{t.text.safety}</span>
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
                  <span className="team__card-badge">{t.text.instructor}</span>
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

              <Divider color={`var(--color-teal)`} />

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

              <div className="team__card-footer">
                <p>Подробнее</p>
                {globalUIStore.countryCode !== null &&
                  globalUIStore.countryCode !== "RU" && (
                    <a
                      className="team__card-link"
                      href={`tg://resolve?domain=${member.linkTg}`}
                    >
                      <img
                        src={InstaIcon}
                        alt="instagram icon"
                        className="team__card-icon"
                      />
                    </a>
                  )}
                <a
                  className="team__card-link"
                  href={`tg://resolve?domain=${member.linkTg}`}
                >
                  <img
                    src={TgIcon}
                    alt="telegram icon"
                    className="team__card-icon"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
