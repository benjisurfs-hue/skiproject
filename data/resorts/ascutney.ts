import type { Resort } from "../resort";

export const ascutney = {
  "id": "ascutney",
  "slug": "ascutney",
  "name": "Ascutney",
  "state": "Vermont",
  "region": "Northern Vermont",
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
    "count": 0
  },
  "description": "Ascutney Outdoors is a community-run mountain in Brownsville, Vermont, built around simple lift access, natural snow and an extensive uphill trail network. The former resort has found new life as a welcoming, low-key place for families, touring skiers and locals who value authentic New England terrain.",
  "highlights": [
    {
      "text": "Community-powered",
      "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
    },
    {
      "text": "Uphill adventure",
      "iconSrc": "/icons-highlights/moon 1.svg"
    },
    {
      "text": "Natural snow terrain",
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
      "src": "/resorts/ascutney/image1.png",
      "alt": "Bolton Valley Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/ascutney/image2.png",
      "alt": "Bolton Valley Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/ascutney/image3.png",
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
