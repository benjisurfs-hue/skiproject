import type { Resort } from "../resort";

export const killington = {
  "id": "killington",
  "slug": "killington",
  "name": "Killington Resort",
  "state": "Vermont",
  "region": "Central Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Ikon"
  ],
  "tier": "Luxury",
  "character": null,
  "nycTransportation": {
    "driveTime": "~4.75 hours",
    "driveTimeHours": 4.75,
    "transitOptions": [
      {
        "type": "train",
        "provider": "Amtrak",
        "label": "Ethan Allen Express from NYC",
        "url": "https://www.amtrak.com/stations/rud",
        "station": "Rutland — James M. Jeffords Station (RUD)",
        "connection": "Transfer in Rutland to The Bus’s Rutland–Killington Commuter for Killington resort stops.",
        "note": "Check the current bus timetable against your train arrival; a same-day connection is not guaranteed."
      },
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/killington/"
      }
    ]
  },
  "annualSnowfallIn": 250,
  "skiableAcres": 1509,
  "verticalFt": 3050,
  "trailCount": 155,
  "liftCount": 19,
  "summitElevationFt": 4241,
  "baseElevationFt": 1165,
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
    "snowTotalIn": null,
    "projectedOpening": "2026-11-11",
    "openingOrder": null,
    "status": "unavailable"
  },
  "terrain": {
    "beginner": 17,
    "intermediate": 40,
    "advanced": 43
  },
  "terrainParks": {
    "status": "seasonal",
    "min": 5,
    "max": 7
  },
  "description": "Killington is not trying to be quaint. It is enormous, busy, complicated and very good at providing somewhere to ski when smaller mountains have run out of options. Learning your way around takes a while; that is partly because there is so much of it.",
  "highlights": [
    {
      "text": "Massive trail network",
      "iconSrc": "/icons-highlights/map-trifold 1.svg"
    },
    {
      "text": "Long ski season",
      "iconSrc": "/icons-highlights/calendar 1.svg"
    },
    {
      "text": "Multiple mountain areas",
      "iconSrc": "/icons-highlights/mountains 1.svg"
    }
  ],
  "pros": [
    "Huge terrain variety",
    "Strong advanced skiing",
    "Extensive lift network",
    "Large selection of nearby amenities"
  ],
  "cons": [
    "Heavy peak-period crowds",
    "Expensive compared with smaller mountains",
    "Large layout can take time to navigate"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/killington/01.jpeg",
      "alt": "Killington Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/killington/02.jpeg",
      "alt": "Killington Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/killington/03.jpeg",
      "alt": "Killington Resort — resort photograph 3 of 3"
    }
  ],
  "website": "https://killington.com",
  "sources": [
    {
      "url": "https://killington.com/mountain-stats",
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
  "lastVerified": "2026-09-28"
} satisfies Resort;
