import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { Picture } from '@quansight/shared/ui-components';

import { authorsToString } from '../../../services/posts/authorsToString';
import { TPost } from '../../../types/storyblok/bloks/posts';

export type TPostListItem = {
  post: TPost;
  variant: 'horizontal' | 'vertical';
};

export const PostListItem: FC<TPostListItem> = ({ post, variant }) => (
  <div
    className={clsx('flex flex-row border border-solid border-gray-300', {
      'flex-col': variant === 'vertical',
      'h-[400px]': variant === 'vertical',
    })}
  >
    {post.meta.featuredImage && (
      <div
        className={clsx('relative mb-[1.1rem] h-80', {
          'mb-0 w-1/2': variant === 'horizontal',
        })}
      >
        <Picture
          layout="fill"
          objectFit="cover"
          imageSrc={post.meta.featuredImage.src}
          imageAlt={post.meta.featuredImage.alt}
        />
      </div>
    )}
    <div
      className={clsx('px-[0.7rem] pb-12', {
        'pr-[4rem] pl-[2rem] w-1/2': variant === 'horizontal',
      })}
    >
      <h3
        className={clsx(
          'text-heading text-violet text-[2.4rem] font-extrabold leading-[3rem]',
          {
            'my-[2rem]': variant === 'horizontal',
          },
        )}
      >
        <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
      </h3>
      <p className="text-sans text-[1.2rem] font-normal leading-[2.7rem] text-black">
        By {authorsToString(post.meta.authors)}{' '}
      </p>
      <p className="text-sans text-[1.2rem] font-normal leading-[2.7rem] text-black">
        {post.meta.published}
      </p>
    </div>
  </div>
);
