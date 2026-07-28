import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-motion";

/**
 * Non-hero sections. Scroll reveal effects are currently disabled per the
 * motion spec — flip `reveal` to true to enable them.
 */
export function Section({
  id,
  label,
  title,
  children,
  media,
  mediaSide = "right",
  tone = "light",
  reveal = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  media?: ReactNode;
  mediaSide?: "left" | "right";
  tone?: "light" | "muted";
  reveal?: boolean;
}) {
  const ref = useScrollReveal<HTMLDivElement>(reveal);

  return (
    <section
      id={id}
      className={
        tone === "muted"
          ? "scroll-mt-24 bg-card py-20 sm:py-28"
          : "scroll-mt-24 bg-background py-20 sm:py-28"
      }
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 ${reveal ? "reveal" : ""}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
          {label}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {media ? (
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className={mediaSide === "left" ? "lg:order-2" : undefined}>
              {children}
            </div>
            <div className={mediaSide === "left" ? "lg:order-1" : undefined}>
              {media}
            </div>
          </div>
        ) : (
          <div className="mt-10">{children}</div>
        )}
      </div>
    </section>
  );
}

/** Framed photo used inside a section's media slot. */
export function SectionMedia({ src, alt }: { src: string; alt: string }) {
  const ref = useScrollReveal<HTMLDivElement>(true);

  return (
    <div
      ref={ref}
      className="reveal overflow-hidden rounded-3xl border border-border bg-card shadow-soft ring-1 ring-primary/10"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
      />
    </div>
  );
}
