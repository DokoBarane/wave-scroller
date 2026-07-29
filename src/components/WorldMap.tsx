import { useState } from "react";
import { WORLD_LAND_PATH } from "@/data/worldLandPath";

export type MapMarker = {
  label: string;
  country: string;
  location: string;
  lat: number;
  lng: number;
};

export const NETWORK_MARKERS: MapMarker[] = [
  { label: "Chennai, India", country: "India", location: "Chennai", lat: 13.08, lng: 80.27 },
  { label: "Singapore", country: "Singapore", location: "Singapore", lat: 1.28, lng: 103.85 },
  { label: "Port Klang, Selangor", country: "Malaysia", location: "Port Klang", lat: 3.0, lng: 101.39 },
  { label: "Bangkok, Thailand", country: "Thailand", location: "Bangkok & Laem Chabang", lat: 13.75, lng: 100.52 },
  { label: "Jakarta, Indonesia", country: "Indonesia", location: "Jakarta", lat: -6.21, lng: 106.85 },
  { label: "Jebel Ali, UAE", country: "United Arab Emirates", location: "Jebel Ali", lat: 25.01, lng: 55.06 },
];

const W = 1000;
const H = 500;

function project(lat: number, lng: number) {
  return { x: ((lng + 180) / 360) * W, y: ((90 - lat) / 180) * H };
}

/** Full world on desktop, Asia–Middle East crop on small screens. */
const FULL_VIEW = `0 0 ${W} ${H}`;
const ASIA_VIEW = "620 140 260 180";

export function WorldMap({
  onSelect,
  activeLocation,
}: {
  onSelect?: (marker: MapMarker) => void;
  activeLocation?: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  const renderMap = (viewBox: string, dotScale: number) => (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="Map of Vyom agency locations across Asia and the Middle East"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="vyom-land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* graticule */}
      <g stroke="var(--border)" strokeWidth={dotScale * 0.25} opacity="0.5">
        {Array.from({ length: 11 }, (_, i) => (i + 1) * (W / 12)).map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={H} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (i + 1) * (H / 6)).map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={W} y2={y} />
        ))}
      </g>

      <path
        d={WORLD_LAND_PATH}
        fill="url(#vyom-land)"
        stroke="var(--brand-blue)"
        strokeOpacity="0.35"
        strokeWidth={dotScale * 0.2}
        strokeLinejoin="round"
      />

      {NETWORK_MARKERS.map((marker) => {
        const { x, y } = project(marker.lat, marker.lng);
        const isActive = hovered === marker.label || activeLocation === marker.location;
        return (
          <g
            key={marker.label}
            transform={`translate(${x} ${y})`}
            className="cursor-pointer"
            onMouseEnter={() => setHovered(marker.label)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(marker.label)}
            onBlur={() => setHovered(null)}
            onClick={() => onSelect?.(marker)}
            tabIndex={0}
            role="button"
            aria-label={marker.label}
          >
            <circle
              r={dotScale * 3}
              fill="var(--brand-orange)"
              className="map-pulse"
              style={{ transformOrigin: "center" }}
            />
            <circle r={dotScale * 1.6} fill="var(--brand-orange)" fillOpacity="0.28" />
            <circle
              r={isActive ? dotScale * 1.15 : dotScale * 0.8}
              fill="var(--brand-orange)"
              stroke="var(--card)"
              strokeWidth={dotScale * 0.28}
              className="transition-all duration-200"
            />
            {isActive ? (
              <g transform={`translate(0 ${-dotScale * 2.6})`}>
                <text
                  textAnchor="middle"
                  fontSize={dotScale * 3.2}
                  fontWeight={600}
                  fill="var(--brand-dark)"
                  paintOrder="stroke"
                  stroke="var(--card)"
                  strokeWidth={dotScale * 0.9}
                  strokeLinejoin="round"
                >
                  {marker.label}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </svg>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex flex-col gap-1 border-b border-border px-5 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
            Global presence
          </p>
          <h2 className="mt-1 text-lg font-semibold text-foreground">
            Vyom agency locations
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          Tap a marker to filter the directory below.
        </p>
      </div>
      <div className="bg-background/60">
        <div className="hidden h-[22rem] w-full sm:block">{renderMap(FULL_VIEW, 1)}</div>
        <div className="h-[16rem] w-full sm:hidden">{renderMap(ASIA_VIEW, 0.35)}</div>
      </div>
    </div>
  );
}
