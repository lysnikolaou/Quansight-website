import { CSSProperties } from 'react';

export enum HeroVariant {
  Small = 'small',
  Medium = 'medium',
  MediumOverlapping = 'medium-overlapping',
  Large = 'large',
  LargeOverlapping = 'large-overlapping',
}

export enum HeroBackgroundVariant {
  Black = 'black',
  White = 'white',
}

export type TCustomImage = {
  imageSrc: string;
  imageAlt: string;
  objectFit?: CSSProperties['objectFit'];
};

export type TResponsiveImages = {
  imageMobile: TCustomImage;
  imageTablet: TCustomImage;
  imageDesktop: TCustomImage;
};

export type THeroProps = {
  variant: HeroVariant;
  title?: string;
  subTitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  objectFit?: CSSProperties['objectFit'];
  imageMobile?: TCustomImage;
  imageTablet?: TCustomImage;
  imageDesktop?: TCustomImage;
};

export default THeroProps;
