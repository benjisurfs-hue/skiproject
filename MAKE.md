# Ski Project — MAKE.md

## Project

A responsive website for browsing, evaluating, filtering, and comparing ski resorts in the Northeastern United States.

The product should make it easy to scan resorts, understand their characteristics, and compare mountains without having to visit many individual resort websites.

---

## Source of Truth

The Figma design is the source of truth for UI, visual design, layout, spacing, typography, and responsive behavior.

Figma file:

`CbcR9arkLspCTp5JvwbRA1`

### IMPORTANT

Use **Page 6** as the current design.

Do NOT use Page 4 as the basis for implementation.

Page 4 contains earlier design explorations and should be considered deprecated.

When a direct Page 6 frame or node link is provided, use that node as the primary implementation reference.

If something in the implementation conflicts with Page 6, follow Page 6 unless explicitly instructed otherwise.

Do not redesign the interface unless specifically asked.

---

## Current Status

The initial Page 6 Figma implementation has been built.

Currently implemented:

- Next.js
- TypeScript
- Tailwind CSS
- Responsive resort cards
- 3 local sample resorts
- Figma imagery and icons
- Local Inter fonts
- Sorting
- Photo/media galleries
- State selector
- Responsive desktop and mobile layouts
- Local data only
- No Supabase

The existing implementation should be treated as the starting point.

Do not rebuild working functionality unless specifically requested.

Preserve existing behavior when making subsequent changes.

---

## Product Principles

### 1. Make resorts easy to scan

A user should be able to understand the important characteristics of a resort without opening another website.

### 2. Make resorts comparable

Raw resort statistics are useful, but the interface should also help users understand what those statistics mean relative to other Northeast resorts.

### 3. Keep real values visible

Normalized scores and comparison graphics should supplement real values, not replace them.

For example:

Snowfall  
`████████░░`  
`347 in / year`

### 4. More visual fill always means better

Comparison graphics must follow a consistent direction.

A longer bar or higher score should always represent a more desirable result.

Examples:

- More snowfall → longer bar
- Larger mountain → longer bar
- Greater vertical → longer bar
- Better lift access / shorter waits → longer bar
- More affordable → longer bar

Never create a comparison bar where a larger visual value means a worse result.

---

## Resort Card

The primary browsing interface uses reusable resort cards.

Do NOT build bespoke markup for individual resorts.

Each card should be generated from structured resort data.

A resort may include the following information.

### Identity

- Resort name
- State
- Location
- Pass affiliation

### Media

Each resort should support three primary media items:

1. Resort photo or video
2. Trail map
3. Additional resort/mountain image

The architecture should allow these media types to evolve without rewriting the card.

### Mountain Data

Potential fields include:

- Vertical drop
- Skiable acreage
- Trail count
- Lift count
- Annual snowfall
- Base elevation
- Summit elevation
- Terrain parks

### Terrain Mix

Store terrain as percentages:

- Beginner
- Intermediate
- Advanced / Expert

Terrain parks should remain separate from trail difficulty.

Prefer percentages over raw trail counts when comparing terrain distribution between resorts.

### Editorial Content

Support:

- Resort description
- Why ski here / notable characteristics
- Photos
- Video
- Trail map
- Source information

---

## Primary Comparison Metrics

The five primary resort comparison metrics are:

1. Snowfall
2. Mountain size
3. Vertical drop
4. Lift access
5. Affordability

### Snowfall

Primary underlying value:

`annualSnowfallIn`

Higher is better.

### Mountain Size

Primary underlying value:

`skiableAcres`

Higher is better.

### Vertical Drop

Primary underlying value:

`verticalFt`

Higher is better.

Prefer vertical drop over summit elevation as the primary comparison metric.

### Lift Access

Lift access represents how easily a skier can access terrain.

It may eventually incorporate data such as:

- Average lift wait
- Lift capacity
- Number of lifts
- Terrain served
- Reliability

