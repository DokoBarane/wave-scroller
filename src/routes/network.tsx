import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { agencyNetwork, type AgencyOffice } from "@/data/agencyNetwork";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const cellClass = "border-b border-border px-3 py-3 align-top text-xs";

  const officeCells = (
    <>
      <td rowSpan={rowCount} className={`${cellClass} font-medium text-foreground`}>
        {office.country}
      </td>
      <td rowSpan={rowCount} className={`${cellClass} text-foreground`}>
        {office.location}
      </td>
      <td rowSpan={rowCount} className={`${cellClass} min-w-[14rem] text-muted-foreground`}>
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
          <td className={`${cellClass} text-muted-foreground`}>
            {contact.office ?? "—"}
          </td>
          <td className={`${cellClass} text-muted-foreground`}>
            {contact.mobile ?? "—"}
          </td>
        </tr>
      ))}
    </>
  );
}

function NetworkPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const countries = useMemo(
    () => Array.from(new Set(agencyNetwork.map((office) => office.country))).sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredOffices = useMemo(() => {
    return agencyNetwork.filter((office) => {
      const countryMatch = selectedCountry === "all" || office.country === selectedCountry;
      const locationMatch = selectedLocation === "all" || office.location === selectedLocation;
      return countryMatch && locationMatch;
    });
  }, [selectedCountry, selectedLocation]);

  const availableLocations = useMemo(() => {
    const source = selectedCountry === "all" ? agencyNetwork : agencyNetwork.filter((o) => o.country === selectedCountry);
    return Array.from(new Set(source.map((office) => office.location))).sort((a, b) => a.localeCompare(b));
  }, [selectedCountry]);

  const countryCount = new Set(filteredOffices.map((office) => office.country)).size;

  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const total = filteredOffices.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedOffices = useMemo(
    () => filteredOffices.slice(startIndex, startIndex + pageSize),
    [filteredOffices, startIndex, pageSize],
  );

  const clearFilters = () => {
    setSelectedCountry("all");
    setSelectedLocation("all");
    setPage(1);
  };

  const hasActiveFilters = selectedCountry !== "all" || selectedLocation !== "all";


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="network" />
      <main className="mx-auto max-w-[90rem] px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
          Network
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Agency Network Directory
        </h1>

        <Tabs defaultValue="agency" className="mt-6">
          <TabsList className="h-auto flex-wrap gap-1 rounded-xl bg-muted p-1">
            <TabsTrigger value="agency" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-soft">
              Agency
            </TabsTrigger>
            <TabsTrigger value="local-charges" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-soft">
              Local Charges
            </TabsTrigger>
            <TabsTrigger value="downloads" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-soft">
              Downloads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="local-charges" className="mt-8">
            <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-soft">
              <h2 className="text-xl font-semibold text-foreground">Local Charges</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Coming soon — port and terminal charge schedules will be published here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="mt-8">
            <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-soft">
              <h2 className="text-xl font-semibold text-foreground">Downloads</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Coming soon — forms, tariffs and documentation will be available here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="agency" className="mt-0">
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">

          <div className="w-full sm:w-56">
            <label htmlFor="country-filter" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Country
            </label>
            <Select value={selectedCountry} onValueChange={(value) => {
              setSelectedCountry(value);
              setPage(1);
              if (value !== "all" && selectedLocation !== "all") {
                const stillValid = agencyNetwork.some(
                  (o) => o.country === value && o.location === selectedLocation,
                );
                if (!stillValid) setSelectedLocation("all");
              }
            }}>

              <SelectTrigger id="country-filter" className="h-10 text-sm">
                <SelectValue placeholder="All countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-56">
            <label htmlFor="location-filter" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Location
            </label>
            <Select value={selectedLocation} onValueChange={(value) => { setSelectedLocation(value); setPage(1); }}>
              <SelectTrigger id="location-filter" className="h-10 text-sm">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All locations</SelectItem>
                {availableLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="h-10 gap-1.5 px-4"
            >
              <X className="h-4 w-4" />
              Clear filters
            </Button>
          )}
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-soft">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="gradient-brand">
                {HEADERS.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="whitespace-nowrap px-3 py-3 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedOffices.map((office: AgencyOffice) => (
                <OfficeRows key={`${office.country}-${office.location}-${office.company}`} office={office} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <label htmlFor="page-size" className="text-xs font-medium text-muted-foreground">
              Rows per page
            </label>
            <Select value={String(pageSize)} onValueChange={(value) => { setPageSize(Number(value)); setPage(1); }}>
              <SelectTrigger id="page-size" className="h-9 w-[5.5rem] text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 50].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground">
            {total === 0
              ? "No offices match the selected filters."
              : `Showing ${startIndex + 1}–${Math.min(startIndex + pageSize, total)} of ${total} office ${total === 1 ? "location" : "locations"} across ${countryCount} ${countryCount === 1 ? "country" : "countries"}.`}
          </p>

          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                type="button"
                variant={p === currentPage ? "default" : "outline"}
                size="sm"
                className="h-9 w-9 p-0"
                onClick={() => setPage(p)}
              >
                {p}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          <Link to="/" className="text-primary hover:underline">
            Return to single-scroll homepage.
          </Link>
        </p>
          </TabsContent>
        </Tabs>

      </main>

      <SiteFooter />
    </div>
  );
}
