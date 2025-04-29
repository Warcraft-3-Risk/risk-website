'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import '@/core/SCSS/base/components/_buttons.scss';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'play' | 'readmore';
  href?: string;
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  href,
  children,
  ...props
}) => {
  const baseClass =
    variant === 'play'
      ? 'PlayNowButton'
      : variant === 'readmore'
        ? 'ReadMoreButton'
        : '';

  const content = (
    <button className={cn(baseClass)} {...props}>
      <p>{children}</p>
    </button>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default CTAButton;
