# Ski Project — MAKE.md

## Project Overview

This project is a responsive web application for browsing, evaluating, filtering, sorting, and eventually comparing ski resorts.

The initial product focuses on Vermont ski resorts.

The goal is to help skiers quickly understand:

- What a resort is like
- How large it is
- How much snow it receives
- What type of terrain it offers
- How crowded it tends to be
- How affordable it is
- What makes it distinctive
- What its major strengths and tradeoffs are

The product should prioritize easy scanning, meaningful comparison, and clear real-world values over abstract scores.

---

# Source of Truth

## Resort Cards

Figma Page 6 is the visual source of truth for the current resort-card design.

Preserve the existing Page 6 implementation.

Do not redesign or rebuild the cards unless explicitly requested.

Page 4 is an older/deprecated design iteration and must not be used as the basis for new implementation unless Page 6 explicitly reuses something from it.

## Sort / Filter Menu

The revised sort/filter design is the source of truth for sorting and filtering.

Figma file:

`CbcR9arkLspCTp5JvwbRA1`

Figma node:

`217:12197`

Implement this revised menu rather than the older sort/filter design.

Preserve the visual hierarchy, typography, spacing, dividers, controls, and selection states from this Figma node.

---

# Current Technical Implementation

The project uses:

- Next.js
- TypeScript
- Tailwind CSS
- Local assets
- Local resort data

Do not introduce a backend yet.

Do not introduce Supabase yet.

Do not rebuild working components unnecessarily.

Prefer extending and refactoring the existing implementation.

---

# V1 Resort Dataset

The initial prototype contains 16 Vermont resorts:

1. Burke Mountain
2. Middlebury Snow Bowl
3. Saskadena Six
4. Bolton Valley Resort
5. Magic Mountain
6. Mad River Glen
7. Pico Mountain
8. Bromley Mountain
9. Jay Peak
10. Smugglers’ Notch Resort
11. Killington Resort
12. Stowe Mountain Resort
13. Sugarbush Resort
14. Mount Snow
15. Okemo Mountain Resort
16. Stratton Mountain Resort

These 16 resorts constitute the Vermont V1 comparison dataset.

Do not add additional resorts unless explicitly requested.

---

# Resort Data Architecture

Create:

`data/resorts.ts`

This should become the single source of truth for resort data used by the frontend.

Do not hard-code resort-specific data inside individual React card components.

Each resort should use the same reusable data model.

The resort data model should support:

- name
- slug
- state
- region/location
- coordinates where available
- pass affiliations
- vertical drop
- skiable acreage
- trail count
- lift count
- summit elevation
- base elevation
- annual snowfall
- terrain percentages
- terrain park count
- Lift Access rating
- Affordability rating
- description
- highlights
- pros
- cons
- media
- resort website
- sources
- last verified date

The UI should be rendered from this centralized dataset.

---

# Data Source Rules

When populating factual resort data, use sources in this order:

1. Official resort website
2. Official resort trail map / mountain guide
3. Official resort snow report or conditions system
4. Official pass-network website
5. Reputable third-party ski source when official data is unavailable

When sources conflict, prefer the resort's current published data.

Use specific source pages when possible rather than only resort homepages.

Do not fabricate missing production data.

If a reliable value cannot be established, use `null` and report it rather than inventing a value.

An empty:

`passes: []`

means the resort is not affiliated with one of the multi-passes tracked by the application.

It does NOT mean pass data is missing.

---

# V1 Comparison System

The "How It Compares" section uses five permanent comparison metrics:

1. Snowfall
2. Mountain Size
3. Vertical
4. Lift Access
5. Affordability

The core visual rule is:

**Longer / more filled = better.**

This rule must be consistent across all five metrics.

Actual values or meaningful labels should remain visible.

Do not make users interpret bars without knowing the underlying value.

---

# Snowfall

Snowfall uses:

`annualSnowfallIn`

This represents average annual snowfall.

Higher snowfall = better comparison score.

The comparison visualization should be derived from the V1 Vermont resort dataset rather than using manually hard-coded bar widths.

For Okemo Mountain Resort, use:

`120 inches`

for the V1 prototype.

---

# Mountain Size

Mountain Size uses:

`skiableAcres`

Higher skiable acreage = better comparison score.

Use the resort's published skiable acreage where possible.

