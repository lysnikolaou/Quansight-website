import { CSSProperties, FC } from 'react';

import Image from 'next/image';

import { TPictureProps } from './types';

export const Picture: FC<TPictureProps> = ({
  imageSrc,
  imageAlt,
  layout,
  objectFit,
  objectPosition,
  onLoadingComplete,
  width,
  height,
  priority,
  className,
}) => {
  const isFill = layout === 'fill';

  const imgStyle: CSSProperties = {};
  if (objectFit) imgStyle.objectFit = objectFit;
  if (objectPosition) imgStyle.objectPosition = objectPosition;

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
      fill={isFill}
      style={imgStyle}
      priority={priority}
      className={className}
      onLoadingComplete={onLoadingComplete}
    />
  );
};

export default Picture;