The displayed comparison score should follow:

**Higher score = better access / less waiting**

If actual wait-time data is available, show it alongside the score.

### Affordability

Affordability should be normalized so:

**Higher score = more affordable**

Do not display raw ticket price as a comparison bar where a higher price produces a longer bar.

The actual ticket price should still be visible.

---

## Comparison Scoring

Comparison bars should eventually be calculated relative to other Northeast resorts.

Do not permanently hard-code arbitrary bar widths into components.

The eventual model should allow values to be normalized or converted to percentile-style scores.

Conceptually:

`raw resort data → Northeast comparison calculation → 0–100 score → visual bar`

The underlying real value should remain available to the user.

A center or median marker may eventually represent the Northeast median.

---

## Terrain Comparison

Terrain mix is separate from the five primary comparison metrics.

Prefer a segmented terrain bar showing:

- Beginner %
- Intermediate %
- Advanced / Expert %

Example:

`Beginner 20% | Intermediate 40% | Advanced 40%`

The interface may eventually characterize the resulting terrain profile with descriptions such as:

- Beginner-friendly
- Balanced
- Advanced-leaning

Do not treat terrain parks as a trail difficulty category.

---

## Resort Comparison Experience

Users should eventually be able to select up to **3 resorts** and compare them.

Comparison should use the same underlying resort data as the resort cards.

Do not create a separate manually maintained comparison dataset.

---

## Mobile Comparison

Mobile comparison should use:

**Resorts as columns**  
**Metrics as rows**

Support a maximum of 3 resorts at once.

Conceptually:

| Metric | Resort 1 | Resort 2 | Resort 3 |
|---|---|---|---|
| Snowfall | value | value | value |
| Vertical | value | value | value |
| Acres | value | value | value |
| Lift access | score | score | score |
| Affordability | score | score | score |

Actual values should remain more prominent than abstract scores.

The comparison header may become sticky on mobile so resort identity remains visible while scrolling.

Users should eventually be able to remove or replace individual resorts from comparison.

---

## Filtering and Sorting

The architecture should support filtering and sorting resorts by attributes such as:

- State
- Pass
- Snowfall
- Vertical
- Skiable acreage
- Terrain mix
- Price / affordability
- Lift access

Do not tightly couple filtering logic to individual ResortCard components.

Filtering and sorting should operate on the resort dataset.

The ResortCard should primarily be responsible for presentation.

---

## Data Architecture

For now, resort information should live in local structured data.

A likely location is:

`data/resorts.ts`

Do NOT hard-code resort statistics directly inside individual React components.

Use one reusable resort data model.

Example:

```ts
type Resort = {
  slug: string
  name: string
  state: string
  location?: string

  verticalFt: number
  skiableAcres: number
  trailCount: number
  liftCount: number
  annualSnowfallIn: number

  terrain: {
    beginner: number
    intermediate: number
    advanced: number
  }

  terrainParks?: number

  dayTicketPrice?: number
  liftAccessScore?: number

  description: string

  heroImage?: string
  video?: string
  trailMap?: string

  websiteUrl?: string
  sourceUrl?: string
  lastUpdated?: string
}
```

Modify this model as needed as the product develops.

Do not force the implementation to follow this exact type if the existing code has a cleaner equivalent.

The important principle is:

**one structured resort model → reusable UI**

---

## Component Architecture

Prefer reusable components rather than page-specific markup.

Likely components may include:

- `ResortCard`
- `ResortMedia`
- `ResortStats`
- `TerrainMix`
- `ComparisonBars`
- `ResortFilters`
- `ResortSort`
- `CompareSelector`
- `ComparisonTable`

These names are suggestions, not requirements.

Do not create unnecessary components simply to match this list.

Prefer simple, understandable architecture.

---

## Data Accuracy

Do not fabricate production resort data.

During development, placeholder or sample data is acceptable, but it should be clearly treated as sample data.

