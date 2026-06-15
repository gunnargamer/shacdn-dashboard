# shadcn/ui Dashboard — Code↔Figma Demo

Eigenständiges Beispielprojekt, um zu testen, wie gut **Code und Figma** mit
shadcn/ui zusammenarbeiten. Ein einzelner, dichter Dashboard-Screen, der bewusst
viele Kern-Komponenten auf einer Seite zeigt.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`, `@import "tailwindcss"`)
- **shadcn/ui** (New-York-Style, Basisfarbe `neutral`, CSS-Variablen-Theming)
  - aktuelle CLI nutzt `@base-ui/react` statt Radix
- **Recharts** für den Chart, **Geist** als Font

## Starten

```bash
npm install
npm run dev      # http://localhost:5173 (Demo lief auf :5174)
npm run build    # Production-Build + Typecheck
```

## Was auf dem Screen liegt

| Bereich | shadcn-Komponenten |
| --- | --- |
| Sidebar + Navigation | `sidebar`, `separator` |
| Header (Suche, Avatar-Menü) | `input`, `button`, `avatar`, `dropdown-menu` |
| KPI-Kacheln | `card` (inkl. `CardAction`), `badge` |
| Umsatz-Chart | `chart` (Recharts `AreaChart`) |
| Ziele | `card`, `progress` |
| Transaktionen | `tabs`, `table`, `badge` |
| Dark-Mode-Toggle | `button` + `.dark`-Klasse auf `<html>` |

## Theming = Figma-Brücke

Alle Farben/Radien stecken als **OKLCH-CSS-Variablen** in
[`src/index.css`](src/index.css) (`--background`, `--primary`, `--chart-1` …),
je einmal für Light (`:root`) und Dark (`.dark`). Genau diese Tokens lassen sich
1:1 als Figma-Variablen anlegen — der natürliche Mapping-Punkt zwischen Code und
Design.

## Struktur

```
src/
  data.ts                       # Mock-Daten (KPIs, Umsatz, Transaktionen, Ziele)
  App.tsx                       # Layout-Komposition + Theme-Toggle
  components/
    ui/                         # shadcn-Komponenten (generiert)
    dashboard/
      app-sidebar.tsx
      site-header.tsx
      section-cards.tsx
      revenue-chart.tsx
      goals-card.tsx
      transactions-table.tsx
```
