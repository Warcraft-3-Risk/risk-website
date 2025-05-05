'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import '@/core/SCSS/base/layout/l-burgermenu.scss';

interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface BurgerMenuProps {
  items: SidebarItem[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && <div className="fixed inset-0 z-40" onClick={handleToggle} />}

      {isOpen && (
        <div
          className={cn(
            'backgroundburger fixed top-0 left-0 z-50 h-full w-64 text-white p-4',
            'flex flex-col gap-4 transition-transform duration-300 ease-in-out',
            'bg-transparent',
          )}
        >
          <div className="flex justify-end p-4">
            <button onClick={handleToggle}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
                onClick={handleToggle}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
