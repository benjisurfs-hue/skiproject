import type { Resort } from "../resort";

export const boltonValley = {
  "id": "bolton-valley",
  "slug": "bolton-valley",
  "name": "Bolton Valley Resort",
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
    "driveTime": "~5.25 hours",
    "driveTimeHours": 5.25,
    "transitOptions": [
      {
        "type": "train",
        "provider": "Amtrak",
        "label": "Vermonter from NYC",
        "url": "https://www.amtrak.com/stations/wab",
        "station": "Waterbury–Stowe Station (WAB)",
        "connection": "Arrange a taxi from Waterbury–Stowe Station to Bolton Valley.",
        "note": "Book the ground transfer separately in advance and confirm pickup availability for your train."
      }
    ]
  },
  "annualSnowfallIn": 312,
  "skiableAcres": 300,
  "verticalFt": 1704,
  "trailCount": 71,
  "liftCount": 6,
  "summitElevationFt": 3150,
  "baseElevationFt": 2100,
  "liftAccess": {
    "score": 4,
    "label": "Light crowds",
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
    "beginner": 34,
    "intermediate": 38,
    "advanced": 28
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 3
  },
  "description": "Bolton has always felt a little removed from the Vermont resort circuit. There are lifts, certainly, but also night skiing, Nordic trails and a great deal of woods—the sort of mountain where wandering off in another direction is often the better idea.",
  "highlights": [
    {
      "text": "Backcountry access",
      "iconSrc": "/icons-highlights/tree-evergreen 1.svg"
    },
    {
      "text": "Night skiing",
      "iconSrc": "/icons-highlights/moon 1.svg"
    },
    {
      "text": "Nordic trail network",
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
      "src": "/resorts/bolton-valley/01.jpeg",
      "alt": "Bolton Valley Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/bolton-valley/02.jpeg",
      "alt": "Bolton Valley Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/bolton-valley/03.jpeg",
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
