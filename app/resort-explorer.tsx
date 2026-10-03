"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  CableCar,
  CalendarDays,
  BadgeDollarSign,
  Snowflake,
  Car,
  Mountain,
  MoveUp,
} from "lucide-react";

import type { Resort } from "../data/resort";

import {
  sortOptions,
  sortResorts,
} from "../lib/comparisons";

import {
  filterResorts,
  passFilters,
  type PassFilter,
} from "../lib/filters";

import ResortMetadata from "./resort-metadata";
const asset = (node: string, name: string, extension = "svg") => `/figma/${node.replace(":", "-")}-${name}.${extension}`;

function Icon({ node, name, size }: { node: string; name: string; size: number }) {
  return <Image src={asset(node, name)} width={size} height={size} alt="" unoptimized />;
}

function formatOpeningDate(date: string | null | undefined) {
  if (!date) return "To be announced";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
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
      {resort.media.length > 0 ? (
  resort.media.map((media, index) => (
    <div className="photo" key={media.src}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 767px) 90vw, 380px"
        priority={priority && index === 0}
      />
    </div>
  ))
) : (
  <div className="photo photo-placeholder">
    <span>Photography coming soon</span>
  </div>
)}
    </div>
    <div className="card-content">
      <div className="overview">
        <ResortMetadata resort={resort} />
<dl className="headline-facts">
  <div>
    <dt>Projected Opening Date</dt>
    <dd>{formatOpeningDate(resort.season.projectedOpening)}</dd>
  </div>

  <div>
    <dt>Average Snowfall</dt>
    <dd>
      {resort.annualSnowfallIn === null
        ? "Not available"
        : `${resort.annualSnowfallIn}″`}
    </dd>
  </div>
</dl>
        {resort.highlights.length > 0 && (
  <ul className="highlights">
    {resort.highlights.map((highlight) => (
      <li key={highlight.text}>
        <Image
          src={highlight.iconSrc}
          width={60}
          height={60}
          alt=""
          unoptimized
        />
        <span>{highlight.text}</span>
      </li>
    ))}
  </ul>
)}
<p className="description">
  {resort.description ?? "Description not yet available."}
</p>

{(resort.pros.length > 0 || resort.cons.length > 0) && (
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
)}

</div>
     
<Link
  className="resort-link"
  href={`/resorts/${resort.id}`}
>
  Ski Area Details &#x2192;