For Smugglers’ Notch Resort, use:

`1,000 skiable acres`

for the V1 prototype.

---

# Vertical

Vertical uses:

`verticalFt`

Higher vertical drop = better comparison score.

The UI should display the actual vertical in feet.

---

# Normalizing Objective Metrics

Snowfall, Mountain Size, and Vertical should be normalized relative to the 16-resort Vermont V1 dataset.

Do not manually assign arbitrary visual bar widths.

A simple normalization model can be used, such as:

`(value - minimum) / (maximum - minimum)`

The exact implementation may be adjusted if needed for visual clarity, but:

- rankings must remain truthful to the underlying values
- larger values must produce longer bars
- actual raw values must remain visible

---

# Lift Access

Lift Access is a temporary prototype rating.

It is NOT currently derived from live lift-line data.

Scale:

- 5 — Least crowded
- 4 — Light crowds
- 3 — Moderate crowds
- 2 — Heavy crowds
- 1 — Most crowded

Higher = better.

Store the original 1–5 value.

The UI may convert this to a normalized percentage for visualization.

Do not store only the normalized percentage.

These ratings will eventually be replaced with survey-derived data.

## Lift Access Ratings

### 5 — Least crowded

- Burke Mountain
- Middlebury Snow Bowl
- Saskadena Six

### 4 — Light crowds

- Bolton Valley Resort
- Magic Mountain
- Mad River Glen
- Pico Mountain

### 3 — Moderate crowds

- Bromley Mountain
- Jay Peak
- Smugglers’ Notch Resort

### 2 — Heavy crowds

- Killington Resort
- Stowe Mountain Resort
- Sugarbush Resort

### 1 — Most crowded

- Mount Snow
- Okemo Mountain Resort
- Stratton Mountain Resort

Suggested structure:

```ts
liftAccess: {
  score: 4,
  label: "Light crowds",
  status: "prototype"
}
```

---

# Affordability

Affordability is also a temporary prototype rating.

The Affordability score, rather than a live/dynamic ticket price, drives the V1 comparison visualization.

Higher = more affordable = better.

## 5 — Ultra-Affordable

Price band:

`Under $70`

Resorts:

- Middlebury Snow Bowl

## 4 — Great Value

Price band:

`$70–$120`

Resorts:

- Burke Mountain
- Saskadena Six
- Bolton Valley Resort

## 3 — Moderate

Price band:

`$120–$145`

Resorts:

- Magic Mountain
- Mad River Glen
- Bromley Mountain
- Pico Mountain
- Smugglers’ Notch Resort

## 2 — Premium

Price band:

`$145–$210`

Resorts:

- Jay Peak
- Mount Snow
- Okemo Mountain Resort

## 1 — Luxury

Price band:

`$215+`

Resorts:

- Killington Resort
- Stratton Mountain Resort
- Stowe Mountain Resort
- Sugarbush Resort

Suggested structure:

```ts
affordability: {
  score: 4,
  label: "Great Value",
  priceBand: "$70–$120",
  status: "prototype"
}
```

Do not use dynamic ticket prices to calculate the V1 Affordability comparison bar.

---

# Terrain Mix

Terrain mix is separate from the five "How It Compares" metrics.

The primary UI uses three categories:

- Beginner
- Intermediate
- Advanced

Percentages should total 100%.

When a resort separates Advanced and Expert terrain, preserve that detailed data when possible but combine:

`Advanced + Expert`

for the simplified three-category UI.

Example:

Burke Mountain publishes:

- 11% Beginner
- 47% Intermediate
- 33% Advanced
- 9% Expert

The primary UI therefore uses:

```ts
terrain: {
  beginner: 11,
  intermediate: 47,
  advanced: 42
}
```

Detailed data may additionally be preserved as:

```ts
terrainDetailed: {
  beginner: 11,
  intermediate: 47,
  advanced: 33,
  expert: 9
}
```

## Smugglers’ Notch

Use:

- 19% Beginner
- 50% Intermediate
- 25% Advanced
- 6% Expert

Primary UI:

```ts
terrain: {
  beginner: 19,
  intermediate: 50,
  advanced: 31
}
```

---

# Terrain Parks

Terrain parks are seasonal.

Do not treat terrain-park count as a permanent mountain characteristic.

Use the latest available / most recently established seasonal count for the V1 prototype.

