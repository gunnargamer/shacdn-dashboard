import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { team } from "@/data"

export function TeamCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>Mitglieder & Zugriff</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Einladen
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        {team.map((m, i) => (
          <div key={m.email}>
            {i > 0 && <Separator className="my-1" />}
            <div className="flex items-center gap-3 py-1">
              <div className="relative">
                <Avatar className="size-9">
                  <AvatarFallback>{m.initialen}</AvatarFallback>
                </Avatar>
                <span
                  className={`absolute right-0 bottom-0 size-2.5 rounded-full ring-2 ring-card ${
                    m.online ? "bg-emerald-500" : "bg-muted-foreground/40"
                  }`}
                />
              </div>
              <div className="grid flex-1 leading-tight">
                <HoverCard>
                  <HoverCardTrigger
                    render={
                      <button className="w-fit text-left text-sm font-medium hover:underline">
                        {m.name}
                      </button>
                    }
                  />
                  <HoverCardContent className="w-64">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarFallback>{m.initialen}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <span className="text-sm font-semibold">{m.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {m.email}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Rolle: {m.rolle}
                        </span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <span className="text-xs text-muted-foreground">{m.email}</span>
              </div>
              <Badge variant="secondary">{m.rolle}</Badge>
              <Switch defaultChecked={m.online} aria-label={`Zugriff ${m.name}`} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
