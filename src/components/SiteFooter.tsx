
import mark from "@/assets/vyom-mark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row">
          <img src={mark.url} alt="" aria-hidden="true" className="h-9 w-auto" loading="lazy" />
          <div>
            <p className="text-sm font-semibold text-foreground">Vyom Global Logistics (S) Pte Ltd</p>
            <p className="text-xs text-muted-foreground">
              #02-05, Southpoint 200 Cantonment Road Singapore 089763
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Vyom Global Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
