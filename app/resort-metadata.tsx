"use client";

import { Bus, Car, TrainFront, type LucideIcon } from "lucide-react";
import type { Resort, TransitOption } from "../data/resort";
import { useResortInfo } from "./resort-info-provider";

// Add a presentation here when adding a new transportation type; providers come entirely from data.
const transitPresentation: Record<TransitOption["type"], { label: string; title: string; icon: LucideIcon }> = {
  train: { label: "Train", title: "Train from NYC", icon: TrainFront },
  bus: { label: "Bus", title: "Bus from NYC", icon: Bus },
  shuttle: { label: "Shuttle", title: "Shuttle transportation", icon: Bus },
};

type MetadataResort = Pick<Resort, "name" | "passes" | "tier" | "nycTransportation">;

export default function ResortMetadata({ resort }: { resort: MetadataResort }) {
  const openInfo = useResortInfo();
  const { driveTime, transitOptions } = resort.nycTransportation;
  const transitTypes = Object.keys(transitPresentation) as TransitOption["type"][];

  return <div className="tags resort-metadata">
    {resort.passes.length ? resort.passes.map(pass => <button
      key={pass} type="button" className={`tag metadata-pass pass-${pass.toLowerCase()}`}
      aria-haspopup="dialog" aria-label={`${pass} Pass information for ${resort.name}`}
      onClick={(event) => { event.stopPropagation(); openInfo({ kind: "pass", pass }, event.currentTarget); }}
    >{pass} Pass</button>) : <span className="no-multipass">Multi-pass</span>}
    {resort.tier && <span className={`tag tier-${resort.tier.toLowerCase()}`}>{resort.tier}</span>}
    {driveTime && <button
      type="button" className="transportation-button" aria-haspopup="dialog"
      aria-label={`Drive time from NYC to ${resort.name}: ${driveTime}`}
      onClick={(event) => { event.stopPropagation(); openInfo({ kind: "drive", resortName: resort.name, driveTime }, event.currentTarget); }}
    ><Car size={16} strokeWidth={1.5} aria-hidden="true" /><span>NYC{driveTime}</span></button>}
    {transitTypes.map(type => {
      const options = transitOptions.filter(option => option.type === type);
      if (type === "bus" && resort.nycTransportation.busAvailable === true && !options.length) {
        return <span key={type} className="transportation-button"><Bus size={16} strokeWidth={1.5} aria-hidden="true" />Bus</span>;
      }
      if (!options.length) return null;
      const { label, title, icon: Icon } = transitPresentation[type];
      return <button key={type} type="button" className="transportation-button" aria-haspopup="dialog"
        aria-label={`${label} information for ${resort.name}`}
        onClick={(event) => { event.stopPropagation(); openInfo({ kind: "transit", title, type, resortName: resort.name, options }, event.currentTarget); }}
      ><Icon size={16} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span></button>;
    })}
  </div>;
}
