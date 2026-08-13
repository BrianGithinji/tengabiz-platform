import brianImg from "@/assets/brian.jpg";
import brendaImg from "@/assets/brenda.jpg";

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
          Two university students. One real woman's struggle. A mission to fix how African small
          businesses handle money — forever.
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
            when they entered the{" "}
            <span className="font-semibold text-foreground">ACCESS Business Challenge</span> — a
            prestigious student entrepreneurship competition designed to push young innovators to
            solve real-world problems with scalable solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The brief was simple but weighty:{" "}
            <em>
              "Identify a critical gap in the African business ecosystem and build something that
              actually fixes it."
            </em>{" "}
            For Brian and Brenda, the answer came not from a textbook or a market research report —
            but from a woman named <span className="font-semibold text-foreground">Mama Wanjiku</span>.
          </p>
        </div>
      </section>

      {/* Mama Wanjiku Story */}
      <section className="bg-secondary/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-4xl">🛒</span>
            <h2 className="font-display text-2xl font-bold">The Woman Who Changed Everything</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Mama Wanjiku ran a small grocery stall in the heart of Githurai market. She was up
              before dawn every morning, arranging tomatoes, onions, and sukuma wiki with the
              precision of someone who had done it a thousand times — because she had. Her stall
              was always busy. Her smile was always warm. Her hustle was relentless.
            </p>
            <p>
              But at the end of every month, Mama Wanjiku faced the same crushing reality: she
              didn't have enough money to restock. Not because business was bad. Business was
              actually good. The problem was that her business money and her personal money lived
              in the same place — her M-Pesa account — and the two were completely inseparable.
            </p>
            <p>
              School fees for her youngest came out of the same wallet as stock money. A family
              emergency dipped into the same pot as her supplier payments. A good week of sales
              felt like personal income, so she spent it like personal income. By the time
              restock day came, the money that should have been there — wasn't.
            </p>
            <p>
              She wasn't reckless. She wasn't irresponsible. She was simply operating without a
              system. Without a way to see, in real time, what belonged to her business and what
              was hers to spend. She was running a business with her eyes closed — not by choice,
              but because no tool had ever been built to help her open them.
            </p>
            <p className="rounded-2xl border-l-4 border-primary bg-card px-6 py-5 font-medium text-foreground">
              "I work so hard every day. I don't understand where the money goes. By Friday I have
              nothing left to buy new stock. I feel like I am going backwards." — Mama Wanjiku
            </p>
            <p>
              Brian and Brenda heard her story during a community field visit as part of their
              ACCESS Challenge research. They sat with her for over an hour, listening. And the
              more she spoke, the more they realised: Mama Wanjiku was not an exception. She was
              the rule. Millions of small business owners across Kenya — across Africa — were
              living the exact same story, trapped in the exact same invisible cycle.
            </p>
            <p>
              They left that market with one shared conviction: this problem was solvable. And
              they were going to solve it.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem They Saw */}
      <section className="mx-auto max-w-4xl px-4 py-16">
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
      </section>

      {/* Building the Solution */}
      <section className="bg-secondary/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-8 text-center text-2xl font-bold">
            From a Market Stall to a Mission
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Back at Strathmore, Brian and Brenda threw themselves into building a solution.
              Late nights in the library, whiteboard sessions that stretched past midnight,
              arguments about features, pivots on the business model — all of it anchored by one
              question they kept asking themselves: <em>"Would this actually help Mama Wanjiku?"</em>
            </p>
            <p>
              They went back to the market. They interviewed more traders, more shop owners, more
              fundis and food vendors. Every conversation confirmed the same thing: the problem
              wasn't a lack of hard work or ambition. It was a lack of financial infrastructure
              designed for the way these businesses actually operated — in cash, in M-Pesa, in
              daily cycles, in communities where business and family life are deeply intertwined.
            </p>
            <p>
              The solution they built was named{" "}
              <span className="font-semibold text-foreground">TengaBiz</span> — from the Swahili
              word <em>tenga</em>, meaning "to separate." Because the single most powerful thing
              any small business owner can do is separate their business money from their personal
              money. Everything else — savings, loan readiness, financial clarity — flows from
              that one act.
            </p>
            <p>
              TengaBiz is their answer to Mama Wanjiku. And to every business owner like her
              across the continent who deserves better than guessing where their money went.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="px-4 py-16">
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
                inclusion. Sitting with Mama Wanjiku in Githurai market lit a fire in him that
                hasn't gone out since. At TengaBiz, he leads product vision and growth strategy,
                obsessed with building tools that work for the people who need them most.
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
                Brenda brings a rare combination of empathy and operational precision. She heard
                Mama Wanjiku's story and refused to accept that it was inevitable. At TengaBiz,
                she leads operations, partnerships, and user experience — ensuring every feature
                is genuinely accessible to the people it was built for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <h2 className="font-display mb-6 text-2xl font-bold">From a Student Challenge to a Movement</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          What started as a competition entry — inspired by one woman's struggle to restock her
          market stall — has grown into a full financial operating system for African micro and
          small businesses. TengaBiz is not just a product. It is a promise: that every
          hardworking business owner in Africa deserves the financial tools to separate, protect,
          and grow their money with confidence.
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
