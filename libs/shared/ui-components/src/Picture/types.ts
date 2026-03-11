import { CSSProperties } from 'react';

export type TPictureProps = {
  imageSrc: string;
  imageAlt: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
  priority?: boolean;
  onLoadingComplete?: (img: HTMLImageElement) => void;
  className?: string;
};
