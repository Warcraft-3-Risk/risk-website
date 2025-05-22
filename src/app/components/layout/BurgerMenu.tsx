'use client';

import '@/core/SCSS/base/layout/l-burgermenu.scss';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

interface BurgerMenuProps {
  items: SidebarItem[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const handleToggle = () => setIsOpen((prev) => !prev);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile && isOpen) {
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

      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto z-40'
            : 'opacity-0 pointer-events-none z-0',
        )}
        onClick={handleToggle}
      />

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

        <nav className="navIcons flex flex-col gap-4">
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.title);
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : item.href && pathname.startsWith(item.href);

            return (
              <div key={item.title}>
                {hasChildren ? (
                  <div
                    className="flex items-center gap-3 hover:text-yellow-400 cursor-pointer transition-colors"
                    onClick={() => toggleExpand(item.title)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        'transition-transform duration-300',
                        isExpanded && 'rotate-180',
                      )}
                    />
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-3 transition-colors',
                      isActive && 'active-link',
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}

                {hasChildren && isExpanded && (
                  <div className="ml-6 mt-2 flex flex-col gap-2">
                    {item.children?.map((child) => {
                      const isChildActive =
                        child.href && pathname.startsWith(child.href);

                      return (
                        <Link
                          key={child.title}
                          href={child.href || '#'}
                          className={cn(
                            'flex items-center gap-2 text-sm transition-colors',
                            isChildActive
                              ? 'active-link'
                              : 'text-gray-300 hover:text-yellow-400',
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.icon && (
                            <span className="flex-shrink-0">{child.icon}</span>
                          )}
                          <span>{child.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
