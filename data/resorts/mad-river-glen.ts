import type { Resort } from "../resort";

export const madRiverGlen = {
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
  "nycTransportation": {
    "driveTime": "~5.5 to 6 hours",
    "transitOptions": []
  },
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
} satisfies Resort;
