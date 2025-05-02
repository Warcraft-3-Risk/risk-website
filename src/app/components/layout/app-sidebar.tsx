import {
  ChevronDown,
  Home,
  Users,
  Newspaper,
  Shield,
  Library,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  SidebarRail,
} from '@/app/components/ui/shadcn/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/app/components/ui/shadcn/collapsible';
import Link from 'next/link';
import '@/core/SCSS/base/layout/l-app-sidebar.scss';

const mainNavItems = [
  { title: 'Home', icon: Home, href: '/', isActive: true },
  { title: 'News and Events', icon: Newspaper, href: '/news-and-events' },
  { title: 'Stand Alone', icon: Shield, href: '/stand-alone' },
  { title: 'Tournaments', icon: Trophy, href: '/tournaments' },
  { title: 'About us', icon: Users, href: '/about-us' },
  { title: 'Patch Notes', icon: Newspaper, href: '/patch-notes' },
];

const howToPlayItems = [
  { title: 'Game Guide', href: '/how-to/game-guide' },
  { title: 'Advanced Techniques', href: '/how-to/advanced-techniques' },
  { title: 'Game Mechanics', href: '/how-to/game-mechanics' },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="sidebar-tower flex justify-center">
      <SidebarHeader className="flex flex-col">
        <div className="flex items-center justify-center"></div>
      </SidebarHeader>

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

              <Collapsible className="group/collapsible w-full">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Library className="h-4 w-4" />
                      <span>How To Play</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {howToPlayItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={item.href}>{item.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu></SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
