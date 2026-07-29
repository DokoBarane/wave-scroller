## Goal
Replace the current low-detail world map with a better-looking map that is zoomed into the Asia–Middle East corridor where all six agency points sit, plus a more refined marker animation.

## What changes

**1. Better basemap data**
- Add `d3-geo` + `topojson-client` and a bundled Natural Earth 110m/50m land + country dataset (stored locally under `src/data/` so nothing loads from a CDN).
- Build the SVG paths with a proper projection (Mercator or a geo-natural projection) fitted to a bounding box covering UAE → Indonesia (roughly lng 45–115, lat -12 → 32) instead of the hand-rolled equirectangular full-world path.
- Country borders drawn as thin strokes over a soft brand-blue landmass fill, subtle sea background — no graticule grid clutter.

**2. Focused view, no full world**
- Both desktop and mobile use the same fitted Asia–Middle East extent; mobile just gets slightly tighter padding and larger touch targets. `WORLD_LAND_PATH` / `worldLandPath.ts` gets removed.

**3. Improved marker animation**
- Replace the current static pulse ring with a staggered double sonar ripple (each marker offset so they don't pulse in unison), a solid core dot with a soft glow, and a gentle drop-in on mount.
- Hover/active: dot scales up, ripple accelerates slightly, and the label appears in a small rounded pill (foreignObject-free, SVG rect + text) instead of raw stroked text.
- Respect `prefers-reduced-motion` (ripples disabled, static dots).
- Keep existing behaviour: click a marker → sets Country + Location filters on the directory below; `activeLocation` prop highlights the matching marker.

**4. Optional connection arcs**
- Thin dashed brand-blue great-circle arcs linking Singapore to the other five hubs, with a slow dash-flow animation, to make the panel feel like a network rather than scattered dots.

## Technical notes
- New dependencies: `d3-geo`, `topojson-client` (+ types). Geometry is precomputed at render with `geoPath`, so no runtime network calls.
- Animations defined as keyframes in `src/styles.css` using existing brand tokens (`--brand-orange`, `--brand-blue`); no hardcoded colors.
- `WorldMap.tsx` stays the single component; `NETWORK_MARKERS` export and props signature are unchanged so `/network` needs no edits.
