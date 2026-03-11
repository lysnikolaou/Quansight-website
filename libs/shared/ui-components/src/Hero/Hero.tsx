import { FC } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { HeroResponsiveImages } from './HeroResponsiveImages';
import { THeroProps, HeroVariant, HeroBackgroundVariant } from './types';

export const Hero: FC<THeroProps> = ({
  title,
  subTitle,
  variant,
  imageSrc,
  imageAlt,
  backgroundColor,
  objectFit,
  imageMobile,
  imageTablet,
  imageDesktop,
}) => {
  const isLargeHero =
    variant === HeroVariant.Large || variant === HeroVariant.LargeOverlapping;
  const isMediumHero =
    variant === HeroVariant.Medium || variant === HeroVariant.MediumOverlapping;
  const isLargeHeroOverlapping = variant === HeroVariant.LargeOverlapping;
  const isMediumHeroOverlapping = variant === HeroVariant.MediumOverlapping;
  const isSmallHero = variant === HeroVariant.Small;

  return (
    <div
      className={clsx(
        'h-[730px] w-full overflow-hidden ',
        isSmallHero && 'md:h-[29.4rem]',
        isLargeHero && 'md:h-[970px]',
        isMediumHero && 'md:h-[730px]',
        isLargeHeroOverlapping && 'mb-[-31rem] md:mb-[-39rem]',
        isMediumHeroOverlapping && '-mb-40 md:-mb-80',
        backgroundColor === HeroBackgroundVariant.Black && 'bg-[#000000]',
        backgroundColor === HeroBackgroundVariant.White && 'bg-[#ffffff]',
        !backgroundColor && 'bg-transparent',
      )}
    >
      <div className="max-w-layout relative mx-auto h-full">
        {imageMobile?.imageSrc &&
        imageTablet?.imageSrc &&
        imageDesktop?.imageSrc ? (
          <HeroResponsiveImages
            imageMobile={imageMobile}
            imageTablet={imageTablet}
            imageDesktop={imageDesktop}
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            fill
            style={{
              objectFit: objectFit || 'cover',
              objectPosition: 'center',
            }}
          />
        ) : null}
        {title && (
          <div
            className={clsx(
              'relative px-8 pt-52 md:absolute md:px-0 md:pt-0 placeholder:md:px-0',
              (isMediumHero || isSmallHero) &&
                'flex size-full flex-col items-center justify-center',
              isLargeHero &&
                'md:left-[10%] md:top-[28rem] md:w-[85%] lg:left-[14%] lg:w-1/2',
            )}
          >
            <h1
              className={clsx(
                'font-heading font-extrabold leading-[6rem] text-white',
                isLargeHero
                  ? 'mb-6 text-[4rem] md:mb-16 md:text-[5rem]'
                  : 'text-center text-[5rem]',
              )}
            >
              {title}
            </h1>
            {subTitle && (
              <div
                className={clsx(
                  'font-heading text-[4rem] font-extrabold leading-[4.8rem] text-white',
                  isLargeHero && 'text-[3rem] md:text-[4rem]',
                  (isMediumHero || isSmallHero) && 'text-center',
                )}
              >
                {subTitle}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
