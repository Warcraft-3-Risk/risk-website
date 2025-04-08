'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Switch } from './shadcn/switch';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle('dark', checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');

    toast.success(`Theme changed to ${checked ? 'dark' : 'light'} mode`, {
      description: `Your preference has been saved.`,
      icon: checked ? '🌙' : '☀️',
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">☀️</span>
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <span className="text-sm">🌙</span>
    </div>
  );
}
