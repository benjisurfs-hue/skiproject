import type { Resort } from "../resort";

export const sugarbush = {
  "id": "sugarbush",
  "slug": "sugarbush",
  "name": "Sugarbush Resort",
  "state": "Vermont",
  "region": "Central Vermont",
  "coordinates": null,
  "figmaNode": "205:10024",
  "passes": [
    "Ikon"
  ],
  "tier": "Premium",
  "character": "Family Friendly",
  "nycTransportation": {
    "driveTime": "~5.5 hours",
    "driveTimeHours": 5.5,
    "transitOptions": [
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/sugarbush/"
      }
    ]
  },
  "annualSnowfallIn": 250,
  "skiableAcres": 4000,
  "verticalFt": 2600,
  "trailCount": 111,
  "liftCount": 16,
  "summitElevationFt": 4083,
  "baseElevationFt": 1483,
  "liftAccess": {
    "score": 2,
    "label": "Heavy crowds",
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
    "snowTotalIn": 265,
    "projectedOpening": "November 25th",
    "openingOrder": 1125,
    "status": "sample"
  },
  "terrain": {
    "beginner": 18.7,
    "intermediate": 33.8,
    "advanced": 47.5
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 3
  },
  "description": "Sugarbush occupies a handsome stretch of the Mad River Valley, with 581 skiable acres spread across two mountains. There are 111 trails and 16 lifts, but the appeal is less about the numbers than the scale of the place. It feels substantial without feeling like a ski town built around a resort.",
  "highlights": [
    {
      "text": "Two mountains",
      "iconSrc": "/icons-highlights/mountains 1.svg"
    },
    {
      "text": "World’s longest lift",
      "iconSrc": "/icons-highlights/cable-car 1.svg"
    },
    {
      "text": "Challenging natural terrain",
      "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
    }
  ],
  "pros": [
    "Terrain variety across two peaks",
    "Above average snowfall for VT",
    "World-class amenities",
    "Connected mountain experience"
  ],
  "cons": [
    "No ski-in/ski-out village",
    "Weekend/holiday crowds",
    "Challenging road access"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/sugarbush/01.jpeg",
      "alt": "Sugarbush Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/sugarbush/02.jpeg",
      "alt": "Sugarbush Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/sugarbush/03.jpeg",
      "alt": "Sugarbush Resort — resort photograph 3 of 3"
    }
  ],
  "website": "https://www.sugarbush.com",
  "sources": [
    {
      "url": "https://www.sugarbush.com/mountain/terrain-and-maps",
      "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
    },
    {
      "url": "MAKE.md",
      "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
    },
    {
      "url": "https://www.ikonpass.com/en/cw-fall25",
      "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
    },
    {
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10024",
      "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
    }
  ],
  "lastVerified": "2026-09-28",
  "terrainDetailed": {
    "beginner": 18.7,
    "intermediate": 33.8,
    "advanced": 21.6,
    "expert": 5.8,
    "wooded": 20.1
  }
} satisfies Resort;
