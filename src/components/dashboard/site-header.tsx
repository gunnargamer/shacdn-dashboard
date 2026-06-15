import { Bell } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CommandMenu } from "@/components/dashboard/command-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-1 h-5" />
      <div className="hidden flex-1 sm:block">
        <h1 className="text-base font-semibold">Übersicht</h1>
      </div>

      <div className="ml-auto">
        <CommandMenu />
      </div>

      <Button variant="ghost" size="icon" aria-label="Benachrichtigungen">
        <Bell className="size-4" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Avatar className="size-8">
                <AvatarFallback>GG</AvatarFallback>
              </Avatar>
            </button>
          }
        />
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Mein Konto</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profil</DropdownMenuItem>
          <DropdownMenuItem>Einstellungen</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Abmelden</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
