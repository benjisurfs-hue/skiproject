import { parse } from "csv-parse/sync";
import type { Pass, PrototypeScore, Resort, TerrainParks } from "../data/resort";

export const sheetColumns = "id,slug,name,state,region,latitude,longitude,passes,tier,character,annualSnowfallIn,skiableAcres,verticalFt,trailCount,liftCount,summitElevationFt,baseElevationFt,liftAccessScore,liftAccessLabel,affordabilityScore,affordabilityLabel,priceBand,projectedOpening,beginner,intermediate,advanced,terrainParks,description,highlight1,highlight1Icon,highlight2,highlight2Icon,highlight3,highlight3Icon,photo1,photo2,photo3,pro1,pro2,pro3,con1,con2,con3,website,nycDriveTime,nycBusAvailable,lastVerified,published".split(",");

function number(value: string, field: string, min = 0, max = Infinity): number | null {
  if (!value.trim()) return null;
  const n = Number(value);
  if (!Number.isFinite(n) || n < min || n > max) throw new Error(`Invalid ${field}`);
  return n;
}

function flag(value: string): boolean | undefined {
  if (!value.trim()) return undefined;
  if (value.trim().toLowerCase() === "true") return true;
  if (value.trim().toLowerCase() === "false") return false;
  throw new Error("Expected TRUE, FALSE, or blank");
}

function date(value: string): string | null {
  if (!value.trim()) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) {
    throw new Error("Dates must use YYYY-MM-DD");
  }
  return value;
}

function score(value: string, fallback: PrototypeScore): PrototypeScore {
  const n = number(value, "score", 1, 5);
  if (n === null) return fallback;
  if (!Number.isInteger(n)) throw new Error("Scores must be integers");
  return n as PrototypeScore;
}

function parks(value: string, fallback: TerrainParks): TerrainParks {
  if (!value.trim()) return fallback;
  const p = value.trim().startsWith("{") ? JSON.parse(value) : { count: Number(value) };
  const valid = (n: unknown): n is number => typeof n === "number" && Number.isInteger(n) && n >= 0;
  if (valid(p.count) && p.min === undefined && p.max === undefined) return { status: "seasonal", count: p.count };
  if (p.count === undefined && valid(p.min) && valid(p.max) && p.min <= p.max) return { status: "seasonal", min: p.min, max: p.max };
  throw new Error("Invalid terrain parks count or range");
}

function createBlankResort(id: string): Resort {
  return {
    id,
    slug: id,
    name: id,
    state: "",
    region: "",
    coordinates: null,
    figmaNode: null,
    passes: [],
    tier: null,
    character: null,

    nycTransportation: {
      driveTime: null,
      driveTimeHours: null,
      transitOptions: [],
    },

    media: [],

    annualSnowfallIn: null,
    skiableAcres: null,
    verticalFt: null,
    trailCount: null,
    liftCount: null,
    summitElevationFt: null,
    baseElevationFt: null,

    liftAccess: {
      score: 3,
      label: "",
      status: "prototype",
    },

    affordability: {
      score: 3,
      label: "",
      priceBand: "",
      status: "prototype",
    },

    season: {
      label: "",
      snowTotalIn: null,
      projectedOpening: null,
      openingOrder: null,
      status: "unavailable",
    },

    terrain: null,

    terrainParks: {
      status: "seasonal",
      count: 0,
    },

    description: null,

    highlights: [],
    pros: [],
    cons: [],

    website: "",
    sources: [],
    lastVerified: null,
  };
}

