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
  tone = "light",
  reveal = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
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
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
