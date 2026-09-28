import type { Resort } from "./resort";

// One local dataset. Seasonal totals are separate from annual mountain statistics.
export const resorts: Resort[] = [
  {
    "id": "sugarbush",
    "figmaNode": "205:10024",
    "region": "Central Vermont",
    "name": "Sugarbush",
    "pass": "Ikon",
    "tier": "Premium",
    "character": "Family Friendly",
    "highlights": [
      {
        "text": "Lots of snow",
        "iconSrc": "/figma/205-10024-imgNounSnowflake75393611.svg"
      },
      {
        "text": "Large mountain",
        "iconSrc": "/figma/205-10024-imgFrame32.svg"
      },
      {
        "text": "Can be expensive",
        "iconSrc": "/figma/205-10024-imgNounSnowflake75393612.svg"
      }
    ],
    "description": "Sugarbush Resort is a ski resort in the Mad River Valley in Warren, Vermont. One of the largest ski resorts in New England, it encompasses 484 skiable acres across two mountains connected by a quad chairlift, with 111 trails and 16 lifts.",
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
    "website": "https://www.sugarbush.com",
    "state": "Vermont",
    "annualSnowfallIn": 250,
    "skiableAcres": 581,
    "verticalFt": 2650,
    "averageLiftWaitMinutes": 6,
    "dayTicketPrice": 149,
    "season": {
      "label": "2025/26",
      "snowTotalIn": 265,
      "projectedOpening": "November 25th",
      "openingOrder": 1125
    },
    "terrain": {
      "beginner": 18.91891891891892,
      "intermediate": 34.234234234234236,
      "advanced": 46.846846846846844
    },
    "trailCounts": {
      "beginner": 21,
      "intermediate": 38,
      "advanced": 52
    },
    "terrainParks": 3,
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/figma/205-10024-imgMedia1.png",
        "alt": "Sugarbush \u2014 mountain and ski trails"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10024-imgMedia2.png",
        "alt": "Sugarbush \u2014 resort experience"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10024-imgMedia3.png",
        "alt": "Sugarbush \u2014 mountain experience"
      }
    ],
    "source": {
      "status": "sample",
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10024",
      "note": "Page 6 design sample; not verified resort conditions. Terrain percentages derived from displayed difficulty counts."
    }
  },
  {
    "id": "smugglers-notch",
    "figmaNode": "205:10107",
    "region": "Northern Vermont",
    "name": "Smugglers' Notch",
    "pass": "Indy",
    "tier": "Value",
    "character": "All-Season",
    "highlights": [
      {
        "text": "Family-oriented programs",
        "iconSrc": "/figma/205-10107-imgNounSnowflake75393611.svg"
      },
      {
        "text": "Varied terrain",
        "iconSrc": "/figma/205-10107-imgFrame32.svg"
      },
      {
        "text": "Remote mountain",
        "iconSrc": "/figma/205-10107-imgNounSnowflake75393612.svg"
      }
    ],
    "description": "Smugglers' Notch Resort is a family-friendly four-season destination in the Green Mountains. With three interconnected peaks offering 78 trails across 1,000 acres, 'Smuggs' is consistently ranked as one of the top family ski resorts in North America.",
    "pros": [
      "Award-winning kids' programs",
      "Three interconnected mountains",
      "Excellent terrain variety",
      "Affordable family packages"
    ],
    "cons": [
      "Limited apr\u00e8s-ski nightlife",
      "Steep access road in winter",
      "Older lift infrastructure"
    ],
    "website": "https://www.smuggs.com",
    "state": "Vermont",
    "annualSnowfallIn": 250,
    "skiableAcres": 311,
    "verticalFt": 2610,
    "averageLiftWaitMinutes": 0,
    "dayTicketPrice": 99,
    "season": {
      "label": "2025/26",
      "snowTotalIn": 250,
      "projectedOpening": "December 5th",
      "openingOrder": 1205
    },
    "terrain": {
      "beginner": 32.05128205128205,
      "intermediate": 35.8974358974359,
      "advanced": 32.05128205128205
    },
    "trailCounts": {
      "beginner": 25,
      "intermediate": 28,
      "advanced": 25
    },
    "terrainParks": 3,
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/figma/205-10107-imgMedia1.png",
        "alt": "Smugglers' Notch \u2014 mountain and ski trails"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10107-imgMedia2.png",
        "alt": "Smugglers' Notch \u2014 resort experience"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10107-imgMedia3.png",
        "alt": "Smugglers' Notch \u2014 mountain experience"
      }
    ],
    "source": {
      "status": "sample",
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10107",
      "note": "Page 6 design sample; not verified resort conditions. Terrain percentages derived from displayed difficulty counts."
    }
  },
  {
    "id": "jay-peak",
    "figmaNode": "205:10190",
    "region": "Northern Vermont",
    "name": "Jay Peak",
    "pass": "Indy",
    "tier": "Value",
    "character": "Powder Paradise",
    "highlights": [
      {
        "text": "Most snow in the East",
        "iconSrc": "/figma/205-10190-imgNounSnowflake75393611.svg"
      },
      {
        "text": "Legendary tree skiing",
        "iconSrc": "/figma/205-10190-imgFrame32.svg"
      },
      {
        "text": "Indoor waterpark",
        "iconSrc": "/figma/205-10190-imgNounSnowflake75393612.svg"
      }
    ],
    "description": "Jay Peak Resort sits near the Canadian border and receives more natural snowfall than any other resort in eastern North America. With 385 acres of skiable terrain, 81 trails, and an indoor waterpark, it's a unique year-round destination.",
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
    "website": "https://jaypeakresort.com",
    "state": "Vermont",
    "annualSnowfallIn": 350,
    "skiableAcres": 385,
    "verticalFt": 2153,
    "averageLiftWaitMinutes": 0,
    "dayTicketPrice": 89,
    "season": {
      "label": "2025/26",
      "snowTotalIn": 350,
      "projectedOpening": "November 20th",
      "openingOrder": 1120
    },
    "terrain": {
      "beginner": 26.582278481012658,
      "intermediate": 35.44303797468354,
      "advanced": 37.9746835443038
    },
    "trailCounts": {
      "beginner": 21,
      "intermediate": 28,
      "advanced": 30
    },
    "terrainParks": 2,
    "media": [
      {
        "kind": "image",
        "role": "resort",
        "src": "/figma/205-10190-imgMedia1.png",
        "alt": "Jay Peak \u2014 mountain and ski trails"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10190-imgMedia2.png",
        "alt": "Jay Peak \u2014 resort experience"
      },
      {
        "kind": "image",
        "role": "additional",
        "src": "/figma/205-10190-imgMedia3.png",
        "alt": "Jay Peak \u2014 mountain experience"
      }
    ],
    "source": {
      "status": "sample",
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10190",
      "note": "Page 6 design sample; not verified resort conditions. Terrain percentages derived from displayed difficulty counts."
    }
  }
];
