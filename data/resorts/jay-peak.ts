import type { Resort } from "../resort";

export const jayPeak = {
  "id": "jay-peak",
  "slug": "jay-peak",
  "name": "Jay Peak",
  "state": "Vermont",
  "region": "Northern Vermont",
  "coordinates": null,
  "figmaNode": "205:10190",
  "passes": [
    "Indy"
  ],
  "tier": "Value",
  "character": "Powder Paradise",
  "nycTransportation": {
    "driveTime": "~6 hours",
    "driveTimeHours": 6,
    "transitOptions": [
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/jay-peak/"
      }
    ]
  },
  "annualSnowfallIn": 347,
  "skiableAcres": 385,
  "verticalFt": 2122,
  "trailCount": 81,
  "liftCount": 9,
  "summitElevationFt": 3862,
  "baseElevationFt": 1750,
  "liftAccess": {
    "score": 3,
    "label": "Moderate crowds",
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
    "snowTotalIn": 350,
    "projectedOpening": "November 20th",
    "openingOrder": 1120,
    "status": "sample"
  },
  "terrain": {
    "beginner": 20,
    "intermediate": 40,
    "advanced": 40
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 3
  },
  "description": "Bienvenue à Jay. Almost Canada, technically Vermont. Jay Peak sits far enough north that getting there feels like part of the trip. It gets some of the best natural snow in the East, with 385 acres and 81 trails. There’s also an indoor waterpark, which sounds slightly absurd until you’ve spent a January afternoon in Vermont.",
  "highlights": [
    {
      "text": "Most snow in the East",
      "iconSrc": "/icons-highlights/cloud-snow 1.svg"
    },
    {
      "text": "Legendary tree skiing",
      "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
    },
    {
      "text": "Indoor waterpark",
      "iconSrc": "/icons-highlights/person-simple-swim 1.svg"
    }
  ],
  "pros": [
    "Unmatched eastern snowfall",
    "World-class glades",
    "Indoor waterpark",
    "Affordable lift tickets"
  ],
  "cons": [
    "Remote northern location",
    "Can be very cold and windy",
    "Limited dining nearby"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/jay-peak/01.jpeg",
      "alt": "Jay Peak — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/jay-peak/02.jpeg",
      "alt": "Jay Peak — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/jay-peak/03.jpeg",
      "alt": "Jay Peak — resort photograph 3 of 3"
    }
  ],
  "website": "https://jaypeakresort.com",
  "sources": [
    {
      "url": "https://jaypeakresort.com/skiing-riding/mountain",
      "note": "Current official mountain page takes precedence over differing map snowfall/vertical values. See DATA_NOTES.md."
    },
    {
      "url": "https://jaypeakresort.com/sites/default/files/2026-02/JPR_TrailMap_Winter_2025%2B2026_ToPRINT.pdf",
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
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10190",
      "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
    }
  ],
  "lastVerified": "2026-09-28"
} satisfies Resort;
