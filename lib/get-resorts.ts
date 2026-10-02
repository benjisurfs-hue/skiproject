import "server-only";
import { resorts } from "../data/resorts";
import { mergeResortSheet } from "./resort-sheet";

const sheetId = "10l7L6Sr2DClVc439oWUYPV1gKZS_tHGvUOcVc1xjzBo";
const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Resorts`;

export async function getResorts() {
  try {
const response = await fetch(sheetUrl, {
  cache: "no-store",
  signal: AbortSignal.timeout(8000),
});
    if (!response.ok) throw new Error(`Sheet returned HTTP ${response.status}`);
    return mergeResortSheet(await response.text(), resorts);
  } catch (error) {
    console.error("Could not load Resorts sheet; using local resort data.", error);
    return resorts;
  }
}
