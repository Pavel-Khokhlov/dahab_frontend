import { useTranslator } from "@/context/TranslationContext";
import "./SocialLinks.scss";
import socialsIcon from "@/assets/images/socials";

const contacts = [
  {
    platform: "phone",
    url: "tel:+79161234567",
  },
  {
    platform: "telegram",
    url: "tg://resolve?domain=DahabFamilyFreediving",
  },
  {
    platform: "whatsapp",
    url: "https://wa.me/1234567890",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/DahabFamilyFreediving",
  },
  {
    platform: "gmail",
    url: "mailto:DahabFamilyFreediving@gmail.com",
  },
];

interface SocialLinksProps {
  position: "menu" | "footer";
}

const SocialLinks = ({ position }: SocialLinksProps) => {
  const t = useTranslator();
  return (
    <div className={`social__wrapper ${position}`}>
      {position === "footer" && (
        <h4 className="social__title">{t.menu.contacts}:</h4>
      )}
      <ul className="social__list">
        {contacts.map((contact) => (
          <li key={contact.platform}>
            <a
              key={contact.platform}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social__item ${position}`}
            >
              <img
                src={socialsIcon[contact.platform]}
                className={`social__icon ${position}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
