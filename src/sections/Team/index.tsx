import { team } from "@/data/team";
import Roma from "@/assets/images/team/roma.webp";

import "./Team.scss";
import { useTranslator } from "@/context/TranslationContext";

const TeamSection = () => {
  const t = useTranslator();
  return (
    <section className="team">
      <h2 className="team__title">{t.title.team}</h2>
      <h3 className="team__subtitle">Description</h3>
      <div className="team__grid">
        {team.map((member, index) => (
          <div className="team__card" key={index}>
            <div className="team__card-image">
              <img src={Roma} alt={member.name} />
            </div>
            <h3 className="team__card-name">{member.name}</h3>
            <p className="team__card-position">{member.position}</p>
            <p className="team__card-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