</Link>    </div>
  </article>;
}
const sortIcons = {
  calendar: CalendarDays,
  car: Car,
  snowflake: Snowflake,
  mountain: Mountain,
  "move-up": MoveUp,
  "cable-car": CableCar,
  "badge-dollar-sign": BadgeDollarSign,
};
export default function ResortExplorer({ resorts }: { resorts: Resort[] }) {
  const states = [...new Set(resorts.map(resort => resort.state))].sort();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useRef<HTMLDetailsElement>(null);
  const menuSheet = useRef<HTMLDivElement>(null);
  const menuAnimation = useRef<Animation | null>(null);
  const closingMenu = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressWidth = 2 + scrollProgress * 98;

  useEffect(() => {
  const updateProgress = () => {
    // The toolbar tracks the results, not scrolling through the filter menu.
    if (navigation.current?.open) return;
    const scrollTop = Math.max(0, window.scrollY);
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

    setScrollProgress(progress);
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  return () => {
    window.removeEventListener("scroll", updateProgress);
    window.removeEventListener("resize", updateProgress);
  };
}, [menuOpen]);
  const [sortIndex, setSortIndex] = useState(0);
  const [selectedPasses, setSelectedPasses] = useState<PassFilter[]>(passFilters.map(filter => filter.key));
const [selectedStates, setSelectedStates] = useState<string[]>(states);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sortTrigger = useRef<HTMLElement>(null);
  const panelHeading = useRef<HTMLHeadingElement>(null);
  const previousScroll = useRef(0);
  const selectedSort = sortOptions[sortIndex];
  const passLabel =
  selectedPasses.length === passFilters.length
    ? "All Passes"
    : selectedPasses.length === 0
      ? "No Passes"
      : selectedPasses
          .map(pass => passFilters.find(filter => filter.key === pass)?.label)
          .filter(Boolean)
          .join(" + ");

const stateLabel =
  selectedStates.length === states.length
    ? "All States"
    : selectedStates.length === 0
      ? "No States"
      : selectedStates.join(" + ");
const visibleResorts = sortResorts(
  filterResorts(resorts, selectedPasses, selectedStates),
  selectedSort.key
);


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

      const stickyTop = parseFloat(getComputedStyle(header).top) || 0;

      const isStuck = headerRect.top <= stickyTop;

      header.classList.toggle("is-stuck", isStuck);
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  update();

  return () => window.removeEventListener("scroll", update);
}, [menuOpen, sortIndex, selectedPasses, selectedStates]);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);
  useEffect(() => () => menuAnimation.current?.cancel(), []);

  function animateMenu(open: boolean, finished: () => void) {
    const sheet = menuSheet.current;
    if (!sheet) return finished();
    const from = new DOMMatrixReadOnly(getComputedStyle(sheet).transform).m42;
    menuAnimation.current?.cancel();
    const to = open ? 0 : -sheet.offsetHeight;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sheet.style.transform = `translateY(${to}px)`;
      finished();
      return;
    }
    // Prototype 624:23386 / 626:2691: downward Gentle, upward Slow.
    // Durations are exported verbatim. The API exposes preset names only;
    // these sampled physical springs approximate their settling behavior.
    const duration = open ? 1022.0937728881836 : 1250.1229047775269;
    const frames = Array.from({ length: 121 }, (_, index) => {
      const offset = index / 120;
      const t = offset * duration / 1000;
      const progress = index === 120 ? 1 : open
        ? 1 - Math.exp(-7.5 * t) * (Math.cos(Math.sqrt(43.75) * t) + 7.5 / Math.sqrt(43.75) * Math.sin(Math.sqrt(43.75) * t))
        : 1 - (1 + 10 * t) * Math.exp(-10 * t);
      return { offset, transform: `translateY(${from + (to - from) * progress}px)` };
    });
    const animation = sheet.animate(frames, { duration, easing: "linear", fill: "forwards" });
    menuAnimation.current = animation;
    animation.onfinish = () => {
      if (menuAnimation.current !== animation) return;
      sheet.style.transform = `translateY(${to}px)`;
      animation.cancel();
      menuAnimation.current = null;
      finished();
    };
  }
  function openMenu() {
    previousScroll.current = window.scrollY;
    if (navigation.current) navigation.current.open = true;
  }
  function back() {
    if (!navigation.current?.open || closingMenu.current) return;
    closingMenu.current = true;
    animateMenu(false, () => {
      if (navigation.current) navigation.current.open = false;
    });
  }
  function handleNavigationToggle(event: React.SyntheticEvent<HTMLDetailsElement>) {
    const open = event.currentTarget.open;
    setMenuOpen(open);
    if (open) {
      closingMenu.current = false;
      const sheet = menuSheet.current;
      if (sheet) sheet.style.transform = "translateY(-100%)";
      const panel = sheet?.querySelector<HTMLElement>(".selection-panel");
      if (panel) panel.scrollTop = 0;
      animateMenu(true, () => {});
      panelHeading.current?.focus({ preventScroll: true });
    } else {
      closingMenu.current = false;
      sortTrigger.current?.focus({ preventScroll: true });
      window.scrollTo(0, previousScroll.current);
    }
  }
  function keepFocusInMenu(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
      'input[type="radio"]:checked, input[type="checkbox"], button'
    ));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === panelHeading.current)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  }
  function backToTop() {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function revealFocusedOption(event: React.FocusEvent<HTMLElement>) {
    const option = event.target.closest<HTMLElement>(".sort-option, .filter-option");
    const panel = event.currentTarget;
    if (!option) return;
    const bounds = option.getBoundingClientRect();
    if (bounds.top < panel.getBoundingClientRect().top + 8 ||
        bounds.bottom > panel.getBoundingClientRect().bottom - 8) {
      option.scrollIntoView({ block: "nearest", behavior: "instant" });
    }
  }
  function toggleState(state: string) {
    setSelectedStates(current => current.includes(state) ? current.filter(item => item !== state) : [...current, state]);
    previousScroll.current = 0;
  }
  function togglePass(pass: PassFilter) {
    setSelectedPasses(current => current.includes(pass) ? current.filter(item => item !== pass) : [...current, pass]);
    previousScroll.current = 0;
  }
  const backButton = <button type="button" onClick={back}><span>&#x2190;  Back To Results</span></button>;
  return <div className="site-shell" onKeyDown={(event) => { if (event.key === "Escape" && navigation.current?.open) back(); }}>
    <a href="#main" className="skip-link" tabIndex={menuOpen ? -1 : undefined} aria-hidden={menuOpen || undefined}>Skip to resorts</a>
    <details className="filter-navigation" ref={navigation} onToggle={handleNavigationToggle}>
      <summary
  className="toolbar"
  ref={sortTrigger}
  onClick={() => {
    if (!navigation.current?.open) {
      previousScroll.current = window.scrollY;
    }
  }}
  tabIndex={menuOpen ? -1 : 0}
  aria-hidden={menuOpen || undefined}
  aria-controls="filter-sort-panel"
>
  <div
    aria-hidden="true"
    className="toolbar-scroll-progress"
style={{ width: `${progressWidth}%` }}  />

  <span className="toolbar-control navigation-open">
    <span className="filtericon">&#x21C5;</span>
    <span>
      {selectedSort.label} / {passLabel} / {stateLabel}
    </span>
  </span>

</summary>
      <div className="filter-sheet" ref={menuSheet} role="dialog" aria-modal="true" aria-label="Filter and sort resorts" onKeyDown={keepFocusInMenu}>
      <section id="filter-sort-panel" className="selection-panel" data-figma-node="626:2499" aria-label="Filter and sort resorts" onFocus={revealFocusedOption}>
        <div className="sort-section">
          <h3 ref={panelHeading} tabIndex={-1}>Sort Resorts By:</h3>
          <div className="options sort-options" role="radiogroup" aria-label="Sort resorts">
{sortOptions.map((option, index) => {
const SortIcon = sortIcons[option.icon];
  return (
    <label
      key={option.key}
      className={`sort-option${sortIndex === index ? " selected" : ""}`}
    >
      <input
        className="sr-only"
        type="radio"
        name="resort-sort"
        checked={sortIndex === index}
        onChange={() => {
          setSortIndex(index);
          previousScroll.current = 0;
        }}
      />

      {SortIcon && <SortIcon size={20} strokeWidth={1.5} />}

      <span>{option.label}</span>
    </label>
  );
})}
          </div>
        </div>
        <div className="filter-section">
          <h3>By Multi-pass</h3>
          <div className="options" role="group" aria-label="Multi-pass filters">
            {passFilters.map(filter => <label className="filter-option" key={filter.key}>
              <input className="sr-only" type="checkbox" checked={selectedPasses.includes(filter.key)} onChange={() => togglePass(filter.key)} />
              <span className="filter-mark"><Icon node="217:12197" name="imgIconCheck" size={24} /></span><span>{filter.label}</span>
            </label>)}
          </div>
   <h3 className="state-filter-heading">By State</h3>

  <div className="options" role="group" aria-label="State filters">
    {states.map(state => (
      <label className="filter-option" key={state}>
        <input
          className="sr-only"
          type="checkbox"
          checked={selectedStates.includes(state)}
          onChange={() => toggleState(state)}
        />

        <span className="filter-mark">
          <Icon
            node="217:12197"
            name="imgIconCheck"
            size={24}
          />
        </span>

        <span>{state}</span>
      </label>
    ))}
  </div>
        </div>
      </section>
      <div className="menu-bottom toolbar">{backButton}</div>
      </div>
    </details>
    <main id="main" inert={menuOpen}>
      <h1 className="sr-only">Vermont ski resorts</h1>
      <p className="sr-only" aria-live="polite">{visibleResorts.length} resorts sorted by {selectedSort.label}</p>
      <div className="resort-list">{visibleResorts.map((resort, index) => <ResortCard key={resort.id} resort={resort} priority={index === 0} />)}</div>
      {!visibleResorts.length && <p className="empty-results">No resorts match these filters. <button type="button" onClick={openMenu}>Adjust filters</button></p>}
      <footer>Northeast Ski Areas V1 · Local data · Prototype ratings</footer>
    </main>
    {!menuOpen && showBackToTop && <button type="button" className="back-to-top" aria-label="Back to top" onClick={backToTop}>↑ <span>To top</span></button>}
  </div>;
}
