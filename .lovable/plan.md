## Goal
Paginate the Agency Network Directory table with a page-size selector (10 / 20 / 50, default 10), while keeping the Country and Location filters applied across the whole dataset (not just the current page).

## How it works
1. Filtering stays first: `filteredOffices` is computed from the full `agencyNetwork` list, exactly as today. Pagination is applied only after filtering, so filters always search all data, not the visible page.
2. New state in `src/routes/network.tsx`: `pageSize` (default 10) and `page` (default 1).
3. Paged slice: `pagedOffices = filteredOffices.slice((page - 1) * pageSize, page * pageSize)`; the table body renders that slice. One office row group (office + its contacts) counts as one item, so grouped rows never split across pages.
4. Reset behaviour: changing Country, Location, page size, or clearing filters resets to page 1. If the current page goes out of range after filtering, it clamps to the last valid page.

## UI
- Below the table: a footer bar with
  - left: "Rows per page" dropdown (10, 20, 50) using the existing shadcn Select, matching the filter dropdown style;
  - center/right: "Showing X–Y of Z office locations" text (replacing/merging with the existing summary line, keeping the "Return to homepage" link);
  - right: Previous / Next buttons plus numbered page buttons, using the existing shadcn Pagination component if present, otherwise plain Buttons in the same brand style. Prev/Next disable at the boundaries.
- Existing compact typography and brand styling are preserved.

## Technical notes
- Only `src/routes/network.tsx` changes; no data or component-library changes required.
- All derived values use `useMemo`; no new dependencies.
