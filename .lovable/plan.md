## Goal
Add three tabs to the Network page: **Agency**, **Local Charges**, **Downloads**. Agency shows the existing directory (filters + paginated table); the other two show a "Coming soon" placeholder.

## Layout
Tabs sit directly under the "Agency Network Directory" heading, above the Country/Location filters.

```text
Network
Agency Network Directory
[ Agency | Local Charges | Downloads ]
--------------------------------------
(tab content)
```

## Implementation
- In `src/routes/network.tsx`, add the shadcn `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent` components (already available in `src/components/ui/tabs.tsx`; added if missing), with `defaultValue="agency"`.
- Move the existing filters block, table, pagination bar and "Return to homepage" link into `<TabsContent value="agency">` — no changes to that logic or styling.
- `<TabsContent value="local-charges">` and `<TabsContent value="downloads">`: a centered card panel (rounded border, soft shadow, matching site styling) with the section name as a heading and "Coming soon" plus a one-line note.
- Tab triggers styled to match the brand (active tab uses brand accent), typography consistent with the rest of the page.

## Technical notes
- Only `src/routes/network.tsx` changes (plus adding `ui/tabs.tsx` if it isn't present).
- Filter/pagination state stays as-is and remains scoped to the Agency tab.
