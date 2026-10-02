import type { Resort } from "../resort";

export const catamount = {
  id: "catamount",
  slug: "catamount",
  name: "Catamount",
  state: "New York",
  region: "Berkshires / Hudson Valley",

  coordinates: {
    latitude: 42.169,
    longitude: -73.477,
  },

  figmaNode: null,

  passes: ["Indy"],

  tier: "Value",
  character: null,

  nycTransportation: {
    driveTime: "~2.5 hours",
    driveTimeHours: 2.5,
    transitOptions: [],
  },

  annualSnowfallIn: null,
  skiableAcres: null,
  verticalFt: 1000,
  trailCount: 44,
  liftCount: 8,
  summitElevationFt: null,
  baseElevationFt: null,

  liftAccess: {
    score: 4,
    label: "Light crowds",
    status: "prototype",
  },

  affordability: {
    score: 4,
    label: "Good Value",
    priceBand: "$$",
    status: "prototype",
  },

  season: {
    label: "2026/27",
    snowTotalIn: null,
    projectedOpening: null,
    openingOrder: null,
    status: "unavailable",
  },

  terrain: {
    beginner: 35,
    intermediate: 42,
    advanced: 23,
  },

  terrainParks: {
    status: "seasonal",
    count: 4,
  },

  description:
    "Catamount sits right on the New York–Massachusetts line, close enough to the city that skiing for the day doesn't require much negotiation. Its 1,000 feet of vertical packs in more variety than the size suggests, including some legitimately steep terrain. Add night skiing and an Indy Pass, and it makes a persuasive case for leaving New York before breakfast and being home for dinner.",

  highlights: [
    {
      text: "2.5 hours from NYC",
      iconSrc: "/icons-highlights/map-trifold 1.svg",
    },
    {
      text: "Night skiing",
      iconSrc: "/icons-highlights/moon 1.svg",
    },
    {
      text: "Steep terrain",
      iconSrc: "/icons-highlights/tree-evergreen 1.svg",
    },
  ],

  pros: [
    "One of the closest substantial mountains to NYC",
    "Good mix of beginner through advanced terrain",
    "Night skiing on 22 trails",
    "Indy Pass access",
  ],

  cons: [
    "Smaller than the major Vermont mountains",
    "Natural snowfall is less dependable than northern Vermont",
    "Can get busy on weekends and holidays",
  ],

  media: [
    {
      kind: "image",
      role: "resort",
      src: "/resorts/catamount/1.png",
      alt: "Catamount Mountain Resort — resort photograph 1 of 3",
    },
    {
      kind: "image",
      role: "resort",
      src: "/resorts/catamount/2.png",
      alt: "Catamount Mountain Resort — resort photograph 2 of 3",
    },
    {
      kind: "image",
      role: "resort",
      src: "/resorts/catamount/3.png",
      alt: "Catamount Mountain Resort — resort photograph 3 of 3",
    },
  ],

  website: "https://catamountski.com",

  sources: [
    {
      url: "https://catamountski.com/the-resort/catamount-resort/about-catamount-resort",
      note: "Official Catamount mountain statistics and terrain breakdown.",
    },
    {
      url: "https://catamountski.com/winter/tickets-passes/indy-pass-reservations",
      note: "Official Catamount Indy Pass information.",
    },
  ],

  lastVerified: "2026-10-01",
} satisfies Resort;