import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Know what&rsquo;s actually happening on your showroom floor.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Trika.ai builds AI-powered SaaS for automotive dealer networks. Our
            flagship, AuditPro, verifies every day whether your sales team
            followed the process — not once a quarter through mystery shopping.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/auditpro"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              See how AuditPro works &rarr;
            </Link>
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Every dealership runs two processes.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              The one in the handbook. And the one that actually happens on the
              floor.
            </p>
            <p>
              Most dealership leaders are confident their team follows the 7-step
              Road to the Sale. Almost none can show data to prove it. The gap
              between the documented process and the lived one shows up in
              closing ratios, gross per copy, stair-step bonus clawbacks, and
              franchise audit failures — but by the time it shows up in the
              numbers, the deal is already dead.
            </p>
            <p className="font-semibold text-foreground">
              AuditPro closes that gap. Every day.
            </p>
          </div>
        </div>
      </section>

      {/* Meet AuditPro */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet AuditPro.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              AuditPro is the accountability layer for your sales process. It
              audits whether the seven steps actually happened — remotely on
              digital artifacts, physically on the lot, and observationally
              against your daily Tower numbers.
            </p>
            <p>
              Built on the NADA Road to the Sale. Designed for the US dealership
              context.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/auditpro"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              See the full product &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built by operators who&rsquo;ve spent 18+ years building automotive
            software.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            Trika.ai&rsquo;s founders have spent 18+ years serving major
            automotive OEMs — building dealer-network software at OEM scale,
            learning what dealerships actually need from software, and learning
            what gets ignored. AuditPro is the first product we&rsquo;re
            bringing to the US market. It is purpose-built on the NADA Road to
            the Sale methodology — the same framework your team was trained on.
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            <div>
              <p className="text-base font-bold text-foreground">
                18+ years in automotive.
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Founders with deep tenure serving major automotive OEMs.
              </p>
            </div>
            <div>
              <p className="text-base font-bold text-foreground">
                NADA-aligned.
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                AuditPro is built on the 7-step Road to the Sale — the framework
                your team was trained on.
              </p>
            </div>
            <div>
              <p className="text-base font-bold text-foreground">
                Sits beside your stack.
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                AuditPro is not a CRM or DMS. It layers on top of CDK,
                VinSolutions, DealerSocket, or Reynolds &amp; Reynolds — without
                replacing anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stop guessing whether the process was followed. Find out.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Book a 30-minute demo. We&rsquo;ll walk you through AuditPro on
            real dealership scenarios.
          </p>
          <div className="mt-10">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
