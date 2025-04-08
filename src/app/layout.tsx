import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/app/components/ui/sidebar';
import { AppSidebar } from '@/app/components/layout/app-sidebar';
import { SidebarTrigger } from '@/app/components/ui/sidebar';
import Footer from '@/app/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 min-h-screen">
            <SidebarTrigger />
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
