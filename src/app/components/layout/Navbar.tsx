'use client';
import React from 'react';
import '@/core/SCSS/base/layout/l-Navbar.scss';

export function Navbar() {
  return (
    <header className="navbg sticky top-0 z-10 backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <div className="mr-2"></div>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
