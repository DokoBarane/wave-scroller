## Interactive world map on the Network page

Add a stylised world map panel above the Agency / Local Charges / Downloads tabs on `/network`, with pulsing red markers for six locations.

### Locations plotted
| Marker | Coordinates |
|---|---|
| Chennai, India | 13.08 N, 80.27 E |
| Singapore | 1.28 N, 103.85 E |
| Port Klang, Selangor (Malaysia) | 3.00 N, 101.39 E |
| Bangkok, Thailand | 13.75 N, 100.52 E |
| Jakarta, Indonesia | -6.21 S, 106.85 E |
| Jebel Ali, UAE | 25.01 N, 55.06 E |

### What it looks like
- Full-width rounded panel above the tabs, matching the card/border/shadow-soft styling used elsewhere on the page.
- World landmass drawn as a soft muted silhouette (subtle brand-tinted fill, faint grid/graticule) so red dots stand out.
- Each marker: a red dot with a slow pulsing halo ring, plus a small connecting glow.
- Hover/tap a marker → tooltip with location + country; the marker scales up. Clicking a marker filters the Agency table below to that country/location (reuses the existing Country + Location filter state).
- Map crops to the Asia–Middle East region on mobile so points stay legible; full world on desktop.

### Technical notes
- No map library or API key. A lightweight inline SVG world map (equirectangular outline, `viewBox="0 0 1000 500"`) lives in a new `src/components/WorldMap.tsx`; lat/lng converted to x/y with the standard equirectangular formula.
- Marker data in a new small array (label, country, location, lat, lng) so it stays editable; `location`/`country` values match `agencyNetwork` entries for the click-to-filter behaviour.
- Colors via existing semantic tokens (brand orange/red for markers, muted/border for land) — no hardcoded hex in components.
- Pulse animation added as a keyframe in `src/styles.css`.
