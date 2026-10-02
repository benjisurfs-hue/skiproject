import type { Resort } from "../resort";

export const okemo = {
  "id": "okemo",
  "slug": "okemo",
  "name": "Okemo Mountain Resort",
  "state": "Vermont",
  "region": "Southern Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Epic"
  ],
 "tier": "Premium",
  "character": null,
  "nycTransportation": {
    "driveTime": "~4.75 hours",
    "driveTimeHours": 4.75,
    "transitOptions": [
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/okemo/"
      }
    ]
  },
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
} satisfies Resort;
