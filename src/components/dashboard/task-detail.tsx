import { type ReactNode } from "react"
import {
  ArrowLeft,
  Check,
  Eye,
  Info,
  ListChecks,
  Loader2,
  Maximize2,
  MessageSquare,
  Pause,
  Wrench,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  chatMessages,
  planSteps,
  type ChatStatus,
  type PlanStep,
  type Task,
} from "@/data"

const chatStyle: Record<ChatStatus, { label: string; className: string }> = {
  completed: { label: "Completed", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  action: { label: "Action required", className: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
  error: { label: "Error", className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300" },
  in_progress: { label: "In progress", className: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300" },
}

function StepDot({ state }: { state: PlanStep["state"] }) {
  if (state === "done")
    return (
      <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-4" />
      </span>
    )
  if (state === "active")
    return (
      <span className="flex size-8 items-center justify-center rounded-full border-2 border-primary text-primary">
        <Wrench className="size-4" />
      </span>
    )
  return (
    <span className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground">
      <span className="size-2 rounded-full bg-muted-foreground/40" />
    </span>
  )
}

function PanelHeader({
  icon,
  title,
  action,
}: {
  icon: ReactNode
  title: string
  action?: ReactNode
}) {
  return (
    <div className="flex h-11 items-center gap-2 border-b px-4 text-sm font-medium">
      {icon}
      {title}
      {action && <span className="ml-auto">{action}</span>}
    </div>
  )
}

export function TaskDetail({ task, onBack }: { task: Task; onBack: () => void }) {
  const doneCount = planSteps.filter((s) => s.state === "done").length

  return (
    <div className="flex flex-col gap-4">
      {/* Sub-header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} aria-label="Back">
          <ArrowLeft className="size-4" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <h1 className="text-lg font-semibold">{task.title}</h1>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button className="text-muted-foreground" aria-label="Info">
                    <Info className="size-4" />
                  </button>
                }
              />
              <TooltipContent>{task.description}</TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-muted-foreground">
            {task.agent} · {task.createdAt.split(" ").slice(0, 3).join(" ")}
          </p>
        </div>
        <Button variant="outline" onClick={() => toast("Task paused", { description: task.title })}>
          <Pause className="size-4" />
          Pause task
        </Button>
      </div>

      {/* 3 panels */}
      <div className="grid gap-4 lg:grid-cols-4">
        {/* Plan */}
        <div className="rounded-xl border lg:col-span-1">
          <PanelHeader
            icon={<ListChecks className="size-4" />}
            title="Plan"
            action={
              <Button variant="ghost" size="icon" aria-label="Expand">
                <Maximize2 className="size-3.5" />
              </Button>
            }
          />
          <div className="p-4">
            <div className="mb-4 rounded-lg border bg-muted/40 px-3 py-2 text-sm font-medium">
              {doneCount} Steps completed
            </div>
            <ol className="grid gap-0">
              {planSteps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <StepDot state={step.state} />
                    {i < planSteps.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div
                    className={`mb-3 flex-1 rounded-lg px-3 py-2 ${
                      step.state === "active" ? "border border-primary/40 bg-accent" : ""
                    }`}
                  >
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Preview */}
        <div className="rounded-xl border lg:col-span-2">
          <PanelHeader icon={<Eye className="size-4" />} title="Preview" />
          <div className="p-4">
            <div className="overflow-hidden rounded-lg border bg-muted/30">
              {/* faux browser chrome */}
              <div className="flex items-center gap-2 border-b bg-muted/60 px-3 py-2">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <div className="ml-2 flex-1 truncate rounded-md bg-background px-2 py-1 text-xs text-muted-foreground">
                  wfmt-abn1.telekom.de/midtier/forms/…/WebView
                </div>
              </div>
              <div className="flex h-[420px] items-center justify-center text-sm text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                  <Eye className="size-6" />
                  Live preview of the agent's browser session
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interact */}
        <div className="flex flex-col rounded-xl border lg:col-span-1">
          <PanelHeader icon={<MessageSquare className="size-4" />} title="Interact" />
          <div className="flex max-h-[520px] flex-1 flex-col gap-3 overflow-y-auto p-4">
            {chatMessages.map((m, i) => {
              const s = chatStyle[m.status]
              return (
                <div key={i} className="rounded-lg border p-3">
                  <div className="mb-1.5 flex items-center justify-between">
                    <Badge variant="secondary" className={`border-transparent ${s.className}`}>
                      {s.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground tabular-nums">{m.time}</span>
                  </div>
                  <p className="text-sm">{m.text}</p>
                </div>
              )
            })}
            <div className="flex items-center gap-2 px-1 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Thinking…
            </div>
          </div>
          <Separator />
          <form
            className="flex items-center gap-2 p-3"
            onSubmit={(e) => {
              e.preventDefault()
              toast.success("Message sent to agent")
            }}
          >
            <Input placeholder="Message the agent…" />
            <Button type="submit" size="sm">
              Send
            </Button>
          </form>
        </div>
      </div>

      <footer className="flex items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
        <span>© Acme Analytics</span>
        <a href="#" className="hover:text-foreground">Privacy</a>
        <Button variant="outline" size="sm" className="ml-auto">
          Help us improve
        </Button>
      </footer>
    </div>
  )
}
