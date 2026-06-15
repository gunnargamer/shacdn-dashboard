# CLAUDE.md — DS Shacdn

Operating instructions for this project. Auto-loaded each session.

## Project
- shadcn/ui design-system demo for "Magenta Apprentice" (Deutsche Telekom context).
- Stack: Vite + React 19 + TypeScript + Tailwind v4 + shadcn/ui (base-ui, not Radix). Charts: recharts.
- Brand: magenta `#e20074` primary + self-hosted TeleNeo font. All theming lives ONLY in `src/index.css` tokens.

## Hard rules
- **UI language is English.** We may converse in German, and the Telekom voice guide below defaults to German — but for this product's UI, English wins.
- **Components are stock shadcn.** Never edit `src/components/ui/*`, never fork or restyle them. Compose and lay out only. Customize through `index.css` tokens, not component files.

## How to work (coding)
- **Think before coding.** State assumptions. If something is unclear or has more than one reading, ask — don't pick silently. If a simpler approach exists, say so and push back.
- **Simplicity first.** Minimum code that solves the task. Nothing speculative — no unasked features, abstractions, flexibility, or error handling for impossible cases. If 200 lines could be 50, rewrite.
- **Surgical changes.** Touch only what the task needs. Match existing style. Don't refactor or reformat adjacent code. Remove only the orphans your change creates; flag unrelated dead code instead of deleting it. Every changed line traces to the request.
- **Goal-driven.** Turn the task into a verifiable check. For multi-step work, state a short plan with a verify step per item, then loop until it passes.

## UI copy voice (Telekom — applied in English)
- Plain, everyday words. Short, scannable sentences. Active voice. Verbs over nouns. One idea per sentence.
- Human, friendly, clear, confident. Not corporate, not promotional, no playful gimmicks, no filler.
- CTAs: clear and action-driven ("Create task", not "Task creation").
- Errors: say what happened + the next step. Never blame the user.
- Be concrete over vague. Prefer positive framing. Lead with the most important info.
- Quick check before shipping copy: instantly understandable? as simple as possible? clear next step? If not, simplify.
