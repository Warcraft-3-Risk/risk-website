import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/app/components/ui/sidebar';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: '',
  },
  {
    title: 'How to Play',
    url: '/how-to',
    icon: '',
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: '',
  },
  {
    title: 'Stand Alone',
    url: '/stand-alone',
    icon: '',
  },
  {
    title: 'About us',
    url: '/about',
    icon: '',
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
