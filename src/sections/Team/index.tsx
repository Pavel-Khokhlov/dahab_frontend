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
      description={t.subtitle.team}
      isWhite={true}
    >
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
                  <p key={index} className="team__card-description">
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
