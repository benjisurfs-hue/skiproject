import ResortExplorer from "./resort-explorer";
import { getResorts } from "../lib/get-resorts";
export const revalidate = 300;
export default async function Home() {
  return <ResortExplorer resorts={await getResorts()} />;
}
