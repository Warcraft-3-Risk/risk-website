import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarTrigger } from '@/app/components/ui/shadcn/sidebar';

import { AppSidebar } from '@/app/components/layout/app-sidebar';
import Footer from '@/app/components/layout/footer';
import { SidebarProvider } from '@/app/components/ui/shadcn/sidebar';
import { Navbar } from '@/app/components/layout/Navbar';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import '@/core/SCSS/base/layout/l-app-sidebar.scss';

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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <Navbar />
                <div className="triggerbackground lg:hidden">
                  <SidebarTrigger />
                </div>
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
            <Toaster richColors closeButton position="top-right" />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
