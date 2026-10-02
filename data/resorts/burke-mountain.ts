import type { Resort } from "../resort";

export const burkeMountain = {
  "id": "burke-mountain",
  "slug": "burke-mountain",
  "name": "Burke Mountain",
  "state": "Vermont",
  "region": "Northern Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Indy"
  ],
   "tier": "Value",
  "character": null,
  "nycTransportation": {
    "driveTime": "~5.5 hours",
    "driveTimeHours": 5.5,
    "transitOptions": []
  },
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
      "text": "Developed Olympian Mikaela Shiffrin ",
      "iconSrc": "/icons-highlights/olympics.svg"
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
} satisfies Resort;
