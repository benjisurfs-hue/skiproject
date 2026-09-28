# Vermont V1 data and editorial audit

Reviewed 2026-09-28. `MAKE.md` overrides take priority. The application uses only the checked-in dataset and local assets; source URLs are provenance, not runtime integrations.

## Editorial completion

All 16 resorts now have a description, exactly three highlights, four Pros and three Cons. The 13 previously incomplete resorts were filled from user-supplied editorial on 2026-09-28. Jay Peak, Smugglers’ Notch and Sugarbush were preserved unchanged during that pass, including their icons.

New highlights reuse the existing Page 6 mountain, snowflake, people and money SVGs. Where no literal icon exists (such as a chairlift or night skiing), the closest existing mountain/community symbol is reused. No new assets or presentation changes were introduced. Optional character/tier labels for the 13 resorts remain unset.

No direct conflicts were identified between the supplied editorial and structured mountain statistics. All non-editorial resort fields were checked against the pre-edit dataset and remain identical. The prior Sugarbush acreage clarification (581 total, including 484 on-trail acres) was preserved.

The original editorial assessments remain editorial, even where they differ from the new prototype rating bands (for example, Jay Peak's existing “Affordable lift tickets” Pro and Value tag versus its MAKE.md Premium rating). They have not been silently rewritten.

## Missing or unverified factual fields

- Base elevations: Burke, Middlebury Snow Bowl, Stratton remain `null` (not established in the reviewed primary sources).
- Pico lift count: `null`; its official mountain page lists seven named lifts but its comparison table says five. Neither was silently selected.
- Coordinates: `null` for all 16; coordinates were not established in this pass and have no V1 UI.
- Projected opening dates and 2025/26 totals: absent for the 13 newly added resorts. The three existing resorts retain the original **unverified design samples**, labeled as such in the UI and dataset. Unknown seasonal values sort last, not as zero. The first default sort is actually applied.

All 16 have annual snowfall, skiable acreage, vertical, trail count, three-category terrain percentages, prototype ratings, seasonal parks, local photos and resort website links. `lastVerified` records the static-source review date, not a blanket claim that editorial or seasonal samples were verified.

## Source choices and caveats

Specific official URLs are stored with each resort in `data/resorts.ts`.

- Every MAKE.md Lift Access / Affordability rating and park count is used verbatim, including Killington's 5–7 range. Ratings are prototype assessments, not measured lift queues or ticket quotes. Seasonal park counts may differ from current resort pages, intentionally following MAKE.md.
- MAKE.md overrides: Saskadena Six 100 acres / 110 inches; Smugglers’ Notch 1,000 acres / 322 inches / 78 trails / 19–50–31 terrain; Okemo 120 inches; Burke 11–47–42 terrain. Detailed expert splits remain stored.
- Burke: current skiing/riding page supplies 178 acres, 53 trails, 217 inches, 2,011 vertical. Five lifts are named in its official conditions inventory; that source is recorded separately. This differs from older third-party totals.
- Middlebury: 110 trail acres excludes separately described woods/backcountry. Terrain percentages derive from the official 6 easiest / 8 more difficult / 14 most difficult marked trails (28 total), excluding 11 separately listed glades. Full precision is stored; UI rounds to one decimal.
- Magic: 205 on-map trail/glade acres excludes 200 off-map tree-skiing acres. The 39 trails + 11 glades are counted as 50. Advanced 18% + expert 26% is displayed as 44%. The five-lift inventory is supported by its Indy listing.
- Mad River Glen: 115 trail acres excludes nearly 2,000 acres of tree-skiing access. Current quick facts supplies 2,037 vertical; its official elevation explanation supplies 1,600 base.
- Bromley: 300 total acres, including 178 trail acres, follows the mountain's published distinction. No Ikon/Epic/Indy lift-access affiliation is recorded. Its discounted Ikon purchase benefit is not treated as pass access.
- Pico: 468 acres and 58 trails follow its mountain stats. The source's difficulty percentages (18/46/36) are used rather than its inconsistent individual trail-count subtotal. Lift count remains unresolved as above.
- Jay Peak: the official mountain web page takes precedence over the differing 2025/26 PDF map: 347 inches annual snow, 2,122 published vertical, 3,862 summit and 1,750 base. The map instead lists 390 inches / 2,112 vertical. The website's vertical does not equal the summit/base difference; it is retained as the explicitly published vertical, with this discrepancy flagged for future verification. MAKE.md's three parks takes precedence over either source's park count.
- Sugarbush: 581 acres = 484 on-trail + 97 wooded; 2,600 vertical replaces the old 2,650 placeholder. Terrain uses the official percentage table, combining black, double-black and wooded categories into Advanced (47.5%). The detailed wooded category is preserved so this simplification is reversible.
- Stowe: current mountain page supplies 314 inches and 16/55/29 terrain. Official guest services supplies 2,160 vertical and 1,280 base skiing elevation. The summit is geographic summit elevation, not the highest lift-served skiing elevation. This avoids the erroneous 104% terrain sum in an older press sheet.
- Okemo: current mountain page supplies 667 acres, 123 trails and 33/37/30 terrain. Vertical is the published 2,200 ft (also summit minus base); MAKE.md's 120-inch snowfall overrides the older press sheet.
- Mount Snow: current mountain page supplies 601 acres, 86 trails and 18 lifts. MAKE.md's 10 seasonal parks overrides the page's eight.
- Stratton: 670 acres is the published numerical comparison value (also described as 670+). The current statistics table supplies 14 lifts, superseding its older introductory paragraph. Advanced 16% + Expert 9% = 25%.
- Passes cover the application's tracked Ikon/Epic/Indy affiliations, not every reciprocal ticket arrangement. `passes: []` deliberately means no tracked multi-pass (Mad River Glen and Bromley), not unknown. Smugglers’ Notch's Indy affiliation is current for 2026/27, independent of the retained 2025/26 seasonal samples.

## Comparison and filtering contract

Objective bars use min–max normalization against all 16 records, not visible results. Higher is always better. Equal-valued cohorts use 50; missing/invalid values have no score. Fractional scores remain unrounded for truthful ordering. Lift Access and Affordability use score / 5 × 100 (20–100%); original 1–5 scores, labels and affordability bands remain visible.

Pass checkboxes combine with OR; selected state filters combine with AND. All available checkboxes start selected. Deselecting every pass or Vermont produces an explicit empty result. One native radio sort is active, and settings persist when returning between results and menu. Ties preserve dataset order. Stable IDs/slugs and exported calculations can support future comparison without copying data; no selection UI or comparison route exists.
