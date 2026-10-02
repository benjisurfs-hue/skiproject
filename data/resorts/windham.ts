import type { Resort } from "../resort";

export const windham = {
  id: "windham",
  slug: "windham",
  name: "Windham Mountain Club",
  state: "New York",
  region: "Catskills, New York",

  coordinates: {
    latitude: 42.2987,
    longitude: -74.2573
  },

  figmaNode: null,

  passes: [],

  tier: "Premium",
  character: null,

  nycTransportation: {
    driveTime: "~2.5 hours",
    driveTimeHours: 2.5,
    transitOptions: []
  },

  annualSnowfallIn: 86,
  skiableAcres: 285,
  verticalFt: 1600,
  trailCount: 54,
  liftCount: 9,
  summitElevationFt: 3100,
  baseElevationFt: 1500,

  liftAccess: {
    score: 4,
    label: "Light crowds",
    status: "prototype"
  },

  affordability: {
    score: 1,
    label: "Luxury",
    priceBand: "$$$$",
    status: "prototype"
  },

  season: {
    label: "2025/26",
    snowTotalIn: null,
    projectedOpening: null,
    openingOrder: null,
    status: "unavailable"
  },

  terrain: {
    beginner: 20,
    intermediate: 48,
    advanced: 32
  },

  terrainDetailed: {
    beginner: 20,
    intermediate: 48,
    advanced: 19,
    expert: 13
  },

  terrainParks: {
    status: "seasonal",
    count: 3
  },
  "description": "Windham is what happens when the Catskills put on a good jacket. Just a few hours from New York City, it has 285 acres, 1,600 feet of vertical, and a particular fondness for long, well-groomed runs. The mountain has become decidedly more polished in recent years, but sometimes a comfortable chairlift and an easy drive home are exactly the point.",
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
      "src": "/resorts/windham/1.png",
      "alt": "Bolton Valley Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/windham/2.png",
      "alt": "Bolton Valley Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/windham/3.png",
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
