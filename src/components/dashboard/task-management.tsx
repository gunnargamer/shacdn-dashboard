import { useState } from "react"
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  MoreVertical,
  Plus,
  XCircle,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  tasks,
  taskKpis,
  type Task,
  type TaskStatus,
  type Validation,
} from "@/data"
import { TaskDetail } from "@/components/dashboard/task-detail"

const statusStyle: Record<TaskStatus, { label: string; className: string }> = {
  in_progress: { label: "In progress", className: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300" },
  completed: { label: "Completed", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  paused: { label: "Paused", className: "bg-muted text-muted-foreground" },
  error: { label: "Error", className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300" },
}

function StatusBadge({ status }: { status: TaskStatus }) {
  const s = statusStyle[status]
  return (
    <Badge variant="secondary" className={`border-transparent ${s.className}`}>
      {s.label}
    </Badge>
  )
}

function ValidationBadge({ validation }: { validation: Validation }) {
  if (!validation) return null
  if (validation === "achieved")
    return (
      <Badge variant="secondary" className="border-transparent bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
        <CheckCircle2 className="size-3" />
        Achieved
      </Badge>
    )
  if (validation === "partial")
    return (
      <Badge variant="secondary" className="border-transparent bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
        <Ellipsis className="size-3" />
        Partially achieved
      </Badge>
    )
  return (
    <Badge variant="secondary" className="border-transparent bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
      <XCircle className="size-3" />
      Not achieved
    </Badge>
  )
}

const filters = [
  { key: "agents", label: "All agents", options: ["All agents", "Scheduling agent"] },
  { key: "dates", label: "All dates", options: ["All dates", "Last 7 days", "Last 30 days"] },
  { key: "validation", label: "Validation", options: ["All validation", "Achieved", "Partially achieved", "Not achieved"] },
]

export function TaskManagement() {
  const [selected, setSelected] = useState<Task | null>(null)
  const [status, setStatus] = useState<string>("all")

  if (selected) {
    return <TaskDetail task={selected} onBack={() => setSelected(null)} />
  }

  const rows =
    status === "all" ? tasks : tasks.filter((t) => t.status === status)

  const kpiCards = [
    { label: "Total tasks", value: taskKpis.total, highlight: false },
    { label: "In progress", value: taskKpis.inProgress, highlight: false },
    { label: "Pending validation", value: taskKpis.pendingValidation, highlight: true },
    { label: "Completed", value: taskKpis.completed, highlight: false },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Task Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your agent tasks
          </p>
        </div>
        <Button onClick={() => toast.success("New task created")}>
          <Plus className="size-4" />
          Create task
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpiCards.map((k) => (
          <Card
            key={k.label}
            className={k.highlight ? "border-transparent bg-orange-100/70 dark:bg-orange-950/40" : ""}
          >
            <CardHeader>
              <CardDescription className={k.highlight ? "text-orange-700 dark:text-orange-300" : ""}>
                {k.label}
              </CardDescription>
              <span className="text-3xl font-semibold tabular-nums">{k.value}</span>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Select value={status} onValueChange={(v) => setStatus(v as string)}>
              <SelectTrigger className="rounded-full">
                <SelectValue>
                  {(v) =>
                    v === "all" ? "All status" : statusStyle[v as TaskStatus].label
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="in_progress">In progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>

            {filters.map((f) => (
              <Select key={f.key} defaultValue={f.options[0]}>
                <SelectTrigger className="rounded-full">
                  <SelectValue>{(v) => v as string}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {f.options.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Task title</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Validation</TableHead>
                  <TableHead>Created at</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((t) => (
                  <TableRow
                    key={t.id}
                    className="cursor-pointer"
                    onClick={() => setSelected(t)}
                  >
                    <TableCell className="py-3">
                      <div className="grid gap-0.5">
                        <span className="font-medium">{t.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {t.description}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{t.agent}</TableCell>
                    <TableCell>
                      <StatusBadge status={t.status} />
                    </TableCell>
                    <TableCell>
                      <ValidationBadge validation={t.validation} />
                    </TableCell>
                    <TableCell className="text-muted-foreground tabular-nums">
                      {t.createdAt}
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button variant="ghost" size="icon" aria-label="Actions">
                              <MoreVertical className="size-4" />
                            </Button>
                          }
                        />
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setSelected(t)}>
                            Open
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast("Task paused", { description: t.title })}>
                            Pause
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => toast.error("Task deleted", { description: t.title })}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center gap-2 border-t bg-muted/30 px-3 py-2 text-sm">
              <Select defaultValue="10">
                <SelectTrigger size="sm">
                  <SelectValue>{(v) => `${v} per page`}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <div className="ml-auto flex items-center gap-1">
                <Button variant="ghost" size="icon" disabled aria-label="First page">
                  <ChevronsLeft className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" disabled aria-label="Previous page">
                  <ChevronLeft className="size-4" />
                </Button>
                <span className="px-2 text-muted-foreground">1 of 100</span>
                <Button variant="ghost" size="icon" aria-label="Next page">
                  <ChevronRight className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Last page">
                  <ChevronsRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
