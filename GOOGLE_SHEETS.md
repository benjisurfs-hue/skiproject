# Editing resort data

The app reads the **Resorts** tab in [Ski Resort Data](https://docs.google.com/spreadsheets/d/10l7L6Sr2DClVc439oWUYPV1gKZS_tHGvUOcVc1xjzBo/edit).
The sheet must remain viewable by anyone with its link. No API key is required.

After this change is deployed, both the homepage and resort detail pages use the sheet.
The server cache refreshes on visits after five minutes. A visit may receive the previous
version while the refresh completes; reload shortly afterward. Already-open pages do
not update automatically. Sheet edits do not require a new deployment.

- Keep the header names and stable `id` values. Columns may be rearranged.
- Blank `published` or `TRUE` shows a resort. `FALSE` hides it from the list and detail page.
- Rows removed from a valid sheet no longer appear. To hide every resort, set every row
  to `FALSE`; a completely empty sheet is treated as an error.
- Blank optional facts, dates, descriptions and coordinates remain unavailable, not zero.
  Both coordinates must be filled or blank. Fill all three terrain percentages or none.
- Dates use `YYYY-MM-DD`. Drive times such as `~4.75 hours` also update the drive-time sort.
  Other drive-time text displays as entered, but is not assigned a numeric sorting value.
- Passes accept JSON (`["Ikon","Indy"]`) or comma-separated names (`Ikon, Indy`).
  Valid names are Ikon, Epic and Indy. Blank or `[]` means no tracked multi-pass.
- Terrain parks accept a count (`3`) or the imported JSON, including ranges
  (`{"status":"seasonal","min":5,"max":7}`).
- Scores must be whole numbers from 1 to 5. Blank scores, rating labels and terrain parks
  retain their local values because the existing app requires these fields.
- `nycBusAvailable`: `FALSE` hides bus providers, `TRUE` shows bus availability, and blank
  preserves existing provider information. TRUE without a provider shows a plain Bus label.
  Provider names and links still live in the resort files; no providers are invented.
- Photos, highlights, pros/cons, sources and other fields absent from the sheet stay in
  `data/resorts/`. To add a new resort, first add its local record and register it in
  `data/resorts.ts`, then add a sheet row with the same ID.

If the sheet is unreachable or contains invalid data, the app logs the problem on the
server and uses the bundled resort records. This fallback can include resorts hidden
in the sheet. Sheet visibility is an editorial control, not an access-control mechanism.
An incorrect ID, invalid URL, duplicate ID, missing header or invalid number rejects
the entire sheet snapshot. Fix the entry and allow the cache to refresh.

The connection does not verify factual accuracy or correct existing source mistakes.

## Validation

Run `node --test tests/resort-sheet.test.mjs`, `npx tsc --noEmit`, and `npm run build`.
