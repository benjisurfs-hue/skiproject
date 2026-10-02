import type { Resort } from "../resort";

export const bromleyMountain = {
  "id": "bromley-mountain",
  "slug": "bromley-mountain",
  "name": "Bromley Mountain",
  "state": "Vermont",
  "region": "Southern Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [],
 "tier": "Value",
  "character": null,
  "nycTransportation": {
    "driveTime": "~4 hours",
    "driveTimeHours": 4,
    "transitOptions": []
  },
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
} satisfies Resort;
