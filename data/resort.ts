export type TerrainDifficulty = "beginner" | "intermediate" | "advanced";
export type ResortMedia = {
  role: "resort" | "trail-map" | "additional";
  src: string;
  alt: string;
} & ({ kind: "image" } | { kind: "video"; poster?: string });

export type Resort = {
  id: string;
  name: string;
  state: string;
  region: string;
  figmaNode: string;
  pass: string;
  tier: string;
  character: string;
  media: ResortMedia[];
  annualSnowfallIn: number | null;
  skiableAcres: number | null;
  verticalFt: number | null;
  averageLiftWaitMinutes: number | null;
  dayTicketPrice: number | null;
  season: {
    label: string;
    snowTotalIn: number;
    projectedOpening: string;
    openingOrder: number;
  };
  // Percentages, with parks deliberately excluded from the difficulty mix.
  terrain: Record<TerrainDifficulty, number>;
  // Preserve Page 6's count presentation; percentages support future comparison.
  trailCounts: Record<TerrainDifficulty, number>;
  terrainParks: number;
  description: string;
  highlights: { text: string; iconSrc: string }[];
  pros: string[];
  cons: string[];
  website: string;
  source: { status: "sample" | "verified"; url: string; note?: string; lastUpdated?: string };
};
