import { useState } from "react"
import { Filter, Moon, Plus, Sparkles, Sun } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const ranges: Record<string, string> = {
  "7": "Letzte 7 Tage",
  "30": "Letzte 30 Tage",
  "90": "Letztes Quartal",
  "365": "Letztes Jahr",
}

export function Toolbar({
  dark,
  onToggleTheme,
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const [range, setRange] = useState("30")

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Acme Analytics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Übersicht</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap items-center gap-2">
        <ToggleGroup defaultValue={["monat"]} variant="outline">
          <ToggleGroupItem value="tag">Tag</ToggleGroupItem>
          <ToggleGroupItem value="woche">Woche</ToggleGroupItem>
          <ToggleGroupItem value="monat">Monat</ToggleGroupItem>
        </ToggleGroup>

        <Select
          value={range}
          onValueChange={(v) => {
            setRange(v as string)
            toast.success("Zeitraum aktualisiert", { description: ranges[v as string] })
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue>{(v) => ranges[v as string]}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Zeitraum</SelectLabel>
              <SelectItem value="7">Letzte 7 Tage</SelectItem>
              <SelectItem value="30">Letzte 30 Tage</SelectItem>
              <SelectItem value="90">Letztes Quartal</SelectItem>
              <SelectItem value="365">Letztes Jahr</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger
            render={
              <Button variant="outline">
                <Filter className="size-4" />
                Filter
              </Button>
            }
          />
          <PopoverContent className="w-72" align="start">
            <PopoverHeader>
              <PopoverTitle>Filter</PopoverTitle>
              <PopoverDescription>Daten eingrenzen</PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label>Status</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="f-bezahlt" defaultChecked />
                  <Label htmlFor="f-bezahlt" className="font-normal">Bezahlt</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="f-offen" />
                  <Label htmlFor="f-offen" className="font-normal">Offen</Label>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Sortierung</Label>
                <RadioGroup defaultValue="neu" className="gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="neu" id="s-neu" />
                    <Label htmlFor="s-neu" className="font-normal">Neueste zuerst</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="betrag" id="s-betrag" />
                    <Label htmlFor="s-betrag" className="font-normal">Höchster Betrag</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label>Mindestbetrag</Label>
                <Slider defaultValue={[500]} max={3000} step={100} />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() =>
              toast("Bericht wird erstellt", {
                description: "Wir benachrichtigen dich, sobald er fertig ist.",
                action: { label: "Rückgängig", onClick: () => {} },
              })
            }
          >
            <Sparkles className="size-4" />
            KI-Insight
          </Button>

          <Dialog>
            <DialogTrigger
              render={
                <Button>
                  <Plus className="size-4" />
                  Neuer Bericht
                </Button>
              }
            />
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Neuer Bericht</DialogTitle>
                <DialogDescription>
                  Lege einen neuen Auswertungsbericht an.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="report-name">Name</Label>
                  <Input id="report-name" placeholder="z. B. Q3 Umsatz" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-type">Typ</Label>
                  <Select defaultValue="umsatz">
                    <SelectTrigger id="report-type" className="w-full">
                      <SelectValue>
                        {(v) =>
                          ({ umsatz: "Umsatz", kunden: "Kunden", traffic: "Traffic" }[
                            v as string
                          ])
                        }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="umsatz">Umsatz</SelectItem>
                      <SelectItem value="kunden">Kunden</SelectItem>
                      <SelectItem value="traffic">Traffic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-desc">Beschreibung</Label>
                  <Textarea id="report-desc" placeholder="Optionale Notiz…" />
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="grid gap-0.5">
                    <Label htmlFor="report-share">Mit Team teilen</Label>
                    <span className="text-xs text-muted-foreground">
                      Alle Mitglieder können den Bericht sehen.
                    </span>
                  </div>
                  <Switch id="report-share" defaultChecked />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Abbrechen</Button>} />
                <DialogClose
                  render={
                    <Button onClick={() => toast.success("Bericht erstellt")}>
                      Erstellen
                    </Button>
                  }
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onToggleTheme}
                  aria-label="Theme wechseln"
                >
                  {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
              }
            />
            <TooltipContent>{dark ? "Hell" : "Dunkel"}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
