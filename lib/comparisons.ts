import type { Resort, TerrainParks } from "../data/resort";



export type MetricKey = "annualSnowfallIn" | "skiableAcres" | "verticalFt" | "liftAccess" | "affordability";
export const formatNumber = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 1 });
export const comparisonMetrics = [
  { key: "annualSnowfallIn", label: "Snowfall" },
  { key: "skiableAcres", label: "Mountain Size" },
  { key: "verticalFt", label: "Vertical" },
  { key: "liftAccess", label: "Lift Access" },
  { key: "affordability", label: "Affordability" },
] as const;

export function isValidMetric(value: number | null): value is number {
  return value !== null && Number.isFinite(value) && value >= 0;
}

/** Use the entire V1 dataset as reference, never filtered results or a future selection.
 * Equal values earn 50. Missing values are unscored; values outside bounds are clamped.
 */
export function normalize(value: number | null, reference: readonly (number | null)[]): number | null {
  if (!isValidMetric(value)) return null;
  const valid = reference.filter(isValidMetric);
  if (!valid.length) return null;
  const min = Math.min(...valid), max = Math.max(...valid);
  if (min === max) return 50;
  return Math.max(0, Math.min(100, (value - min) / (max - min) * 100));
}

export function metricValue(resort: Resort, key: MetricKey): number | null {
  return key === "liftAccess" || key === "affordability" ? resort[key].score : resort[key];
}

export function getComparisons(resort: Resort, reference: readonly Resort[]) {
  return comparisonMetrics.map(({ key, label }) => {
    const raw = metricValue(resort, key);
    const prototype = key === "liftAccess" || key === "affordability";
    const rating = prototype ? resort[key] : null;
    const score = prototype ? (isValidMetric(raw) && raw >= 1 && raw <= 5 ? raw / 5 * 100 : null)
      : normalize(raw, reference.map(item => metricValue(item, key)));
    const value = !isValidMetric(raw) ? "Not available" : rating
      ? `${rating.score}/5 · ${rating.label}`
      : `${formatNumber(raw)} ${key === "annualSnowfallIn" ? "in / year" : key === "skiableAcres" ? "acres" : "ft"}`;
    return { key, label, score, value, prototype, detail: key === "affordability" ? resort.affordability.priceBand : null };
  });
}

export const sortOptions = [
  {
    key: "openingOrder",
    label: "Projected Opening Date",
    short: "Opening Date",
    icon: "calendar",
  },
  {
    key: "distance",
    label: "Drive Time from NYC",
    short: "Drive Time from NYC",
    icon: "car",
  },
  {
    key: "annualSnowfallIn",
    label: "Average Snowfall",
    short: "Average Snowfall",
    icon: "snowflake",
  },
  {
    key: "skiableAcres",
    label: "Mountain Size",
    short: "Mountain Size",
    icon: "mountain",
  },
  {
    key: "verticalFt",
    label: "Vertical",
    short: "Vertical",
    icon: "move-up",
  },
  {
    key: "liftAccess",
    label: "Lift Access",
    short: "Lift Access",
    icon: "cable-car",
  },
  {
    key: "affordability",
    label: "Affordability",
    short: "Affordability",
    icon: "badge-dollar-sign",
  },
] as const;
export type SortKey = (typeof sortOptions)[number]["key"];
export function sortResorts(resorts: readonly Resort[], key: SortKey): Resort[] {
  const value = (resort: Resort) => key === "distance" ? resort.nycTransportation.driveTimeHours
    : key === "openingOrder" ? resort.season[key] : metricValue(resort, key);
  return [...resorts].sort((a, b) => {
    const left = value(a), right = value(b);
    if (!isValidMetric(left)) return isValidMetric(right) ? 1 : 0;
    if (!isValidMetric(right)) return -1;
    return (left - right) * (key === "openingOrder" || key === "distance" ? 1 : -1);
  });
}

export function formatTerrainParks(parks: TerrainParks): string {
  return parks.count !== undefined ? String(parks.count) : `${parks.min}–${parks.max}`;
}
