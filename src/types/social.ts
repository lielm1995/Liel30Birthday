import React from 'react';
import {
  InstagramSvg,
  FacebookSvg,
  GooglePhotosSvg,
  WhatsappSvg,
  WebSvg,
  PayboxSvg,
  BitSvg,
} from '../assets/svgs/Svgs';

export type SocialType =
  | 'instagram'
  | 'facebook'
  | 'whatsapp'
  | 'web'
  | 'googlePhotos'
  | 'paybox'
  | 'bit';

export interface SocialLink {
  type: SocialType;
  link: string;
}

export const SOCIAL_ICONS: Record<
  SocialType,
  React.ComponentType<{ className?: string }>
> = {
  instagram: InstagramSvg,
  facebook: FacebookSvg,
  whatsapp: WhatsappSvg,
  web: WebSvg,
  googlePhotos: GooglePhotosSvg,
  paybox: PayboxSvg,
  bit: BitSvg,
};
