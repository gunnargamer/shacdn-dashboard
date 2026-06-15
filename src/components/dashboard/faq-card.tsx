import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faqs = [
  {
    q: "Wie oft werden die Daten aktualisiert?",
    a: "Die Kennzahlen werden alle 15 Minuten synchronisiert. Manuelle Aktualisierung ist jederzeit über das Filtermenü möglich.",
  },
  {
    q: "Kann ich Berichte exportieren?",
    a: "Ja — jeder Bericht lässt sich als CSV oder PDF exportieren. Geteilte Berichte sind für alle Team-Mitglieder sichtbar.",
  },
  {
    q: "Wie verwalte ich Zugriffsrechte?",
    a: "Im Team-Bereich kannst du pro Mitglied Rollen (Admin, Editor, Viewer) und Zugriff per Schalter steuern.",
  },
]

export function FaqCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Häufige Fragen</CardTitle>
        <CardDescription>Kurz erklärt</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["faq-0"]}>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
