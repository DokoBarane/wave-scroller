## Goal

Build the Vyom Global Logistics site on the current (empty) template: a single-scroll animated homepage plus a separate Agency Network Directory page, using the supplied copy and directory data verbatim, the uploaded tanktainer photo as the hero background, and the uploaded Vyom brand marks throughout.

## Brand assets (uploaded)

All three uploads are registered as CDN assets and used in the app:
- `bkimage.jpg` — blue tanktainer frames against sky → full-bleed hero background
- `company_name.png` — full wordmark (butterfly mark + "vyom") → header logo and footer
- `logo.png` — standalone butterfly mark → favicon and compact/mobile header mark

The logo's blue→orange gradient confirms the brand palette, so the site gradient is derived from the mark itself.

## Design system

Tokens in `src/styles.css` (oklch equivalents):
- brand blue `#0047CC`, brand orange `#FF3700`, brand dark `#2B2A29`
- vertical blue→orange gradient token matching the logo
- light `slate-50`-style page surface; dark glass nav for contrast over the hero
- Inter loaded via a `<link>` in `__root.tsx`

No hardcoded color utilities — everything through semantic tokens.

## Hero

Full-bleed tanktainer photo with a dark blue→orange scrim so the white headline, right-side info card, and glass nav stay legible. Content exactly as specified: heading "Emphasis will be on expertise in sea freight solutions.", supporting line, info card ("Own offices · 6 countries and growing · …"), CTAs "Start a Chat" / "Explore Services".

## Routes

```text
/          single-scroll homepage: Hero, Services, Resources, About Us, Contact Us
/network   Agency Network Directory
```

Each route gets its own `head()` with unique title/description/og/twitter tags.

## Scroll animation

- Hero: `section_scale_only` — hero and its background scale/fade subtly on scroll via a lightweight scroll-progress hook, no animation library.
- Other sections: reveal effects wired but disabled by default, per the spec.
- Full `prefers-reduced-motion` support.

## Homepage sections

Services, Resources, About Us, Contact Us with the exact section labels, titles, bullet points, and body copy from the document. Contact CTAs link to `mailto:marina@vyomshipping.com` and `tel:+6592723370`.

Header: wordmark logo + nav (Services, Resources, About Us, Contact Us, Network) + CTA "Start a Chat"; on `/network` the CTA becomes "Go Home".

## Network page

- `src/data/agencyNetwork.ts` with all 19 offices across Bangladesh, India, Indonesia, Taiwan, Malaysia, Pakistan, Singapore, Sri Lanka, Thailand, Vietnam, China, and every contact row as listed.
- Country dropdown filter + search across country, location, company, address, and contact summary.
- Table headers exactly as given, including the "COMPANY FULL STYE NAME & ADDRESS" typo.
- Office-level cells deduplicated with row grouping for multi-contact offices.
- Footer line with live filtered count and country count, plus a link back home.

## Favicon

`logo.png` (butterfly mark) becomes the site favicon, replacing the default.

## Technical notes

- Static site, no backend needed for this scope. A working contact form later would need Lovable Cloud.
- Reusable pieces: `SiteHeader`, `SiteFooter`, `Section`, `useScrollReveal`.
- Semantic HTML, single H1 per page, alt text on all images, lazy loading on non-hero images.

## Known content gap

Hero says "6 countries and growing … Singapore, Malaysia, Indonesia, Thailand, India, UAE" but the directory has no UAE office. I'll implement both as written; tell me if you'd rather add a UAE entry or adjust the hero copy.
