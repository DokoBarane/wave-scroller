import { Link } from "@tanstack/react-router";
import mark from "@/assets/vyom-mark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={mark.url} alt="" aria-hidden="true" className="h-9 w-auto" loading="lazy" />
          <div>
            <p className="text-sm font-semibold text-foreground">Vyom Global Logistics (S) Pte Ltd</p>
            <p className="text-xs text-muted-foreground">
              #02-05, Southpoint 200 Cantonment Road Singapore 089763
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/network" className="transition-colors hover:text-foreground">
            Agency Network
          </Link>
          <a href="mailto:marina@vyomshipping.com" className="transition-colors hover:text-foreground">
            marina@vyomshipping.com
          </a>
          <a href="tel:+6592723370" className="transition-colors hover:text-foreground">
            +65 9272 3370
          </a>
        </div>
      </div>
    </footer>
  );
}
