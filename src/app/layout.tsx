import React from 'react';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import BurgerMenu from '@/app/components/layout/BurgerMenu';
import { Navbar } from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/footer';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Home, Newspaper, Users } from 'lucide-react';

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
    title: 'About Us',
    href: '/about-us',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <BurgerMenu items={navItems} />

            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>

          <Toaster richColors closeButton position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
