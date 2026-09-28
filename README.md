# Vermont Ski Resorts

Responsive Next.js Vermont V1 explorer. `MAKE.md` is the implementation source of truth. Existing resort cards follow Figma Page 6 (`205:10021`); the combined sort/filter menu follows `217:12197`.

## Run and verify

```sh
npm install
npm run dev
npm run lint
npm run build
node --test tests/comparisons.test.mjs
```

Open http://localhost:3000. Data tests require Node 22.18+ for native TypeScript stripping.

## Architecture

- `data/resorts.ts`: one dataset containing exactly 16 Vermont resorts, stable IDs/slugs, sourced static facts, original editorial content, prototype ratings and media references.
- `data/resort.ts`: shared model with nullable unknowns, multi-pass affiliations, detailed terrain, seasonal park counts/ranges and provenance.
- `lib/comparisons.ts`: reusable objective normalization, fixed 1–5 rating scores, formatting and seven sorts. Always pass the complete Vermont dataset as the reference cohort, including for a future comparison screen.
- `lib/filters.ts`: pass unions and state intersections. Empty selection produces no matches; an empty resort `passes` array matches “Not on multi-pass.”
- `app/resort-explorer.tsx`: reusable card, keyboard/scroll photo carousel, card-constrained sticky headers, and combined menu using native radio/checkbox controls.
- `app/globals.css`: Page 6 typography, media frames, one/two/three-column responsive layouts, sticky headers and revised menu styling.

All 48 photographs load from `public/resorts/[slug]/01.jpeg` through `03.jpeg`. All three are photography, not trail maps. Existing SVG icons and Inter fonts remain local. The photo frame retains `object-fit: cover`; focus a carousel and use left/right arrow keys, or swipe/scroll it.

Snowfall, size and vertical compare actual values against the full 16-resort min/max. Lift Access and Affordability are clearly labeled prototype ratings: score / 5 × 100. More fill always means better. Actual values, ratings, labels and affordability bands stay visible. Terrain percentages and seasonal park counts are separate.

The default opening-date sort is applied to known sample dates, with unavailable dates last. All seven sorts and multi-select filters persist when returning from the menu to results. Vermont is enabled; New York and New Hampshire are disabled Coming Soon options. No other states are populated.

See `DATA_NOTES.md` for the full missing-content list, unresolved values and source conflicts. All sixteen cards have complete editorial content; the three original cards retain their existing copy and icons, and the other thirteen use user-supplied copy with existing icons. Seasonal totals/opening dates on the original three cards are labeled design samples, not current conditions.

No Supabase, backend, live APIs, scraping, admin, comparison screen or comparison-selection UI is included.
