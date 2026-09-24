import { ArrowRight, PlayCircle, Sparkles, Lock, PiggyBank, Wallet, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, useCounter } from "./hooks";

function ScoreRing({ value = 82, size = 56 }: { value?: number; size?: number }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth="6"
          className="stroke-secondary"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className="stroke-primary"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-xs font-bold">{value}%</span>
    </div>
  );
}

export function HeroDashboard() {
  const amount = useCounter(24500);
  return (
    <div className="relative">
      <div className="bg-gradient-primary absolute -inset-6 -z-10 rounded-[2.5rem] opacity-15 blur-2xl" />
      <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-float)] sm:p-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted-foreground">Business Money</p>
            <p className="font-display truncate text-3xl font-extrabold sm:text-4xl">
              KES <span ref={amount.ref}>{amount.value.toLocaleString()}</span>
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
            <TrendingUp className="h-3.5 w-3.5" /> Healthy
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Available", value: "9,800", icon: Wallet },
            { label: "Business Lock", value: "12,000", icon: Lock },
            { label: "Savings", value: "2,700", icon: PiggyBank },
          ].map((s) => (
            <div key={s.label} className="min-w-0 rounded-2xl bg-surface-2 p-3">
              <s.icon className="h-4 w-4 text-primary" />
              <p className="mt-2 truncate text-[11px] font-medium text-muted-foreground">
                {s.label}
              </p>
              <p className="font-display truncate text-sm font-bold sm:text-base">KES {s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted-foreground">Loan Readiness</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="bg-gradient-primary h-full rounded-full" style={{ width: "82%" }} />
            </div>
          </div>
          <ScoreRing />
        </div>

        <div className="mt-3 space-y-2">
          {[
            { t: "Customer Payment", a: "+ KES 500", pos: true },
            { t: "Supplier Payment", a: "− KES 2,000", pos: false },
          ].map((t) => (
            <div
              key={t.t}
              className="flex items-center justify-between rounded-xl bg-surface px-3 py-2.5"
            >
              <span className="truncate text-xs font-semibold">{t.t}</span>
              <span
                className={`shrink-0 text-xs font-bold ${t.pos ? "text-primary" : "text-muted-foreground"}`}
              >
                {t.a}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass animate-float absolute -bottom-8 -left-2 max-w-[15rem] rounded-2xl p-3 shadow-[var(--shadow-card)] sm:-left-8">
        <div className="flex items-start gap-2">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-[11px] font-medium leading-snug">
            Your business income has been more consistent this month.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-mesh relative overflow-hidden pb-28 pt-28 sm:pt-32 lg:pb-36">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="min-w-0 truncate">Smart financial operating system for African businesses</span>
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Separate your money.{" "}
            <span className="text-gradient">Protect your business.</span> Grow with confidence.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            TENGABIZ helps micro-business owners understand where their money goes, protect business
            funds, save toward goals, and build a stronger financial profile with our 60/20/20 rule.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href="https://tengabiz-app.onrender.com" target="_blank" rel="noopener noreferrer">
                Launch TengaBiz <ArrowRight />
              </a>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <a href="#how-it-works">
                <PlayCircle /> See How It Works
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            Built for the realities of African micro-businesses.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:pl-6">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
