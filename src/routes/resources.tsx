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
            <ResourcePanel
              label="Resources"
              title="Definitions"
              description="Content coming shortly — shipping and documentation terminology used across Vyom operations will be listed here."
            />
          </TabsContent>

          <TabsContent value="incoterms" className="mt-8 w-full">
            <ResourcePanel
              label="Resources"
              title="Incoterms"
              description="Content coming shortly — Incoterms rules and the responsibilities they assign to buyer and seller will be published here."
            />
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
