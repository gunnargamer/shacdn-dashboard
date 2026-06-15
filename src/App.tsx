import { useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import { SectionCards } from "@/components/dashboard/section-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { GoalsCard } from "@/components/dashboard/goals-card"
import { TransactionsTable } from "@/components/dashboard/transactions-table"

function App() {
  const [dark, setDark] = useState(false)

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Guten Tag, Gunnar 👋</h2>
              <p className="text-sm text-muted-foreground">
                Hier ist dein Überblick für Juni 2026.
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Theme wechseln"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          </div>

          <SectionCards />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <GoalsCard />
          </div>

          <TransactionsTable />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
