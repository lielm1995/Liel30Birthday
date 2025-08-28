import React from 'react';
import type { SocialLink } from '../../types/social';
import { SOCIAL_ICONS } from '../../types/social';
import styles from './SocialIcons.module.scss';
import { useTranslation } from 'react-i18next';

interface SocialIconsProps {
  socials: SocialLink[];
}

function SocialIcons({ socials }: SocialIconsProps) {
  const { t } = useTranslation('card');

  if (!socials || !socials.length) {
    return null;
  }

  // Runtime check for unknown social types (dev only)
  if (process.env.NODE_ENV !== 'production') {
    for (const social of socials) {
      if (!(social.type in SOCIAL_ICONS)) {
        throw new Error(`Unknown social type: ${social.type}`);
      }
    }
  }

  return (
    <div className={styles.socials}>
      {socials.map((social) => {
        const Icon = SOCIAL_ICONS[social.type];
        return (
          <a
            key={social.type}
            href={social.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            title={t(`socials.${social.type}`)}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Icon className={styles.icon} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
