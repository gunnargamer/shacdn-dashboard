import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { goals } from "@/data"

export function GoalsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ziele</CardTitle>
        <CardDescription>Fortschritt im Juni</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{goal.label}</span>
              <span className="font-medium tabular-nums">{goal.value}%</span>
            </div>
            <Progress value={goal.value} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
