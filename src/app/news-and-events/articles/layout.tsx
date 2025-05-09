'use client';

import { ReactNode } from 'react';
import { NewsProvider } from '@/core/contexts/NewsAndEventsViewContext';

export default function NewsLayout({ children }: { children: ReactNode }) {
  return <NewsProvider>{children}</NewsProvider>;
}
