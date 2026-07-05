import { team } from "@/data/team";
import Roma from "@/assets/images/team/roma.webp";

import "./Team.scss";
import { useTranslator } from "@/context/TranslationContext";
import { useStore } from "@/store";

const TeamSection = () => {
  const t = useTranslator();
  const { globalUIStore } = useStore();
  return (
    <section className="team" id="team">
      <h2 className="team__title">{t.title.team}</h2>
      <h3 className="team__subtitle">Description</h3>
      <div className="team__grid">
        {team.map((member, index) => (
          <div className="team__card" key={index}>
            <div className="team__card-image">
              <img
                src={Roma}
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
                return <p key={index} className="team__card-position">{p}</p>;
              },
            )}
            <p className="team__card-description">
              {member[`description_${globalUIStore.currentLocale}`]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
