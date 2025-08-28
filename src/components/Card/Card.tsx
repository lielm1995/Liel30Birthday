import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import { SOCIAL_ICONS } from '../../types/social';
import type { ICard } from '../../constants/cards';
import { useTranslation } from 'react-i18next';

interface CardProps {
  card: ICard;
}

function Card({ card: { id, image, socials = [] } }: CardProps) {
  const { t } = useTranslation('card', {
    keyPrefix: 'cards',
  });

  const title = t(`${id}.title`);
  const description = t(`${id}.description`);

  // Runtime check for unknown social types (dev only)
  if (process.env.NODE_ENV !== 'production') {
    for (const social of socials) {
      if (!(social.type in SOCIAL_ICONS)) {
        throw new Error(`Unknown social type: ${social.type}`);
      }
    }
  }

  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardDescriptionWrapper}>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
}

export default Card;
