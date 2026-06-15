import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"

export type ViewId =
  | "overview"
  | "sales"
  | "customers"
  | "analytics"
  | "products"
  | "settings"
  | "support"

export type NavItem = { id: ViewId; label: string; icon: LucideIcon }

export const NAV: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "sales", label: "Sales", icon: Wallet },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "products", label: "Products", icon: Boxes },
]

export const SECONDARY: NavItem[] = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "support", label: "Support", icon: LifeBuoy },
]

export function labelFor(id: ViewId): string {
  return [...NAV, ...SECONDARY].find((n) => n.id === id)?.label ?? "Overview"
}
