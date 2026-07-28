import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  agencyCountries,
  agencyNetwork,
  officeSearchText,
  type AgencyOffice,
} from "@/data/agencyNetwork";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Agency Network Directory — Vyom Global Logistics" },
      {
        name: "description",
        content:
          "Search Vyom agency offices by country, port and contact across Asia — company names, addresses, emails and phone numbers in one directory.",
      },
      { property: "og:title", content: "Agency Network Directory — Vyom Global Logistics" },
      {
        property: "og:description",
        content:
          "Filter Vyom's agency offices by country or search by location, company and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NetworkPage,
});

const HEADERS = [
  "COUNTRY",
  "LOCATION",
  "COMPANY FULL STYE NAME & ADDRESS",
  "PERSONNEL NAME",
  "FUNCTION",
  "E.MAIL",
  "OFFICE NUMBER",
  "MOBILE NO",
];

function OfficeRows({ office }: { office: AgencyOffice }) {
  const rowCount = Math.max(office.contacts.length, 1);
  const cellClass = "border-b border-border px-4 py-3 align-top text-sm";

  const officeCells = (
    <>
      <td rowSpan={rowCount} className={`${cellClass} font-medium text-foreground`}>
        {office.country}
      </td>
      <td rowSpan={rowCount} className={`${cellClass} text-foreground`}>
        {office.location}
      </td>
      <td rowSpan={rowCount} className={`${cellClass} min-w-[18rem] text-muted-foreground`}>
        <span className="block font-medium text-foreground">{office.company}</span>
        <span className="mt-1 block leading-relaxed">{office.address}</span>
      </td>
    </>
  );

  if (office.contacts.length === 0) {
    return (
      <tr className="bg-card">
        {officeCells}
        <td colSpan={5} className={`${cellClass} text-muted-foreground`}>
          Contact details available on request
        </td>
      </tr>
    );
  }

  return (
    <>
      {office.contacts.map((contact, index) => (
        <tr key={`${office.company}-${contact.email}-${index}`} className="bg-card">
          {index === 0 ? officeCells : null}
          <td className={`${cellClass} text-foreground`}>{contact.name}</td>
          <td className={`${cellClass} text-muted-foreground`}>{contact.role}</td>
          <td className={cellClass}>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </td>
          <td className={`${cellClass} whitespace-nowrap text-muted-foreground`}>
            {contact.office ?? "—"}
          </td>
          <td className={`${cellClass} whitespace-nowrap text-muted-foreground`}>
            {contact.mobile ?? "—"}
          </td>
        </tr>
      ))}
    </>
  );
}

function NetworkPage() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All countries");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return agencyNetwork.filter((office) => {
      const matchesCountry = country === "All countries" || office.country === country;
      const matchesQuery = needle.length === 0 || officeSearchText(office).includes(needle);
      return matchesCountry && matchesQuery;
    });
  }, [query, country]);

  const countryCount = new Set(filtered.map((office) => office.country)).size;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="network" />
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
          Network
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Agency Network Directory
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Filter by country or search by location, company, and contact details. Data is
          prepared from the latest agency workbook shared on 28 July.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-[2fr_1fr]">
          <div>
            <label
              htmlFor="network-search"
              className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Search
            </label>
            <input
              id="network-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country, port, company, contact"
              className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
            />
          </div>
          <div>
            <label
              htmlFor="network-country"
              className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Country
            </label>
            <select
              id="network-country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring"
            >
              <option>All countries</option>
              {agencyCountries.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-soft">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="gradient-brand">
                {HEADERS.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr className="bg-card">
                  <td
                    colSpan={HEADERS.length}
                    className="px-4 py-10 text-center text-sm text-muted-foreground"
                  >
                    No offices match this filter.
                  </td>
                </tr>
              ) : (
                filtered.map((office) => (
                  <OfficeRows key={`${office.country}-${office.location}-${office.company}`} office={office} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filtered.length} office locations across {countryCount} countries.{" "}
          <Link to="/" className="text-primary hover:underline">
            Return to single-scroll homepage.
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
