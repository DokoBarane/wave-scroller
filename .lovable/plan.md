Add two dropdown filters directly under the "Agency Network Directory" heading on `/network`:

1. **Country filter** — a `<Select>` dropdown populated with the unique countries from `agencyNetwork` data, plus an "All countries" option.
2. **Location filter** — a `<Select>` dropdown populated with the unique locations from `agencyNetwork` data, plus an "All locations" option. Optionally narrow the location list to the selected country.

Implementation details:
- Use the existing `src/components/ui/select.tsx` component to match the site's shadcn style.
- Add React state (`selectedCountry`, `selectedLocation`) in `src/routes/network.tsx`.
- Filter the rendered `agencyNetwork` array before mapping it into table rows.
- Update the "Showing X office locations across Y countries" summary to reflect the filtered count.
- Lay out the two filters horizontally on desktop and stacked on mobile, with a "Clear filters" reset button.
- Keep the current table width and font-size adjustments intact.

Files changed:
- `src/routes/network.tsx`