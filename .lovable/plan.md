# Navbar Redesign Plan

## Goal
Transform the current full-width dark glass header into a centered, floating pill-shaped navbar that matches the uploaded reference layout, using Vyom brand colors and the colored wordmark.

## Design Decisions (from your answers)
- **Background:** Brand-colored pill (Vyom blue/orange gradient family) instead of the reference's dark pill.
- **Logo:** Colored Vyom wordmark (`company_name-2.png`).
- **Mobile menu:** Compact dropdown under the pill rather than a full-width slide-down.

## What Will Change

### 1. `src/components/SiteHeader.tsx`
- Wrap the header content in a centered, max-width pill container.
- Apply a rounded-full shape with Vyom brand gradient background and subtle shadow.
- Add top margin so the bar floats below the viewport edge (e.g., `mt-4`).
- Layout inside the pill:
  - Left: colored wordmark logo linking home.
  - Center: horizontal nav links (Services, Resources, About Us, Contact Us, Network).
  - Right: "Start a Chat" / "Go Home" CTA button.
- Mobile:
  - Keep the hamburger button on the right inside the pill.
  - Replace the full-width slide-down with a compact rounded dropdown that appears directly beneath the pill.
  - Stack nav links and CTA inside the dropdown.

### 2. `src/styles.css`
- Add a new `@utility` (e.g., `navbar-pill`) for the floating pill background, shadow, and border treatment so it stays reusable and theme-safe.
- Adjust `scroll-padding-top` if the new floating bar changes the effective sticky offset.

### 3. Visual Checks
- Confirm the colored wordmark remains legible on the brand gradient pill.
- Confirm nav links and CTA have enough contrast.
- Verify the dropdown on mobile doesn't overflow or collide with hero content.

## Out of Scope
- No changes to page routes, section content, or scroll animations.
- No changes to the Network page logic.

## Verification
- Run production build to catch any class or import issues.
- Capture preview screenshots at desktop and mobile widths to confirm the pill shape, spacing, and dropdown behavior.