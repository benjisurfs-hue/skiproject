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

`app/resorts.ts` holds the sample data, `app/resort-explorer.tsx` the interactive views, and `app/globals.css` the design styles. Assets in `public/figma` retain their Page 6 node IDs for traceability.

The initial order matches Figma. Choosing a sort applies numeric ordering (opening date, wait, and price ascending; snow, size, and vertical descending). The 2025/26 values are design samples, not current conditions. Figma contains differing acreage figures in descriptions and comparisons; both are preserved rather than inventing replacements.
