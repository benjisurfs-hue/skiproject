"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { resorts } from "../data/resorts";
import type { Resort } from "../data/resort";
import { formatNumber, formatTerrainParks, getComparisons, sortOptions, sortResorts } from "../lib/comparisons";

import { filterResorts, passFilters, type PassFilter } from "../lib/filters";

const asset = (node: string, name: string, extension = "svg") => `/figma/${node.replace(":", "-")}-${name}.${extension}`;

function Icon({ node, name, size }: { node: string; name: string; size: number }) {
  return <Image src={asset(node, name)} width={size} height={size} alt="" unoptimized />;
}

function ResortCard({ resort, priority }: { resort: Resort; priority: boolean }) {
  const gallery = useRef<HTMLDivElement>(null);
  const iconNode = resort.figmaNode ?? "205:10024";
  return <article className="resort-card" aria-labelledby={`${resort.id}-title`} data-figma-node={resort.figmaNode ?? undefined} data-resort-id={resort.id}>
    <header className="resort-heading"><p>{resort.region}</p><h2 id={`${resort.id}-title`}>{resort.name}</h2></header>
    <div className="photo-gallery" ref={gallery} role="region" aria-label={`${resort.name} photos. Use left and right arrow keys to browse.`} tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          gallery.current?.scrollBy({ left: (event.key === "ArrowRight" ? 1 : -1) * (gallery.current.clientWidth - 25), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      }}>
      {resort.media.map((media, index) => <div className="photo" key={media.src}>
        <Image src={media.src} alt={media.alt} fill sizes="(max-width: 767px) 90vw, 380px" priority={priority && index === 0} />
      </div>)}
    </div>
    <div className="card-content">
      <div className="overview">
        <div className="tags">
          {resort.passes.length ? resort.passes.map(pass => <span key={pass} className={`tag pass-${pass.toLowerCase()}`}>{pass}</span>) : <span className="tag">Not on multi-pass</span>}
          {resort.tier && <span className={`tag tier-${resort.tier.toLowerCase()}`}>{resort.tier}</span>}
          {resort.character && <span className="character"><Icon node={iconNode} name="imgPeopleOutline" size={16} />{resort.character}</span>}
        </div>
        <dl className="headline-facts">
          <div><dt>Projected Opening Date</dt><dd>{resort.season.projectedOpening ?? "Not available"}</dd></div>
          <div><dt>{resort.season.label} Snow Totals</dt><dd>{resort.season.snowTotalIn === null ? "Not available" : `${resort.season.snowTotalIn}″`}</dd></div>
        </dl>
        {resort.season.status === "sample" && <p className="data-note">Opening date and season total are design samples.</p>}
        <ul className="highlights">{resort.highlights.map((highlight) => <li key={highlight.text}>
          <Image src={highlight.iconSrc} width={60} height={60} alt="" unoptimized /><span>{highlight.text}</span>
        </li>)}{Array.from({ length: Math.max(0, 3 - resort.highlights.length) }, (_, index) => <li className="pending-highlight" key={`pending-${index}`}>Highlight pending</li>)}</ul>
        <p className="description">{resort.description ?? "Description not yet available."}</p>
        <div className="pros-cons">{(["pros", "cons"] as const).map((kind) => <section key={kind} aria-label={`${resort.name} ${kind}`}>
          <h3>{kind === "pros" ? "Pros" : "Cons"}</h3><ul>{resort[kind].map((item) => <li key={item}>{item}</li>)}{resort[kind].length < (kind === "pros" ? 4 : 3) && <li className="data-note">{(kind === "pros" ? 4 : 3) - resort[kind].length} {kind} pending</li>}</ul>
        </section>)}</div>
      </div>
      <section className="comparisons" aria-label={`${resort.name} comparison`}>
        <h3>How It Compares</h3><p className="comparison-subtitle">Across 16 Vermont resorts</p>
        <dl className="comparison-list">{getComparisons(resort, resorts).map((stat) => <div className="comparison" key={stat.label}>
          <dt>{stat.label}</dt><dd><span className="bar" role={stat.score === null ? undefined : "meter"} aria-label={`${stat.label}: ${stat.value}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={stat.score ?? undefined} aria-valuetext={stat.score === null ? "Not available" : `${Math.round(stat.score)} out of 100; more fill is better${stat.prototype ? "; prototype rating" : "; Vermont V1 comparison"}`} title={stat.score === null ? "Not available" : `${Math.round(stat.score)}/100 — ${stat.prototype ? "prototype rating" : "Vermont V1 comparison"}; more fill is better`}><span style={{ width: `${stat.score ?? 0}%` }} /></span><span className="comparison-value">{stat.value}{stat.detail && <small>{stat.detail}</small>}</span></dd>
        </div>)}</dl>
        <p className="data-note">Lift Access &amp; Affordability are prototype ratings, not live waits or prices.</p>
        <section className="terrain" aria-label={`${resort.name} terrain`}>
          <h3>Terrain</h3><dl>{[{ label: "Green runs (Beginner)", count: resort.terrain ? `${formatNumber(resort.terrain.beginner)}%` : "Not available" }, { label: "Blue runs (Intermediate)", count: resort.terrain ? `${formatNumber(resort.terrain.intermediate)}%` : "Not available" }, { label: "Black runs (Advanced)", count: resort.terrain ? `${formatNumber(resort.terrain.advanced)}%` : "Not available" }, { label: "Terrain Parks (seasonal)", count: formatTerrainParks(resort.terrainParks) }].map((item, index) => <div key={item.label}>
            <dt><span className="terrain-icon">{index === 0 || index === 3 ? <Icon node={iconNode} name={index === 0 ? "imgFrame46" : "imgFrame49"} size={16} /> : <span className={index === 1 ? "blue-run" : "black-run"} />}</span>{item.label}</dt><dd>{item.count}</dd>
          </div>)}</dl>
        </section>
      </section>
      <section className="mountain-stats" aria-label={`${resort.name} mountain statistics`}>
        <h3>Mountain Stats</h3>
        <dl>{([{ label: "Trails", value: resort.trailCount }, { label: "Lifts", value: resort.liftCount }, { label: "Summit elevation", value: resort.summitElevationFt, unit: " ft" }, { label: "Base elevation", value: resort.baseElevationFt, unit: " ft" }]).map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value === null ? "Not available" : `${formatNumber(stat.value)}${stat.unit ?? ""}`}</dd></div>)}</dl>
      </section>
      <a className="resort-link" href={resort.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${resort.name} website (opens in a new tab)`}>Visit resort website</a>
    </div>
  </article>;
}

export default function ResortExplorer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortIndex, setSortIndex] = useState(0);
  const [selectedPasses, setSelectedPasses] = useState<PassFilter[]>(passFilters.map(filter => filter.key));
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigation = useRef<HTMLDetailsElement>(null);
  const sortTrigger = useRef<HTMLElement>(null);
  const panelHeading = useRef<HTMLHeadingElement>(null);
  const previousScroll = useRef(0);
  const selectedSort = sortOptions[sortIndex];
  const visibleResorts = sortResorts(filterResorts(resorts, selectedPasses, ["Vermont"]), selectedSort.key);
  // All pass categories selected is the unfiltered default, not four active filters.
  const activeFilterCount = selectedPasses.length === passFilters.length ? 0 : selectedPasses.length;
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setShowBackToTop(window.scrollY >= window.innerHeight * 1.75));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);
  function openMenu() {
    previousScroll.current = window.scrollY;
    if (navigation.current) navigation.current.open = true;
  }
  function back() {
    if (navigation.current) navigation.current.open = false;
  }
  function handleNavigationToggle(event: React.SyntheticEvent<HTMLDetailsElement>) {
    const open = event.currentTarget.open;
    setMenuOpen(open);
    requestAnimationFrame(() => {
      if (open) {
        window.scrollTo(0, 0);
        panelHeading.current?.focus({ preventScroll: true });
      } else {
        sortTrigger.current?.focus({ preventScroll: true });
        window.scrollTo(0, previousScroll.current);
      }
    });
  }
  function backToTop() {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function togglePass(pass: PassFilter) {
    setSelectedPasses(current => current.includes(pass) ? current.filter(item => item !== pass) : [...current, pass]);
    previousScroll.current = 0;
  }
  const backButton = <button type="button" onClick={back}><Icon node="217:12197" name="imgIconChevronLeft" size={24} /><span>Back To Results</span></button>;
  return <div className="site-shell" onKeyDown={(event) => { if (event.key === "Escape" && navigation.current?.open) back(); }}>
    <a href="#main" className="skip-link">Skip to resorts</a>
    <details className="filter-navigation" ref={navigation} onToggle={handleNavigationToggle}>
      <summary className="toolbar" ref={sortTrigger} onClick={() => {
        if (!navigation.current?.open) previousScroll.current = window.scrollY;
      }} aria-controls="filter-sort-panel">
        <span className="toolbar-control navigation-open"><Icon node="205:10023" name="imgFilterList" size={24} /><span>Filter / Sort{activeFilterCount > 0 ? ` · ${activeFilterCount}` : ""}</span></span>
        <span className="toolbar-control navigation-close"><Icon node="217:12197" name="imgIconChevronLeft" size={24} /><span>Back To Results</span></span>
      </summary>
      <section id="filter-sort-panel" className="selection-panel" data-figma-node="217:12197" aria-label="Filter and sort resorts">
        <div className="sort-section">
          <h1 ref={panelHeading} tabIndex={-1}>Sort Resorts By:</h1>
          <div className="options sort-options" role="radiogroup" aria-label="Sort resorts">
            {sortOptions.map((option, index) => <label key={option.key} className={`sort-option${sortIndex === index ? " selected" : ""}`}>
              <input className="sr-only" type="radio" name="resort-sort" checked={sortIndex === index} onChange={() => { setSortIndex(index); previousScroll.current = 0; }} />
              <span>{option.label}</span>
            </label>)}
          </div>
        </div>
        <div className="filter-section">
          <h2>By Multi-pass</h2>
          <div className="options" role="group" aria-label="Multi-pass filters">
            {passFilters.map(filter => <label className="filter-option" key={filter.key}>
              <input className="sr-only" type="checkbox" checked={selectedPasses.includes(filter.key)} onChange={() => togglePass(filter.key)} />
              <span className="filter-mark"><Icon node="217:12197" name="imgIconCheck" size={24} /></span><span>{filter.label}</span>
            </label>)}
          </div>

        </div>
        <div className="menu-bottom toolbar">{backButton}</div>
      </section>
    </details>
    <main id="main">
      <h1 className="sr-only">Vermont ski resorts</h1>
      <p className="sr-only" aria-live="polite">{visibleResorts.length} resorts sorted by {selectedSort.label}</p>
      <div className="resort-list">{visibleResorts.map((resort, index) => <ResortCard key={resort.id} resort={resort} priority={index === 0} />)}</div>
      {!visibleResorts.length && <p className="empty-results">No resorts match these filters. <button type="button" onClick={openMenu}>Adjust filters</button></p>}
      <footer>Vermont V1 · Local data · Prototype ratings</footer>
    </main>
    {!menuOpen && showBackToTop && <button type="button" className="back-to-top" aria-label="Back to top" onClick={backToTop}>↑ <span>Back to top</span></button>}
  </div>;
}