Current V1 values:

- Mount Snow — 10
- Killington Resort — 5–7
- Stratton Mountain Resort — 5
- Okemo Mountain Resort — 5
- Sugarbush Resort — 3
- Stowe Mountain Resort — 3
- Jay Peak — 3
- Bolton Valley Resort — 3
- Burke Mountain — 3
- Smugglers’ Notch Resort — 2
- Bromley Mountain — 1
- Pico Mountain — 1
- Magic Mountain — 1
- Saskadena Six — 1
- Mad River Glen — 0
- Middlebury Snow Bowl — 0

For fixed values, a structure such as this may be used:

```ts
terrainParks: {
  count: 3,
  status: "seasonal"
}
```

Killington should preserve its range rather than inventing a single value:

```ts
terrainParks: {
  min: 5,
  max: 7,
  display: "5–7",
  status: "seasonal"
}
```

---

# Important V1 Resort Values

The following values were specifically established for the prototype and should not be replaced with older placeholder values.

## Burke Mountain

Terrain:

- Beginner — 11%
- Intermediate — 47%
- Advanced — 33%
- Expert — 9%

Primary three-category UI:

- Beginner — 11%
- Intermediate — 47%
- Advanced — 42%

## Saskadena Six

Use:

- Skiable Area — 100 acres
- Average Annual Snowfall — 110 inches

## Smugglers’ Notch Resort

Use:

- Average Annual Snowfall — 322 inches
- Skiable Area — 1,000 acres
- Trails — 78

Terrain:

- Beginner — 19%
- Intermediate — 50%
- Advanced — 25%
- Expert — 6%

Primary three-category UI:

- Beginner — 19%
- Intermediate — 50%
- Advanced — 31%

## Okemo Mountain Resort

Use:

- Average Annual Snowfall — 120 inches

for the V1 prototype.

---

# Resort Media

Each resort has three local JPEG photographs.

They are stored at:

```text
public/resorts/[resort-slug]/01.jpeg
public/resorts/[resort-slug]/02.jpeg
public/resorts/[resort-slug]/03.jpeg
```

Examples:

```text
public/resorts/jay-peak/01.jpeg
public/resorts/jay-peak/02.jpeg
public/resorts/jay-peak/03.jpeg
```

Use these three images as the resort photo carousel.

Do not treat the third image as a trail map.

All three are resort photography / action imagery.

The media data should preferably be represented as an array:

```ts
media: [
  {
    src: "/resorts/jay-peak/01.jpeg",
    alt: "Jay Peak ski terrain"
  },
  {
    src: "/resorts/jay-peak/02.jpeg",
    alt: "Tree skiing at Jay Peak"
  },
  {
    src: "/resorts/jay-peak/03.jpeg",
    alt: "Skier at Jay Peak"
  }
]
```

The images were sourced at approximately 16:9.

The existing Page 6 Figma image container remains the visual source of truth.

Use `object-fit: cover` / equivalent behavior so the images fill the existing media frame without distorting.

Do not redesign the card image dimensions around the source photos.

Trail maps may be handled as a separate feature later.

---

# Signature Highlights

Each resort card supports exactly:

**3 signature highlights**

These are not the same as Pros/Cons.

Highlights communicate memorable characteristics or identity.

Example for Jay Peak:

- Most snow in the East
- Legendary tree skiing
- Indoor waterpark

Each highlight can include:

- label
- icon

Suggested structure:

```ts
highlights: [
  {
    label: "Most snow in the East",
    icon: "snow"
  },
  {
    label: "Legendary tree skiing",
    icon: "mountain"
  },
  {
    label: "Indoor waterpark",
    icon: "waterpark"
  }
]
```

Preserve existing highlights from the current implementation/design wherever they already exist.

Do not rewrite existing editorial content unnecessarily.

If a resort does not yet have three highlights, report the missing content rather than silently inventing it during a mechanical implementation pass.

---

# Pros and Cons

Every resort card should support exactly:

**4 Pros**

and

**3 Cons**

Preserve the existing Pros/Cons already present in the current implementation wherever possible.

These are editorial content.

Do not automatically convert every high metric into a Pro or every low metric into a Con.

Suggested structure:

```ts
editorial: {
  pros: [
    "...",
    "...",
    "...",
    "..."
  ],
  cons: [
    "...",
    "...",
    "..."
  ]
}
```

