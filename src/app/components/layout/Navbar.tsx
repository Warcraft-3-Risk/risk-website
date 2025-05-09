'use client';
import React from 'react';
import Image from 'next/image';
import '@/core/SCSS/base/layout/l-Navbar.scss';

export function Navbar() {
  return (
    <header className="navbg sticky top-0 z-50 backdrop-blur">
      <div className="flex h-14 items-center px-4 justify-between">
        <div className="navbarlogo flex items-center">
          <Image
            src="/images/rr-logo.svg"
            alt="Site Logo"
            width={240}
            height={240}
          />
        </div>

        <div className="flex items-center">
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