/** Join on stable IDs. The sheet owns rows; local files supply photos and editorial fields. */
export function mergeResortSheet(csv: string, originals: readonly Resort[]): Resort[] {
  const table: string[][] = parse(csv, { bom: true, skip_empty_lines: true });
  const headers = table.shift();
  if (!headers || new Set(headers).size !== headers.length || sheetColumns.some(c => !headers.includes(c))) throw new Error("Missing or duplicate Resorts headers");
  const rows = table.filter(row => row.some(cell => cell.trim()));
  if (!rows.length) throw new Error("Resorts sheet is empty");
  const seen = new Set<string>();
  return rows.flatMap(cells => {
    const row = Object.fromEntries(headers.map((h, i) => [h, cells[i]]));
    const id = row.id.trim();
    if (!id || seen.has(id)) throw new Error("Missing or duplicate resort ID");
    seen.add(id);
    if (flag(row.published) === false) return [];
const base = originals.find(r => r.id === id) ?? createBlankResort(id);
const r: Resort = structuredClone(base);
    for (const key of ["slug", "name", "state", "region"] as const) {
      if (!row[key].trim()) throw new Error(`Missing ${key} for ${id}`);
      r[key] = row[key];
    }
    for (const key of ["tier", "character", "description"] as const) r[key] = row[key] || null;
    for (const key of ["annualSnowfallIn", "skiableAcres", "verticalFt", "trailCount", "liftCount", "summitElevationFt", "baseElevationFt"] as const) r[key] = number(row[key], key);
    const latitude = number(row.latitude, "latitude", -90, 90);
    const longitude = number(row.longitude, "longitude", -180, 180);
    if ((latitude === null) !== (longitude === null)) throw new Error("Both coordinates are required");
    r.coordinates = latitude === null || longitude === null ? null : { latitude, longitude };
    const passes: unknown = row.passes.trim().startsWith("[") ? JSON.parse(row.passes) : row.passes.split(",").map(p => p.trim()).filter(Boolean);
    if (!Array.isArray(passes) || passes.some(p => !["Ikon", "Epic", "Indy"].includes(p))) throw new Error("Invalid pass list");
    r.passes = [...new Set(passes)] as Pass[];
    r.liftAccess.score = score(row.liftAccessScore, base.liftAccess.score);
    r.liftAccess.label = row.liftAccessLabel || base.liftAccess.label;
    r.affordability.score = score(row.affordabilityScore, base.affordability.score);
    r.affordability.label = row.affordabilityLabel || base.affordability.label;
    r.affordability.priceBand = row.priceBand;
    r.season.projectedOpening = date(row.projectedOpening);
    r.lastVerified = date(row.lastVerified);
    const beginner = number(row.beginner, "beginner", 0, 100);
    const intermediate = number(row.intermediate, "intermediate", 0, 100);
    const advanced = number(row.advanced, "advanced", 0, 100);
    if ([beginner, intermediate, advanced].every(n => n === null)) r.terrain = null;
    else if (beginner === null || intermediate === null || advanced === null) throw new Error("Complete all three terrain percentages, or leave all blank");
    else r.terrain = { beginner, intermediate, advanced };
    r.terrainParks = parks(row.terrainParks, base.terrainParks);
    const sheetHighlights = [
  { text: row.highlight1, iconSrc: row.highlight1Icon },
  { text: row.highlight2, iconSrc: row.highlight2Icon },
  { text: row.highlight3, iconSrc: row.highlight3Icon },
].filter(highlight => highlight.text.trim() && highlight.iconSrc.trim());
const sheetPhotos = [
  row.photo1,
  row.photo2,
  row.photo3,
]
  .map(src => src.trim())
  .filter(Boolean);

if (sheetPhotos.length > 0) {
  r.media = sheetPhotos.map((src, index) => ({
    kind: "image" as const,
    role: "resort" as const,
    src,
    alt: `${r.name} ski area${index === 0 ? "" : ` photo ${index + 1}`}`,
  }));
}

const sheetPros = [
  row.pro1,
  row.pro2,
  row.pro3,
]
  .map(item => item.trim())
  .filter(Boolean);

const sheetCons = [
  row.con1,
  row.con2,
  row.con3,
]
  .map(item => item.trim())
  .filter(Boolean);

if (sheetPros.length > 0) {
  r.pros = sheetPros;
}

if (sheetCons.length > 0) {
  r.cons = sheetCons;
}

if (
  row.website &&
  !["http:", "https:"].includes(new URL(row.website).protocol)
) {
  throw new Error("Invalid website URL");
}

r.website = row.website;
    r.nycTransportation.driveTime = row.nycDriveTime || null;
    const hours = row.nycDriveTime.match(/^~?\s*(\d+(?:\.\d+)?)\s*hours?\s*$/i);
    r.nycTransportation.driveTimeHours = hours ? Number(hours[1]) : null;
    r.nycTransportation.busAvailable = flag(row.nycBusAvailable);
    if (r.nycTransportation.busAvailable === false) r.nycTransportation.transitOptions = r.nycTransportation.transitOptions.filter(o => o.type !== "bus");
    return [r];
  });
}
