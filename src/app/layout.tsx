import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

import BurgerMenu from '@/app/components/layout/BurgerMenu';
import { Navbar } from '@/app/components/layout/Navbar';
import ScrollToTopButton from '@/app/components/layout/ScrollToTop';
import Footer from '@/app/components/layout/footer';
import {
  Binary,
  CircleHelp,
  Gamepad2,
  Home,
  Medal,
  Newspaper,
  NotebookPen,
  ShieldUser,
  Swords,
  Trophy,
} from 'lucide-react';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const navItems = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: 'News and Events',
    href: '/news-and-events',
    icon: <Newspaper className="w-5 h-5" />,
  },
  {
    title: 'Patch Notes',
    href: '/patch-notes',
    icon: <Binary className="w-5 h-5" />,
  },
  {
    title: 'Stand Alone',
    href: '/stand-alone',
    icon: <Swords className="w-5 h-5" />,
  },
  {
    title: 'Tournaments',
    href: '/tournament',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: 'How To Play',
    icon: <Gamepad2 className="w-5 h-5" />,
    children: [
      {
        title: 'Game Guide',
        href: '/how-to/game-guide',
        icon: <NotebookPen className="w-5 h-5" />,
      },
      {
        title: 'Units',
        href: '/how-to/units-page',
        icon: <ShieldUser className="w-5 h-5" />,
      },
    ],
  },
  {
    title: 'Leaderboard',
    href: '/leaderboards',
    icon: <Medal className="w-5 h-5" />,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: <CircleHelp className="w-5 h-5" />,
  },
];

export const metadata: Metadata = {
  title: 'Risk Reforged',
  description:
    'Risk Reforged - A Game of Strategy and Diplomacy. Designed to create a feeling of nostalgia while providing a modern gaming experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="theme-color" content="#102535" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <BurgerMenu items={navItems} />

          <div className="flex flex-col min-h-screen">
            <main className="flex-1 lg:ml-64 md:ml-0">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
        </div>
        <ScrollToTopButton />
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
