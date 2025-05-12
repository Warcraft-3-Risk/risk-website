'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import '@/core/SCSS/base/components/_buttons.scss';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'play' | 'readmore' | 'pagination' | 'externalLink';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  href,
  children,
  className,
  target,
  rel,
  ...props
}) => {
  const baseClass =
    variant === 'play'
      ? 'PlayNowButton'
      : variant === 'readmore'
        ? 'ReadMoreButton'
        : variant === 'pagination'
          ? 'PaginationButton'
          : variant === 'externalLink'
            ? 'ExternalLinkButton'
            : '';

  const combinedClass = cn(baseClass, className);

  if (variant === 'externalLink' && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass}>
        <p>{children}</p>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        <p>{children}</p>
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      <p>{children}</p>
    </button>
  );
};

export default CTAButton;
