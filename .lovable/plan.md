# Hero Redesign Plan

## Goal
Make the homepage hero section feel premium, readable, and engaging instead of flat/dull, while keeping the current tanktainer background image and Vyom brand colors.

## What will change

### 1. Typography & hierarchy
- Increase the headline size and weight so it dominates the viewport.
- Split the headline into two visual lines with intentional line breaks.
- Add a short, high-contrast sub-headline below the main headline.

### 2. Color & contrast
- Apply a stronger left-to-right gradient scrim over the hero image so the white text pops without losing the photo.
- Use brand orange (`#FF3700`) as an accent word inside the headline and for the primary CTA.
- Keep the secondary CTA as a subtle outlined/glass style.

### 3. Layout
- Keep the content left-aligned but give it more breathing room and a max-width lock.
- Stack headline → sub-headline → CTA group vertically with generous spacing.
- Reposition the glass credibility card lower right so it balances the composition instead of floating awkwardly.

### 4. Credibility card
- Restyle the "Own offices / 6 countries" card with a heavier backdrop blur, subtle border glow, and a small country-count badge.
- Make it read as a trust block rather than a side note.

### 5. Scroll cue
- Add a minimal animated scroll indicator at the bottom center to invite users to scroll.

## What will stay the same
- Background image: `vyom-hero.jpg` (tanktainer stack).
- Brand palette: `#0047CC`, `#FF3700`, `#2B2A29`.
- Font family: Inter.
- Navigation behavior and dynamic light/dark navbar logic.

## Files to modify
- `src/components/Hero.tsx` — main hero layout, text, CTAs, card, scroll cue.
- `src/styles.css` — add any new hero-specific tokens or utilities if needed (e.g., stronger scrim gradient, hero text shadow).

## Verification
- Build passes (`bun run build` or `tsgo`).
- Screenshot confirms improved contrast, readable headline, and balanced card placement across desktop and mobile viewports.