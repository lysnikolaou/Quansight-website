import { CSSProperties } from 'react';

import { TImage, TBlok } from '@quansight/shared/types';
import {
  HeroVariant,
  HeroBackgroundVariant,
} from '@quansight/shared/ui-components';

import { ComponentType } from '../../../components/BlokProvider/types';

export type THeroRawData = {
  image: TImage;
  title: string;
  variant: HeroVariant;
  subTitle?: string;
  component: ComponentType.Hero;
  objectFit?: CSSProperties['objectFit'];
  backgroundColor?: HeroBackgroundVariant;
  imageMobile?: TImage;
  objectFitMobile?: CSSProperties['objectFit'];
  imageTablet?: TImage;
  objectFitTablet?: CSSProperties['objectFit'];
  imageDesktop?: TImage;
  objectFitDesktop?: CSSProperties['objectFit'];
} & TBlok;
