import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResortGallery from "../../resort-gallery";
import ResortMetadata from "../../resort-metadata";
import { resorts } from "../../../data/resorts";
import {
  formatNumber,
  formatTerrainParks,
  getComparisons,
} from "../../../lib/comparisons";
type ResortPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function ResortPage({ params }: ResortPageProps) {
  const { id } = await params;
  const resort = resorts.find((resort) => resort.id === id);
  if (!resort) {
    notFound();
  }
  const comparisons = getComparisons(resort, resorts);
  return (
    <main className="site-shell resort-detail">
      <nav
        className="toolbar resort-detail-toolbar"
        aria-label="Resort navigation"
      >
        <Link href="/" className="toolbar-control">
          <Image
            src="/figma/217-12197-imgIconChevronLeft.svg"
            width={24}
            height={24}
            alt=""
            unoptimized
          />
          <span>Back To Results</span>
        </Link>
      </nav>

      <article className="resort-detail-content" aria-labelledby="resort-title">
        <header className="resort-heading">
          <p>{resort.region}</p>
          <h1 id="resort-title">{resort.name}</h1>
        </header>

        <ResortGallery name={resort.name} media={resort.media} />

        <div className="card-content">
          {/* Intro */}
          <section className="overview">
            <ResortMetadata resort={resort} />

            <p className="description">
              {resort.description ?? "Description not yet available."}
            </p>
          </section>

          {/* How It Compares */}
          <section
            className="comparisons"
            aria-label={`${resort.name} comparison`}
          >
            <h2>How It Compares</h2>

            <p className="comparison-subtitle">
              Across {resorts.length} Vermont resorts
            </p>

            <dl className="comparison-list">
              {comparisons.map((stat) => (
                <div className="comparison" key={stat.label}>
                  <dt>{stat.label}</dt>

                  <dd>
                    <span
                      className="bar"
                      role={stat.score === null ? undefined : "meter"}
                      aria-label={`${stat.label}: ${stat.value}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={stat.score ?? undefined}
                      aria-valuetext={
                        stat.score === null
                          ? "Not available"
                          : `${Math.round(stat.score)} out of 100; more fill is better${
                              stat.prototype
                                ? "; prototype rating"
                                : "; Vermont V1 comparison"
                            }`
                      }
                      title={
                        stat.score === null
                          ? "Not available"
                          : `${Math.round(stat.score)}/100 — ${
                              stat.prototype
                                ? "prototype rating"
                                : "Vermont V1 comparison"
                            }; more fill is better`
                      }
                    >
                      <span
                        style={{
                          width: `${stat.score ?? 0}%`,
                        }}
                      />
                    </span>

<span className="comparison-value">
  {stat.prototype ? stat.label === "Lift Access"
    ? resort.liftAccess.label
    : stat.label === "Affordability"
      ? resort.affordability.label
      : stat.value
    : stat.value}

  {!stat.prototype && stat.detail && <small>{stat.detail}</small>}
</span>
                  </dd>
                </div>
              ))}
            </dl>



            {/* Terrain */}
            <section className="terrain" aria-label={`${resort.name} terrain`}>
              <h3>Terrain</h3>

              <dl>
                <div>
                  <dt>
                    <span className="terrain-icon">
                      <Image
                        src="/figma/205-10024-imgFrame46.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    Green runs (Beginner)
                  </dt>

                  <dd>
                    {resort.terrain
                      ? `${formatNumber(resort.terrain.beginner)}%`
                      : "Not available"}
                  </dd>
                </div>

                <div>
                  <dt>
                    <span className="terrain-icon">
                      <span className="blue-run" />
                    </span>
                    Blue runs (Intermediate)
                  </dt>

                  <dd>
                    {resort.terrain
                      ? `${formatNumber(resort.terrain.intermediate)}%`
                      : "Not available"}
                  </dd>
                </div>

                <div>
                  <dt>
                    <span className="terrain-icon">
                      <span className="black-run" />
                    </span>
                    Black runs (Advanced)
                  </dt>

                  <dd>
                    {resort.terrain
                      ? `${formatNumber(resort.terrain.advanced)}%`
                      : "Not available"}
                  </dd>
                </div>

                <div>
                  <dt>
                    <span className="terrain-icon">
                      <Image
                        src="/figma/205-10024-imgFrame49.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    Terrain Parks (seasonal)
                  </dt>

                  <dd>{formatTerrainParks(resort.terrainParks)}</dd>
                </div>
              </dl>
            </section>
          </section>

          {/* Mountain Stats */}
          <section
            className="mountain-stats"
            aria-label={`${resort.name} mountain statistics`}
          >
            <h2>Mountain Stats</h2>

            <dl>
              <div>
                <dt>Trails</dt>
                <dd>
                  {resort.trailCount === null
                    ? "Not available"
                    : formatNumber(resort.trailCount)}
                </dd>
              </div>

              <div>
                <dt>Lifts</dt>
                <dd>
                  {resort.liftCount === null
                    ? "Not available"
                    : formatNumber(resort.liftCount)}
                </dd>
              </div>

              <div>
                <dt>Summit elevation</dt>
                <dd>
                  {resort.summitElevationFt === null
                    ? "Not available"
                    : `${formatNumber(resort.summitElevationFt)} ft`}
                </dd>
              </div>

              <div>
                <dt>Base elevation</dt>
                <dd>
                  {resort.baseElevationFt === null
                    ? "Not available"
                    : `${formatNumber(resort.baseElevationFt)} ft`}
                </dd>
              </div>
            </dl>
          </section>

          {/* External website */}
          <a
            className="resort-link"
            href={resort.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {resort.name} website ↗
          </a>
        </div>
      </article>
    </main>
  );
}
