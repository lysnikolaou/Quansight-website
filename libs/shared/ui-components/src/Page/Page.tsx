import { storyblokEditable } from '@storyblok/react';
import { FC, ReactNode } from 'react';

import { TBlok } from '@quansight/shared/types';

export type TPageProps = {
  data: { content: { body?: TBlok[] } };
  children: (blok: unknown) => ReactNode;
};

export const Page: FC<TPageProps> = ({ data, children }) => {
  if (!data?.content?.body) {
    return null;
  }

  return (
    <>
      {data.content.body.map((blok: TBlok) => (
        <div key={blok._uid} {...storyblokEditable(blok)}>
          {children(blok)}
        </div>
      ))}
    </>
  );
};
