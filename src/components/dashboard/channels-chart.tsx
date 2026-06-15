import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
import { channels } from "@/data"

const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChannelsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic channels</CardTitle>
        <CardDescription>Visits by source · June</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart
            data={channels}
            layout="vertical"
            margin={{ left: 8, right: 16 }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="channel"
              type="category"
              tickLine={false}
              axisLine={false}
              width={70}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="visits" fill="var(--color-visits)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
