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
    q: "How often is the data updated?",
    a: "Metrics sync every 15 minutes. You can refresh manually anytime from the filter menu.",
  },
  {
    q: "Can I export reports?",
    a: "Yes — every report can be exported as CSV or PDF. Shared reports are visible to all team members.",
  },
  {
    q: "How do I manage access rights?",
    a: "In the Team section you can set roles (Admin, Editor, Viewer) and toggle access per member.",
  },
]

export function FaqCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
        <CardDescription>Quick answers</CardDescription>
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
