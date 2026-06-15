// Mock data for the dashboard demo screen.
// Intentionally static — the screen serves as a code↔Figma reference.

export type Kpi = {
  label: string
  value: string
  delta: number // percent vs. previous month
  hint: string
}

export const kpis: Kpi[] = [
  { label: "Revenue", value: "€48,120", delta: 12.5, hint: "vs. last month" },
  { label: "New customers", value: "1,240", delta: 8.2, hint: "vs. last month" },
  { label: "Active accounts", value: "9,318", delta: -2.1, hint: "vs. last month" },
  { label: "Conversion", value: "3.8%", delta: 0.6, hint: "vs. last month" },
]

export type RevenuePoint = { month: string; revenue: number; target: number }

export const revenue: RevenuePoint[] = [
  { month: "Jan", revenue: 31000, target: 30000 },
  { month: "Feb", revenue: 28500, target: 32000 },
  { month: "Mar", revenue: 35200, target: 34000 },
  { month: "Apr", revenue: 33800, target: 36000 },
  { month: "May", revenue: 41200, target: 38000 },
  { month: "Jun", revenue: 48120, target: 40000 },
]

export type TxStatus = "paid" | "open" | "cancelled"

export type Transaction = {
  id: string
  customer: string
  email: string
  amount: string
  status: TxStatus
  date: string
}

export const transactions: Transaction[] = [
  { id: "INV-2041", customer: "Lena Hofmann", email: "lena@nordwind.de", amount: "€1,299.00", status: "paid", date: "Jun 14, 2026" },
  { id: "INV-2040", customer: "Marco S. Weber", email: "m.weber@altmark.io", amount: "€840.50", status: "open", date: "Jun 13, 2026" },
  { id: "INV-2039", customer: "Tilda Brand", email: "tilda@brand-co.de", amount: "€2,150.00", status: "paid", date: "Jun 12, 2026" },
  { id: "INV-2038", customer: "Jonas Kröger", email: "jonas@krg.dev", amount: "€399.00", status: "cancelled", date: "Jun 11, 2026" },
  { id: "INV-2037", customer: "Priya Nair", email: "priya@nairlabs.com", amount: "€1,020.00", status: "paid", date: "Jun 10, 2026" },
]

export type Goal = { label: string; value: number }

export const goals: Goal[] = [
  { label: "Monthly revenue goal", value: 84 },
  { label: "Onboarding rate", value: 61 },
  { label: "Support SLA", value: 93 },
]

export type Channel = { channel: string; visits: number }

export const channels: Channel[] = [
  { channel: "Direct", visits: 4200 },
  { channel: "Organic", visits: 3800 },
  { channel: "Social", visits: 2400 },
  { channel: "Email", visits: 1900 },
  { channel: "Referral", visits: 1100 },
]

export type TeamMember = {
  name: string
  initials: string
  role: string
  email: string
  online: boolean
}

export const team: TeamMember[] = [
  { name: "Lena Hofmann", initials: "LH", role: "Admin", email: "lena@acme.io", online: true },
  { name: "Marco Weber", initials: "MW", role: "Editor", email: "marco@acme.io", online: true },
  { name: "Tilda Brand", initials: "TB", role: "Viewer", email: "tilda@acme.io", online: false },
  { name: "Priya Nair", initials: "PN", role: "Editor", email: "priya@acme.io", online: false },
]

export type Activity = {
  who: string
  initials: string
  what: string
  when: string
  type: "new" | "update" | "warning"
}

export const activity: Activity[] = [
  { who: "Lena Hofmann", initials: "LH", what: "marked invoice INV-2041 as paid", when: "12 min ago", type: "update" },
  { who: "System", initials: "SY", what: "completed backup successfully", when: "40 min ago", type: "new" },
  { who: "Marco Weber", initials: "MW", what: "imported 3 new customers", when: "1 hr ago", type: "new" },
  { who: "System", initials: "SY", what: "storage quota at 80% capacity", when: "2 hrs ago", type: "warning" },
  { who: "Priya Nair", initials: "PN", what: "shared report “Q2 Revenue”", when: "3 hrs ago", type: "update" },
  { who: "Tilda Brand", initials: "TB", what: "updated the workspace logo", when: "yesterday", type: "update" },
]
