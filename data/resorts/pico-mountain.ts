import type { Resort } from "../resort";

export const picoMountain = {
  "id": "pico-mountain",
  "slug": "pico-mountain",
  "name": "Pico Mountain",
  "state": "Vermont",
  "region": "Central Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Ikon"
  ],
 "tier": "Premium",
  "character": null,
  "nycTransportation": {
    "driveTime": "~5 hours",
    "driveTimeHours": 5,
    "transitOptions": [
      {
        "type": "train",
        "provider": "Amtrak",
        "label": "Ethan Allen Express from NYC",
        "url": "https://www.amtrak.com/stations/rud",
        "station": "Rutland — James M. Jeffords Station (RUD)",
        "connection": "Transfer in Rutland to The Bus’s Rutland–Killington Commuter and get off at Pico Resort Hotel.",
        "note": "Check the current bus timetable against your train arrival; a same-day connection is not guaranteed."
      }
    ]
  },
  "annualSnowfallIn": 250,
  "skiableAcres": 468,
  "verticalFt": 1967,
  "trailCount": 58,
  "liftCount": null,
  "summitElevationFt": 3967,
  "baseElevationFt": 2000,
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
    "beginner": 18,
    "intermediate": 46,
    "advanced": 36
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 1
  },
  "description": "Pico sits next to Killington but seems largely uninterested in competing with it. The mountain is substantial, the pace is slower, and you can spend a day skiing instead of figuring out which base area you’re supposed to be in.",
  "highlights": [
    {
      "text": "Classic Vermont mountain",
      "iconSrc": "/icons-highlights/farm 1.svg"
    },
    {
      "text": "Long vertical runs",
      "iconSrc": "/icons-highlights/person-simple-ski 1.svg"
    },
    {
      "text": "Quieter Killington alternative",
      "iconSrc": "/icons-highlights/hand-peace 1.svg"
    }
  ],
  "pros": [
    "Strong vertical for its size",
    "Generally lighter crowds",
    "Good intermediate terrain",
    "Straightforward mountain layout"
  ],
  "cons": [
    "Smaller lift network",
    "Fewer amenities than Killington",
    "Less terrain variety than larger resorts"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/pico-mountain/01.jpeg",
      "alt": "Pico Mountain — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/pico-mountain/02.jpeg",
      "alt": "Pico Mountain — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/pico-mountain/03.jpeg",
      "alt": "Pico Mountain — resort photograph 3 of 3"
    }
  ],
  "website": "https://picomountain.com",
  "sources": [
    {
      "url": "https://picomountain.com/mountain-stats",
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
