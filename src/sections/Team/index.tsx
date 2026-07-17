import { useStore } from "@/store";
import { useTranslator } from "@/context/TranslationContext";
import { team } from "@/data/team";

import "./Team.scss";
import SectionWrapper from "@/components/SectionWrapper";

const TeamSection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  return (
    <SectionWrapper
      id="team"
      title={t.title.team}
      isWhite={true}
    >
      <p className="text-main black indent">
        В Дахебе, Египет, команда Molchanovs предлагает уникальную возможность освоить фридайвинг в идеальных условиях Красного моря — от пологой лагуны Lighthouse до легендарного Blue Hole — под руководством сертифицированных инструкторов, которые проводят обучение по прогрессивной системе Wave от начального уровня (12–16 м) до продвинутых глубин (40+ м), сочетая методики задержки дыхания, безопасность, философию чемпионов и открыть для себя глубину с первого вдоха.
      </p>
      <div className="team__grid">
        {team.map((member, index) => (
          <div className="team__card" key={index}>
            <div className="team__card-image">
              <img
                src={member.image}
                alt={
                  `picture portrait ` +
                  member[`name_${globalUIStore.currentLocale}`]
                }
              />
            </div>
            <h3 className="team__card-name">
              {member[`name_${globalUIStore.currentLocale}`]}
            </h3>
            {member[`position_${globalUIStore.currentLocale}`].map(
              (p, index) => {
                return (
                  <p key={index} className="team__card-position">
                    {p}
                  </p>
                );
              },
            )}
            {member[`description_${globalUIStore.currentLocale}`].map(
              (d, index) => {
                return (
                  <p key={index} className="text-inside black">
                    {d}
                  </p>
                );
              },
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
