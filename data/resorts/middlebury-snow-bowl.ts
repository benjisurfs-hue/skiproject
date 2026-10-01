import type { Resort } from "../resort";

export const middleburySnowBowl = {
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
  "nycTransportation": {
    "driveTime": null,
    "transitOptions": []
  },
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
} satisfies Resort;