Before resort information is considered production data, verify it against an appropriate source.

Different statistics may require different sources.

Examples include:

- Official resort websites
- Official trail maps
- Pass networks
- Resort snow reports
- Other reliable structured sources

Eventually, externally sourced values should include source and update information.

---

## Future Backend

Do NOT implement the backend until requested.

The planned backend is likely Supabase.

The local resort dataset will eventually move into a database so resort information can be updated without modifying source code.

The frontend should therefore avoid assumptions that make this migration unnecessarily difficult.

---

## Future Data Categories

Resort information will eventually fall into three broad categories.

### Static / Rarely Updated

Examples:

- Resort name
- State
- Location
- Coordinates
- Vertical
- Skiable acreage
- Terrain percentages
- Trail count
- Lift count
- Trail map

### Editorial

Controlled manually:

- Description
- Photos
- Videos
- Resort characterization
- Why ski here
- Curated content

### Live / Frequently Updated

Potentially sourced externally:

- Base depth
- 24-hour snowfall
- 7-day snowfall
- Open trails
- Open lifts
- Conditions
- Ticket prices

Do not mix current/live conditions into permanent resort comparison statistics without clearly identifying them as current conditions.

---

## Future Data Sources and Overrides

Eventually every externally sourced value should be traceable.

The data model should be capable of supporting concepts such as:

- Source URL
- Source value
- Last updated
- Manual value
- Manual override

A future admin interface should allow externally sourced values to be overridden manually.

Automated imports should not silently overwrite intentional manual edits.

Conceptually:

`external source → imported value → optional manual override → displayed value`

---

## Future Admin

Eventually an authenticated admin interface may allow resort information to be edited without touching code.

Possible routes:

`/admin`

`/admin/resorts/[slug]`

This is a future milestone.

Do not build the admin interface until requested.

---

## Development Rules

1. Read this file before making significant project changes.
2. Follow Page 6 in Figma as the visual source of truth.
3. Do not substitute Page 4 or another older Figma iteration.
4. Preserve the existing implementation unless a change is requested.
5. Do not redesign the interface without being asked.
6. Build reusable components.
7. Keep resort data separate from presentation.
8. Maintain responsive desktop and mobile behavior.
9. Do not add Supabase until requested.
10. Do not add scraping until requested.
11. Do not fabricate production resort data.
12. Keep sample data clearly distinguishable from verified production data.
13. Prefer simple architecture over premature abstraction.
14. Do not introduce a new dependency unless it provides a clear benefit.
15. Do not rewrite working components solely for stylistic code preferences.
16. Preserve working interactions when modifying visual design.
17. Run lint after meaningful code changes.
18. Run a production build after significant implementation changes.
19. Fix new errors introduced by a change before considering the task complete.
20. When requirements are ambiguous and Figma does not answer the question, preserve the existing behavior rather than inventing a new product decision.

---

## Current Milestone

Continue developing the existing frontend.

The next priorities are:

1. Refine the implementation to match Figma Page 6.
2. Expand the local resort data model.
3. Implement the five comparison metrics:
   - Snowfall
   - Mountain size
   - Vertical drop
   - Lift access
   - Affordability
4. Expand filtering and sorting.
5. Allow users to select up to 3 resorts.
6. Build the responsive 3-resort comparison experience.
7. Verify desktop and mobile behavior.

Do not add Supabase yet.

Backend integration comes after the frontend behavior, comparison experience, and resort data model are established.

---

## Longer-Term Direction

The intended evolution of the product is:

`Figma design`

↓

`Local Next.js frontend`

↓

`Structured local resort dataset`

↓

`Filtering + sorting`

↓

`3-resort comparison`

↓

`Supabase database`

↓

`Admin editing`

↓

`External data sources`

↓

`Scheduled/live updates`

The product should be developed incrementally rather than attempting all of these systems at once.