If an existing resort has fewer than 4 Pros or 3 Cons, identify what is missing rather than replacing all existing editorial content.

---

# Descriptions

Preserve the existing resort descriptions where they already exist.

Descriptions should communicate the resort's character and positioning.

Do not rewrite all descriptions as part of a data migration.

Factual claims in descriptions should not contradict the structured resort data.

---

# Resort Card Content

Each V1 resort card should support:

1. Region / location
2. Resort name
3. Three-photo carousel
4. Three signature highlights
5. Description
6. Mountain statistics
7. Terrain breakdown
8. Terrain park information
9. "How It Compares"
10. Four Pros
11. Three Cons
12. Resort website link

Do not remove existing Page 6 content unless explicitly requested.

---

# Sticky Resort Headers

Each resort card header should use sticky positioning.

The sticky header contains:

- Region/location label
- Resort name

Behavior:

- When the resort header reaches the top of the viewport, it remains at the top while the user scrolls through that resort's card.
- Sticky behavior must be constrained to that individual resort card.
- The remainder of the resort card scrolls underneath the sticky header.
- When the bottom of that resort card reaches/passes the header, the header scrolls away.
- The following resort's header can then become the active sticky header.
- Do not allow one resort's header to remain visible while unrelated subsequent resort content is being viewed.
- Preserve the Page 6 typography and spacing.
- Give the sticky header an opaque background so card content does not visually bleed through it.
- Maintain appropriate z-index so scrolling content stays behind the header.

The implementation should behave conceptually like:

```css
.resort-card-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: white;
}
```

The header must remain inside the resort-card container so its sticky boundary is the card itself.

---

# Sorting

Sorting is single-select.

Only one sort method can be active at a time.

The revised Figma sort/filter menu is the visual source of truth.

Supported V1 sort options should include:

- Projected opening date
- Season snowfall / 2025–26 snow totals where supported
- Average snowfall
- Mountain size
- Vertical
- Lift access
- Affordability

Do not visually show every sort option as selected.

Only the active sort option should have the active selection state.

Sorting must operate on the centralized resort dataset rather than manually ordered cards.

When practical, use clearer terminology:

- "Season snowfall" for snow received during a particular season
- "Average snowfall" for historical annual average

Do not confuse those two concepts in the data model.

---

# Filtering

Filtering is multi-select.

Filters should operate on the centralized resort dataset.

## Multi-Pass Filters

Support:

- Ikon Pass
- Epic Pass
- Indy Pass
- Not on multi-pass

A resort with:

`passes: []`

should appear when "Not on multi-pass" is selected.

## State Filters

V1:

- Vermont — enabled

Coming Soon / disabled:

- New York
- New Hampshire

Do not populate New York or New Hampshire resort data yet.

The UI should clearly communicate that those states are not available yet.

---

# Revised Sort / Filter Menu

Use the revised Figma design:

Figma node:

`217:12197`

This replaces the older menu design.

Important behavior:

- Sort = single-select
- Filters = multi-select
- Sort and filter state should persist when returning to results
- Pass filters can be combined
- Vermont is available in V1
- New York and New Hampshire remain disabled / Coming Soon
- Preserve the Figma visual design
- Make the menu responsive

Do not rebuild this using the older sort/filter design.

---

# Data-Driven Components

The application should use reusable components.

Avoid creating a separate manually coded card for every resort.

A single resort-card component should receive a resort object and render:

- title
- location
- media
- highlights
- stats
- terrain
- comparison metrics
- Pros/Cons
- other card content

Filtering, sorting, and comparison should operate on the dataset rather than manipulating individually hard-coded card components.

---

# Planned Resort Comparison

A direct resort-comparison experience is planned for a future implementation phase.

This feature is part of the intended product architecture, but should NOT be visually designed or implemented until the comparison Figma design is available.

## Core Behavior

Users will be able to select up to:

**3 resorts**

and open a dedicated comparison screen.

The comparison screen must use the same centralized `data/resorts.ts` dataset as the resort cards.

Do not create a separate comparison-specific copy of resort data.

## Comparison Data

The comparison screen should be able to access:

- Resort name
- Location / region
- Resort photography
- Pass affiliation
- Annual snowfall
- Skiable acreage
- Vertical drop
- Trail count
- Lift count
- Summit elevation
- Base elevation
- Terrain distribution
- Terrain parks
- Lift Access rating
- Affordability rating
- Highlights
- Pros
- Cons

