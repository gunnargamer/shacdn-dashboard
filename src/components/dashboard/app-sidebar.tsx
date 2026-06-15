import {
  LayoutDashboard,
  Wallet,
  Users,
  BarChart3,
  Settings,
  LifeBuoy,
  Boxes,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const nav = [
  { title: "Übersicht", icon: LayoutDashboard, active: true },
  { title: "Umsätze", icon: Wallet, active: false },
  { title: "Kunden", icon: Users, active: false },
  { title: "Analytics", icon: BarChart3, active: false },
  { title: "Produkte", icon: Boxes, active: false },
]

const secondary = [
  { title: "Einstellungen", icon: Settings },
  { title: "Support", icon: LifeBuoy },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Boxes className="size-4" />
          </div>
          <div className="grid leading-tight">
            <span className="text-sm font-semibold">Acme Analytics</span>
            <span className="text-xs text-muted-foreground">Workspace</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={item.active}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500" />
          Alle Systeme online
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
