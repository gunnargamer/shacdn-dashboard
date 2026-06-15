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
  besuche: { label: "Besuche", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChannelsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic-Kanäle</CardTitle>
        <CardDescription>Besuche nach Quelle · Juni</CardDescription>
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
              dataKey="kanal"
              type="category"
              tickLine={false}
              axisLine={false}
              width={70}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="besuche" fill="var(--color-besuche)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
