import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AuditPro — Trika.ai",
  description:
    "AuditPro is the accountability layer for your dealership sales process. Remote, physical, and observational audits — powered by AI, built on NADA methodology.",
};

export default function AuditProPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* 6.1 Hero */}
      <section className="px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AuditPro. The accountability layer for your sales process.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Verify every day whether your team followed the 7-step Road to the
            Sale. Remote, physical, and observational audits — powered by AI,
            built on NADA methodology.
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

      {/* 6.2 Problem */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The shadow process nobody talks about.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>Every dealership has two sales processes.</p>
            <p>
              The one in the handbook — the one your 20 Group coach taught, the
              one your training vendor billed for, the one you talked about in
              last Monday&rsquo;s sales meeting.
            </p>
            <p>And the one that actually happens on the floor.</p>
            <p>
              The gap between them is where your closing ratio, your gross per
              unit, your OEM stair-step bonus, and your franchise audit all
              live. And it&rsquo;s a gap most dealerships have no reliable way
              to measure — because CRMs log transactions, DMSes log inventory,
              and mystery shoppers show up once a quarter on a deal you
              didn&rsquo;t pick.
            </p>
            <p className="font-semibold text-foreground">
              AuditPro audits what actually happened. Every day.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Three audit modes */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three ways to audit. One platform.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight">
                Remote audits.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Digital artifact audit without physical presence. Lead response
                time, personalized video walkarounds, written market-value
                reports on trade-ins, and CRM entry completeness. Audits happen
                from anywhere, against data you already have.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight">
                Physical audits.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                On-site image and incentive-lot audit with photo evidence. Cars
                nosed in correctly. Buyer&rsquo;s Guide in every window. OEM
                signage correct. Lounge stocked to spec. The audit you need to
                pass before the OEM shows up unannounced.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight">
                Observational audits.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Spot-check your Tower. AuditPro reconciles the numbers on your
                daily KPI dashboard — appointment show rate, demo rate, closing
                ratio — against whether the underlying steps actually happened
                on the floor. Your Tower tells you what. AuditPro tells you
                why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 The 7 steps */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built on NADA&rsquo;s 7-step Road to the Sale.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            AuditPro&rsquo;s questionnaire is built on the framework your team
            was trained on — the same 7-step process NADA certifies across the
            country. Every audit maps directly to one of these seven steps, so
            your team can see exactly where the process broke down on a specific
            deal.
          </p>
          <ol className="mt-12 space-y-8">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Meet &amp; Greet
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Was the customer greeted within 30 seconds?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Needs Discovery
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Was a fact-finding sheet completed and documented?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Product Walkaround
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Did the rep highlight three value-add features specific to the
                  customer&rsquo;s stated needs?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Test Drive
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Was a specific route followed, and did the rep ride along?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Trade-In Appraisal
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Was the customer walked around their own car? Written
                  market-value report provided, not a verbal number?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                6
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  First Pencil
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Was the quote presented within 15 minutes of the test drive,
                  structured not verbal?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                7
              </span>
              <div>
                <p className="text-base font-bold text-foreground">
                  F&amp;I Handover
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  Warm, named handoff to the Finance Manager? Did a manager
                  T.O. happen before the customer left the store?
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 6.5 Positioning */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AuditPro is not your CRM. And not your DMS.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-base leading-relaxed text-muted">
                Your CRM records that a lead came in and a deal was written.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted">
                Your DMS records the transaction — the inventory, the F&amp;I
                terms, the registration.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold leading-relaxed text-foreground">
                AuditPro audits the human interaction in between. The part no
                software currently captures effectively.
              </p>
            </div>
          </div>
          <p className="mt-12 text-lg font-medium text-foreground">
            We sit alongside your stack. We don&rsquo;t replace anything.
          </p>
        </div>
      </section>

      {/* 6.6 Two problems, one tool */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Two problems. One tool.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="text-xl font-bold tracking-tight">
                Enforce your own process.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The sales manager&rsquo;s job is to enforce process. AuditPro
                tells you, by 5 p.m. today, which deals followed the seven
                steps and which didn&rsquo;t — and exactly where the breakdown
                happened. Five random deal audits a day. Accountability built
                into the rhythm of your store.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="text-xl font-bold tracking-tight">
                Be audit-ready, 24/7.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                OEM unannounced audits can cost you tens of thousands in
                withheld stair-step bonuses if your images, signage, or lot
                standards slip. AuditPro is your preparation layer — the tool
                that makes sure the dealership is audit-ready without you having
                to walk every rooftop yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 Differentiator */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mystery shopping tells you what happened. Once a quarter. On a deal
            we picked.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            AuditPro runs five random deal audits every single day. Your team
            knows they&rsquo;re being measured. That changes behavior, not just
            reporting.
          </p>
        </div>
      </section>

      {/* 6.8 Who it's for */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for US dealership leaders who believe process is what
            separates good stores from great ones.
          </h2>
          <div className="mt-12 space-y-8">
            <div className="rounded-lg border border-border bg-surface p-8">
              <p className="text-base font-bold text-foreground">
                General Sales Managers
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Who are tired of finding out after the deal is dead that a step
                got skipped.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-8">
              <p className="text-base font-bold text-foreground">
                General Managers
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Running a store who want their processes audited daily, not
                judged quarterly.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-8">
              <p className="text-base font-bold text-foreground">
                Multi-rooftop owners
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Who can&rsquo;t physically walk every store and need
                portfolio-level visibility on process compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.9 Final CTA */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See AuditPro on your deals.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
            A 30-minute demo. We&rsquo;ll walk through real dealership
            scenarios — no canned slideware.
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
