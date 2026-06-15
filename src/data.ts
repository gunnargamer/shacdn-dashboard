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

export type Channel = { kanal: string; besuche: number }

export const channels: Channel[] = [
  { kanal: "Direkt", besuche: 4200 },
  { kanal: "Organisch", besuche: 3800 },
  { kanal: "Social", besuche: 2400 },
  { kanal: "E-Mail", besuche: 1900 },
  { kanal: "Referral", besuche: 1100 },
]

export type TeamMember = {
  name: string
  initialen: string
  rolle: string
  email: string
  online: boolean
}

export const team: TeamMember[] = [
  { name: "Lena Hofmann", initialen: "LH", rolle: "Admin", email: "lena@acme.io", online: true },
  { name: "Marco Weber", initialen: "MW", rolle: "Editor", email: "marco@acme.io", online: true },
  { name: "Tilda Brand", initialen: "TB", rolle: "Viewer", email: "tilda@acme.io", online: false },
  { name: "Priya Nair", initialen: "PN", rolle: "Editor", email: "priya@acme.io", online: false },
]

export type Activity = {
  wer: string
  initialen: string
  was: string
  wann: string
  typ: "neu" | "update" | "warnung"
}

export const activity: Activity[] = [
  { wer: "Lena Hofmann", initialen: "LH", was: "hat Rechnung INV-2041 als bezahlt markiert", wann: "vor 12 Min", typ: "update" },
  { wer: "System", initialen: "SY", was: "Backup erfolgreich abgeschlossen", wann: "vor 40 Min", typ: "neu" },
  { wer: "Marco Weber", initialen: "MW", was: "hat 3 neue Kunden importiert", wann: "vor 1 Std", typ: "neu" },
  { wer: "System", initialen: "SY", was: "Speicherkontingent zu 80 % ausgelastet", wann: "vor 2 Std", typ: "warnung" },
  { wer: "Priya Nair", initialen: "PN", was: "hat Bericht „Q2 Umsatz“ geteilt", wann: "vor 3 Std", typ: "update" },
  { wer: "Tilda Brand", initialen: "TB", was: "hat das Workspace-Logo aktualisiert", wann: "gestern", typ: "update" },
]
