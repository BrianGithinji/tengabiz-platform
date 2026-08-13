import {
  HelpCircle,
  Wallet,
  PiggyBank,
  BadgeCheck,
  Split,
  ShieldCheck,
  Target,
  TrendingUp,
  ArrowRight,
  ArrowLeftRight,
  Sparkles,
  Lock,
  Truck,
} from "lucide-react";
import { Reveal } from "./hooks";

function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

export { SectionHead };

export function Problem() {
  const cards = [
    {
      icon: HelpCircle,
      title: "Where did my business money go?",
      desc: "Money comes in and goes out all day with no record you can trust.",
    },
    {
      icon: Wallet,
      title: "How much can I safely spend?",
      desc: "Without a clear limit, today's spending eats tomorrow's stock.",
    },
    {
      icon: PiggyBank,
      title: "How much should I save?",
      desc: "Saving feels impossible when you don't know what is spare.",
    },
    {
      icon: BadgeCheck,
      title: "Am I ready for financing?",
      desc: "Lenders ask for records that most micro-businesses never keep.",
    },
  ];

  return (
    <section id="product" className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="The problem"
            title="Running a small business shouldn't mean guessing where your money went."
            sub="Most micro-business owners keep business and personal money in one place. Stock money pays for lunch, rent money disappears into small withdrawals, and by the end of the month the numbers simply don't add up."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="card-hover h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary">
                  <c.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-semibold sm:text-xl">
            TENGABIZ turns financial confusion into{" "}
            <span className="text-gradient">clear, actionable decisions.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      name: "Separate",
      icon: Split,
      desc: "Keep Business Money and Personal Money clearly separated.",
    },
    {
      n: "02",
      name: "Protect",
      icon: ShieldCheck,
      desc: "TENGABIZ intelligently reserves money needed for stock, rent, transport, electricity and other business obligations.",
    },
    {
      n: "03",
      name: "Save",
      icon: Target,
      desc: "Create savings goals and receive realistic contribution recommendations based on actual cash flow.",
    },
    {
      n: "04",
      name: "Grow",
      icon: TrendingUp,
      desc: "Build a stronger financial profile and track your Loan Readiness over time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead eyebrow="How it works" title="Four simple steps to financial control" />
        </Reveal>

        <Reveal delay={80}>
          <ol className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold">
            {steps.map((s, i) => (
              <li key={s.name} className="flex items-center gap-3">
                <span className="rounded-full bg-secondary px-4 py-1.5 text-secondary-foreground">
                  {s.name}
                </span>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-primary" />}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="relative mt-14">
          <div className="bg-gradient-primary absolute left-0 right-0 top-7 hidden h-0.5 opacity-25 lg:block" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article className="card-hover relative h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-primary grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-muted-foreground/40">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MoneySplit() {
  return (
    <section id="features" className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Business vs personal"
            title="Know exactly what belongs to your business."
            sub="Your business capital should work for your business. TENGABIZ makes that separation visible."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <article className="rounded-3xl border border-primary/25 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Business Money
              </p>
              <p className="font-display mt-3 text-4xl font-extrabold sm:text-5xl">KES 24,500</p>
              <dl className="mt-6 space-y-3">
                {[
                  ["Available", "KES 9,800", Wallet],
                  ["Business Lock", "KES 12,000", Lock],
                  ["Savings", "KES 2,700", PiggyBank],
                ].map(([label, value, Icon]) => {
                  const I = Icon as typeof Wallet;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center justify-between rounded-2xl bg-surface-2 px-4 py-3"
                    >
                      <dt className="flex min-w-0 items-center gap-2 text-sm font-medium text-muted-foreground">
                        <I className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate">{label as string}</span>
                      </dt>
                      <dd className="font-display shrink-0 text-base font-bold">
                        {value as string}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col items-center gap-2 py-2">
              <span className="bg-gradient-primary grid h-14 w-14 place-items-center rounded-2xl shadow-[var(--shadow-glow)]">
                <ArrowLeftRight className="h-6 w-6 text-primary-foreground" />
              </span>
              <p className="max-w-[11rem] text-center text-xs font-semibold text-muted-foreground">
                TENGABIZ prevents accidental mixing of personal and business funds
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <article className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Personal Money
              </p>
              <p className="font-display mt-3 text-4xl font-extrabold sm:text-5xl">KES 10,000</p>
              <dl className="mt-6 space-y-3">
                {[
                  ["Personal spending", "KES 4,500"],
                  ["Personal savings", "KES 5,500"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3"
                  >
                    <dt className="truncate text-sm font-medium text-muted-foreground">{label}</dt>
                    <dd className="font-display shrink-0 text-base font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FlowBar({ from, to, icon: Icon }: { from: string; to: string; icon: typeof Lock }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[1fr_2fr_1fr]">
      <span className="truncate text-sm font-bold">{from}</span>
      <div className="relative col-span-2 h-1.5 overflow-hidden rounded-full bg-secondary sm:col-span-1">
        <span className="animate-flow bg-gradient-primary absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full" />
      </div>
      <span className="flex min-w-0 items-center justify-end gap-2 truncate text-sm font-bold text-primary sm:col-start-3">
        <Icon className="h-4 w-4 shrink-0" />
        {to}
      </span>
    </div>
  );
}

export function BusinessLock() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            center={false}
            eyebrow="Business Lock"
            title="Protect the money your business needs to survive."
            sub="Business Lock quietly sets aside what your business must pay for soon — before that money disappears into everyday spending."
          />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The amount is intelligent rather than fixed. TENGABIZ analyses income, expenses, cash
            flow, available balance, savings commitments and withdrawal behaviour to decide how much
            to protect today.
          </p>
          <div className="mt-8 space-y-3">
            <FlowBar from="Available Money" to="Business Lock" icon={Lock} />
            <FlowBar from="Business Lock" to="Supplier Payment" icon={Truck} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-float)] sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  Recommended Business Lock
                </p>
                <p className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">
                  KES 500 <span className="text-lg text-muted-foreground">/ day</span>
                </p>
              </div>
              <span className="bg-gradient-primary grid h-12 w-12 shrink-0 place-items-center rounded-2xl">
                <Lock className="h-5 w-5 text-primary-foreground" />
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Reason
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Stock", "Rent", "Transport", "Electricity"].map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                >
                  {r}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-surface-2 p-4">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm font-medium leading-relaxed">
                Based on your business activity, we recommend protecting approximately KES 500 today.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SmartSavings() {
  const goals = [
    { name: "Expand Shop", target: "KES 60,000", pct: 34 },
    { name: "Emergency Fund", target: "KES 15,000", pct: 58 },
    { name: "New Equipment", target: "KES 35,000", pct: 21 },
    { name: "School Fees", target: "KES 25,000", pct: 46 },
    { name: "Personal Purchase", target: "KES 8,000", pct: 72 },
  ];

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Smart savings"
            title="Turn goals into achievable savings plans."
            sub="TENGABIZ recommends contributions your cash flow can actually handle, so goals stop feeling like guesses."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <article className="rounded-3xl border border-primary/25 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <h3 className="truncate text-2xl font-extrabold">New Refrigerator</h3>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">
                  7 weeks left
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["Target", "KES 20,000"],
                  ["Saved", "KES 2,700"],
                  ["Remaining", "KES 17,300"],
                ].map(([l, v]) => (
                  <div key={l} className="rounded-2xl bg-surface-2 p-3">
                    <p className="text-[11px] font-medium text-muted-foreground">{l}</p>
                    <p className="font-display mt-1 text-sm font-bold sm:text-base">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Progress</span>
                  <span>13.5%</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="bg-gradient-primary h-full rounded-full transition-[width] duration-1000"
                    style={{ width: "13.5%" }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-border p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Recommended weekly contribution
                </p>
                <p className="font-display shrink-0 text-lg font-extrabold text-primary">
                  KES 1,800
                </p>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-surface-2 p-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed">
                  Based on your current cash flow, saving KES 1,800 per week may be more comfortable.
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {goals.map((g, i) => (
              <Reveal key={g.name} delay={i * 70}>
                <article className="card-hover rounded-2xl border border-border bg-card p-4">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                    <h4 className="truncate text-sm font-bold">{g.name}</h4>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                      {g.target}
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="bg-gradient-primary h-full rounded-full"
                      style={{ width: `${g.pct}%` }}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
