## Goal

Replace the "Content coming shortly" placeholder in the **Definitions** tab of `/resources` with the supplied glossary. Incoterms and Terms and Conditions tabs stay as placeholders until you send that content.

## What gets built

- A `DEFINITIONS` array in `src/routes/resources.tsx` holding `{ number, term, description }` for each entry (1.1 Carriage through 1.18 US COGSA).
- The Definitions tab renders a clean glossary list instead of the placeholder card:
  - Each item in a bordered card (`border-border bg-card`, rounded, `shadow-soft`) consistent with the rest of the site.
  - Clause number in the brand gradient text, term in semibold foreground, description in `text-muted-foreground` with relaxed leading.
  - Single column on mobile, two columns on large screens.
- Page heading stays "Definitions" with the "Resources" eyebrow label.
- `ResourcePanel` stays in place and is still used by the two remaining placeholder tabs.

## Content notes (please confirm)

Two items in the pasted text look off, so I'll transcribe exactly as given unless you say otherwise:

- **1.8 is missing** from the list — nothing between 1.7 Holder and 1.9 Merchant.
- **1.12 / 1.13** appear mis-split: 1.12 Package ends with "entitled 'Carrier's'." and 1.13 reads "Receipt: are each deemed a Package." These likely belong together as one Package definition.

If you paste corrections I'll fold them in; otherwise the text ships verbatim.

## Technical details

- Single file changed: `src/routes/resources.tsx`.
- No new components or dependencies; data lives as a module-scope constant in the route file.
- Curly quotes and the ™ mark preserved as supplied.
