import React, { FC, PropsWithChildren } from 'react';

import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

export type LinkWithArrowProps = PropsWithChildren<LinkProps>;

export const LinkWithArrow: FC<LinkWithArrowProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Link {...restProps} className="text-[1.4rem] font-normal leading-[2.7rem]">
      <>
        <span className="mr-4 inline-flex size-[10px] items-center">
          <Image
            src="/arrow-left.svg"
            alt="Left arrow"
            aria-hidden
            width={10}
            height={10}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </span>
        {children}
      </>
    </Link>
  );
};
