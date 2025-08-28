import type { SocialLink } from './social';

export interface CardContentProps {
  image?: string;
  title: string;
  socials?: SocialLink[];
}
