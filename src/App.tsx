import { useState } from "react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import { labelFor, type ViewId } from "@/components/dashboard/nav"
import {
  OverviewView,
  SalesView,
  PlaceholderView,
} from "@/components/dashboard/views"

function App() {
  const [view, setView] = useState<ViewId>("overview")
  const [dark, setDark] = useState(false)

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <SidebarProvider>
      <AppSidebar active={view} onNavigate={setView} />
      <SidebarInset>
        <SiteHeader title={labelFor(view)} dark={dark} onToggleTheme={toggleTheme} />
        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">
          {view === "overview" && <OverviewView />}
          {view === "sales" && <SalesView />}
          {view !== "overview" && view !== "sales" && (
            <PlaceholderView title={labelFor(view)} />
          )}
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}

export default App