The five primary comparison metrics remain:

1. Snowfall
2. Mountain Size
3. Vertical
4. Lift Access
5. Affordability

Use the same underlying values and normalization logic used by the resort cards.

Do not create a second scoring system specifically for the comparison screen.

## Selection Architecture

The current application should be structured so resort selection can later support:

- Selecting a resort for comparison
- Deselecting a resort
- Selecting a maximum of 3 resorts
- Persisting the selection while browsing, filtering, and sorting
- Opening a comparison screen with the selected resorts

Do not implement comparison-selection UI until explicitly requested.

However, avoid architectural decisions now that would make this behavior unnecessarily difficult later.

The resort ID/slug should provide a stable way to reference a selected resort.

Selection state should reference resorts rather than duplicate their data.

## Comparison Layout

The visual design is not yet finalized.

Do not invent the comparison-screen UI.

A future Figma design will become the visual source of truth.

Current conceptual direction only:

### Desktop

Likely structure:

- Up to 3 resorts displayed simultaneously
- Selected resorts organized as columns
- Comparable attributes organized as rows
- Actual values displayed prominently
- Differences should be easy to scan

### Mobile

The interface must remain usable when comparing up to 3 resorts on a narrow screen.

The exact mobile interaction, scrolling behavior, sticky behavior, and layout will be determined in Figma.

Do not make those product decisions during implementation.

## Shared Comparison Logic

Comparison calculations should be reusable.

The resort-card "How It Compares" visualization and future comparison screen should consume the same underlying metric values.

For example:

- Snowfall uses `annualSnowfallIn`
- Mountain Size uses `skiableAcres`
- Vertical uses `verticalFt`
- Lift Access uses the stored 1–5 prototype rating
- Affordability uses the stored 1–5 prototype rating

If normalization helpers are created for the resort cards, structure them so they can also be consumed by the future comparison screen.

Do not duplicate comparison formulas inside individual components.

## Future Comparison Route

A dedicated comparison route/page is expected eventually.

The exact route and navigation behavior have not yet been finalized.

Do not create the route until the comparison feature is explicitly ready for implementation.

## Status

**Planned — not currently ready for implementation.**

Until a Figma comparison design is provided:

- Prepare the data architecture for comparison
- Keep resort identifiers stable
- Reuse centralized resort data
- Reuse comparison metric calculations
- Avoid duplicating comparison data
- Do not build the comparison screen
- Do not build comparison-selection controls
- Do not invent comparison interactions
- Do not invent new comparison UI

Once a comparison Figma design is provided, that Figma node will become the visual source of truth for this feature.

---

# Responsive Behavior

The existing Page 6 implementation is the starting point.

Preserve working responsive behavior.

The application should work on:

- Desktop
- Tablet / narrow desktop
- Mobile

Avoid horizontal overflow unless explicitly part of the comparison interaction.

Long resort cards should remain easy to understand while scrolling.

Sticky resort headers are intended to preserve context during long card scrolling.

---

# Accessibility

Maintain accessible interaction patterns.

At minimum:

- Images require meaningful alt text.
- Interactive controls must be keyboard accessible.
- Selected states cannot rely only on color.
- Disabled Coming Soon states should be communicated semantically as well as visually.
- Buttons and controls should have usable touch targets.
- Carousel controls should have accessible labels.
- Text contrast should remain readable.

---

# V1 Data Philosophy

The initial product should favor:

**Reliable static data + clearly labeled prototype ratings**

over pretending to have live information that is not actually available.

V1 consists of:

### Objective Resort Data

- Annual snowfall
- Skiable acreage
- Vertical
- Trails
- Lifts
- Elevations
- Terrain distribution
- Terrain parks
- Pass affiliation

### Prototype / Editorial Data

- Lift Access
- Affordability
- Highlights
- Pros/Cons
- Description

Keep those concepts distinguishable in the data model.

---

# Future Data Architecture

The product may eventually use Supabase or another backend.

Do not implement this yet.

Future data can broadly be separated into:

## Static / Rarely Changed

Examples:

- Resort name
- State
- Coordinates
- Vertical
- Acreage
- Trail count
- Lift count
- Terrain percentages
- Pass affiliation
- Trail map

