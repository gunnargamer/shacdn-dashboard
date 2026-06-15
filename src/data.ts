// Mock-Daten für den Dashboard-Demo-Screen.
// Bewusst statisch gehalten — der Screen dient als Code↔Figma-Referenz.

export type Kpi = {
  label: string
  value: string
  delta: number // Prozent ggü. Vormonat
  hint: string
}

export const kpis: Kpi[] = [
  { label: "Umsatz", value: "€48.120", delta: 12.5, hint: "vs. letzter Monat" },
  { label: "Neue Kunden", value: "1.240", delta: 8.2, hint: "vs. letzter Monat" },
  { label: "Aktive Accounts", value: "9.318", delta: -2.1, hint: "vs. letzter Monat" },
  { label: "Conversion", value: "3,8 %", delta: 0.6, hint: "vs. letzter Monat" },
]

export type RevenuePoint = { month: string; umsatz: number; ziel: number }

export const revenue: RevenuePoint[] = [
  { month: "Jan", umsatz: 31000, ziel: 30000 },
  { month: "Feb", umsatz: 28500, ziel: 32000 },
  { month: "Mär", umsatz: 35200, ziel: 34000 },
  { month: "Apr", umsatz: 33800, ziel: 36000 },
  { month: "Mai", umsatz: 41200, ziel: 38000 },
  { month: "Jun", umsatz: 48120, ziel: 40000 },
]

export type TxStatus = "bezahlt" | "offen" | "storniert"

export type Transaction = {
  id: string
  kunde: string
  email: string
  betrag: string
  status: TxStatus
  datum: string
}

export const transactions: Transaction[] = [
  { id: "INV-2041", kunde: "Lena Hofmann", email: "lena@nordwind.de", betrag: "€1.299,00", status: "bezahlt", datum: "14. Jun 2026" },
  { id: "INV-2040", kunde: "Marco S. Weber", email: "m.weber@altmark.io", betrag: "€840,50", status: "offen", datum: "13. Jun 2026" },
  { id: "INV-2039", kunde: "Tilda Brand", email: "tilda@brand-co.de", betrag: "€2.150,00", status: "bezahlt", datum: "12. Jun 2026" },
  { id: "INV-2038", kunde: "Jonas Kröger", email: "jonas@krg.dev", betrag: "€399,00", status: "storniert", datum: "11. Jun 2026" },
  { id: "INV-2037", kunde: "Priya Nair", email: "priya@nairlabs.com", betrag: "€1.020,00", status: "bezahlt", datum: "10. Jun 2026" },
]

export type Goal = { label: string; value: number }

export const goals: Goal[] = [
  { label: "Monatsziel Umsatz", value: 84 },
  { label: "Onboarding-Quote", value: 61 },
  { label: "Support-SLA", value: 93 },
]
