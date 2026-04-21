import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Company — trika.ai",
};

export default function CompanyPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-light via-white to-white px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            About trika.ai
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Built by people who&rsquo;ve been writing software for the auto
            industry for 18 years.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            trika.ai builds AI-powered SaaS for automotive dealer networks. Our
            flagship, AuditPro, is the first product we&rsquo;re bringing to
            the US market.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            18+ years in automotive. Now building SaaS for the US.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Our founders have spent the last 18+ years serving major
              automotive OEMs — building software that runs at OEM scale,
              learning what dealer networks actually need, and learning what
              gets ignored when software doesn&rsquo;t match the floor.
            </p>
            <p>
              trika.ai is the company we built to turn that experience into
              AI-powered SaaS for the global dealer ecosystem. We&rsquo;re
              starting in the US, with the product we believe US dealerships
              need most.
            </p>
          </div>
        </div>
      </section>

      {/* Why AuditPro first */}
      <section className="border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why we built AuditPro first.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Of all the things a dealer network struggles with, the gap
              between documented process and floor reality is the one with the
              clearest financial impact and the fewest tools to address it.
              CRMs and DMSes don&rsquo;t audit the human interaction. Mystery
              shoppers run too rarely and too predictably to change behavior.
              Internal coaching is spotty by design.
            </p>
            <p className="rounded-lg border-l-4 border-accent bg-white px-6 py-4 font-semibold text-foreground">
              AuditPro is purpose-built on the NADA Road to the Sale — the
              framework US dealerships are already trained on — to close that
              gap, every day, in a way that actually changes what happens on
              the floor.
            </p>
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-accent/20">
            <div className="bg-gradient-to-r from-accent to-accent-hover px-8 py-6 sm:px-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Why we&rsquo;re called Trika.
              </h2>
            </div>
            <div className="bg-accent-light px-8 py-10 sm:px-12">
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  &ldquo;Trika&rdquo; comes from the Sanskrit concept of the
                  triad — three forces that, together, do what none of them can
                  do alone.
                </p>
                <p>
                  The Trishul, the trident of Lord Shiva, carries the same idea:
                  three prongs, three powers — Create, Preserve, Transform —
                  held in a single instrument.
                </p>
                <p>It&rsquo;s the metaphor for how we build:</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <dt className="text-base font-bold text-accent">Create</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    New SaaS products for problems the auto industry knows about
                    but hasn&rsquo;t solved.
                  </dd>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <dt className="text-base font-bold text-green">Preserve</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    The operational discipline that separates good dealerships
                    from great ones.
                  </dd>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <dt className="text-base font-bold text-foreground">Transform</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    The gap between what dealers do today and what they can
                    measurably do better.
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What we believe.
          </h2>
          <div className="mt-12 space-y-8">
            <div className="rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm">
              <p className="text-lg font-bold text-foreground">
                Process is the only moat a dealership actually owns.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Inventory gets allocated. Pricing gets matched. CSI scores
                drift. What separates good stores from great ones is whether
                the process on the floor matches the process in the handbook.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green bg-white p-6 shadow-sm">
              <p className="text-lg font-bold text-foreground">
                Software should audit behavior, not just record it.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Your CRM and DMS capture what happened. Trika&rsquo;s products
                capture whether what happened was done correctly.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm">
              <p className="text-lg font-bold text-foreground">
                Great dealer software is built with dealers, not at them.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Eighteen-plus years of OEM and dealer-network work taught us
                one thing above all: nobody builds software for the dealer
                floor by guessing. We don&rsquo;t.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
