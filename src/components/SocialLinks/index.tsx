import { useTranslator } from "@/context/TranslationContext";
import socialsIcon from "@/assets/images/socials";

import "./SocialLinks.scss";

const contacts = [
  /* {
    platform: "phone",
    url: "tel:+79161234567",
  }, */
  {
    platform: "telegram",
    url: "tg://resolve?domain=DahabFamilyFreediving",
    label: "@DahabFamilyFreediving",
  },
  /* {
    platform: "whatsapp",
    url: "https://wa.me/1234567890",
    label: "+1234567890",
  }, */
  /* {
    platform: "instagram",
    url: "https://instagram.com/DahabFamilyFreediving",
    label: "@DahabFamilyFreediving",
  }, */
  {
    platform: "gmail",
    url: "mailto:dahabfamilyfreediving@gmail.com",
    label: "dahabfamilyfreediving@gmail.com",
  },
];

interface SocialLinksProps {
  position: "menu" | "footer";
}

const SocialLinks = ({ position }: SocialLinksProps) => {
  const t = useTranslator();
  const getIconPath = (value: string) => {
    let currentPath = value;
    if (position === "menu") {
      currentPath = value + "Black";
    }
    return socialsIcon[currentPath];
  };
  return (
    <div className={`social__wrapper ${position}`}>
      {position === "footer" && (
        <h4 className="social__title">{t.menu.contacts}:</h4>
      )}
      <ul className={`social__list ${position}`}>
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
                src={getIconPath(contact.platform)}
                className={`social__icon ${position}`}
              />
              {position === "footer" && (
                <p className={`social__label ${position}`}>{contact.label}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
