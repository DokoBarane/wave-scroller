import { useSectionScrollProgress } from "@/hooks/use-scroll-motion";
import heroImage from "@/assets/vyom-hero.jpg";

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
          src={heroImage}
          alt="Stacked Vyom tanktainer frames under a blue sky"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div
        data-scroll-scale=""
        className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8 sm:pt-40"
        style={{ transform: `scale(${scale})`, opacity }}
      >
        <div className="grid min-h-[60vh] items-end gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-primary-foreground text-shadow-hero sm:text-7xl lg:text-8xl">
              Global sea freight
              <br />
              <span className="text-brand-orange">solutions</span> for
              <br />
              liquid cargo.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
              Two decades of expertise in tank container logistics, delivered
              through our own offices across Asia and the Middle East.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full gradient-brand px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:scale-[1.03]"
              >
                Contact us
              </a>
              <a
                href="#services"
                className="rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <aside className="self-end rounded-2xl border border-primary-foreground/20 bg-brand-dark/55 p-6 shadow-elevated backdrop-blur-xl lg:max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-primary-foreground shadow-soft">
                6
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                Own offices
              </p>
            </div>
            <p className="mt-4 text-xl font-semibold text-primary-foreground">
              Countries and growing
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              Singapore, Malaysia, Indonesia, Thailand, India, UAE
            </p>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-[11px] font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-10 w-[2px] overflow-hidden rounded-full bg-primary-foreground/20">
          <div className="h-4 w-full animate-scroll-cue rounded-full bg-brand-orange" />
        </div>
      </div>
    </section>
  );
}
