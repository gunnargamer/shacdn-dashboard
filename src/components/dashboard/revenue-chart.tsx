import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { revenue } from "@/data"

const chartConfig = {
  umsatz: { label: "Umsatz", color: "var(--chart-1)" },
  ziel: { label: "Ziel", color: "var(--chart-2)" },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Umsatzentwicklung</CardTitle>
        <CardDescription>Letzte 6 Monate · Umsatz vs. Ziel</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[260px] w-full">
          <AreaChart data={revenue} margin={{ left: 4, right: 4, top: 4 }}>
            <defs>
              <linearGradient id="fillUmsatz" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-umsatz)" stopOpacity={0.7} />
                <stop offset="95%" stopColor="var(--color-umsatz)" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="fillZiel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-ziel)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-ziel)" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="ziel"
              type="monotone"
              fill="url(#fillZiel)"
              stroke="var(--color-ziel)"
              strokeDasharray="4 4"
              strokeWidth={2}
            />
            <Area
              dataKey="umsatz"
              type="monotone"
              fill="url(#fillUmsatz)"
              stroke="var(--color-umsatz)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
