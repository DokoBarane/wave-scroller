## Goal

Move Resources off the homepage into its own page at `/resources`, styled exactly like the Network page, with three tabs: **Definitions**, **Incoterms**, **Terms and Conditions**.

## Changes

**1. New page `src/routes/resources.tsx`**
- Same shell as `/network`: `SiteHeader variant="network"`, `SiteFooter`, centered `TabsList` above the section label/heading.
- Tabs: `Definitions` (default), `Incoterms`, `Terms and Conditions`.
- Each tab renders a content card with a placeholder body ("Content coming shortly") — structured so your pasted text drops straight in as sections/tables later.
- Own `head()` metadata: unique title, description, og:title, og:description, og:type, twitter:card.

**2. Homepage `src/routes/index.tsx`**
- Remove the `#resources` `Section` block (including the terminal-office media and the RESOURCES list constant).
- Keep the `vyom-terminal-office.jpg` asset file in place for reuse.

**3. Header `src/components/SiteHeader.tsx`**
- Change the "Resources" nav item from a `#resources` hash anchor to a `<Link to="/resources">`, matching how "Network" is rendered, in both desktop and mobile menus.

## Technical notes

- Route file name `resources.tsx` → `createFileRoute("/resources")`; `src/routeTree.gen.ts` regenerates automatically.
- Reuses existing shadcn `Tabs` components; no new dependencies.
- Presentation-only change: no data or backend work.

## Next step after this

Paste the Definitions, Incoterms, and Terms and Conditions text and I'll fill each tab with proper formatting (lists/tables as appropriate).
