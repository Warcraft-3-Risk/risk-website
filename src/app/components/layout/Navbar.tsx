'use client';

import { ThemeToggle } from '@/app/components/layout/ThemeToggle';
import '@/core/SCSS/base/layout/l-navbar.scss';

export function Navbar() {
  return (
    <header className="navbg sticky top-0 z-10 backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <div className="mr-2">
          <ThemeToggle />
        </div>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
