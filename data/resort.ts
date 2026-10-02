export type TerrainDifficulty = "beginner" | "intermediate" | "advanced";
export type Pass = "Ikon" | "Epic" | "Indy";
export type PrototypeScore = 1 | 2 | 3 | 4 | 5;
export type ResortMedia = { kind: "image"; role: "resort"; src: string; alt: string };
export type TerrainParks = { status: "seasonal" } & (
  { count: number; min?: never; max?: never } | { count?: never; min: number; max: number }
);
export type TransitOption = {
  type: "bus" | "train" | "shuttle";
  provider: string;
  label: string;
  url: string;
  station?: string;
  connection?: string;
  note?: string;
};
export type NycTransportation = {
  driveTime: string | null;
  driveTimeHours: number | null;
  transitOptions: TransitOption[];
};
export type Resort = {
  id: string;
  slug: string;
  name: string;
  state: string;
  region: string;
  coordinates: { latitude: number; longitude: number } | null;
  figmaNode: string | null;
  passes: Pass[];
  tier: string | null;
  character: string | null;
  nycTransportation: NycTransportation;
  media: ResortMedia[];
  annualSnowfallIn: number | null;
  skiableAcres: number | null;
  verticalFt: number | null;
  trailCount: number | null;
  liftCount: number | null;
  summitElevationFt: number | null;
  baseElevationFt: number | null;
  liftAccess: { score: PrototypeScore; label: string; status: "prototype" };
  affordability: { score: PrototypeScore; label: string; priceBand: string; status: "prototype" };
  season: {
    label: string;
    snowTotalIn: number | null;
    projectedOpening: string | null;
    openingOrder: number | null;
    status: "sample" | "unavailable";
  };
  terrain: Record<TerrainDifficulty, number> | null;
  terrainDetailed?: Record<string, number>;
  terrainParks: TerrainParks;
  description: string | null;
  // Editorial slots remain empty until authored; never synthesize them from metrics.
  highlights: { text: string; iconSrc: string }[];
  pros: string[];
  cons: string[];
  website: string;
  sources: { url: string; note: string }[];
  lastVerified: string | null;
};
