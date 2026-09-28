import type { Pass, Resort } from "../data/resort";

export type PassFilter = Pass | "none";
export const passFilters: readonly { key: PassFilter; label: string }[] = [
  { key: "Ikon", label: "Ikon Pass" },
  { key: "Epic", label: "Epic Pass" },
  { key: "Indy", label: "Indy Pass" },
  { key: "none", label: "Not on multi-pass" },
];

/** OR within passes, AND with states. All boxes start selected; none means no results. */
export function filterResorts(resorts: readonly Resort[], passes: readonly PassFilter[], states: readonly string[]): Resort[] {
  return resorts.filter(resort => states.includes(resort.state) && (
    resort.passes.length ? resort.passes.some(pass => passes.includes(pass)) : passes.includes("none")
  ));
}
