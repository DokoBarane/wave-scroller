import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Definitions, Incoterms & Terms | Vyom Global Logistics" },
      {
        name: "description",
        content:
          "Shipping definitions, Incoterms guidance and the terms and conditions that govern Vyom Global Logistics sea freight and tanktainer services.",
      },
      {
        property: "og:title",
        content: "Resources — Definitions, Incoterms & Terms | Vyom Global Logistics",
      },
      {
        property: "og:description",
        content:
          "Reference material for Vyom customers: freight definitions, Incoterms and standard trading terms and conditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const TAB_CLASS =
  "rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-soft";

function ResourcePanel({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        {label}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-soft">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </>
  );
}

const DEFINITIONS: { number: string; term: string; description: string }[] = [
  {
    number: "1.1",
    term: "Carriage",
    description:
      "Carriage means the whole or any part of the carriage, loading, unloading, storing, warehousing, handling and any and all other services whatsoever undertaken by the Carrier in relation to the Goods.",
  },
  {
    number: "1.2",
    term: "Carrier",
    description:
      "A carrier is responsible for transporting the freight from one place to another. Vyom Global Logistics (S) Pte Ltd is a Carrier.",
  },
  {
    number: "1.3",
    term: "Container",
    description:
      "Includes any container (including an open top container), flat rack, platform, trailer, transportable tank, pallet, or any other similar article used to consolidate the Goods and any connected equipment.",
  },
  {
    number: "1.4",
    term: "Freight",
    description:
      "Includes all charges payable to the carrier in accordance with the applicable Tariff and the bill of lading.",
  },
  {
    number: "1.5",
    term: "Goods",
    description:
      "Means the whole or any part of the cargo and any packaging accepted from the Shipper and includes any Container not supplied by or on behalf of the Carrier.",
  },
  {
    number: "1.6",
    term: "Hague Rules",
    description:
      "Means the provisions of the International Convention for the Unification of Certain Rules relating to Bills of Lading signed at Brussels on 25th August 1924 and includes the amendments by the Protocol signed at Brussels on 23rd February 1968, but only if such amendments are compulsorily applicable to the bill of lading. (It is expressly provided that nothing in the bill of lading shall be construed as contractually applying the said Rules as amended by said Protocol).",
  },
  {
    number: "1.7",
    term: "Holder",
    description:
      "Means any Person for the time being in possession of the bill of lading to or in whose rights of suit and or liability under the bill of lading have been transferred or vested.",
  },
  {
    number: "1.9",
    term: "Merchant",
    description:
      "Includes the Shipper, Holder, Consignee, Receiver of the Goods, any Person owning or entitled to the possession of the Goods or of the bill of lading and anyone acting on behalf of such Person.",
  },
  {
    number: "1.10",
    term: "Multimodal Transport",
    description:
      "Arises if the Place of Receipt and/or the Place of Delivery are indicated on the reverse hereof in the relevant spaces.",
  },
  {
    number: "1.11",
    term: "Ocean Transport",
    description: "Means the same as Port-to-Port Shipment.",
  },
  {
    number: "1.12",
    term: "Package",
    description:
      "Where a Container is loaded with more than one package or unit, the packages or other shipping units enumerated on the reverse hereof as packed in such Container and entered in the box on the reverse hereof entitled “Carrier’s”.",
  },
  {
    number: "1.13",
    term: "Receipt",
    description: "Are each deemed a Package.",
  },
  {
    number: "1.14",
    term: "Person",
    description: "Includes an individual, corporation, or other legal entity.",
  },
  {
    number: "1.15",
    term: "Port-to-Port Shipment",
    description: "Arises when the Carriage is not Multimodal.",
  },
  {
    number: "1.16",
    term: "Subcontractor",
    description:
      "Includes owners, charterers, and operators of vessels (other than the Carrier), stevedores, terminal and groupage operators, road and rail transport operators, warehousemen and any independent contractors employed by the Carrier performing the Carriage and any direct or indirect Subcontractors, servants, and agents thereof whether in direct contractual privity or not.",
  },
  {
    number: "1.17",
    term: "Terms and Conditions",
    description:
      "Means all terms, rights, defenses, provisions, conditions, exceptions, limitations, and liberties hereof.",
  },
  {
    number: "1.18",
    term: "US COGSA™",
    description:
      "Means the US Carriage of Goods by Sea Act 1936. “Vessel” means any water borne craft used in the carriage under the Bill of Lading which may be a feeder vessel or an ocean vessel.",
  },
];

function DefinitionsPanel() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Definitions
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Terminology used across Vyom Global Logistics bills of lading and
        service documentation.
      </p>
      <dl className="mt-8 grid gap-4 lg:grid-cols-2">
        {DEFINITIONS.map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <dt className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {item.number}
              </span>
              <span className="text-base font-semibold text-foreground">
                {item.term}
              </span>
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

const INCOTERMS_ANY_MODE = [
  {
    term: "Ex works",
    description:
      "The shipper’s goods are placed at the disposal of the buyer within the shipper’s premises or any other place. The shipper’s responsibility is minimum, and the buyer is responsible for loading and for all the other export-related formalities.",
  },
  {
    term: "FCA",
    description:
      "Free Carrier – The shipper’s responsibility includes completing all export clearance formalities and making the goods available to the carrier.",
  },
  {
    term: "DAP",
    description:
      "Delivered at Place – The shipper has to assume all the risks involved up to unloading of goods.",
  },
  {
    term: "DDP",
    description:
      "Delivered Duty Paid – As the name of the term suggests the shipper is responsible for all the expenses and risks involved in making the goods available at the final destination. The duty and taxes have to be borne by the shipper.",
  },
  {
    term: "DPU",
    description:
      "Delivered at Place Unloaded – Means that the shipper has to clear goods for export, where applicable, without any obligation to clear the goods for import, pay import duty or carry out import customs formalities.",
  },
  {
    term: "CIP",
    description:
      "Carriage and Insurance Paid – Means that the shipper is responsible for arranging and paying the carriage charges and insurance. Carriage charges are paid up to the named place.",
  },
  {
    term: "CPT",
    description:
      "Carriage Paid To – As the name suggests only the carriage charges are borne by the shipper and the shipper does not have to cover insurance.",
  },
];

const INCOTERMS_OCEAN = [
  {
    term: "FAS",
    description:
      "Free Alongside Ship – Shipper has direct access to the vessel for loading. This is usually for bulk cargo vessels.",
  },
  {
    term: "FCA",
    description:
      "Free Carrier – Shipper has to bear transportation costs and assume all risks until the carrier receives the goods, after which the buyer has to bear all responsibility.",
  },
  {
    term: "FOB",
    description:
      "Free On Board – Shipper delivers the goods aboard the vessel nominated by the consignee. Shipper is responsible for all costs up to that point.",
  },
  {
    term: "CFR",
    description:
      "Cost and Freight – Shipper is responsible for the cost, freight, and delivery of the goods to the port specified by the consignee.",
  },
  {
    term: "CIF",
    description:
      "Cost, Insurance and Freight – Same as above except the shipper also has to bear the insurance as well.",
  },
];

function IncotermsPanel() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Incoterms
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        The Incoterms® rules are published by the International Chamber of
        Commerce and are incorporated in contracts for the sale of goods
        worldwide. They provide rules and guidance to importers, exporters,
        lawyers, transporters, insurers, and students of international trade.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">
          Seven Incoterms® 2020 rules for any mode of transport
        </h2>
        <ol className="mt-4 grid gap-4 lg:grid-cols-2">
          {INCOTERMS_ANY_MODE.map((item, index) => (
            <li
              key={item.term}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {index + 1}.
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">
          Four Incoterms® 2020 rules for ocean transport
        </h2>
        <ol className="mt-4 grid gap-4 lg:grid-cols-2">
          {INCOTERMS_OCEAN.map((item, index) => (
            <li
              key={item.term}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {index + 1}.
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="network" />
      <main className="mx-auto max-w-[90rem] px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <Tabs defaultValue="definitions" className="mt-2 flex flex-col items-center">
          <TabsList className="h-auto flex-wrap gap-1 rounded-xl bg-muted p-1">
            <TabsTrigger value="definitions" className={TAB_CLASS}>
              Definitions
            </TabsTrigger>
            <TabsTrigger value="incoterms" className={TAB_CLASS}>
              Incoterms
            </TabsTrigger>
            <TabsTrigger value="terms" className={TAB_CLASS}>
              Terms and Conditions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="definitions" className="mt-8 w-full">
            <DefinitionsPanel />
          </TabsContent>

          <TabsContent value="incoterms" className="mt-8 w-full">
            <IncotermsPanel />
          </TabsContent>

          <TabsContent value="terms" className="mt-8 w-full">
            <ResourcePanel
              label="Resources"
              title="Terms and Conditions"
              description="Content coming shortly — the standard trading terms and conditions governing our services will appear here."
            />
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </div>
  );
}
