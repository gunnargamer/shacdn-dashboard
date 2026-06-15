import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function QuickSettings() {
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Einstellungen</CardTitle>
        <CardDescription>Schnellkonfiguration</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-center justify-between">
          <Label htmlFor="qs-notify">E-Mail-Benachrichtigungen</Label>
          <Switch id="qs-notify" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="qs-digest">Wöchentliche Zusammenfassung</Label>
          <Switch id="qs-digest" />
        </div>

        <Separator />

        <div className="grid gap-2">
          <Label>Anzeigedichte</Label>
          <ToggleGroup defaultValue={["komfort"]} variant="outline" className="w-full">
            <ToggleGroupItem value="kompakt" className="flex-1">Kompakt</ToggleGroupItem>
            <ToggleGroupItem value="komfort" className="flex-1">Komfort</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid gap-2">
          <Label>Theme</Label>
          <RadioGroup defaultValue="system" className="gap-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="hell" id="t-hell" />
              <Label htmlFor="t-hell" className="font-normal">Hell</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="dunkel" id="t-dunkel" />
              <Label htmlFor="t-dunkel" className="font-normal">Dunkel</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="system" id="t-system" />
              <Label htmlFor="t-system" className="font-normal">System</Label>
            </div>
          </RadioGroup>
        </div>

        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full justify-between px-0">
                Erweitert
                <ChevronsUpDown className="size-4" />
              </Button>
            }
          />
          <CollapsibleContent className="grid gap-2 pt-2">
            <Label>Cache-Größe (MB)</Label>
            <Slider defaultValue={[256]} max={1024} step={64} />
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
