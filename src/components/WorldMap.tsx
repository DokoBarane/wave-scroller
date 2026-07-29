import { useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { REGION_GEO } from "@/data/regionGeo";

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

const HUB = NETWORK_MARKERS.find((m) => m.location === "Singapore")!;

/** Focused extent: Arabian Gulf across to Indonesia — no empty ocean or unused continents. */
const LNG0 = 48;
const LNG1 = 116;
const LAT0 = -11;
const LAT1 = 30;

const W = 960;
const H = 540;

function useProjection(padding: number) {
  return useMemo(() => {
    const base = geoMercator().scale(1).translate([0, 0]);
    const [x0, y1] = base([LNG0, LAT0])!;
    const [x1, y0] = base([LNG1, LAT1])!;
    const k = Math.min((W - padding * 2) / (x1 - x0), (H - padding * 2) / (y1 - y0));
    const projection = geoMercator()
      .scale(k)
      .translate([W / 2 - ((x0 + x1) / 2) * k, H / 2 - ((y0 + y1) / 2) * k]);
    const path = geoPath(projection);

    const land = path(REGION_GEO as never) ?? "";
    const points = NETWORK_MARKERS.map((marker) => {
      const [x, y] = projection([marker.lng, marker.lat]) ?? [0, 0];
      return { marker, x, y };
    });
    const [hx, hy] = projection([HUB.lng, HUB.lat]) ?? [0, 0];
    const arcs = points
      .filter((p) => p.marker.location !== HUB.location)
      .map((p) => {
        const mx = (p.x + hx) / 2;
        const my = (p.y + hy) / 2;
        const dx = p.x - hx;
        const dy = p.y - hy;
        const len = Math.hypot(dx, dy) || 1;
        const cx = mx - (dy / len) * len * 0.18;
        const cy = my + (dx / len) * len * 0.18;
        return { key: p.marker.label, d: `M ${hx} ${hy} Q ${cx} ${cy} ${p.x} ${p.y}` };
      });
    return { land, points, arcs };
  }, [padding]);
}

function MapCanvas({
  padding,
  scale,
  onSelect,
  activeLocation,
  hovered,
  setHovered,
}: {
  padding: number;
  scale: number;
  onSelect?: (marker: MapMarker) => void;
  activeLocation?: string;
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const { land, points, arcs } = useProjection(padding);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Map of Vyom agency locations across the Middle East and South East Asia"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="vyom-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.07" />
          <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="vyom-land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0.14" />
        </linearGradient>
        <radialGradient id="vyom-dot-glow">
          <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x={-W * 2} y={-H * 2} width={W * 5} height={H * 5} fill="url(#vyom-sea)" />

      <path
        d={land}
        fill="url(#vyom-land)"
        stroke="var(--brand-blue)"
        strokeOpacity="0.4"
        strokeWidth={0.8}
        strokeLinejoin="round"
      />

      <g fill="none" stroke="var(--brand-blue)" strokeOpacity="0.45" strokeWidth={1.4}>
        {arcs.map((arc) => (
          <path key={arc.key} d={arc.d} className="map-arc" strokeLinecap="round" />
        ))}
      </g>

      {points.map(({ marker, x, y }, index) => {
        const isActive = hovered === marker.label || activeLocation === marker.location;
        const labelWidth = marker.label.length * scale * 4.6 + scale * 10;
        return (
          <g
            key={marker.label}
            transform={`translate(${x} ${y})`}
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => setHovered(marker.label)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(marker.label)}
            onBlur={() => setHovered(null)}
            onClick={() => onSelect?.(marker)}
            tabIndex={0}
            role="button"
            aria-label={marker.label}
          >
            <circle r={scale * 9} fill="url(#vyom-dot-glow)" />
            <circle
              r={scale * 7}
              fill="none"
              stroke="var(--brand-orange)"
              strokeWidth={scale * 0.9}
              className="map-ripple"
              style={{ animationDelay: `${index * 0.45}s`, animationDuration: isActive ? "1.6s" : "3s" }}
            />
            <circle
              r={scale * 7}
              fill="none"
              stroke="var(--brand-orange)"
              strokeWidth={scale * 0.6}
              className="map-ripple"
              style={{
                animationDelay: `${index * 0.45 + 1.1}s`,
                animationDuration: isActive ? "1.6s" : "3s",
              }}
            />
            <circle
              r={isActive ? scale * 3.4 : scale * 2.4}
              fill="var(--brand-orange)"
              stroke="var(--card)"
              strokeWidth={scale * 0.8}
              className="map-marker-core transition-all duration-200"
              style={{ animationDelay: `${index * 0.09}s` }}
            />
            {isActive ? (
              <g transform={`translate(0 ${-scale * 7})`} className="pointer-events-none">
                <rect
                  x={-labelWidth / 2}
                  y={-scale * 8.5}
                  width={labelWidth}
                  height={scale * 9}
                  rx={scale * 4.5}
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth={scale * 0.4}
                />
                <text
                  y={-scale * 2.4}
                  textAnchor="middle"
                  fontSize={scale * 5.4}
                  fontWeight={600}
                  fill="var(--brand-dark)"
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
}

export function WorldMap({
  onSelect,
  activeLocation,
}: {
  onSelect?: (marker: MapMarker) => void;
  activeLocation?: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex flex-col gap-1 border-b border-border px-5 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
            Global presence
          </p>
          <h2 className="mt-1 text-lg font-semibold text-foreground">Vyom agency locations</h2>
        </div>
        <p className="text-xs text-muted-foreground">Tap a marker to filter the directory below.</p>
      </div>
      <div className="bg-background/60">
        <div className="hidden h-[24rem] w-full sm:block">
          <MapCanvas
            padding={28}
            scale={1.25}
            onSelect={onSelect}
            activeLocation={activeLocation}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
        <div className="h-[17rem] w-full sm:hidden">
          <MapCanvas
            padding={16}
            scale={1.5}
            onSelect={onSelect}
            activeLocation={activeLocation}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
      </div>
    </div>
  );
}
