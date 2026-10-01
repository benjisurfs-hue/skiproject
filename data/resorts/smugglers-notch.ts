import type { Resort } from "../resort";

export const smugglersNotch = {
  "id": "smugglers-notch",
  "slug": "smugglers-notch",
  "name": "Smugglers’ Notch Resort",
  "state": "Vermont",
  "region": "Northern Vermont",
  "coordinates": null,
  "figmaNode": "205:10107",
  "passes": [
    "Indy"
  ],
  "tier": "Value",
  "character": "All-Season",
  "nycTransportation": {
    "driveTime": "~6.5 to 7.5 hours",
    "transitOptions": []
  },
  "annualSnowfallIn": 322,
  "skiableAcres": 1000,
  "verticalFt": 2610,
  "trailCount": 78,
  "liftCount": 8,
  "summitElevationFt": 3640,
  "baseElevationFt": 1030,
  "liftAccess": {
    "score": 3,
    "label": "Moderate crowds",
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
    "snowTotalIn": 250,
    "projectedOpening": "December 5th",
    "openingOrder": 1205,
    "status": "sample"
  },
  "terrain": {
    "beginner": 19,
    "intermediate": 50,
    "advanced": 31
  },
  "terrainParks": {
    "status": "seasonal",
    "count": 2
  },
  "description": "Smugglers' Notch Resort is a family-friendly four-season destination in the Green Mountains. With three interconnected peaks offering 78 trails across 1,000 acres, 'Smuggs' is consistently ranked as one of the top family ski resorts in North America.",
  "highlights": [
    {
      "text": "Family-oriented programs",
      "iconSrc": "/icons-highlights/baby 1.svg"
    },
    {
      "text": "Varied terrain",
      "iconSrc": "/icons-highlights/mountains 1.svg"
    },
    {
      "text": "Remote mountain",
      "iconSrc": "/icons-highlights/signpost 1.svg"
    }
  ],
  "pros": [
    "Award-winning kids' programs",
    "Three interconnected mountains",
    "Excellent terrain variety",
    "Affordable family packages"
  ],
  "cons": [
    "Limited après-ski nightlife",
    "Steep access road in winter",
    "Older lift infrastructure"
  ],
  "media": [
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/smugglers-notch/01.jpeg",
      "alt": "Smugglers’ Notch Resort — resort photograph 1 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/smugglers-notch/02.jpeg",
      "alt": "Smugglers’ Notch Resort — resort photograph 2 of 3"
    },
    {
      "kind": "image",
      "role": "resort",
      "src": "/resorts/smugglers-notch/03.jpeg",
      "alt": "Smugglers’ Notch Resort — resort photograph 3 of 3"
    }
  ],
  "website": "https://www.smuggs.com",
  "sources": [
    {
      "url": "https://www.smuggs.com/wp-content/uploads/2024/06/SNR_trailmap_2022.pdf",
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
      "url": "https://www.figma.com/design/CbcR9arkLspCTp5JvwbRA1?node-id=205-10107",
      "note": "Preserved Page 6 editorial content and unverified seasonal sample values."
    }
  ],
  "lastVerified": "2026-09-28",
  "terrainDetailed": {
    "beginner": 19,
    "intermediate": 50,
    "advanced": 25,
    "expert": 6
  }
} satisfies Resort;
