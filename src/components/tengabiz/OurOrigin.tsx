import brianImg from "@/assets/brian.jpg";
import brendaImg from "@/assets/brenda.jpg";
import posterImg from "@/assets/access-poster.jpeg";

export function OurOrigin() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 pb-20 pt-32 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Where It All Began
        </p>
        <h1 className="font-display mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Our Origin Story
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Two university students. One bold challenge. A mission to fix how African small businesses
          handle money — forever.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-display mb-4 text-2xl font-bold text-primary">
            The ACCESS Challenge That Started Everything
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            In 2024, Brian Githinji and Rose Brenda Gathoni were students at Strathmore University
            when they entered the <span className="font-semibold text-foreground">ACCESS
            Business Challenge</span> — a prestigious student entrepreneurship competition designed
            to push young innovators to solve real-world problems with scalable solutions.
          </p>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            The brief was simple but weighty: <em>"Identify a critical gap in the African business
            ecosystem and build something that actually fixes it."</em> For Brian and Brenda, the
            answer was hiding in plain sight — in the chaotic, mixed-up finances of millions of
            micro and small business owners across Kenya and beyond.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={posterImg}
              alt="ACCESS Business Challenge Poster"
              className="w-full object-contain"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            The ACCESS Business Challenge poster — the competition that sparked TengaBiz
          </p>
        </div>
      </section>

      {/* The Problem They Saw */}
      <section className="bg-secondary/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-8 text-center text-2xl font-bold">
            The Problem They Couldn't Ignore
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "💸",
                title: "Mixed Money",
                desc: "Business owners were using the same M-Pesa account for school fees, groceries, and stock — with no way to tell what belonged to the business.",
              },
              {
                icon: "📉",
                title: "Invisible Losses",
                desc: "Profits were being silently eaten by personal spending. Owners thought they were growing, but their businesses were slowly bleeding out.",
              },
              {
                icon: "🚫",
                title: "Locked Out of Credit",
                desc: "Without clean financial records, banks and SACCOs turned them away. No history meant no loans — and no loans meant no growth.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display mb-10 text-center text-2xl font-bold">The Story Behind the Solution</h2>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>
            Brian had watched his aunt — a vibrant mama mboga in Kawangware — work tirelessly from
            5 AM to 8 PM every single day, yet somehow never have enough money to restock properly
            at the end of the month. She wasn't lazy. She wasn't careless. She simply had no system
            to separate what was hers personally from what belonged to her business.
          </p>
          <p>
            Brenda had seen the same pattern in her home county of Murang'a — small shop owners,
            tailors, and food vendors who were genuinely hardworking but financially invisible.
            They couldn't access loans. They couldn't plan. They couldn't grow. Not because they
            lacked ambition, but because the tools built for finance were never built for them.
          </p>
          <p>
            When the ACCESS Challenge came, Brian and Brenda didn't have to search far for their
            problem statement. They had lived it. They had seen it. And they were angry enough
            about it to do something.
          </p>
          <p>
            Late nights in the Strathmore library, whiteboard sessions that stretched past midnight,
            arguments about features, pivots on the business model, and one shared conviction:{" "}
            <span className="font-semibold text-foreground">
              African micro-businesses deserve a financial operating system built specifically for
              how they actually live and work.
            </span>
          </p>
          <p>
            That conviction became <span className="font-semibold text-foreground">TengaBiz</span>{" "}
            — a name drawn from the Swahili word <em>tenga</em>, meaning "to separate." Because
            the first and most powerful step toward financial health for any small business owner
            is simply separating business money from personal money.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-secondary/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-12 text-center text-2xl font-bold">Meet the Founders</h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {/* Brian */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 h-48 w-48 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg">
                <img
                  src={brianImg}
                  alt="Brian Githinji — Co-founder of TengaBiz"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="font-display text-xl font-bold">Brian Githinji</h3>
              <p className="mb-1 text-sm font-medium text-primary">Co-Founder & CEO</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Brian is a technology and business strategist with a deep passion for financial
                inclusion. Driven by watching family members struggle with informal business
                finances, he channelled that frustration into building systems that actually work
                for the people who need them most. At TengaBiz, Brian leads product vision and
                growth strategy.
              </p>
            </div>

            {/* Brenda */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 h-48 w-48 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg">
                <img
                  src={brendaImg}
                  alt="Rose Brenda Gathoni — Co-founder of TengaBiz"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="font-display text-xl font-bold">Rose Brenda Gathoni</h3>
              <p className="mb-1 text-sm font-medium text-primary">Co-Founder & COO</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Brenda brings a rare combination of empathy and operational precision. Having grown
                up witnessing the financial struggles of small business owners in her community,
                she became obsessed with designing solutions that are not just powerful but
                genuinely accessible. At TengaBiz, Brenda leads operations, partnerships, and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What They Built */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="font-display mb-6 text-2xl font-bold">From a Student Challenge to a Movement</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          What started as a competition entry has grown into a full financial operating system
          for African micro and small businesses — with features like Business Lock, Smart Savings,
          AI-powered insights, and Loan Readiness scoring. TengaBiz is not just a product. It is
          a promise: that every hardworking business owner in Africa deserves the financial tools
          to separate, protect, and grow their money with confidence.
        </p>
        <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4">
          <span className="text-2xl">🌍</span>
          <p className="text-sm font-semibold text-foreground">
            Built in Kenya. Designed for Africa. Ready for the world.
          </p>
        </div>
      </section>
    </div>
  );
}
