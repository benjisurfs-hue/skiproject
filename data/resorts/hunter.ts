import type { Resort } from "../resort";

export const hunter = {
  "id": "hunter",
  "slug": "hunter",
  "name": "Hunter",
  "state": "New York",
  "region": "Catskills / New York",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Epic"
  ],
  "tier": "Premium",
  "character": null,
  "nycTransportation": {
    "driveTime": "~2.5 hours",
    "driveTimeHours": 2.5,
        "transitOptions": [
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/jay-peak/"
      }
    ]
  },
  "annualSnowfallIn": 85,
  "skiableAcres": 100,
  "verticalFt": 400,
  "trailCount": 71,
  "liftCount": 6,
  "summitElevationFt": 1120,
  "baseElevationFt": 720,
  "liftAccess": {
    "score": 4,
    "label": "Light crowds",
    "status": "prototype"
  },
  "affordability": {
    "score": 5,
    "label": "Great Value",
    "priceBand": "$70–$120",
    "status": "prototype"
  },
  "season": {
    "label": "2025/26",
    "snowTotalIn": null,
    "projectedOpening": "2026-11-21",
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
    "count": 0
  },
  "description": "Hunter is close enough to New York that everybody knows it, which is both its advantage and its problem. The mountain is substantial, the lifts are fast, and there’s enough difficult terrain to keep things interesting. On a weekday, it can feel surprisingly civilized. On a Saturday, less so. The crowds tend to collect around the main mountain, while those who know better make their way toward Hunter North and West.",
  "highlights": [
    {
      "text": "Proximity to New York City",
      "iconSrc": "/icons-highlights/road-horizon 1.svg"
    },
    {
      "text": "Pioneering Snowmaking",
      "iconSrc": "/icons-highlights/snowflake 1.svg"
    },
    {
      "text": "Substantial Vertical Drop",
      "iconSrc": "/icons-highlights/mountains 1.svg"
    }
  ],
  "pros": [
    "Strong advanced terrain",
    "Fast, modern lifts",
    "Excellent snowmaking",
    "Surprisingly good on weekdays"
  ],
  "cons": [
    "Main trails can feel congested",
    "Firm and icy conditions are common",
    "Base area gets hectic"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/hunter/1.png",
      "alt": "Bolton Valley Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/hunter/2.png",
      "alt": "Bolton Valley Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/hunter/3.png",
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
} satisfies Resort;
