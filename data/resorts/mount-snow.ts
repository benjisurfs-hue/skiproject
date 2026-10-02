import type { Resort } from "../resort";

export const mountSnow = {
  "id": "mount-snow",
  "slug": "mount-snow",
  "name": "Mount Snow",
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
    "driveTime": "~4 hours",
    "driveTimeHours": 4,
    "transitOptions": [
      {
        "type": "train",
        "provider": "Amtrak",
        "label": "Vermonter from NYC",
        "url": "https://www.amtrak.com/stations/bra",
        "station": "Brattleboro Station (BRA)",
        "connection": "Arrange a local car service from Brattleboro to Mount Snow.",
        "note": "Book the ground transfer separately in advance. Do not assume a connecting public bus will meet your train."
      },
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/mount-snow/"
      }
    ]
  },
  "annualSnowfallIn": 150,
  "skiableAcres": 601,
  "verticalFt": 1700,
  "trailCount": 86,
  "liftCount": 18,
  "summitElevationFt": 3600,
  "baseElevationFt": 1900,
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
    "beginner": 16,
    "intermediate": 66,
    "advanced": 18
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 10
  },
  "description": "Mount Snow knows exactly what it is: a big, accessible southern Vermont resort built to move a lot of people around the mountain. The grooming is extensive, the parks are serious, and on a Saturday morning you will not be the only person who had the idea.",
  "highlights": [
    {
      "text": "Carinthia terrain parks",
      "iconSrc": "/icons-highlights/person-simple-snowboard 1.svg"
    },
    {
      "text": "Extensive lift network",
      "iconSrc": "/icons-highlights/map-trifold 1.svg"
    },
    {
      "text": "Southern Vermont access",
      "iconSrc": "/icons-highlights/road-horizon 1.svg"
    }
  ],
  "pros": [
    "Excellent terrain parks",
    "Strong snowmaking infrastructure",
    "Large intermediate offering",
    "Convenient for southern visitors"
  ],
  "cons": [
    "Heavy weekend crowds",
    "Less natural snowfall than northern Vermont",
    "Premium pricing"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/mount-snow/01.jpeg",
      "alt": "Mount Snow — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/mount-snow/02.jpeg",
      "alt": "Mount Snow — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/mount-snow/03.jpeg",
      "alt": "Mount Snow — resort photograph 3 of 3"
    }
  ],
  "website": "https://www.mountsnow.com",
  "sources": [
    {
      "url": "https://www.mountsnow.com/the-mountain/about-the-mountain/mountain-info.aspx",
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
