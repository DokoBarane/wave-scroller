import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { agencyNetwork, type AgencyOffice } from "@/data/agencyNetwork";

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
  const countryCount = new Set(agencyNetwork.map((office: AgencyOffice) => office.country)).size;

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
              {agencyNetwork.map((office: AgencyOffice) => (
                <OfficeRows key={`${office.country}-${office.location}-${office.company}`} office={office} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {agencyNetwork.length} office locations across {countryCount} countries.{" "}
          <Link to="/" className="text-primary hover:underline">
            Return to single-scroll homepage.
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
