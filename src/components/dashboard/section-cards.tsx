import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { kpis } from "@/data"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const positive = kpi.delta >= 0
        const Icon = positive ? TrendingUp : TrendingDown
        return (
          <Card key={kpi.label}>
            <CardHeader>
              <CardDescription>{kpi.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                {kpi.value}
              </CardTitle>
              <CardAction>
                <Badge variant={positive ? "secondary" : "destructive"}>
                  <Icon className="size-3" />
                  {positive ? "+" : ""}
                  {kpi.delta}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="text-xs text-muted-foreground">
              {kpi.hint}
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
