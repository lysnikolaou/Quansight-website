import { FC } from 'react';

import { TImage } from '@quansight/shared/types';

import { Picture } from '../../Picture/Picture';
import { TeamShape } from '../types';

export type TTeamMemberImage = {
  image: TImage;
  shape: TeamShape;
};

export const TeamMemberImage: FC<TTeamMemberImage> = ({ image, shape }) => (
  <div className="relative mb-2 inline-flex md:mb-4">
    <div
      style={{
        position: 'relative',
        width: 200,
        height: shape === TeamShape.Square ? 200 : 280,
      }}
    >
      <Picture
        className="brightness-110 grayscale"
        imageSrc={image.filename}
        imageAlt={image.alt ? image.alt : ''}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <span className="z-2 bg-violet absolute left-0 top-0 size-full opacity-25" />
  </div>
);
