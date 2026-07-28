import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import wordmark from "@/assets/vyom-wordmark-v2.png.asset.json";

const NAV_ITEMS = [
  { label: "Services", hash: "services" },
  { label: "Resources", hash: "resources" },
  { label: "About Us", hash: "about" },
  { label: "Contact Us", hash: "contact" },
];

export function SiteHeader({ variant }: { variant: "home" | "network" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [variant]);

  const sectionHref = (hash: string) => (variant === "home" ? `#${hash}` : `/#${hash}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="navbar-pill mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:gap-4 sm:px-4">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Vyom Global Logistics home"
        >
          <img
            src={wordmark.url}
            alt="Vyom Global Logistics"
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/network"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
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
              Start a Chat
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
        <div className="navbar-pill mx-auto mt-2 max-w-5xl rounded-2xl px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/network"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              Network
            </Link>
            {variant === "home" ? (
              <a
                href="mailto:marina@vyomshipping.com"
                className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-brand-blue"
              >
                Start a Chat
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
