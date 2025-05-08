'use client';
import React from 'react';
import Image from 'next/image';
import '@/core/SCSS/base/layout/l-Navbar.scss';

export function Navbar() {
  return (
    <header className="navbg sticky top-0 z-50 backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <div className="mr-2"></div>
        <div className="flex-1"></div>

        <div className="ml-4">
          <a
            href="https://discord.com/invite/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Discord.svg"
              alt="Discord Logo"
              width={52}
              height={52}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
