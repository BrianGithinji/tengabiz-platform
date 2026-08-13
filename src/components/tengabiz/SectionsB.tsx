import {
  Sparkles,
  TrendingUp,
  AlertCircle,
  Target,
  Gauge,
  Smartphone,
  Store,
  Receipt,
  Landmark,
  ArrowDownLeft,
  ArrowUpRight,
  Lock,
  PiggyBank,
  Truck,
  Building2,
} from "lucide-react";
import { Reveal, useCounter } from "./hooks";
import { SectionHead } from "./SectionsA";

function BigRing() {
  const { ref, value } = useCounter(82, 1600);
  const size = 240;
  const r = (size - 22) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary-deep)" />
            <stop offset="60%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary-glow)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="18" className="stroke-secondary" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth="18"
          strokeLinecap="round"
          stroke="url(#ringGrad)"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-content-center text-center">
        <span ref={ref} className="font-display block text-5xl font-extrabold">
          {value}%
        </span>

        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
          Loan Readiness
        </p>
      </div>
    </div>
  );
}

function GrowthChart() {
  const data = [
    { m: "Mar", v: 65 },
    { m: "Apr", v: 69 },
    { m: "May", v: 73 },
    { m: "Jun", v: 77 },
    { m: "Jul", v: 82 },
    { m: "Aug", v: 86 },
  ];
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-bold">Loan Readiness over time</p>
      <div className="mt-6 flex h-40 items-end gap-2 sm:gap-3">
        {data.map((d, i) => (
          <div key={d.m} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
            <span className="text-[11px] font-bold">{d.v}%</span>
            <div
              className="bg-gradient-primary w-full rounded-t-lg transition-[height] duration-700"
              style={{ height: `${d.v}%`, transitionDelay: `${i * 90}ms` }}
            />
            <span className="text-[11px] font-medium text-muted-foreground">{d.m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoanReadiness() {
  const metrics = [
    "Monthly income",
    "Monthly expenses",
    "Net cash flow",
    "Income consistency",
    "Transaction activity",
    "Average balance",
    "Business Lock consistency",
    "Savings consistency",
  ];

  return (
    <section id="loan-readiness" className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Loan readiness"
            title="Build financial credibility as you run your business."
            sub="TENGABIZ continuously analyses your business financial behaviour to create a Loan Readiness Score — so your everyday discipline becomes evidence a lender can understand."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-float)] sm:p-8">
              <BigRing />
              <div className="mt-8 rounded-2xl bg-surface-2 p-5 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Estimated borrowing capacity
                </p>
                <p className="font-display mt-1 text-3xl font-extrabold">Up to KES 150,000</p>
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                Loan Readiness is an estimated indicator, not a guarantee of loan approval.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={100}>
              <GrowthChart />
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <Gauge className="h-4 w-4 text-primary" /> What we measure
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {metrics.map((m) => (
                    <li
                      key={m}
                      className="flex min-w-0 items-center gap-2 rounded-xl bg-surface px-3 py-2.5 text-sm font-medium"
                    >
                      <span className="bg-gradient-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span className="truncate">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Income is improving",
      body: "Your business income has been more consistent this month.",
    },
    {
      icon: AlertCircle,
      title: "Watch your spending",
      body: "Your available business money is lower than usual. Consider delaying non-essential withdrawals.",
    },
    {
      icon: Target,
      title: "Savings milestone",
      body: "You are close to reaching your refrigerator savings goal.",
    },
    {
      icon: Gauge,
      title: "Loan readiness improved",
      body: "Your Loan Readiness improved because your income became more consistent.",
    },
  ];

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="AI insights"
            title="Your financial data, explained simply."
            sub="No overwhelming charts. TENGABIZ reads your real business activity and tells you, in plain language, what it means and what to do next."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {insights.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="card-hover h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="truncate text-base font-bold">{c.title}</h3>
                  <Sparkles className="ml-auto h-4 w-4 shrink-0 text-primary" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{c.body}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Payments() {
  const rails = [
    { name: "Pochi la Biashara", icon: Smartphone, note: "Connected" },
    { name: "M-Pesa Buy Goods", icon: Store, note: "Connected" },
    { name: "PayBill", icon: Receipt, note: "Connected" },
    { name: "Bank Accounts", icon: Landmark, note: "Coming soon" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Payments"
            title="Keep using the payment methods your business already trusts."
            sub="TENGABIZ doesn't force business owners to abandon existing payment channels. It acts as the intelligence and financial management layer on top of them."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rails.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <article className="card-hover flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary">
                    <r.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{r.name}</p>
                    <p
                      className={`text-xs font-semibold ${r.note === "Coming soon" ? "text-muted-foreground" : "text-primary"}`}
                    >
                      {r.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-primary/25 bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Transaction example
              </p>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
                <span className="flex min-w-0 items-center gap-3">
                  <ArrowDownLeft className="h-5 w-5 shrink-0 text-primary" />
                  <span className="truncate text-sm font-bold">Customer Payment</span>
                </span>
                <span className="font-display shrink-0 text-lg font-extrabold text-primary">
                  + KES 500
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold text-muted-foreground">
                Automatically added to
              </p>
              <div className="bg-gradient-primary mt-2 rounded-2xl p-4">
                <p className="font-display text-base font-extrabold text-primary-foreground">
                  Business Money
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Transactions() {
  const rows = [
    { t: "Customer Payment", a: "+ KES 500", pos: true, icon: ArrowDownLeft },
    { t: "Business Lock", a: "− KES 500", pos: false, icon: Lock },
    { t: "Supplier Payment", a: "− KES 2,000", pos: false, icon: Truck },
    { t: "Savings Contribution", a: "− KES 1,800", pos: false, icon: PiggyBank },
    { t: "Bank Transfer", a: "− KES 5,000", pos: false, icon: Building2 },
  ];

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Transactions"
            title="Every movement has a purpose."
            sub="Each transaction is labelled so you always know whether money was earned, protected, saved or spent."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            {rows.map((r) => (
              <div key={r.t} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 sm:p-5">
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${r.pos ? "bg-accent" : "bg-secondary"}`}
                  >
                    <r.icon className={`h-4 w-4 ${r.pos ? "text-primary" : "text-muted-foreground"}`} />
                  </span>
                  <span className="truncate text-sm font-bold sm:text-base">{r.t}</span>
                </span>
                <span
                  className={`font-display shrink-0 text-sm font-extrabold sm:text-base ${r.pos ? "text-primary" : "text-foreground"}`}
                >
                  {r.a}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs font-semibold text-muted-foreground">
            <ArrowUpRight className="h-4 w-4 text-primary" /> Withdrawals to personal money are
            always clearly marked.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
