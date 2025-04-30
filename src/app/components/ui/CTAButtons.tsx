'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import '@/core/SCSS/base/components/_buttons.scss';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'play' | 'readmore' | 'pagination';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  href,
  children,
  className,
  ...props
}) => {
  const baseClass =
    variant === 'play'
      ? 'PlayNowButton'
      : variant === 'readmore'
        ? 'ReadMoreButton'
        : variant === 'pagination'
          ? 'PaginationButton'
          : '';

  const combinedClass = cn(baseClass, className);

  const content = (
    <button className={combinedClass} {...props}>
      <p>{children}</p>
    </button>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default CTAButton;
