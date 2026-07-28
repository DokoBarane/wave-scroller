import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import wordmarkAsset from "@/assets/vyom-wordmark-v4.png.asset.json";


const NAV_ITEMS = [
  { label: "Services", hash: "services" },
  { label: "Resources", hash: "resources" },
  { label: "About Us", hash: "about" },
  { label: "Contact Us", hash: "contact" },
];

export function SiteHeader({ variant }: { variant: "home" | "network" }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(variant === "home");

  useEffect(() => {
    setOpen(false);
  }, [variant]);

  useEffect(() => {
    if (variant !== "home") {
      setIsDark(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting);
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [variant]);

  const sectionHref = (hash: string) =>
    variant === "home" ? `#${hash}` : `/#${hash}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:gap-4 sm:px-4",
          isDark ? "navbar-pill" : "navbar-pill-light",
        )}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Vyom Global Logistics home"
        >
          <img
            src={wordmarkAsset.url}
            alt="Vyom"
            className="h-8 w-auto sm:h-9"
            loading="eager"
          />
        </Link>


        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-100",
                isDark
                  ? "text-white/80 hover:text-white"
                  : "text-brand-dark/80 hover:text-brand-dark",
              )}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/network"
            className={cn(
              "text-sm font-medium transition-colors hover:opacity-100",
              isDark
                ? "text-white/80 hover:text-white"
                : "text-brand-dark/80 hover:text-brand-dark",
            )}
          >
            Network
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {variant === "home" ? (
            <a
              href="mailto:marina@vyomshipping.com"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Contact us
            </a>
          ) : (
            <Link
              to="/"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Go Home
            </Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden",
              isDark
                ? "bg-white/15 text-white hover:bg-white/25"
                : "bg-brand-dark/10 text-brand-dark hover:bg-brand-dark/15",
            )}
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className={cn(
            "mx-auto mt-2 max-w-5xl rounded-2xl px-4 py-4 lg:hidden",
            isDark ? "navbar-pill" : "navbar-pill-light",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-2 py-2.5 text-sm font-medium transition-colors",
                  isDark
                    ? "text-white/90 hover:bg-white/10"
                    : "text-brand-dark/90 hover:bg-brand-dark/10",
                )}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/network"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-2 py-2.5 text-sm font-medium transition-colors",
                isDark
                  ? "text-white/90 hover:bg-white/10"
                  : "text-brand-dark/90 hover:bg-brand-dark/10",
              )}
            >
              Network
            </Link>
            {variant === "home" ? (
              <a
                href="mailto:marina@vyomshipping.com"
                className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-brand-blue"
              >
                Contact us
              </a>
            ) : (
              <Link
                to="/"
                className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-brand-blue"
              >
                Go Home
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
