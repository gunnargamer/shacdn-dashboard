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

const typeLabel: Record<string, { text: string; variant: "default" | "secondary" | "destructive" }> = {
  new: { text: "New", variant: "default" },
  update: { text: "Update", variant: "secondary" },
  warning: { text: "Warning", variant: "destructive" },
}

export function ActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity</CardTitle>
        <CardDescription>Recent workspace events</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Alert>
          <TriangleAlert />
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>
            Your workspace is 80% full. Upgrade recommended.
          </AlertDescription>
        </Alert>

        <div className="h-[240px] overflow-y-auto pr-3">
          <div className="grid gap-4">
            {activity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <Avatar className="size-8">
                  <AvatarFallback>{a.initials}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 gap-0.5 leading-snug">
                  <p className="text-sm">
                    <span className="font-medium">{a.who}</span> {a.what}
                  </p>
                  <span className="text-xs text-muted-foreground">{a.when}</span>
                </div>
                <Badge variant={typeLabel[a.type].variant}>
                  {typeLabel[a.type].text}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
