import type { Resort } from "../resort";

export const jiminyPeak = {
  id: "jiminy-peak",
  slug: "jiminy-peak",
  name: "Jiminy Peak",
  state: "Massachusetts",
  region: "Berkshires / Massachusetts",

  coordinates: {
    latitude: 42.555,
    longitude: -73.292,
  },

  figmaNode: null,

  passes: ["Ikon"],

  tier: "Value",
  character: null,

  nycTransportation: {
    driveTime: "~3 hours",
    driveTimeHours: 3,
    transitOptions: [],
  },

  annualSnowfallIn: 68,
  skiableAcres: 167.4,
  verticalFt: 1150,
  trailCount: 45,
  liftCount: 9,
  summitElevationFt: 2380,
  baseElevationFt: 1230,

  liftAccess: {
    score: 4,
    label: "Good lift access",
    status: "prototype",
  },

  affordability: {
    score: 3,
    label: "Moderate",
    priceBand: "$$",
    status: "prototype",
  },

  season: {
    label: "2026/27",
    snowTotalIn: null,
    projectedOpening: "2026-11-27",
    openingOrder: null,
    status: "sample",
  },

  terrain: {
    beginner: 38,
    intermediate: 29,
    advanced: 33,
  },

  terrainDetailed: {
    beginner: 38,
    intermediate: 29,
    advanced: 27,
    expert: 7,
  },

  terrainParks: {
    status: "seasonal",
    count: 3,
  },

  description:
    "Jiminy Peak is close enough to New York for an easy weekend and large enough that you won't spend it skiing the same three runs. There are 45 trails, 1,150 feet of vertical and night skiing when quitting at four feels unnecessarily responsible. It is polished, family-friendly and remarkably self-contained—the sort of mountain that makes logistics pleasantly uninteresting.",

  highlights: [
    {
      text: "Night skiing",
      iconSrc: "/icons-highlights/moon 1.svg",
    },
    {
      text: "1,150 ft vertical",
      iconSrc: "/icons-highlights/tree-evergreen 1.svg",
    },
    {
      text: "Strong snowmaking",
      iconSrc: "/icons-highlights/map-trifold 1.svg",
    },
  ],

  pros: [
    "Close to NYC",
    "1,150 feet of vertical",
    "Excellent snowmaking coverage",
    "Extensive night skiing",
  ],

  cons: [
    "Less natural snow than northern Vermont",
    "Can be busy on weekends",
    "Smaller terrain footprint than major Vermont resorts",
  ],

  media: [
    {
      kind: "image",
      role: "resort",
      src: "/resorts/jiminy-peak/1.png",
      alt: "Jiminy Peak — resort photograph 1 of 3",
    },
    {
      kind: "image",
      role: "resort",
      src: "/resorts/jiminy-peak/2.png",
      alt: "Jiminy Peak — resort photograph 2 of 3",
    },
    {
      kind: "image",
      role: "resort",
      src: "/resorts/jiminy-peak/3.png",
      alt: "Jiminy Peak — resort photograph 3 of 3",
    },
  ],

  website: "https://www.jiminypeak.com/",

  sources: [
    {
      url: "https://www.jiminypeak.com/the-mountain/mountain-information/",
      note: "Official Jiminy Peak mountain statistics.",
    },
    {
      url: "https://www.jiminypeak.com/skiing-riding/tickets-passes/season-passes/",
      note: "Official 2026/27 pass and Ikon Bonus Mountain information.",
    },
  ],

  lastVerified: "2026-10-01",
} satisfies Resort;