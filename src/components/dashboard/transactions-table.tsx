import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { transactions, type TxStatus } from "@/data"

const statusVariant: Record<
  TxStatus,
  "default" | "secondary" | "destructive" | "outline"
> = {
  bezahlt: "secondary",
  offen: "outline",
  storniert: "destructive",
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((t) => (
          <TableRow key={t.id}>
            <TableCell className="font-medium">{t.id}</TableCell>
            <TableCell>
              <div className="grid leading-tight">
                <span>{t.kunde}</span>
                <span className="text-xs text-muted-foreground">{t.email}</span>
              </div>
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
      </CardContent>
    </Card>
  )
}
