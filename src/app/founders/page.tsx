import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founders — trika.ai",
};

export default function FoundersPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Headline */}
      <section className="bg-gradient-to-br from-accent-light via-white to-white px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The team behind trika.ai
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Why we&rsquo;re building Trika.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Bijal and Teena have worked together &mdash; as friends and
            collaborators &mdash; for 16 years. Trika is the company they built
            together to bring 18+ years of automotive software experience to the
            global dealer market as AI-powered SaaS.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Bijal Sanghavi */}
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-white p-8 shadow-sm sm:flex-row sm:gap-10">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
              BS
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Bijal Sanghavi
              </h3>
              <p className="mt-1 text-base font-medium text-accent">
                Co-founder and CEO, trika.ai
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Bijal has spent 27 years building and scaling enterprise software
                companies &mdash; across three companies that grew past $100M.
                His background spans AI, product, and the unglamorous work of
                turning technical breakthroughs into products people actually pay
                for. Trika is his first venture focused on the automotive dealer
                ecosystem.
              </p>
              <a
                href="https://www.linkedin.com/in/bijal-sanghavi/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-base font-medium text-accent transition-colors hover:text-accent-hover"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>

          {/* Teena Shah */}
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-white p-8 shadow-sm sm:flex-row sm:gap-10">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-green text-2xl font-bold text-white">
              TS
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Teena Shah</h3>
              <p className="mt-1 text-base font-medium text-green">
                Co-founder, trika.ai
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Teena is also the CEO of Tiez Interactive Pvt Ltd, the company
                she founded over a decade ago, where she has spent the last
                decade-plus building automotive technology for OEMs and their
                dealer networks. Her career in the auto industry spans 18+ years
                across enterprise software delivery, product operations, and
                dealer-network programs. At Trika, she brings the operating
                depth that comes from having actually run dealer software at
                scale.
              </p>
              <a
                href="https://www.linkedin.com/in/teena-shah-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-base font-medium text-accent transition-colors hover:text-accent-hover"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The partnership */}
      <section className="border-t border-border bg-gradient-to-r from-accent to-accent-hover px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why this works.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Teena has spent her career building and delivering software for
            automotive dealer networks. Bijal has spent his building and scaling
            enterprise software companies. The partnership is simple: Teena
            brings the operating depth in automotive. Bijal brings the product
            engine. Neither of us could build Trika alone. Together, we have
            what the market has been missing &mdash; operators who understand
            both the product depth and the dealer floor.
          </p>
        </div>
      </section>
    </div>
  );
}
