import type { Resort } from "../resort";

export const stratton = {
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
 "tier": "Premium",
  "character": null,
  "nycTransportation": {
    "driveTime": "~4 hours",
    "driveTimeHours": 4,
    "transitOptions": [
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/stratton/"
      }
    ]
  },
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
    "projectedOpening": "2026-11-18",
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
} satisfies Resort;
