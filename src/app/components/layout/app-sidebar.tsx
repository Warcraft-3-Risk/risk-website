import {
  Home,
  Users,
  Settings,
  Newspaper,
  Shield,
  Library,
  Headset,
  Trophy,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from '@/app/components/ui/shadcn/sidebar';
import Link from 'next/link';
// import Image from 'next/image';
import '@/core/SCSS/base/layout/l-app-sidebar.scss';

const mainNavItems = [
  { title: 'Home', icon: Home, href: '/', isActive: true },
  { title: 'News and Events', icon: Newspaper, href: '/news-and-events' },
  { title: 'Stand Alone', icon: Shield, href: '/stand-alone' },
  { title: 'How To Play', icon: Library, href: '/how-to' },
  { title: 'Tournaments', icon: Trophy, href: '/tournaments' },
  { title: 'About us', icon: Users, href: '/about-us' },
  { title: 'Patch Notes', icon: Newspaper, href: '/patch-notes' },
];

const resourcesNavItems = [
  {
    title: 'Discord',
    icon: Headset,
    href: 'https://discord.com/invite/wc3risk',
  },
  { title: 'Community', icon: Users, href: '/community' },
  { title: 'Settings', icon: Settings, href: '/settings' },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="sidebar-tower">
      <div className="background-wrapper">
        {/* <Image
          src="/images/castletower.webp"
          alt="Castle Tower Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={80}
          priority
        /> */}
      </div>

      <SidebarHeader className="flex flex-col gap-2 px-4 py-2"></SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="sidebar-content">
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourcesNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4"></SidebarFooter>
    </Sidebar>
  );
}
