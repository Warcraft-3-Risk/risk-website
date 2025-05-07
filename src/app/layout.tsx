import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

import BurgerMenu from '@/app/components/layout/BurgerMenu';
import { Navbar } from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/footer';
import { Home, Newspaper, Users } from 'lucide-react';
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
    icon: <Home className="w-4 h-4" />,
  },
  {
    title: 'News and Events',
    href: '/news-and-events',
    icon: <Newspaper className="w-4 h-4" />,
  },
  {
    title: 'Patch Notes',
    href: '/patch-notes',
    icon: <Newspaper className="w-4 h-4" />,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: 'Stand Alone',
    href: '/stand-alone',
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: 'Game Guide',
    href: '/how-to/game-guide',
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: 'Units',
    href: '/how-to/units-page',
    icon: <Users className="w-4 h-4" />,
  },
];

export const metadata: Metadata = {
  title: 'Risk Reforged',
  description: 'A Website created for Risk Reforged, in WC3.',
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
            <Navbar />
            <main className="flex-1 md:ml-64">
              {children}
              <Footer />
            </main>
          </div>
        </div>

        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