## Editorial

Examples:

- Descriptions
- Highlights
- Pros
- Cons
- Photography
- "Why ski here" content

## Live / Frequently Updated

Examples:

- Base depth
- Recent snowfall
- Open trails
- Open lifts
- Weather
- Current conditions
- Ticket pricing
- Lift waits

---

# Future Source / Override Model

If automated data imports are added later, preserve the ability to manually override imported data.

Conceptually:

```ts
{
  sourceValue: 250,
  manualValue: 260,
  manualOverride: true
}
```

Automated imports should not silently overwrite intentional editorial/manual corrections.

Do not build this system during V1.

---

# Do Not Add Yet

Do not add the following unless explicitly requested:

- Supabase
- Database migrations
- Authentication
- Admin dashboard
- Scraping pipelines
- Live snow conditions
- Live lift status
- Live lift-line integrations
- Dynamic ticket pricing
- Weather integrations
- Automated resort-data imports
- Additional states
- Additional resorts

V1 should first make the 16-resort Vermont experience work reliably.

---

# Current V1 Implementation Priorities

The next implementation pass should:

1. Read this MAKE.md before making changes.
2. Preserve the existing Page 6 resort-card design.
3. Use Figma node `217:12197` for the revised sort/filter menu.
4. Create `data/resorts.ts`.
5. Consolidate all 16 Vermont resorts into that dataset.
6. Use official resort data where available.
7. Apply the finalized Lift Access ratings.
8. Apply the finalized Affordability ratings.
9. Apply the finalized terrain information.
10. Apply the seasonal terrain-park values.
11. Connect each resort to its three local JPEG images.
12. Preserve existing descriptions.
13. Preserve existing Highlights.
14. Preserve existing Pros/Cons.
15. Identify missing editorial content rather than inventing it.
16. Make Snowfall, Mountain Size, and Vertical comparison bars data-driven.
17. Make Lift Access and Affordability bars use their 1–5 ratings.
18. Ensure longer comparison bars always mean better.
19. Implement the revised sort/filter menu.
20. Implement sticky resort-card headers.
21. Preserve working carousel behavior.
22. Preserve and verify responsive behavior.
23. Keep sorting/filtering driven by the centralized dataset.
24. Do not add Supabase or live-data integrations.
25. Run lint.
26. Run a production build.
27. Report any remaining missing data/content or implementation issues.
28. Keep the resort data architecture compatible with a future 3-resort comparison screen, but do not implement the comparison screen or selection UI until its Figma design is provided.
---

# Development Rules

Before modifying the project:

1. Read `MAKE.md`.
2. Inspect the existing implementation.
3. Inspect the relevant Figma source.
4. Preserve working functionality unless a requested change requires modifying it.

Prefer:

- reusable components
- structured resort data
- simple TypeScript types
- clear separation between data and presentation
- incremental changes
- existing project conventions

Avoid:

- unnecessary rewrites
- duplicate resort data
- resort-specific hard-coded components
- fabricated values
- premature backend architecture
- redesigning Page 6 without being asked

After meaningful implementation changes:

- run lint
- run the production build
- fix errors introduced by the change
- report anything intentionally left unresolved

---

# V1 Definition of Done

V1 is ready when:

- All 16 Vermont resorts render from one centralized dataset.
- Each resort loads its three local photos.
- Resort cards match the existing Page 6 design.
- Each resort has the required mountain statistics.
- Terrain mix renders correctly.
- Terrain parks render correctly.
- Lift Access renders from the prototype ratings.
- Affordability renders from the prototype ratings.
- Snowfall, Mountain Size, and Vertical comparisons are calculated from resort data.
- Longer comparison bars consistently mean better.
- Existing descriptions are preserved.
- Existing Highlights are preserved.
- Resort cards support 3 Highlights.
- Resort cards support 4 Pros and 3 Cons.
- Resort headers remain sticky while scrolling through their own card.
- The revised sort/filter menu matches Figma node `217:12197`.
- Sorting works.
- Pass filtering works.
- Vermont filtering works.
- New York and New Hampshire are shown only as Coming Soon.
- Mobile and desktop layouts work.
- Lint passes.
- Production build passes.

Once these requirements are satisfied, stop expanding V1 and move to refinement/testing rather than adding additional product scope.