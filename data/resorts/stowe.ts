import type { Resort } from "../resort";

export const stowe = {
  "id": "stowe",
  "slug": "stowe",
  "name": "Stowe Mountain Resort",
  "state": "Vermont",
  "region": "Northern Vermont",
  "coordinates": null,
  "figmaNode": null,
  "passes": [
    "Epic"
  ],
  "tier": null,
  "character": null,
  "nycTransportation": {
    "driveTime": "~6 to 7 hours",
    "transitOptions": [
      {
        "type": "train",
        "provider": "Amtrak",
        "label": "Vermonter from NYC",
        "url": "https://www.amtrak.com/stations/wab",
        "station": "Waterbury–Stowe Station (WAB)",
        "connection": "Arrange a taxi from Waterbury–Stowe Station to Stowe Mountain Resort.",
        "note": "Book the ground transfer separately in advance and confirm pickup availability for your train."
      },
      {
        "type": "bus",
        "provider": "OvRride",
        "label": "Seasonal ski bus from NYC",
        "url": "https://ovrride.com/destination/stowe/"
      }
    ]
  },
  "annualSnowfallIn": 314,
  "skiableAcres": 485,
  "verticalFt": 2160,
  "trailCount": 116,
  "liftCount": 12,
  "summitElevationFt": 4395,
  "baseElevationFt": 1280,
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
    "projectedOpening": null,
    "openingOrder": null,
    "status": "unavailable"
  },
  "terrain": {
    "beginner": 16,
    "intermediate": 55,
    "advanced": 29
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 3
  },
  "description": "Stowe is the Vermont ski trip people tend to imagine before they arrive: Mansfield above you, a proper town down the road and considerably more ceremony than you’ll find elsewhere. It can be expensive and crowded, but there is a reason people keep making the trip.",
  "highlights": [
    {
      "text": "Mt. Mansfield terrain",
      "iconSrc": "/icons-highlights/mountains 1.svg"
    },
    {
      "text": "Historic ski destination",
      "iconSrc": "/icons-highlights/cable-car 1.svg"
    },
    {
      "text": "Stowe village access",
      "iconSrc": "/icons-highlights/cheers 1.svg"
    }
  ],
  "pros": [
    "Excellent terrain variety",
    "Strong intermediate skiing",
    "Extensive resort amenities",
    "Attractive mountain setting"
  ],
  "cons": [
    "Expensive",
    "Heavy weekend traffic",
    "Popular terrain can become crowded"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/stowe/01.jpeg",
      "alt": "Stowe Mountain Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/stowe/02.jpeg",
      "alt": "Stowe Mountain Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/stowe/03.jpeg",
      "alt": "Stowe Mountain Resort — resort photograph 3 of 3"
    }
  ],
  "website": "https://www.stowe.com",
  "sources": [
    {
      "url": "https://www.stowe.com/the-mountain/about-the-mountain/mountain-info.aspx",
      "note": "Official mountain statistics; manually reviewed 2026-09-28. See DATA_NOTES.md for scope and conflicts."
    },
    {
      "url": "MAKE.md",
      "note": "V1 prototype Lift Access, Affordability, seasonal terrain parks and explicit factual overrides."
    },
    {
      "url": "https://www.epicpass.com/regions/.aspx",
      "note": "Tracked multi-pass affiliation. Access restrictions are not modeled."
    },
    {
      "url": "https://www.stowe.com/Explore%20the%20Resort/About%20the%20Resort/Guest%20Services.aspx",
      "note": "Published vertical drop and base skiing elevation."
    }
  ],
  "lastVerified": "2026-09-28"
} satisfies Resort;
