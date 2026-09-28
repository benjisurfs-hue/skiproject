import type { Resort } from "../data/resort";

export type MetricKey = "annualSnowfallIn" | "skiableAcres" | "verticalFt" | "averageLiftWaitMinutes" | "dayTicketPrice";
const number = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 1 });

export const comparisonMetrics = [
  { key: "annualSnowfallIn", label: "Snowfall", higherIsBetter: true, format: (value: number) => `${number(value)} in / year` },
  { key: "skiableAcres", label: "Mountain size", higherIsBetter: true, format: (value: number) => `${number(value)} acres` },
  { key: "verticalFt", label: "Vertical drop", higherIsBetter: true, format: (value: number) => `${number(value)} ft` },
  { key: "averageLiftWaitMinutes", label: "Lift access", higherIsBetter: false, format: (value: number) => `${number(value)} min wait` },
  { key: "dayTicketPrice", label: "Affordability", higherIsBetter: false, format: (value: number) => `$${number(value)} / day` },
] as const satisfies readonly { key: MetricKey; label: string; higherIsBetter: boolean; format: (value: number) => string }[];

export function isValidMetric(value: number | null): value is number {
  return value !== null && Number.isFinite(value) && value >= 0;
}

/** Min–max normalization over an explicit reference cohort, never the visible subset.
 * No variation (including a singleton) earns a neutral 50; missing data earns no score.
 * Values beyond the cohort bounds are clamped. Zero wait/price is valid.
 */
export function normalize(value: number | null, reference: readonly (number | null)[], higherIsBetter: boolean): number | null {
  if (!isValidMetric(value)) return null;
  const valid = reference.filter(isValidMetric);
  if (!valid.length) return null;
  const min = Math.min(...valid), max = Math.max(...valid);
  if (min === max) return 50;
  const fraction = (value - min) / (max - min);
  return Math.round(Math.max(0, Math.min(1, higherIsBetter ? fraction : 1 - fraction)) * 100);
}

export function getComparisons(resort: Resort, reference: readonly Resort[]) {
  return comparisonMetrics.map(metric => {
    const raw = resort[metric.key];
    return {
      key: metric.key,
      label: metric.label,
      score: normalize(raw, reference.map(item => item[metric.key]), metric.higherIsBetter),
      value: isValidMetric(raw) ? metric.format(raw) : "Not available",
    };
  });
}

export const sortOptions = [
  { key: "openingOrder", label: "Projected Opening Date", short: "Opening Date" },
  { key: "snowTotalIn", label: "2025/26 Snow Totals", short: "Snow Totals" },
  ...comparisonMetrics.map(metric => ({ key: metric.key, label: metric.label, short: metric.label })),
] as const;

export function sortResorts(resorts: readonly Resort[], key: (typeof sortOptions)[number]["key"]): Resort[] {
  const metric = comparisonMetrics.find(metric => metric.key === key);
  const higherIsBetter = metric?.higherIsBetter ?? key === "snowTotalIn";
  const value = (resort: Resort) => key === "openingOrder" || key === "snowTotalIn" ? resort.season[key] : resort[key];
  return [...resorts].sort((a, b) => {
    const left = value(a), right = value(b);
    if (!isValidMetric(left)) return isValidMetric(right) ? 1 : 0;
    if (!isValidMetric(right)) return -1;
    return (left - right) * (higherIsBetter ? -1 : 1);
  });
}
