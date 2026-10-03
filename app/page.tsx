import ResortExplorer from "./resort-explorer";
import { getResorts } from "../lib/get-resorts";

export const dynamic = "force-dynamic";

export default async function Home() {
  return <ResortExplorer resorts={await getResorts()} />;
}