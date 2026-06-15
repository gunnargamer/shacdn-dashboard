import { useEffect, useState } from "react"
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        Suchen…
        <CommandShortcut>⌘K</CommandShortcut>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Befehl oder Suche eingeben…" />
        <CommandList>
          <CommandEmpty>Keine Ergebnisse.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem>
              <LayoutDashboard />
              Übersicht
            </CommandItem>
            <CommandItem>
              <CreditCard />
              Umsätze
            </CommandItem>
            <CommandItem>
              <Users />
              Kunden
            </CommandItem>
            <CommandItem>
              <BarChart3 />
              Analytics
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Aktionen">
            <CommandItem>
              Neuer Bericht
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              Einstellungen
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
