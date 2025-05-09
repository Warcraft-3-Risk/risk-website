'use client';
import React from 'react';
import Image from 'next/image';
import '@/core/SCSS/base/layout/l-Navbar.scss';

export function Navbar() {
  return (
    <header className="navbg sticky top-0 z-50 backdrop-blur w-full">
      <div className="flex items-center justify-around px-4 sm:px-6 h-16">
        <div className="w-10 sm:w-12" />
        <div className="flex flex-1">
          <div className="relative w-32 sm:w-44 h-10 sm:h-12">
            <Image
              src="/images/rr-logo.svg"
              alt="Site Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="https://discord.com/invite/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-10"
          >
            <Image
              src="/images/Discord.svg"
              alt="Discord Logo"
              width={52}
              height={52}
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
