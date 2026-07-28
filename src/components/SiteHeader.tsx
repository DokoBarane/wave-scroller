import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/vyom-mark-v2.png.asset.json";

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
    <header className="fixed inset-x-0 top-0 z-50 glass-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center" aria-label="Vyom Global Logistics home">
          <img
            src={logo.url}
            alt="Vyom Global Logistics"
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/network"
            className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground"
          >
            Network
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {variant === "home" ? (
            <a
              href="mailto:marina@vyomshipping.com"
              className="hidden rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Start a Chat
            </a>
          ) : (
            <Link
              to="/"
              className="hidden rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Go Home
            </Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground lg:hidden"
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
        <div className="border-t border-primary-foreground/10 px-5 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/network"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
            >
              Network
            </Link>
            {variant === "home" ? (
              <a
                href="mailto:marina@vyomshipping.com"
                className="mt-2 rounded-full gradient-brand px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Start a Chat
              </a>
            ) : (
              <Link
                to="/"
                className="mt-2 rounded-full gradient-brand px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
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
