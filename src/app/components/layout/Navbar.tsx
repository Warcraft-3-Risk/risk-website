'use client';

import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background px-4 py-2 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Risk Reforged</h1>
      <ThemeToggle />
    </header>
  );
}
