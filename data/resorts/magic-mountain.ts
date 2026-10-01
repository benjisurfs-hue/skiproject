import type { Resort } from "../resort";

export const magicMountain = {
  "id": "magic-mountain",
  "slug": "magic-mountain",
  "name": "Magic Mountain",
  "state": "Vermont",
  "region": "Southern Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Indy"
  ],
  "tier": null,
  "character": null,
  "nycTransportation": {
    "driveTime": "~4.5 to 5 hours",
    "transitOptions": []
  },
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
} satisfies Resort;
