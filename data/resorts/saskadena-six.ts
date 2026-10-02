import type { Resort } from "../resort";

export const saskadenaSix = {
  "id": "saskadena-six",
  "slug": "saskadena-six",
  "name": "Saskadena Six",
  "state": "Vermont",
  "region": "Central Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Indy"
  ],
  "tier": "Value",
  "character": null,
  "nycTransportation": {
    "driveTime": "~4.5 hours",
    "driveTimeHours": 4.5,
    "transitOptions": []
  },
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
} satisfies Resort;
