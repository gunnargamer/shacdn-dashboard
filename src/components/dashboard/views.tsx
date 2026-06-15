import { Construction } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Toolbar } from "@/components/dashboard/toolbar"
import { SectionCards } from "@/components/dashboard/section-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { ChannelsChart } from "@/components/dashboard/channels-chart"
import { GoalsCard } from "@/components/dashboard/goals-card"
import { TeamCard } from "@/components/dashboard/team-card"
import { ActivityCard } from "@/components/dashboard/activity-card"
import { QuickSettings } from "@/components/dashboard/quick-settings"
import { FaqCard } from "@/components/dashboard/faq-card"
import { TransactionsTable } from "@/components/dashboard/transactions-table"

export function OverviewView() {
  return (
    <>
      <Toolbar />
      <SectionCards />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <GoalsCard />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <ChannelsChart />
        <ActivityCard />
        <QuickSettings />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <TeamCard />
        <FaqCard />
      </div>
      <TransactionsTable />
    </>
  )
}

export function SalesView() {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">Sales</h2>
        <p className="text-sm text-muted-foreground">
          Revenue, invoices and conversion at a glance.
        </p>
      </div>
      <SectionCards />
      <RevenueChart />
      <TransactionsTable />
    </>
  )
}

export function PlaceholderView({ title }: { title: string }) {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          This section is part of the navigation demo.
        </p>
      </div>
      <Card>
        <CardHeader className="items-center text-center">
          <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
            <Construction className="size-6 text-muted-foreground" />
          </div>
          <CardTitle>“{title}” is a placeholder</CardTitle>
          <CardDescription>
            The sidebar navigation is fully interactive — pick “Overview” or
            “Sales” to see populated screens.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => toast(`“${title}” would open here`)}
          >
            Notify me when ready
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
