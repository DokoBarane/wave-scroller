## Plan

Update the Agency Network Directory table on `/network` so the full dataset is readable without a horizontal scrollbar.

### Changes to make

1. **Widen the page container**
   - Change the `<main>` container from `max-w-7xl` to `max-w-[90rem]` (or `max-w-8xl`) so the table has more room on large screens.

2. **Reduce table cell font size**
   - Lower body cell text from `text-sm` to `text-xs`.
   - Lower header text from `text-xs` to `text-[11px]` (or keep `text-xs` but reduce padding).

3. **Tighten horizontal padding**
   - Reduce cell/header horizontal padding from `px-4` to `px-3` (or `px-2`) to reclaim width.

4. **Allow more wrapping**
   - Remove or reduce `min-w-[18rem]` on the company/address column.
   - Let email and phone columns wrap (`whitespace-normal`) instead of forcing single-line cells.

5. **Verify**
   - Build the project and take a screenshot of `/network` at the current viewport width to confirm the table no longer scrolls horizontally and all columns are legible.

### Files to edit
- `src/routes/network.tsx`

### Outcome
The directory table will use the full available viewport width and smaller type, fitting all columns in view without horizontal scrolling.