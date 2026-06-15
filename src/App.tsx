import { useState } from "react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import { Toolbar } from "@/components/dashboard/toolbar"
import { SectionCards } from "@/components/dashboard/section-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { ChannelsChart } from "@/components/dashboard/channels-chart"
import { GoalsCard } from "@/components/dashboard/goals-card"
import { TeamCard } from "@/components/dashboard/team-card"
import { ActivityCard } from "@/components/dashboard/activity-card"
import { QuickSettings } from "@/components/dashboard/quick-settings"
import { FaqCard } from "@/components/dashboard/faq-card"
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
          <Toolbar dark={dark} onToggleTheme={toggleTheme} />

          <SectionCards />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <GoalsCard />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ChannelsChart />
            <ActivityCard />
            <QuickSettings />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <TeamCard />
            <FaqCard />
          </div>

          <TransactionsTable />
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}

export default App
