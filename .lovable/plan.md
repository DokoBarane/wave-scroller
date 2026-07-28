## Goal

Bring the two uploaded photos into the homepage: the aerial cargo ship and the stacked blue tanktainers. The third upload (website mockup) is treated as reference only.

## What gets added

1. **Services section** — two-column layout: existing service points on one side, the tanktainer stack photo on the other, in a rounded frame with a soft brand-blue edge glow. Stacks to a single column on mobile.

2. **About Us section** — same treatment, mirrored (photo on the opposite side) using the cargo ship photo, so the two sections don't read as identical.

3. **Full-width parallax band before Contact Us** — an edge-to-edge cargo ship image band with a dark brand-tinted scrim and a short overlaid line drawn from existing copy ("Cross-border sea freight planning across Asia and beyond"). The image translates slowly as you scroll past, matching the existing hero's scroll behaviour and honouring reduced-motion.

## Technical notes

- Both uploads are registered as CDN asset pointers (`src/assets/*.asset.json`) and imported by URL — no binaries added to the repo.
- Section photos get a small fade/rise reveal on scroll, driven by the existing `useScrollReveal` hook, so no new motion system is introduced.
- The parallax band uses `useSectionScrollProgress` (already built for the hero) and disables translation under `prefers-reduced-motion`.
- `Section.tsx` gains an optional `media` slot and a `mediaSide` prop rather than duplicating layout code in each section.
- Descriptive alt text on every image; hero background is untouched.
