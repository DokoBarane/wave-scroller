## Goal

The hero side card ("Own offices / 6 countries and growing") is low-contrast against the busy photo and visually flat. Redesign it into a legible, premium glass stat panel.

## What to build

Replace the current `<aside>` in `src/components/Hero.tsx` with a stronger card:

1. **Legibility**
   - Deeper glass fill (brand-dark ~70% instead of 45%), heavier blur and saturation, plus a soft inner top highlight and elevated outer shadow — same liquid-glass language as the navbar.
   - Thin gradient (blue -> orange) accent line along the top edge of the card so it reads as a brand element, not a grey box.
   - Text moves to full-strength foreground for the headline, with the muted tone reserved for the small label only.

2. **Hierarchy**
   - Eyebrow label: "Own offices" in small uppercase tracked type with a small gradient dot.
   - Hero stat: large numeral **6** paired with "countries and growing" as supporting text, so the number carries the visual weight instead of a single sentence.

3. **Countries as chips**
   - Singapore, Malaysia, Indonesia, Thailand, India, UAE rendered as individual rounded pill chips (translucent border + subtle fill) in a wrap grid, rather than one comma-separated line. Each chip gets a light hover lift.

4. **Motion**
   - Chips fade/slide in with a small staggered delay on first view, respecting the existing reduced-motion setup in global CSS. No new libraries.

## Technical notes

- Change stays inside `src/components/Hero.tsx`; the country list becomes a local array mapped to chips.
- If any new glass treatment is reused, add it as a `@utility` in `src/styles.css` using existing brand tokens — no hardcoded colors.
- Card keeps its current grid slot and stays responsive (full width under `lg`).
