# Vermont Ski Resorts

Responsive Next.js resort explorer implemented from **Figma Page 6** (`205:10021`), using the list frame `205:10022`, resort cards `205:10024`, `205:10107`, `205:10190`, sort screen `217:12197`, and state screen `217:12353`.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run lint` checks code quality; `npm run build` produces the production build.

## Initial scope

- Three local sample resorts: Sugarbush, Smugglers' Notch, and Jay Peak.
- Mobile card layout, two columns on tablets, three columns on wide desktops.
- Swipe/scroll photo galleries; focus a gallery and use arrow keys to navigate.
- Seven working sort options; state selection marks the other states as coming soon.
- Comparison bars, terrain breakdowns, and external resort links.
- Photos, SVG icons, and Inter fonts are served locally. No Supabase, credentials, or external data service.

`data/resorts.ts` holds the single typed sample dataset (`data/resort.ts` defines the model), `app/resort-explorer.tsx` the interactive views, and `app/globals.css` the design styles. Assets in `public/figma` retain their Page 6 node IDs for traceability.

The initial order matches Figma. Choosing a sort applies numeric ordering (opening date, wait, and price ascending; snow, size, and vertical descending). The 2025/26 values are design samples, not current conditions. Figma contains differing acreage figures in descriptions and comparisons; both are preserved rather than inventing replacements.

## Comparison calculations

`lib/comparisons.ts` defines the five metrics, raw-value formatting, normalization, and sorting. Bars use min–max scores from 0–100 over the complete local sample dataset, not the sorted or filtered subset. Snowfall, acreage, and vertical increase the score; wait time and ticket price decrease it. Values outside the reference range are clamped. Equal-valued/singleton cohorts receive 50. Missing, negative, and non-finite values have no score and display “Not available”; zero waits and zero prices are valid.

These are sample-relative comparisons, not verified Northeast percentiles. Labels therefore say “Against local sample resorts.” Raw annual snowfall, acreage, vertical, wait minutes, and USD day-ticket prices remain visible; seasonal snow totals are stored separately. No manually maintained bar widths or assessment strings remain.

Media records support images, videos, and trail-map roles while keeping the original three Page 6 images. Terrain percentages are derived from Page 6 trail counts and stored separately from terrain parks; the existing count layout is preserved. Source metadata identifies every resort as an unverified Figma sample.

Run calculation/data regression tests with Node 22.18+ (native TypeScript stripping):

```sh
node --test tests/comparisons.test.mjs
```
