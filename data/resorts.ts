import type { Resort } from "./resort";

// Vermont V1: static facts, MAKE.md overrides, and preserved editorial content.
// No runtime data fetching. Null means not verified; [] passes means no tracked multi-pass.
export const resorts: Resort[] = [
  {
    "id": "burke-mountain",
    "slug": "burke-mountain",
    "name": "Burke Mountain",
    "state": "Vermont",
    "region": "Northeast Kingdom",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Indy"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 217,
    "skiableAcres": 178,
    "verticalFt": 2011,
    "trailCount": 53,
    "liftCount": 5,
    "summitElevationFt": 3267,
    "baseElevationFt": null,
    "liftAccess": {
      "score": 5,
      "label": "Least crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 4,
      "label": "Great Value",
      "priceBand": "$70–$120",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 11,
      "intermediate": 47,
      "advanced": 42
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 3
    },
    "description": "Burke is a long way from most things, which is part of the point. The skiing is sustained, the crowds are modest, and the mountain has little interest in pretending to be a resort town.",
    "highlights": [
      {
        "text": "Kingdom trails & setting",
        "iconSrc": "/icons-highlights/barn 1.svg"
      },
      {
        "text": "Long sustained runs",
        "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
      },
      {
        "text": "Low-key atmosphere",
        "iconSrc": "/icons-highlights/brandy 1.svg"
      }
    ],
    "pros": [
      "Strong advanced terrain",
      "Generally lighter crowds",
      "Long runs for its size",
      "Distinct local character"
    ],
    "cons": [
      "Smaller lift network",
      "Fewer resort amenities",
      "Remote for many visitors"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/burke-mountain/01.jpeg",
        "alt": "Burke Mountain — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/burke-mountain/02.jpeg",
        "alt": "Burke Mountain — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/burke-mountain/03.jpeg",
        "alt": "Burke Mountain — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.skiburke.com",
    "sources": [
      {
        "url": "https://www.skiburke.com/ski-ride/skiing-riding",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      },
      {
        "url": "https://www.skiburke.com/ski-ride/weather-conditions",
        "note": "Five listed lifts; static inventory only, no live conditions integration."
      }
    ],
    "lastVerified": "2026-09-28",
    "terrainDetailed": {
      "beginner": 11,
      "intermediate": 47,
      "advanced": 33,
      "expert": 9
    }
  },
  {
    "id": "middlebury-snow-bowl",
    "slug": "middlebury-snow-bowl",
    "name": "Middlebury Snow Bowl",
    "state": "Vermont",
    "region": "Hancock, Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Indy"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 150,
    "skiableAcres": 110,
    "verticalFt": 1020,
    "trailCount": 28,
    "liftCount": 4,
    "summitElevationFt": 2720,
    "baseElevationFt": null,
    "liftAccess": {
      "score": 5,
      "label": "Least crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 5,
      "label": "Ultra-Affordable",
      "priceBand": "Under $70",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 21.428571428571427,
      "intermediate": 28.57142857142857,
      "advanced": 50
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 0
    },
    "description": "The Snow Bowl belongs to Middlebury College and still feels like the sort of place skiing used to produce more often. It’s small, affordable, pleasantly uncomplicated, and rarely requires much of a plan.",
    "highlights": [
      {
        "text": "College-owned ski area",
        "iconSrc": "/icons-highlights/student.svg"
      },
      {
        "text": "Affordable skiing",
        "iconSrc": "/icons-highlights/tag 1.svg"
      },
      {
        "text": "Local mountain feel",
        "iconSrc": "/icons-highlights/hand-peace 1.svg"
      }
    ],
    "pros": [
      "Very affordable",
      "Light crowds",
      "Easy-to-navigate layout",
      "Good mix of terrain for its size"
    ],
    "cons": [
      "Small ski area",
      "Limited lift network",
      "Few destination-resort amenities"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/middlebury-snow-bowl/01.jpeg",
        "alt": "Middlebury Snow Bowl — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/middlebury-snow-bowl/02.jpeg",
        "alt": "Middlebury Snow Bowl — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/middlebury-snow-bowl/03.jpeg",
        "alt": "Middlebury Snow Bowl — resort photograph 3 of 3"
      }
    ],
    "website": "https://middleburysnowbowl.com",
    "sources": [
      {
        "url": "https://middleburysnowbowl.com/mountain-info/",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "saskadena-six",
    "slug": "saskadena-six",
    "name": "Saskadena Six",
    "state": "Vermont",
    "region": "South Pomfret, Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Indy"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 110,
    "skiableAcres": 100,
    "verticalFt": 650,
    "trailCount": 28,
    "liftCount": 2,
    "summitElevationFt": 1200,
    "baseElevationFt": 550,
    "liftAccess": {
      "score": 5,
      "label": "Least crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 4,
      "label": "Great Value",
      "priceBand": "$70–$120",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 30,
      "intermediate": 40,
      "advanced": 30
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 1
    },
    "description": "Saskadena Six is modest in all the right ways. It’s a small hill outside Woodstock where families learn to ski, locals know one another, and nobody needs a trail map for very long.",
    "highlights": [
      {
        "text": "Historic Vermont ski hill",
        "iconSrc": "/icons-highlights/farm 1.svg"
      },
      {
        "text": "Family-friendly scale",
        "iconSrc": "/icons-highlights/baby 1.svg"
      },
      {
        "text": "Woodstock location",
        "iconSrc": "/icons-highlights/hand-peace 1.svg"
      }
    ],
    "pros": [
      "Light crowds",
      "Beginner-friendly",
      "Easy to navigate",
      "Relaxed atmosphere"
    ],
    "cons": [
      "Limited vertical",
      "Small trail network",
      "Limited advanced terrain"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/saskadena-six/01.jpeg",
        "alt": "Saskadena Six — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/saskadena-six/02.jpeg",
        "alt": "Saskadena Six — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/saskadena-six/03.jpeg",
        "alt": "Saskadena Six — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.saskadenasix.com",
    "sources": [
      {
        "url": "https://www.saskadenasix.com/sites/default/files/2025-11/S6%20Trail%20Map%202025-26.pdf",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "bolton-valley",
    "slug": "bolton-valley",
    "name": "Bolton Valley Resort",
    "state": "Vermont",
    "region": "Northern Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Indy"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 312,
    "skiableAcres": 300,
    "verticalFt": 1704,
    "trailCount": 71,
    "liftCount": 6,
    "summitElevationFt": 3150,
    "baseElevationFt": 2100,
    "liftAccess": {
      "score": 4,
      "label": "Light crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 4,
      "label": "Great Value",
      "priceBand": "$70–$120",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 34,
      "intermediate": 38,
      "advanced": 28
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 3
    },
    "description": "Bolton has always felt a little removed from the Vermont resort circuit. There are lifts, certainly, but also night skiing, Nordic trails and a great deal of woods—the sort of mountain where wandering off in another direction is often the better idea.",
    "highlights": [
      {
        "text": "Backcountry access",
        "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
      },
      {
        "text": "Night skiing",
        "iconSrc": "/icons-highlights/moon 1.svg"
      },
      {
        "text": "Nordic trail network",
        "iconSrc": "/icons-highlights/map-trifold 1.svg"
      }
    ],
    "pros": [
      "Strong snowfall",
      "Backcountry and uphill options",
      "Generally lighter crowds",
      "Broad range of mountain activities"
    ],
    "cons": [
      "Older lift infrastructure",
      "Smaller than major Vermont resorts",
      "Limited base-village amenities"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bolton-valley/01.jpeg",
        "alt": "Bolton Valley Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bolton-valley/02.jpeg",
        "alt": "Bolton Valley Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bolton-valley/03.jpeg",
        "alt": "Bolton Valley Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.boltonvalley.com",
    "sources": [
      {
        "url": "https://www.boltonvalley.com/the-resort/about-us/",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "magic-mountain",
    "slug": "magic-mountain",
    "name": "Magic Mountain",
    "state": "Vermont",
    "region": "Londonderry, Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Indy"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 130,
    "skiableAcres": 205,
    "verticalFt": 1500,
    "trailCount": 50,
    "liftCount": 5,
    "summitElevationFt": 2850,
    "baseElevationFt": 1350,
    "liftAccess": {
      "score": 4,
      "label": "Light crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 3,
      "label": "Moderate",
      "priceBand": "$120–$145",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 24,
      "intermediate": 32,
      "advanced": 44
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 1
    },
    "description": "Magic is not especially polished, and its regulars would probably be concerned if it became so. The trails are narrow, the woods are interesting, and when the snow is good there are few places in southern Vermont you’d rather be.",
    "highlights": [
      {
        "text": "Classic Vermont trails",
        "iconSrc": "/icons-highlights/hand-peace 1.svg"
      },
      {
        "text": "Steeps & glades",
        "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
      },
      {
        "text": "Independent mountain",
        "iconSrc": "/icons-highlights/flag.svg"
      }
    ],
    "pros": [
      "Excellent advanced terrain",
      "Strong tree skiing",
      "Light trail traffic",
      "Distinctive old-school character"
    ],
    "cons": [
      "Limited snowmaking compared with larger resorts",
      "Slower lift network",
      "Smaller amenity offering"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/magic-mountain/01.jpeg",
        "alt": "Magic Mountain — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/magic-mountain/02.jpeg",
        "alt": "Magic Mountain — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/magic-mountain/03.jpeg",
        "alt": "Magic Mountain — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.magicmtn.com",
    "sources": [
      {
        "url": "https://www.magicmtn.com/about-magic",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28",
    "terrainDetailed": {
      "beginner": 24,
      "intermediate": 32,
      "advanced": 18,
      "expert": 26
    }
  },
  {
    "id": "mad-river-glen",
    "slug": "mad-river-glen",
    "name": "Mad River Glen",
    "state": "Vermont",
    "region": "Central Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 228,
    "skiableAcres": 115,
    "verticalFt": 2037,
    "trailCount": 60,
    "liftCount": 5,
    "summitElevationFt": 3637,
    "baseElevationFt": 1600,
    "liftAccess": {
      "score": 4,
      "label": "Light crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 3,
      "label": "Moderate",
      "priceBand": "$120–$145",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 20,
      "intermediate": 35,
      "advanced": 45
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 0
    },
    "description": "Mad River Glen has spent decades declining to become a modern ski resort. There’s a single chair, plenty of bumps, very little grooming where it isn’t necessary, and no snowboards. You either understand the appeal immediately or probably won’t.",
    "highlights": [
      {
        "text": "Iconic Single Chair",
        "iconSrc": "/icons-highlights/office-chair 1.svg"
      },
      {
        "text": "Natural-snow terrain",
        "iconSrc": "/icons-highlights/snowflake.svg"
      },
      {
        "text": "Skier-owned cooperative",
        "iconSrc": "/icons-highlights/hand-peace 1.svg"
      }
    ],
    "pros": [
      "Exceptional expert terrain",
      "Low skier density",
      "Strong tree and bump skiing",
      "Unique mountain character"
    ],
    "cons": [
      "Snowboarding prohibited",
      "Limited snowmaking",
      "Conditions depend heavily on natural snow"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mad-river-glen/01.jpeg",
        "alt": "Mad River Glen — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mad-river-glen/02.jpeg",
        "alt": "Mad River Glen — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mad-river-glen/03.jpeg",
        "alt": "Mad River Glen — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.madriverglen.com",
    "sources": [
      {
        "url": "https://www.madriverglen.com/quick-facts/",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.madriverglen.com/26/",
        "note": "Official explanation of base elevation; current quick-facts page supplies vertical."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "pico-mountain",
    "slug": "pico-mountain",
    "name": "Pico Mountain",
    "state": "Vermont",
    "region": "Central Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Ikon"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 250,
    "skiableAcres": 468,
    "verticalFt": 1967,
    "trailCount": 58,
    "liftCount": null,
    "summitElevationFt": 3967,
    "baseElevationFt": 2000,
    "liftAccess": {
      "score": 4,
      "label": "Light crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 3,
      "label": "Moderate",
      "priceBand": "$120–$145",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 18,
      "intermediate": 46,
      "advanced": 36
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 1
    },
    "description": "Pico sits next to Killington but seems largely uninterested in competing with it. The mountain is substantial, the pace is slower, and you can spend a day skiing instead of figuring out which base area you’re supposed to be in.",
    "highlights": [
      {
        "text": "Classic Vermont mountain",
        "iconSrc": "/icons-highlights/farm 1.svg"
      },
      {
        "text": "Long vertical runs",
        "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
      },
      {
        "text": "Quieter Killington alternative",
        "iconSrc": "/icons-highlights/hand-peace 1.svg"
      }
    ],
    "pros": [
      "Strong vertical for its size",
      "Generally lighter crowds",
      "Good intermediate terrain",
      "Straightforward mountain layout"
    ],
    "cons": [
      "Smaller lift network",
      "Fewer amenities than Killington",
      "Less terrain variety than larger resorts"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/pico-mountain/01.jpeg",
        "alt": "Pico Mountain — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/pico-mountain/02.jpeg",
        "alt": "Pico Mountain — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/pico-mountain/03.jpeg",
        "alt": "Pico Mountain — resort photograph 3 of 3"
      }
    ],
    "website": "https://picomountain.com",
    "sources": [
      {
        "url": "https://picomountain.com/mountain-stats",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.ikonpass.com/en/cw-fall25",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "bromley-mountain",
    "slug": "bromley-mountain",
    "name": "Bromley Mountain",
    "state": "Vermont",
    "region": "Peru, Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 145,
    "skiableAcres": 300,
    "verticalFt": 1334,
    "trailCount": 47,
    "liftCount": 9,
    "summitElevationFt": 3284,
    "baseElevationFt": 1950,
    "liftAccess": {
      "score": 3,
      "label": "Moderate crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 3,
      "label": "Moderate",
      "priceBand": "$120–$145",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 32,
      "intermediate": 37,
      "advanced": 31
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 1
    },
    "description": "Bromley faces south, which means sunny afternoons matter here more than they do at most Vermont mountains. It’s friendly, manageable and particularly good at the increasingly underrated pleasure of simply having an easy ski day.",
    "highlights": [
      {
        "text": "South-facing slopes",
        "iconSrc": "/icons-highlights/mountains 1.svg"
      },
      {
        "text": "Family-friendly layout",
        "iconSrc": "/icons-highlights/baby 1.svg"
      },
      {
        "text": "Classic Vermont skiing",
        "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
      }
    ],
    "pros": [
      "Easy to navigate",
      "Strong family appeal",
      "Good intermediate terrain",
      "Manageable mountain size"
    ],
    "cons": [
      "Modest vertical",
      "Smaller advanced-terrain offering",
      "Less extensive than nearby destination resorts"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bromley-mountain/01.jpeg",
        "alt": "Bromley Mountain — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bromley-mountain/02.jpeg",
        "alt": "Bromley Mountain — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/bromley-mountain/03.jpeg",
        "alt": "Bromley Mountain — resort photograph 3 of 3"
      }
    ],
    "website": "https://bromley.com",
    "sources": [
      {
        "url": "https://bromley.com/about",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "jay-peak",
    "slug": "jay-peak",
    "name": "Jay Peak",
    "state": "Vermont",
    "region": "Northern Vermont",
    "coordinates": null,
    "figmaNode": "205:10190",
    "passes": [
      "Indy"
    ],
    "tier": "Value",
    "character": "Powder Paradise",
    "annualSnowfallIn": 347,
    "skiableAcres": 385,
    "verticalFt": 2122,
    "trailCount": 81,
    "liftCount": 9,
    "summitElevationFt": 3862,
    "baseElevationFt": 1750,
    "liftAccess": {
      "score": 3,
      "label": "Moderate crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 2,
      "label": "Premium",
      "priceBand": "$145–$210",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": 350,
      "projectedOpening": "November 20th",
      "openingOrder": 1120,
      "status": "sample"
    },
    "terrain": {
      "beginner": 20,
      "intermediate": 40,
      "advanced": 40
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 3
    },
    "description": "Jay Peak Resort sits near the Canadian border and receives more natural snowfall than any other resort in eastern North America. With 385 acres of skiable terrain, 81 trails, and an indoor waterpark, it's a unique year-round destination.",
    "highlights": [
      {
        "text": "Most snow in the East",
        "iconSrc": "/icons-highlights/cloud-snow 1.svg"
      },
      {
        "text": "Legendary tree skiing",
        "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
      },
      {
        "text": "Indoor waterpark",
        "iconSrc": "/icons-highlights/person-simple-swim 1.svg"
      }
    ],
    "pros": [
      "Unmatched eastern snowfall",
      "World-class glades",
      "Indoor waterpark",
      "Affordable lift tickets"
    ],
    "cons": [
      "Remote northern location",
      "Can be very cold and windy",
      "Limited dining nearby"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/jay-peak/01.jpeg",
        "alt": "Jay Peak — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/jay-peak/02.jpeg",
        "alt": "Jay Peak — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/jay-peak/03.jpeg",
        "alt": "Jay Peak — resort photograph 3 of 3"
      }
    ],
    "website": "https://jaypeakresort.com",
    "sources": [
      {
        "url": "https://jaypeakresort.com/skiing-riding/mountain",
        "note": "Current official mountain page takes precedence over differing map snowfall/vertical values. See DATA_NOTES.md."
      },
      {
        "url": "https://jaypeakresort.com/sites/default/files/2026-02/JPR_TrailMap_Winter_2025%2B2026_ToPRINT.pdf",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      },
      {
        "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10190",
        "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "smugglers-notch",
    "slug": "smugglers-notch",
    "name": "Smugglers’ Notch Resort",
    "state": "Vermont",
    "region": "Northern Vermont",
    "coordinates": null,
    "figmaNode": "205:10107",
    "passes": [
      "Indy"
    ],
    "tier": "Value",
    "character": "All-Season",
    "annualSnowfallIn": 322,
    "skiableAcres": 1000,
    "verticalFt": 2610,
    "trailCount": 78,
    "liftCount": 8,
    "summitElevationFt": 3640,
    "baseElevationFt": 1030,
    "liftAccess": {
      "score": 3,
      "label": "Moderate crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 3,
      "label": "Moderate",
      "priceBand": "$120–$145",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": 250,
      "projectedOpening": "December 5th",
      "openingOrder": 1205,
      "status": "sample"
    },
    "terrain": {
      "beginner": 19,
      "intermediate": 50,
      "advanced": 31
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 2
    },
    "description": "Smugglers' Notch Resort is a family-friendly four-season destination in the Green Mountains. With three interconnected peaks offering 78 trails across 1,000 acres, 'Smuggs' is consistently ranked as one of the top family ski resorts in North America.",
    "highlights": [
      {
        "text": "Family-oriented programs",
        "iconSrc": "/icons-highlights/baby 1.svg"
      },
      {
        "text": "Varied terrain",
        "iconSrc": "/icons-highlights/mountains 1.svg"
      },
      {
        "text": "Remote mountain",
        "iconSrc": "/icons-highlights/signpost 1.svg"
      }
    ],
    "pros": [
      "Award-winning kids' programs",
      "Three interconnected mountains",
      "Excellent terrain variety",
      "Affordable family packages"
    ],
    "cons": [
      "Limited après-ski nightlife",
      "Steep access road in winter",
      "Older lift infrastructure"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/smugglers-notch/01.jpeg",
        "alt": "Smugglers’ Notch Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/smugglers-notch/02.jpeg",
        "alt": "Smugglers’ Notch Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/smugglers-notch/03.jpeg",
        "alt": "Smugglers’ Notch Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.smuggs.com",
    "sources": [
      {
        "url": "https://www.smuggs.com/wp-content/uploads/2024/06/SNR_trailmap_2022.pdf",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.indyskipass.com/our-resorts/east",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      },
      {
        "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10107",
        "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
      }
    ],
    "lastVerified": "2026-09-28",
    "terrainDetailed": {
      "beginner": 19,
      "intermediate": 50,
      "advanced": 25,
      "expert": 6
    }
  },
  {
    "id": "killington",
    "slug": "killington",
    "name": "Killington Resort",
    "state": "Vermont",
    "region": "Central Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Ikon"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 250,
    "skiableAcres": 1509,
    "verticalFt": 3050,
    "trailCount": 155,
    "liftCount": 19,
    "summitElevationFt": 4241,
    "baseElevationFt": 1165,
    "liftAccess": {
      "score": 2,
      "label": "Heavy crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 1,
      "label": "Luxury",
      "priceBand": "$215+",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 17,
      "intermediate": 40,
      "advanced": 43
    },
    "terrainParks": {
      "status": "seasonal",
      "min": 5,
      "max": 7
    },
    "description": "Killington is not trying to be quaint. It is enormous, busy, complicated and very good at providing somewhere to ski when smaller mountains have run out of options. Learning your way around takes a while; that is partly because there is so much of it.",
    "highlights": [
      {
        "text": "Massive trail network",
        "iconSrc": "/icons-highlights/map-trifold 1.svg"
      },
      {
        "text": "Long ski season",
        "iconSrc": "/icons-highlights/calendar 1.svg"
      },
      {
        "text": "Multiple mountain areas",
        "iconSrc": "/icons-highlights/mountains 1.svg"
      }
    ],
    "pros": [
      "Huge terrain variety",
      "Strong advanced skiing",
      "Extensive lift network",
      "Large selection of nearby amenities"
    ],
    "cons": [
      "Heavy peak-period crowds",
      "Expensive compared with smaller mountains",
      "Large layout can take time to navigate"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/killington/01.jpeg",
        "alt": "Killington Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/killington/02.jpeg",
        "alt": "Killington Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/killington/03.jpeg",
        "alt": "Killington Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://killington.com",
    "sources": [
      {
        "url": "https://killington.com/mountain-stats",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.ikonpass.com/en/cw-fall25",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "stowe",
    "slug": "stowe",
    "name": "Stowe Mountain Resort",
    "state": "Vermont",
    "region": "Northern Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Epic"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 314,
    "skiableAcres": 485,
    "verticalFt": 2160,
    "trailCount": 116,
    "liftCount": 12,
    "summitElevationFt": 4395,
    "baseElevationFt": 1280,
    "liftAccess": {
      "score": 2,
      "label": "Heavy crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 1,
      "label": "Luxury",
      "priceBand": "$215+",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 16,
      "intermediate": 55,
      "advanced": 29
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 3
    },
    "description": "Stowe is the Vermont ski trip people tend to imagine before they arrive: Mansfield above you, a proper town down the road and considerably more ceremony than you’ll find elsewhere. It can be expensive and crowded, but there is a reason people keep making the trip.",
    "highlights": [
      {
        "text": "Mt. Mansfield terrain",
        "iconSrc": "/icons-highlights/mountains 1.svg"
      },
      {
        "text": "Historic ski destination",
        "iconSrc": "/icons-highlights/cable-car 1.svg"
      },
      {
        "text": "Stowe village access",
        "iconSrc": "/icons-highlights/cheers 1.svg"
      }
    ],
    "pros": [
      "Excellent terrain variety",
      "Strong intermediate skiing",
      "Extensive resort amenities",
      "Attractive mountain setting"
    ],
    "cons": [
      "Expensive",
      "Heavy weekend traffic",
      "Popular terrain can become crowded"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stowe/01.jpeg",
        "alt": "Stowe Mountain Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stowe/02.jpeg",
        "alt": "Stowe Mountain Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stowe/03.jpeg",
        "alt": "Stowe Mountain Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.stowe.com",
    "sources": [
      {
        "url": "https://www.stowe.com/the-mountain/about-the-mountain/mountain-info.aspx",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.epicpass.com/regions/.aspx",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      },
      {
        "url": "https://www.stowe.com/Explore%20the%20Resort/About%20the%20Resort/Guest%20Services.aspx",
        "note": "Published vertical drop and base skiing elevation."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "sugarbush",
    "slug": "sugarbush",
    "name": "Sugarbush Resort",
    "state": "Vermont",
    "region": "Central Vermont",
    "coordinates": null,
    "figmaNode": "205:10024",
    "passes": [
      "Ikon"
    ],
    "tier": "Premium",
    "character": "Family Friendly",
    "annualSnowfallIn": 250,
    "skiableAcres": 4000,
    "verticalFt": 2600,
    "trailCount": 111,
    "liftCount": 16,
    "summitElevationFt": 4083,
    "baseElevationFt": 1483,
    "liftAccess": {
      "score": 2,
      "label": "Heavy crowds",
      "status": "prototype"
    },
    "affordability": {
      "score": 1,
      "label": "Luxury",
      "priceBand": "$215+",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": 265,
      "projectedOpening": "November 25th",
      "openingOrder": 1125,
      "status": "sample"
    },
    "terrain": {
      "beginner": 18.7,
      "intermediate": 33.8,
      "advanced": 47.5
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 3
    },
    "description": "Sugarbush Resort is a ski resort in the Mad River Valley in Warren, Vermont. One of the largest ski resorts in New England, it encompasses 581 skiable acres (484 on-trail acres) across two mountains connected by a quad chairlift, with 111 trails and 16 lifts.",
    "highlights": [
      {
        "text": "Two mountains",
        "iconSrc": "/icons-highlights/mountains 1.svg"
      },
      {
        "text": "World’s longest lift",
        "iconSrc": "/icons-highlights/cable-car 1.svg"
      },
      {
        "text": "Challenging natural terrain",
        "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
      }
    ],
    "pros": [
      "Terrain variety across two peaks",
      "Above average snowfall for VT",
      "World-class amenities",
      "Connected mountain experience"
    ],
    "cons": [
      "No ski-in/ski-out village",
      "Weekend/holiday crowds",
      "Challenging road access"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/sugarbush/01.jpeg",
        "alt": "Sugarbush Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/sugarbush/02.jpeg",
        "alt": "Sugarbush Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/sugarbush/03.jpeg",
        "alt": "Sugarbush Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.sugarbush.com",
    "sources": [
      {
        "url": "https://www.sugarbush.com/mountain/terrain-and-maps",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.ikonpass.com/en/cw-fall25",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      },
      {
        "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10024",
        "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
      }
    ],
    "lastVerified": "2026-09-28",
    "terrainDetailed": {
      "beginner": 18.7,
      "intermediate": 33.8,
      "advanced": 21.6,
      "expert": 5.8,
      "wooded": 20.1
    }
  },
  {
    "id": "mount-snow",
    "slug": "mount-snow",
    "name": "Mount Snow",
    "state": "Vermont",
    "region": "Southern Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Epic"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 150,
    "skiableAcres": 601,
    "verticalFt": 1700,
    "trailCount": 86,
    "liftCount": 18,
    "summitElevationFt": 3600,
    "baseElevationFt": 1900,
    "liftAccess": {
      "score": 1,
      "label": "Most crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 2,
      "label": "Premium",
      "priceBand": "$145–$210",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 16,
      "intermediate": 66,
      "advanced": 18
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 10
    },
    "description": "Mount Snow knows exactly what it is: a big, accessible southern Vermont resort built to move a lot of people around the mountain. The grooming is extensive, the parks are serious, and on a Saturday morning you will not be the only person who had the idea.",
    "highlights": [
      {
        "text": "Carinthia terrain parks",
        "iconSrc": "/icons-highlights/person-simple-snowboard 1.svg"
      },
      {
        "text": "Extensive lift network",
        "iconSrc": "/icons-highlights/map-trifold 1.svg"
      },
      {
        "text": "Southern Vermont access",
        "iconSrc": "/icons-highlights/road-horizon 1.svg"
      }
    ],
    "pros": [
      "Excellent terrain parks",
      "Strong snowmaking infrastructure",
      "Large intermediate offering",
      "Convenient for southern visitors"
    ],
    "cons": [
      "Heavy weekend crowds",
      "Less natural snowfall than northern Vermont",
      "Premium pricing"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mount-snow/01.jpeg",
        "alt": "Mount Snow — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mount-snow/02.jpeg",
        "alt": "Mount Snow — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/mount-snow/03.jpeg",
        "alt": "Mount Snow — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.mountsnow.com",
    "sources": [
      {
        "url": "https://www.mountsnow.com/the-mountain/about-the-mountain/mountain-info.aspx",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.epicpass.com/regions/.aspx",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "okemo",
    "slug": "okemo",
    "name": "Okemo Mountain Resort",
    "state": "Vermont",
    "region": "Ludlow, Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Epic"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 120,
    "skiableAcres": 667,
    "verticalFt": 2200,
    "trailCount": 123,
    "liftCount": 20,
    "summitElevationFt": 3344,
    "baseElevationFt": 1144,
    "liftAccess": {
      "score": 1,
      "label": "Most crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 2,
      "label": "Premium",
      "priceBand": "$145–$210",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 33,
      "intermediate": 37,
      "advanced": 30
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 5
    },
    "description": "Okemo is exceptionally good at removing surprises from a ski day. The trails are groomed, the lifts are plentiful and families can generally find what they need without much trouble. For some skiers this is faint praise; for others it is precisely the point.",
    "highlights": [
      {
        "text": "Groomed cruising",
        "iconSrc": "/icons-highlights/waves 1.svg"
      },
      {
        "text": "Family-oriented terrain",
        "iconSrc": "/icons-highlights/baby 1.svg"
      },
      {
        "text": "Extensive lift system",
        "iconSrc": "/icons-highlights/map-trifold 1.svg"
      }
    ],
    "pros": [
      "Excellent intermediate terrain",
      "Strong grooming",
      "Large trail network",
      "Family-friendly experience"
    ],
    "cons": [
      "Heavy peak-period crowds",
      "Less appealing to expert-focused skiers",
      "Premium pricing"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/okemo/01.jpeg",
        "alt": "Okemo Mountain Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/okemo/02.jpeg",
        "alt": "Okemo Mountain Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/okemo/03.jpeg",
        "alt": "Okemo Mountain Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.okemo.com",
    "sources": [
      {
        "url": "https://www.okemo.com/the-mountain/about-the-mountain/mountain-info.aspx",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.epicpass.com/regions/.aspx",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28"
  },
  {
    "id": "stratton",
    "slug": "stratton",
    "name": "Stratton Mountain Resort",
    "state": "Vermont",
    "region": "Southern Vermont",
    "coordinates": null,
    "figmaNode": null,
    "passes": [
      "Ikon"
    ],
    "tier": null,
    "character": null,
    "annualSnowfallIn": 180,
    "skiableAcres": 670,
    "verticalFt": 2003,
    "trailCount": 99,
    "liftCount": 14,
    "summitElevationFt": 3875,
    "baseElevationFt": null,
    "liftAccess": {
      "score": 1,
      "label": "Most crowded",
      "status": "prototype"
    },
    "affordability": {
      "score": 1,
      "label": "Luxury",
      "priceBand": "$215+",
      "status": "prototype"
    },
    "season": {
      "label": "2025/26",
      "snowTotalIn": null,
      "projectedOpening": null,
      "openingOrder": null,
      "status": "unavailable"
    },
    "terrain": {
      "beginner": 40,
      "intermediate": 35,
      "advanced": 25
    },
    "terrainParks": {
      "status": "seasonal",
      "count": 5
    },
    "description": "Stratton offers the complete version of the southern Vermont weekend: a village, restaurants, lodging and a large mountain immediately above it. It is polished and convenient, two qualities that are expensive and, after a long drive on Friday night, sometimes worth paying for.",
    "highlights": [
      {
        "text": "Resort village",
        "iconSrc": "/icons-highlights/cheers 1.svg"
      },
      {
        "text": "Extensive trail network",
        "iconSrc": "/icons-highlights/map-trifold 1.svg"
      },
      {
        "text": "Strong freestyle terrain",
        "iconSrc": "/icons-highlights/person-simple-snowboard 1.svg"
      }
    ],
    "pros": [
      "Large skiable footprint",
      "Good intermediate terrain",
      "Strong resort amenities",
      "Developed terrain parks"
    ],
    "cons": [
      "Heavy weekend crowds",
      "Expensive",
      "Less old-school character than independent mountains"
    ],
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stratton/01.jpeg",
        "alt": "Stratton Mountain Resort — resort photograph 1 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stratton/02.jpeg",
        "alt": "Stratton Mountain Resort — resort photograph 2 of 3"
      },
      {
        "kind": "image",
        "role": "resort",
        "src": "/resorts/stratton/03.jpeg",
        "alt": "Stratton Mountain Resort — resort photograph 3 of 3"
      }
    ],
    "website": "https://www.stratton.com",
    "sources": [
      {
        "url": "https://www.stratton.com/the-mountain/mountain-statistics",
        "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
      },
      {
        "url": "MAKE.md",
        "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
      },
      {
        "url": "https://www.ikonpass.com/en/cw-fall25",
        "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
      }
    ],
    "lastVerified": "2026-09-28",
    "terrainDetailed": {
      "beginner": 40,
      "intermediate": 35,
      "advanced": 16,
      "expert": 9
    }
  }
];
