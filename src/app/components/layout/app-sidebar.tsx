'use client';
import {
  Home,
  Users,
  Settings,
  Newspaper,
  Shield,
  Library,
  Headset,
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

const mainNavItems = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
    isActive: true,
  },
  {
    title: 'News and Events',
    icon: Newspaper,
    href: '/news-and-events',
  },
  {
    title: 'Stand Alone',
    icon: Shield,
    href: '/stand-alone',
  },
  {
    title: 'How To Play',
    icon: Library,
    href: '/how-to',
  },
];

const resourcesNavItems = [
  {
    title: 'Discord',
    icon: Headset,
    href: 'https://discord.com/invite/wc3risk',
  },
  {
    title: 'Community',
    icon: Users,
    href: '/community',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="">
      <SidebarHeader className="flex flex-col gap-2 px-4 py-2">
        <div className="flex items-center gap-2 py-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
            RR
          </div>
          <span className="text-xl font-bold">Risk Reforged</span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />
      <SidebarContent>
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
      <SidebarFooter className="p-4"></SidebarFooter>
    </Sidebar>
  );
}
