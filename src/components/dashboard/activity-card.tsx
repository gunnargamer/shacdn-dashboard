import { TriangleAlert } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { activity } from "@/data"

const typLabel: Record<string, { text: string; variant: "default" | "secondary" | "destructive" }> = {
  neu: { text: "Neu", variant: "default" },
  update: { text: "Update", variant: "secondary" },
  warnung: { text: "Warnung", variant: "destructive" },
}

export function ActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivität</CardTitle>
        <CardDescription>Letzte Ereignisse im Workspace</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Alert>
          <TriangleAlert />
          <AlertTitle>Speicher fast voll</AlertTitle>
          <AlertDescription>
            Dein Workspace ist zu 80 % ausgelastet. Upgrade empfohlen.
          </AlertDescription>
        </Alert>

        <div className="h-[240px] overflow-y-auto pr-3">
          <div className="grid gap-4">
            {activity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <Avatar className="size-8">
                  <AvatarFallback>{a.initialen}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 gap-0.5 leading-snug">
                  <p className="text-sm">
                    <span className="font-medium">{a.wer}</span> {a.was}
                  </p>
                  <span className="text-xs text-muted-foreground">{a.wann}</span>
                </div>
                <Badge variant={typLabel[a.typ].variant}>
                  {typLabel[a.typ].text}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
