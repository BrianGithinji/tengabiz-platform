import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Loan Readiness", href: "#loan-readiness" },
  { label: "About", href: "#about" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5">
      <span className="bg-gradient-primary grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-[var(--shadow-glow)]">
        <ShieldCheck className="h-5 w-5 text-primary-foreground" strokeWidth={2.4} />
      </span>
      <span
        className={`font-display truncate text-lg font-extrabold tracking-tight ${compact ? "sr-only sm:not-sr-only" : ""}`}
      >
        TENGA<span className="text-primary">BIZ</span>
      </span>
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4"
      >
        <div className="flex min-w-0 items-center gap-8">
          <Logo />
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/our-origin"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Our Origin
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="font-semibold" asChild>
            <a href="https://tengabiz.ai.studio" target="_blank" rel="noopener noreferrer">Log In</a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://tengabiz.ai.studio" target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/our-origin"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Our Origin
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full" asChild>
              <a href="https://tengabiz.ai.studio" target="_blank" rel="noopener noreferrer">Log In</a>
            </Button>
            <Button variant="hero" className="w-full" asChild>
              <a href="https://tengabiz.ai.studio" target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
