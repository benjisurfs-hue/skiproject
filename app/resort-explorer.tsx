"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { resorts } from "../data/resorts";
import type { Resort } from "../data/resort";
import { formatNumber, formatTerrainParks, getComparisons, sortOptions, sortResorts } from "../lib/comparisons";

import { filterResorts, passFilters, type PassFilter } from "../lib/filters";
import Link from "next/link";
import ResortMetadata from "./resort-metadata";
const asset = (node: string, name: string, extension = "svg") => `/figma/${node.replace(":", "-")}-${name}.${extension}`;

function Icon({ node, name, size }: { node: string; name: string; size: number }) {
  return <Image src={asset(node, name)} width={size} height={size} alt="" unoptimized />;
}

function ResortCard({ resort, priority }: { resort: Resort; priority: boolean }) {
  const gallery = useRef<HTMLDivElement>(null);
  return <article className="resort-card" aria-labelledby={`${resort.id}-title`} data-figma-node={resort.figmaNode ?? undefined} data-resort-id={resort.id}>
    <header className="resort-detail-header resort-heading"><p>{resort.region}</p><h2 id={`${resort.id}-title`}>{resort.name}</h2></header>
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
        <ResortMetadata resort={resort} />
        <dl className="headline-facts">
          <div><dt>Projected Opening Date</dt><dd>{resort.season.projectedOpening ?? "Not available"}</dd></div>
          <div><dt>{resort.season.label} Snow Totals</dt><dd>{resort.season.snowTotalIn === null ? "Not available" : `${resort.season.snowTotalIn}″`}</dd></div>
        </dl>
        {resort.season.status === "sample" && <p className="data-note">Opening date and season total are design samples.</p>}
        <ul className="highlights">{resort.highlights.map((highlight) => <li key={highlight.text}>
          <Image src={highlight.iconSrc} width={60} height={60} alt="" unoptimized /><span>{highlight.text}</span>
        </li>)}{Array.from({ length: Math.max(0, 3 - resort.highlights.length) }, (_, index) => <li className="pending-highlight" key={`pending-${index}`}>Highlight pending</li>)}</ul>
<p className="description">
  {resort.description ?? "Description not yet available."}
</p>

<div className="pros-cons">
  <section aria-label={`${resort.name} pros`}>
    <ul>
      {resort.pros.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>

  <section aria-label={`${resort.name} cons`}>
    <ul>
      {resort.cons.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
</div>

</div>
     
<Link
  className="resort-link"
  href={`/resorts/${resort.id}`}
>
  View resort
</Link>    </div>
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
  useEffect(() => {
  const headers = document.querySelectorAll<HTMLElement>(".resort-heading");

  const update = () => {
    headers.forEach((header) => {
      const card = header.closest<HTMLElement>(".resort-card");
      if (!card) return;

      const headerRect = header.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const stickyTop = parseFloat(getComputedStyle(header).top) || 0;

      const isStuck =
        headerRect.top <= stickyTop &&
        cardRect.bottom > stickyTop + header.offsetHeight;

      header.classList.toggle("is-stuck", isStuck);
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  update();

  return () => window.removeEventListener("scroll", update);
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
