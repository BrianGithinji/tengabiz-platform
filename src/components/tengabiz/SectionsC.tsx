import {
  LayoutDashboard,
  Wallet,
  Receipt,
  Lock,
  Target,
  Users,
  Gauge,
  Sparkles,
  Settings,
  ArrowRight,
  Check,
  X,
  Landmark,
  Brain,
  LineChart,
  HandCoins,
  BarChart3,
  Globe2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowDownLeft,
  Truck,
  PiggyBank,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./hooks";
import { SectionHead } from "./SectionsA";
import { Logo } from "./Nav";
import mamaMboga from "@/assets/mama-mboga.jpg";
import shopOwner from "@/assets/shop-owner.jpg";
import farmer from "@/assets/farmer.jpg";
import salonOwner from "@/assets/salon-owner.jpg";
import foodVendor from "@/assets/food-vendor.jpg";
import fundi from "@/assets/fundi.jpg";

export function MicroBusiness() {
  const people = [
    { img: mamaMboga, role: "Mama mboga", line: "Know what your business can safely spend." },
    { img: shopOwner, role: "Shop owner", line: "Protect money for tomorrow's stock." },
    { img: farmer, role: "Farmer", line: "Save for your next big goal." },
    { img: salonOwner, role: "Salon owner", line: "Build toward financing readiness." },
    { img: foodVendor, role: "Food vendor", line: "See your daily income clearly." },
    { img: fundi, role: "Fundi", line: "Turn steady work into steady savings." },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Who it's for"
            title="Built for the people who keep African economies moving."
            sub="From market stalls to workshops and salons — TENGABIZ is designed for real businesses, real cash flow and real constraints."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.role} delay={i * 80}>
              <article className="card-hover group relative h-72 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] sm:h-80">
                <img
                  src={p.img}
                  alt={`African ${p.role} at work`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary-foreground backdrop-blur">
                    {p.role}
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-snug text-primary-foreground">
                    “{p.line}”
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DashboardPreview() {
  const nav = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Business Money", icon: Wallet },
    { label: "Transactions", icon: Receipt },
    { label: "Business Lock", icon: Lock },
    { label: "Savings Goals", icon: Target },
    { label: "People I Pay", icon: Users },
    { label: "Loan Readiness", icon: Gauge },
    { label: "AI Insights", icon: Sparkles },
    { label: "Settings", icon: Settings },
  ];

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Inside the product"
            title="One clear dashboard for your whole business."
            sub="Everything a micro-business owner needs — balances, protection, savings and readiness — on one calm screen."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-float)]">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="ml-3 truncate text-xs font-semibold text-muted-foreground">
                app.tengabiz.com / dashboard
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr]">
              <aside className="hidden border-r border-border p-4 lg:block">
                <Logo />
                <ul className="mt-6 space-y-1">
                  {nav.map((n) => (
                    <li key={n.label}>
                      <span
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${
                          n.active
                            ? "bg-gradient-primary text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        <n.icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{n.label}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="p-5 sm:p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold">Good morning, Brian 👋</p>
                    <p className="text-xs font-medium text-muted-foreground">
                      Here is how your business is doing today.
                    </p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    B
                  </span>
                </div>

                <div className="bg-gradient-primary mt-5 rounded-3xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/80">
                    Business Balance
                  </p>
                  <p className="font-display mt-2 text-4xl font-extrabold text-primary-foreground">
                    KES 24,500
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { l: "Available", v: "KES 9,800", icon: Wallet },
                    { l: "Business Lock", v: "KES 12,000", icon: Lock },
                    { l: "Savings", v: "KES 2,700", icon: PiggyBank },
                  ].map((c) => (
                    <div key={c.l} className="rounded-2xl border border-border p-4">
                      <c.icon className="h-4 w-4 text-primary" />
                      <p className="mt-2 truncate text-xs font-medium text-muted-foreground">
                        {c.l}
                      </p>
                      <p className="font-display text-base font-bold">{c.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl border border-border p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-muted-foreground">Loan Readiness</p>
                      <p className="font-display text-sm font-extrabold text-primary">82%</p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="bg-gradient-primary h-full" style={{ width: "82%" }} />
                    </div>
                    <p className="mt-4 text-xs font-bold text-muted-foreground">Savings goals</p>
                    {[
                      ["New Refrigerator", 13.5],
                      ["Expand Shop", 34],
                    ].map(([n, p]) => (
                      <div key={n as string} className="mt-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                          <span className="truncate">{n as string}</span>
                          <span className="shrink-0 text-muted-foreground">{p as number}%</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="bg-gradient-primary h-full"
                            style={{ width: `${p as number}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-border p-4">
                    <p className="text-xs font-bold text-muted-foreground">Recent transactions</p>
                    <div className="mt-2 space-y-2">
                      {[
                        { t: "Customer Payment", a: "+ KES 500", pos: true, icon: ArrowDownLeft },
                        { t: "Supplier Payment", a: "− KES 2,000", pos: false, icon: Truck },
                        { t: "Savings Contribution", a: "− KES 1,800", pos: false, icon: PiggyBank },
                      ].map((t) => (
                        <div
                          key={t.t}
                          className="flex items-center justify-between rounded-xl bg-surface px-3 py-2"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <t.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="truncate text-[11px] font-semibold">{t.t}</span>
                          </span>
                          <span
                            className={`shrink-0 text-[11px] font-bold ${t.pos ? "text-primary" : "text-muted-foreground"}`}
                          >
                            {t.a}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-surface-2 p-3">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <p className="text-[11px] font-medium leading-snug">
                        Your business income has been more consistent this month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PeopleIPay() {
  const contacts = [
    { name: "Mama Grace", role: "Supplier" },
    { name: "Peter", role: "Shop Rent" },
    { name: "John", role: "Transport" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            center={false}
            eyebrow="People I Pay"
            title="Your recurring business obligations, in one place."
            sub="Protected business funds can be used for legitimate business payments — suppliers, rent, transport — rather than being casually withdrawn into personal money."
          />
          <Button variant="hero" size="lg" className="mt-8">
            Manage Business Payments <ArrowRight />
          </Button>
        </Reveal>

        <div className="grid gap-3">
          {contacts.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <article className="card-hover grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <span className="bg-gradient-primary grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-bold text-primary-foreground">
                  {c.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{c.name}</p>
                  <p className="truncate text-xs font-medium text-muted-foreground">{c.role}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueProp() {
  const withTb = [
    "KES 9,800 is safely available.",
    "KES 12,000 is protected for my business.",
    "KES 2,700 is going toward my refrigerator.",
    "My Loan Readiness is 82%.",
    "TENGABIZ tells me what to do next.",
  ];

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHead eyebrow="The difference" title="Same money. Completely different clarity." />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                <X className="h-4 w-4" /> Without TENGABIZ
              </p>
              <p className="font-display mt-8 text-3xl font-extrabold leading-snug text-muted-foreground sm:text-4xl">
                “I have KES 24,500.”
              </p>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                One number. No idea what is spare, what is committed, or what happens next week.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="bg-gradient-primary h-full rounded-3xl p-7 shadow-[var(--shadow-float)]">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/80">
                <Check className="h-4 w-4" /> With TENGABIZ
              </p>
              <ul className="mt-6 space-y-3">
                {withTb.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-4 text-sm font-semibold text-primary-foreground backdrop-blur sm:text-base"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />“{l}”
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FutureVision() {
  const caps = [
    { label: "Bank integrations", icon: Landmark },
    { label: "Advanced AI", icon: Brain },
    { label: "Predictive cash flow", icon: LineChart },
    { label: "Financing connections", icon: HandCoins },
    { label: "Business analytics", icon: BarChart3 },
    { label: "Expanded African markets", icon: Globe2 },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-mesh pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <svg
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-4xl opacity-[0.12]"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <g stroke="var(--primary)" strokeWidth="1" fill="none">
          {[
            [80, 120, 180, 90],
            [180, 90, 250, 170],
            [250, 170, 200, 280],
            [200, 280, 120, 230],
            [120, 230, 80, 120],
            [180, 90, 120, 230],
            [250, 170, 120, 230],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
        <g fill="var(--primary)">
          {[
            [80, 120],
            [180, 90],
            [250, 170],
            [200, 280],
            [120, 230],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Our vision"
            title="The financial operating system for Africa's small businesses."
            sub="TENGABIZ aims to become the intelligent financial layer connecting business transactions, savings, cash-flow management and future financing across the continent."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <article className="glass card-hover flex items-center gap-4 rounded-3xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary">
                  <c.icon className="h-5 w-5 text-primary" />
                </span>
                <p className="truncate text-sm font-bold">{c.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <div className="bg-gradient-primary mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-[var(--shadow-float)] sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Your business deserves a clearer financial future.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-medium text-primary-foreground/85">
            Separate your money. Protect your business. Save smarter. Build toward growth.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="onPrimary" size="lg" asChild>
              <a href="https://tengabiz-app.onrender.com" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight />
              </a>
            </Button>
            <Button variant="onPrimaryOutline" size="lg" asChild>
              <a href="https://tengabiz-app.onrender.com" target="_blank" rel="noopener noreferrer">
                Explore TENGABIZ
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        "Business Money",
        "Business Lock",
        "Savings Goals",
        "Loan Readiness",
        "AI Insights",
        "Transactions",
      ],
    },
    { title: "Company", links: ["About", "Contact", "Careers"] },
    { title: "Resources", links: ["How It Works", "Financial Tips", "FAQs"] },
    { title: "Legal", links: ["Privacy", "Terms"] },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Smart financial management for African micro-businesses.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="TENGABIZ social profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 TENGABIZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
