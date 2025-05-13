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
  Swords,
  Trophy,
  Users,
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
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: 'News and Events',
    href: '/news-and-events',
    icon: <Newspaper className="w-6 h-6" />,
  },
  {
    title: 'Patch Notes',
    href: '/patch-notes',
    icon: <Binary className="w-6 h-6" />,
  },
  {
    title: 'Stand Alone',
    href: '/stand-alone',
    icon: <Swords className="w-6 h-6" />,
  },
  {
    title: 'Tournaments',
    href: '/tournament',
    icon: <Trophy className="w-6 h-6" />,
  },

  {
    title: 'Game Guide',
    href: '/how-to/game-guide',
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    title: 'Leaderboard',
    href: '/leaderboards',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    title: 'Units',
    href: '/how-to/units-page',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: <CircleHelp className="w-6 h-6" />,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <BurgerMenu items={navItems} />

          <div className="flex flex-col min-h-screen">
            <main className="flex-1 md:ml-64">
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
