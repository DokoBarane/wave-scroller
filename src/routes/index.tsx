import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section, SectionMedia } from "@/components/Section";
import { ParallaxBand } from "@/components/ParallaxBand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import cargoShipAsset from "@/assets/vyom-cargo-ship.jpg.asset.json";
import tankStackAsset from "@/assets/vyom-tank-stack.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vyom Global Logistics — Sea Freight & Tanktainer Experts" },
      {
        name: "description",
        content:
          "Vyom coordinates containerised and liquid cargo sea freight through own offices across Singapore, Malaysia, Indonesia, Thailand, India and UAE.",
      },
      { property: "og:title", content: "Vyom Global Logistics — Sea Freight & Tanktainer Experts" },
      {
        property: "og:description",
        content:
          "Expertise-led sea freight, tanktainer fleet coordination and agency support across Asian trade corridors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  "Containerised logistics for general dry cargo movements",
  "Specialized liquid cargo and tanktainer fleet coordination",
  "Cross-border sea freight planning across Asia and beyond",
];

const RESOURCES = [
  "Customer zone for agency and port-level communication",
  "Network lookup to identify country and city partners quickly",
  "Terms, conditions, and operations documentation",
];

function PointList({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 1 | 3;
}) {
  return (
    <ul className={`grid gap-5 ${columns === 3 ? "md:grid-cols-3" : ""}`}>
      {items.map((item, index) => (
        <li
          key={item}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full gradient-brand text-sm font-semibold text-primary-foreground">
            {index + 1}
          </span>
          <p className="mt-4 text-base leading-relaxed text-foreground">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="home" />
      <main>
        <Hero />

        <Section
          id="services"
          label="Services"
          title="Built for demanding cargo flows"
          media={
            <SectionMedia
              src={tankStackAsset.url}
              alt="Blue-framed tank containers stacked several tiers high at a depot"
            />
          }
        >
          <PointList items={SERVICES} columns={1} />
        </Section>

        <Section
          id="resources"
          label="Resources"
          title="Operational resources in one place"
          tone="muted"
        >
          <PointList items={RESOURCES} />
        </Section>

        <Section
          id="about"
          label="About Us"
          title="Experience-led logistics built to scale"
          mediaSide="left"
          media={
            <SectionMedia
              src={cargoShipAsset.url}
              alt="Aerial view of a fully loaded container ship under way at sea"
            />
          }
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Vyom combines decades of operational freight expertise with agile execution. Our
            management team carries an average experience of more than two decades in sea freight
            solutions, including specialized liquid cargo logistics. This depth of knowledge shapes
            how we coordinate tank container and dry cargo shipments through tightly connected
            agency offices across key trade corridors.
          </p>
        </Section>

        <ParallaxBand
          src={cargoShipAsset.url}
          alt="Container ship carrying tanktainers across open ocean"
          caption="Cross-border sea freight planning across Asia and beyond"
        />


        <Section
          id="contact"
          label="Contact Us"
          title="Start planning your next movement"
          tone="muted"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Reach our team for sea freight planning, agency coordination, and tanktainer
            logistics support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:marina@vyomshipping.com"
              className="rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Email Us
            </a>
            <a
              href="tel:+6592723370"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Call Singapore Desk
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
