import { useState } from "react"
import { Filter, Plus, Sparkles } from "lucide-react"
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

const ranges: Record<string, string> = {
  "7": "Last 7 days",
  "30": "Last 30 days",
  "90": "Last quarter",
  "365": "Last year",
}

export function Toolbar() {
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
            <BreadcrumbPage>Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap items-center gap-2">
        <ToggleGroup defaultValue={["month"]} variant="outline">
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>

        <Select
          value={range}
          onValueChange={(v) => {
            setRange(v as string)
            toast.success("Time range updated", { description: ranges[v as string] })
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue>{(v) => ranges[v as string]}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time range</SelectLabel>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last quarter</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
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
              <PopoverDescription>Narrow down the data</PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label>Status</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="f-paid" defaultChecked />
                  <Label htmlFor="f-paid" className="font-normal">Paid</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="f-open" />
                  <Label htmlFor="f-open" className="font-normal">Open</Label>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Sort</Label>
                <RadioGroup defaultValue="newest" className="gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="newest" id="s-newest" />
                    <Label htmlFor="s-newest" className="font-normal">Newest first</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="amount" id="s-amount" />
                    <Label htmlFor="s-amount" className="font-normal">Highest amount</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label>Minimum amount</Label>
                <Slider defaultValue={[500]} max={3000} step={100} />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() =>
              toast("Creating report", {
                description: "We'll notify you when it's ready.",
                action: { label: "Undo", onClick: () => {} },
              })
            }
          >
            <Sparkles className="size-4" />
            AI insight
          </Button>

          <Dialog>
            <DialogTrigger
              render={
                <Button>
                  <Plus className="size-4" />
                  New report
                </Button>
              }
            />
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>New report</DialogTitle>
                <DialogDescription>
                  Create a new analytics report.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="report-name">Name</Label>
                  <Input id="report-name" placeholder="e.g. Q3 Revenue" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-type">Type</Label>
                  <Select defaultValue="revenue">
                    <SelectTrigger id="report-type" className="w-full">
                      <SelectValue>
                        {(v) =>
                          ({ revenue: "Revenue", customers: "Customers", traffic: "Traffic" }[
                            v as string
                          ])
                        }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Revenue</SelectItem>
                      <SelectItem value="customers">Customers</SelectItem>
                      <SelectItem value="traffic">Traffic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-desc">Description</Label>
                  <Textarea id="report-desc" placeholder="Optional note…" />
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="grid gap-0.5">
                    <Label htmlFor="report-share">Share with team</Label>
                    <span className="text-xs text-muted-foreground">
                      All members can view the report.
                    </span>
                  </div>
                  <Switch id="report-share" defaultChecked />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <DialogClose
                  render={
                    <Button onClick={() => toast.success("Report created")}>
                      Create
                    </Button>
                  }
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
