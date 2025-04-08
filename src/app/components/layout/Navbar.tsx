'use client';

import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <div className="mr-2">
          <ThemeToggle />
        </div>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
