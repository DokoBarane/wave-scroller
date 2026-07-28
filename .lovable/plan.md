## Problem

The new wordmark image has dark grey "vyom" lettering. Over the hero, the navbar uses the dark liquid-glass style, so the lettering disappears. It only reads correctly on the light navbar variant used further down the page and on /network.

## Fix

Produce a second version of the wordmark with white "vyom" lettering (butterfly mark keeps its blue-to-orange gradient), created by editing the uploaded image so both versions are pixel-identical apart from the text colour.

In `src/components/SiteHeader.tsx`, the header already tracks an `isDark` flag driven by an IntersectionObserver on the hero. Use it to pick the image source:

- `isDark` (over the hero, dark glass pill) -> white-lettering wordmark
- otherwise (light glass pill, /network) -> the current dark-lettering wordmark

Everything else — size, alt text, link behaviour, mobile menu — stays as is.

## Technical notes

- New asset registered as `src/assets/vyom-wordmark-v4-light.png.asset.json` via the asset CLI, generated with the image edit tool from the uploaded file.
- Single `<img>` with a conditional `src`; both images preloaded implicitly by React swapping the source, so no layout shift (same `h-8 sm:h-9 w-auto`).
