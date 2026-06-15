import { Download, MoreHorizontal, Trash2 } from "lucide-react"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { transactions, type Transaction, type TxStatus } from "@/data"

const statusVariant: Record<
  TxStatus,
  "default" | "secondary" | "destructive" | "outline"
> = {
  bezahlt: "secondary",
  offen: "outline",
  storniert: "destructive",
}

function CustomerCell({ t }: { t: Transaction }) {
  const initials = t.kunde
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
  return (
    <HoverCard>
      <HoverCardTrigger
        render={
          <button className="flex items-center gap-2 text-left hover:underline">
            <Avatar className="size-7">
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
            <div className="grid leading-tight">
              <span className="text-sm">{t.kunde}</span>
              <span className="text-xs text-muted-foreground">{t.email}</span>
            </div>
          </button>
        }
      />
      <HoverCardContent className="w-64">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <span className="text-sm font-semibold">{t.kunde}</span>
            <span className="text-xs text-muted-foreground">{t.email}</span>
            <span className="text-xs text-muted-foreground">
              Letzte Rechnung: {t.betrag}
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function Rows({ filter }: { filter?: TxStatus }) {
  const rows = filter
    ? transactions.filter((t) => t.status === filter)
    : transactions
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rechnung</TableHead>
          <TableHead>Kunde</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Datum</TableHead>
          <TableHead className="text-right">Betrag</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((t) => (
          <TableRow key={t.id}>
            <TableCell className="font-medium">{t.id}</TableCell>
            <TableCell>
              <CustomerCell t={t} />
            </TableCell>
            <TableCell>
              <Badge variant={statusVariant[t.status]} className="capitalize">
                {t.status}
              </Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{t.datum}</TableCell>
            <TableCell className="text-right font-medium tabular-nums">
              {t.betrag}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" aria-label="Aktionen">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{t.id}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => toast("Rechnung geöffnet", { description: t.id })}>
                    Ansehen
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success("Dupliziert", { description: t.id })}>
                    Duplizieren
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => toast.error("Gelöscht", { description: t.id })}
                  >
                    Löschen
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function TransactionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaktionen</CardTitle>
        <CardDescription>Letzte Rechnungen im Überblick</CardDescription>
        <CardAction className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Exportieren"
                  onClick={() => toast.success("Export gestartet")}
                >
                  <Download className="size-4" />
                </Button>
              }
            />
            <TooltipContent>Als CSV exportieren</TooltipContent>
          </Tooltip>

          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size="sm">
                  <Trash2 className="size-4" />
                  Alle löschen
                </Button>
              }
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Alle Transaktionen löschen?</AlertDialogTitle>
                <AlertDialogDescription>
                  Diese Aktion kann nicht rückgängig gemacht werden. Alle
                  Rechnungsdatensätze werden dauerhaft entfernt.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                <AlertDialogAction onClick={() => toast.error("Alle Transaktionen gelöscht")}>
                  Endgültig löschen
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="alle">
          <TabsList>
            <TabsTrigger value="alle">Alle</TabsTrigger>
            <TabsTrigger value="bezahlt">Bezahlt</TabsTrigger>
            <TabsTrigger value="offen">Offen</TabsTrigger>
          </TabsList>
          <TabsContent value="alle" className="mt-4">
            <Rows />
          </TabsContent>
          <TabsContent value="bezahlt" className="mt-4">
            <Rows filter="bezahlt" />
          </TabsContent>
          <TabsContent value="offen" className="mt-4">
            <Rows filter="offen" />
          </TabsContent>
        </Tabs>

        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
