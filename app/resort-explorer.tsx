"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { resorts, type Resort } from "./resorts";

const sortOptions = [
  { key: "openingOrder", label: "Projected Opening Date", short: "Opening Date", direction: 1 },
  { key: "snowTotal", label: "2025/26 Snow Totals", short: "Snow Totals", direction: -1 },
  { key: "snowfall", label: "Snowfall", short: "Snowfall", direction: -1 },
  { key: "acres", label: "Mountain size", short: "Mountain size", direction: -1 },
  { key: "vertical", label: "Vertical", short: "Vertical", direction: -1 },
  { key: "wait", label: "Lift access", short: "Lift access", direction: 1 },
  { key: "price", label: "Affordability", short: "Affordability", direction: 1 },
] as const;
const upcomingStates = ["New York", "New Hampshire", "Massachusetts", "Maine", "Connecticut", "New Jersey", "Pennsylvania"];
const asset = (node: string, name: string, extension = "svg") => `/figma/${node.replace(":", "-")}-${name}.${extension}`;

function Icon({ node, name, size }: { node: string; name: string; size: number }) {
  return <Image src={asset(node, name)} width={size} height={size} alt="" unoptimized />;
}

function ResortCard({ resort, priority }: { resort: Resort; priority: boolean }) {
  const gallery = useRef<HTMLDivElement>(null);
  return <article className="resort-card" aria-labelledby={`${resort.id}-title`} data-figma-node={resort.figmaNode}>
    <header className="resort-heading"><p>{resort.region}</p><h2 id={`${resort.id}-title`}>{resort.name}</h2></header>
    <div className="photo-gallery" ref={gallery} role="region" aria-label={`${resort.name} photos. Use left and right arrow keys to browse.`} tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          gallery.current?.scrollBy({ left: (event.key === "ArrowRight" ? 1 : -1) * (gallery.current.clientWidth - 25), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      }}>
      {[1, 2, 3].map((photo) => <div className="photo" key={photo}>
        <Image src={asset(resort.figmaNode, `imgMedia${photo}`, "png")} alt={`${resort.name} — ${["mountain and ski trails", "resort experience", "mountain experience"][photo - 1]}`} fill sizes="(max-width: 767px) 90vw, 380px" priority={priority && photo === 1} />
      </div>)}
    </div>
    <div className="card-content">
      <div className="overview">
        <div className="tags">
          <span className={`tag pass-${resort.pass.toLowerCase()}`}>{resort.pass}</span>
          <span className={`tag tier-${resort.tier.toLowerCase()}`}>{resort.tier}</span>
          <span className="character"><Icon node={resort.figmaNode} name="imgPeopleOutline" size={16} />{resort.character}</span>
        </div>
        <dl className="headline-facts">
          <div><dt>Projected Opening Date</dt><dd>{resort.opening}</dd></div>
          <div><dt>2025/26 Snow Totals</dt><dd>{resort.snowTotal}&quot;</dd></div>
        </dl>
        <ul className="highlights">{resort.highlights.map((highlight, index) => <li key={highlight}>
          <Icon node={resort.figmaNode} name={["imgNounSnowflake75393611", "imgFrame32", "imgNounSnowflake75393612"][index]} size={60} /><span>{highlight}</span>
        </li>)}</ul>
        <p className="description">{resort.description}</p>
        <div className="pros-cons">{(["pros", "cons"] as const).map((kind) => <section key={kind} aria-label={`${resort.name} ${kind}`}>
          <h3>{kind === "pros" ? "Pros" : "Cons"}</h3><ul>{resort[kind].map((item) => <li key={item}>{item}</li>)}</ul>
        </section>)}</div>
      </div>
      <section className="comparisons" aria-label={`${resort.name} comparison`}>
        <h3>How It Compares</h3><p className="comparison-subtitle">Against Northeast resorts</p>
        <dl className="comparison-list">{resort.comparisons.map((stat) => <div className="comparison" key={stat.label}>
          <dt>{stat.label}</dt><dd><span className="bar" aria-hidden="true"><span style={{ width: `${stat.fraction * 100}%` }} /></span><span className="comparison-value">{stat.value}</span></dd>
        </div>)}</dl>
        <section className="terrain" aria-label={`${resort.name} terrain`}>
          <h3>Terrain</h3><dl>{resort.terrain.map((item, index) => <div key={item.label}>
            <dt><span className="terrain-icon">{index === 0 || index === 3 ? <Icon node={resort.figmaNode} name={index === 0 ? "imgFrame46" : "imgFrame49"} size={16} /> : <span className={index === 1 ? "blue-run" : "black-run"} />}</span>{item.label}</dt><dd>{item.count}</dd>
          </div>)}</dl>
        </section>
      </section>
      <a className="resort-link" href={resort.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${resort.name} website (opens in a new tab)`}>Visit resort website</a>
    </div>
  </article>;
}

export default function ResortExplorer() {
  const [screen, setScreen] = useState<"results" | "sort" | "states">("results");
  // Preserve the authored Figma order until the visitor chooses a sort.
  const [sortIndex, setSortIndex] = useState<number | null>(null);
  const sortTrigger = useRef<HTMLButtonElement>(null);
  const stateTrigger = useRef<HTMLButtonElement>(null);
  const panelHeading = useRef<HTMLHeadingElement>(null);
  const previousScroll = useRef(0);
  const selectedSort = sortOptions[sortIndex ?? 0];
  const sortedResorts = sortIndex === null ? resorts : [...resorts].sort((a, b) => (a[selectedSort.key] - b[selectedSort.key]) * selectedSort.direction);
  function openScreen(next: "sort" | "states") {
    if (screen === "results") previousScroll.current = window.scrollY;
    setScreen(next); window.scrollTo(0, 0);
    requestAnimationFrame(() => panelHeading.current?.focus());
  }
  function back() {
    const previousScreen = screen; setScreen("results");
    requestAnimationFrame(() => {
      (previousScreen === "sort" ? sortTrigger : stateTrigger).current?.focus({ preventScroll: true });
      window.scrollTo(0, previousScroll.current);
    });
  }
  return <div className="site-shell" onKeyDown={(event) => { if (event.key === "Escape" && screen !== "results") back(); }}>
    <a href="#main" className="skip-link">Skip to resorts</a>
    <header className="toolbar">
      {screen === "results" ? <button ref={sortTrigger} onClick={() => openScreen("sort")} aria-label={`Sort resorts: ${selectedSort.short}`}><Icon node="205:10023" name="imgFilterList" size={24} /><span>{selectedSort.short}</span></button> : <button onClick={back}><Icon node="217:12197" name="imgIconChevronLeft" size={24} /><span>Back To Results</span></button>}
      {screen !== "states" && <button ref={stateTrigger} onClick={() => openScreen("states")} aria-label="Filter resorts by state: Vermont">Vermont</button>}
    </header>
    <main id="main">
      {screen === "results" ? <>
        <h1 className="sr-only">Vermont ski resorts</h1>
        <p className="sr-only" aria-live="polite">{resorts.length} resorts{sortIndex === null ? "" : ` sorted by ${selectedSort.label}`}</p>
        <div className="resort-list">{sortedResorts.map((resort, index) => <ResortCard key={resort.id} resort={resort} priority={index === 0} />)}</div>
        <footer>Sample resort data · 2025/26 season</footer>
      </> : <section className="selection-panel">
        <h1 ref={panelHeading} tabIndex={-1}>{screen === "sort" ? "Sort Resorts By:" : "Show Resorts In:"}</h1>
        {screen === "sort" ? <div className="options" role="group" aria-label="Sort resorts">
          {sortOptions.map((option, index) => <button key={option.key} aria-pressed={(sortIndex ?? 0) === index} className={(sortIndex ?? 0) === index ? "selected" : ""} onClick={() => { setSortIndex(index); previousScroll.current = 0; back(); }}>
            <Icon node="217:12197" name={(sortIndex ?? 0) === index ? "imgIconCheck" : "imgIconCheck1"} size={24} />{option.label}
          </button>)}
        </div> : <>
          <div className="options"><button className="selected" aria-pressed="true" onClick={back}><Icon node="217:12197" name="imgIconCheck" size={24} />Vermont</button></div>
          <h2>Coming Soon:</h2>
          <div className="options">{upcomingStates.map((state) => <button key={state} disabled><Icon node="217:12197" name="imgIconCheck1" size={24} />{state}</button>)}</div>
        </>}
      </section>}
    </main>
  </div>;
}
