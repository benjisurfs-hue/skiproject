"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { Pass, TransitOption } from "../data/resort";
import InfoDialog from "./info-dialog";

export type ResortInfo =
  | { kind: "pass"; pass: Pass }
  | { kind: "drive"; resortName: string; driveTime: string }
  | { kind: "transit"; title: string; type: TransitOption["type"]; resortName: string; options: TransitOption[] };

type OpenInfo = (info: ResortInfo, trigger: HTMLElement) => void;
const InfoContext = createContext<OpenInfo | null>(null);
const passWebsites: Record<Pass, string> = {
  Ikon: "https://www.ikonpass.com/",
  Epic: "https://www.epicpass.com/",
  Indy: "https://www.indyskipass.com/",
};

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="info-external-link" href={href} target="_blank" rel="noopener noreferrer">
    {children} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
  </a>;
}

function InfoContent({ info }: { info: ResortInfo }) {
  if (info.kind === "pass") return <>
    <p>This resort participates in the {info.pass} Pass. Access, blackout dates, reservation requirements, and number of included days can vary by pass type and resort.</p>
    <ExternalLink href={passWebsites[info.pass]}>View {info.pass} Pass</ExternalLink>
  </>;

  if (info.kind === "drive") return <>
    <p>Estimated driving time from New York City under normal conditions. Winter weather, traffic and departure time can significantly affect actual travel time.</p>
    <div className="info-summary"><h3>{info.resortName}</h3><p>{info.driveTime}</p></div>
  </>;

  return <>
    <p className="info-resort-name">{info.resortName}</p>
    {info.type === "bus" && <p>Scheduled ski trips from NYC are available for this resort during parts of the ski season. Schedules and availability vary by date.</p>}
    {info.type === "train" && <p>Ground transportation to the resort is required.</p>}
    {info.type === "bus" && <h3>Providers</h3>}
    <ul className="info-providers">
      {info.options.map((option, index) => <li key={`${option.provider}-${option.url}-${index}`}>
        <h3>{option.provider}</h3>
        <p>{option.label}</p>
        {option.station && <p className="info-station">{option.station}</p>}
        {option.connection && <p>{option.connection}</p>}
        {option.note && <p className="info-note">{option.note}</p>}
        <ExternalLink href={option.url}>{info.type === "bus" ? "View trips" : `View ${option.provider}`}</ExternalLink>
      </li>)}
    </ul>
    <p className="info-note">Check the provider&apos;s current schedule before planning your trip.</p>
  </>;
}

export default function ResortInfoProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<{ info: ResortInfo; trigger: HTMLElement } | null>(null);
  const info = selection?.info;
  const openInfo = useCallback<OpenInfo>((next, element) => {
    setSelection({ info: next, trigger: element });
  }, []);
  const closeInfo = useCallback(() => setSelection(null), []);
  const title = info?.kind === "pass" ? `${info.pass} Pass`
    : info?.kind === "drive" ? "Drive time from NYC" : info?.title ?? "";

  return <InfoContext.Provider value={openInfo}>
    {children}
    {info && selection && <InfoDialog title={title} onClose={closeInfo} returnFocus={selection.trigger}>
      <InfoContent info={info} />
    </InfoDialog>}
  </InfoContext.Provider>;
}

export function useResortInfo() {
  const open = useContext(InfoContext);
  if (!open) throw new Error("Resort metadata must be inside ResortInfoProvider");
  return open;
}
