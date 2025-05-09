'use client';

import React, { useState, useEffect } from 'react';
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div className="burgerbox">
        <button
          onClick={handleToggle}
          className="buttonbg fixed top-2 left-4 z-50 p-2 rounded-md text-white md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto z-40'
            : 'opacity-0 pointer-events-none z-0',
        )}
        onClick={handleToggle}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'backgroundburger h-screen w-64 p-4 text-white',
          'flex flex-col gap-4 transition-transform duration-300 ease-in-out',
          'fixed top-0 left-0 touch-none overflow-y-auto',
          isOpen ? 'translate-x-0 z-50' : '-translate-x-full z-50',
          'md:translate-x-0 md:z-auto',
        )}
      >
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={handleToggle}>
            <X className="h-8 w-8 text-[#f9c701]" />
          </button>
        </div>

        <nav className="flex mt-[16rem] flex-col gap-4">
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
    </>
  );
};

export default BurgerMenu;
