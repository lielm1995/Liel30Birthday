import adiDgani from '../assets/AdiDgani.jpg';
import narya from '../assets/Narya.jpg';
import yarden from '../assets/VideoAndMore.png';
import gili from '../assets/Gili.jpg';
import liron from '../assets/Liron.jpg';
import me from '../assets/Liel.jpg';
import orDoga from '../assets/OrDogaLogo.jpg';
import koiCocktails from '../assets/KoiCocktails.jpg';
import jahnunGivaa from '../assets/JahnunGivaa.jpg';
import cake from '../assets/cake.jpg';
import towels from '../assets/towels.png';
import type { SocialLink } from '../types/social';

export interface ICard {
  id: string;
  image?: string;
  socials?: SocialLink[];
}

export const cards: ICard[] = [
  {
    id: 'album',
    image: me,
    socials: [
      {
        type: 'googlePhotos',
        link: 'https://photos.app.goo.gl/u9hRMN7YaxF64boDA',
      },
    ],
  },
  {
    id: 'narya-house',
    image: narya,
    socials: [
      {
        type: 'web',
        link: 'https://www.naryahouse.com/',
      },
      {
        type: 'instagram',
        link: 'https://www.instagram.com/narya_house/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/100095435646528/',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972533541657',
      },
    ],
  },
  {
    id: 'dj-adi-dgani',
    image: adiDgani,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/adidasd/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/ADIDGANI/',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972544554284',
      },
    ],
  },
  {
    id: 'bartender-gili',
    image: gili,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/shaking_with_gili1/',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972525490270',
      },
    ],
  },
  {
    id: 'food-pizza',
    image: liron,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/la_banchetto_events/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/100063264366431',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972545414817',
      },
    ],
  },
  {
    id: 'photo-still',
    image: orDoga,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/ordoga_shots/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/100067479579014',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972525497767',
      },
    ],
  },
  {
    id: 'barista',
    image: koiCocktails,
    socials: [
      {
        type: 'web',
        link: 'https://www.koi-bar.co.il/',
      },
      {
        type: 'instagram',
        link: 'https://www.instagram.com/Koi_bar_services/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/61556710533555',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972509629030',
      },
    ],
  },
  {
    id: 'photo-magnets',
    image: yarden,
    socials: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/MOR0509799709',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972509799709',
      },
    ],
  },
  {
    id: 'after-party',
    image: jahnunGivaa,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/jahnun_hagiva/',
      },
      {
        type: 'facebook',
        link: 'https://www.facebook.com/jahnunAgiva',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972505073294',
      },
    ],
  },
  {
    id: 'cake',
    image: cake,
    socials: [
      {
        type: 'instagram',
        link: 'https://www.instagram.com/sweetypiebymai/',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972525124014',
      },
    ],
  },
  {
    id: 'towels',
    image: towels,
    socials: [
      {
        type: 'web',
        link: 'https://rikmatex.com/',
      },
      {
        type: 'whatsapp',
        link: 'https://wa.me/972528859795',
      },
    ],
  },
];
