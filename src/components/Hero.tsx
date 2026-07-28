import { useSectionScrollProgress } from "@/hooks/use-scroll-motion";
import heroImage from "@/assets/vyom-hero.jpg.asset.json";

export function Hero() {
  const { ref, progress } = useSectionScrollProgress<HTMLElement>();
  const scale = 1 - progress * 0.08;
  const opacity = 1 - progress * 0.85;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate flex min-h-[100vh] items-center overflow-hidden bg-brand-dark"
    >
      <div
        data-scroll-scale=""
        className="absolute inset-0 -z-10"
        style={{ transform: `scale(${1 + progress * 0.12})` }}
      >
        <img
          src={heroImage.url}
          alt="Stacked Vyom tanktainer frames under a blue sky"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--brand-dark) 78%, transparent) 0%, color-mix(in oklab, var(--brand-blue) 45%, transparent) 45%, color-mix(in oklab, var(--brand-orange) 30%, transparent) 100%)",
          }}
        />
      </div>

      <div
        data-scroll-scale=""
        className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40"
        style={{ transform: `scale(${scale})`, opacity }}
      >
        <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-6xl">
              Emphasis will be on expertise
              <br />
              in sea freight solutions.
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/75 sm:text-lg">
              Photos of the tanktainer fleet.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:marina@vyomshipping.com"
                className="rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:scale-[1.03]"
              >
                Start a Chat
              </a>
              <a
                href="#services"
                className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-primary-foreground/15 bg-brand-dark/45 p-6 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
              Own offices
            </p>
            <p className="mt-3 text-xl font-semibold text-primary-foreground">
              6 countries and growing
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Singapore, Malaysia, Indonesia, Thailand, India, UAE
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
