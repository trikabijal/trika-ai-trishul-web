import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AuditPro — trika.ai",
  description:
    "AuditPro is the audit engine for dealership operations. AI-powered audio detection, photo evidence, GPS tracking — starting with the NADA Road to the Sale.",
};

const steps = [
  { n: "1", title: "Meet & Greet", desc: "Was the customer greeted within 30 seconds?" },
  { n: "2", title: "Needs Discovery", desc: "Was a fact-finding sheet completed and documented?" },
  { n: "3", title: "Product Walkaround", desc: "Did the rep highlight features specific to the customer\u2019s stated needs?" },
  { n: "4", title: "Test Drive", desc: "Was a specific route followed, and did the rep ride along?" },
  { n: "5", title: "Trade-In Appraisal", desc: "Was the customer walked around their own car? Written report, not a verbal number?" },
  { n: "6", title: "First Pencil", desc: "Was the quote presented within 15 minutes of the test drive, structured not verbal?" },
  { n: "7", title: "F&I Handover", desc: "Warm, named handoff to the Finance Manager? Did a manager T.O. happen before the customer left?" },
];

const mobileScreens = [
  { src: "/images/auditpro-mobile-walkin.png", label: "Step 1 \u2014 Greet", desc: "Audio detection auto-confirms the refreshment offer. Script guides the rep." },
  { src: "/images/auditpro-mobile-step3.png", label: "Step 2 \u2014 Discovery", desc: "Customer needs captured in real time. Audio listens for use cases." },
  { src: "/images/auditpro-mobile-step5.png", label: "Step 3 \u2014 Vehicle Ready", desc: "Photo evidence of vehicle condition. Audio times the key handover." },
  { src: "/images/auditpro-mobile-step7.png", label: "Step 7 \u2014 F&I Handover", desc: "Buyer\u2019s order photographed. CV confirms signature. Timestamp starts F&I window." },
];

export default function AuditProPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-light via-white to-white px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The audit engine for dealership operations
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AuditPro. The accountability layer for your sales process.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            AuditPro is an audit engine that can verify any dealership process —
            using AI-powered audio detection, photo evidence, GPS tracking, and
            timestamps. The Road to the Sale is the first audit we built.
            It won&rsquo;t be the last.
          </p>
          <div className="mt-10">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-white shadow-md shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="border-t border-border bg-accent-light px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Image
                src="/images/auditpro-dashboard-overview.png"
                alt="AuditPro Sales Floor Dashboard showing deal tracking and step compliance"
                width={1200}
                height={900}
                className="rounded-xl border border-border shadow-xl"
              />
              <p className="mt-3 text-center text-sm text-muted">
                Manager BI dashboard — see every deal, every step, every rep
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/auditpro-mobile-audit.png"
                alt="AuditPro mobile app showing active deal audit"
                width={390}
                height={844}
                className="w-56 rounded-[2rem] shadow-xl"
                style={{ aspectRatio: "390/844" }}
              />
              <p className="text-center text-sm text-muted">
                Mobile audit app — one deal at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The shadow process nobody talks about.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>Every dealership has two sales processes.</p>
            <p>
              The one in the handbook — the one your trainer taught, the
              one your consulting firm billed for, the one you talked about in
              last Monday&rsquo;s sales meeting.
            </p>
            <p>And the one that actually happens on the floor.</p>
            <p>
              The gap between them is where your closing ratio, your gross per
              unit, your OEM bonus, and your franchise audit all
              live. And it&rsquo;s a gap most dealerships have no reliable way
              to measure — because CRMs log transactions, DMSes log inventory,
              and mystery shoppers show up once a quarter on a deal you
              didn&rsquo;t pick.
            </p>
            <p className="rounded-lg border-l-4 border-accent bg-accent-light px-6 py-4 font-semibold text-foreground">
              AuditPro audits what actually happened. Every day. On every deal.
            </p>
          </div>
        </div>
      </section>

      {/* The engine — how it collects evidence */}
      <section className="border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            How AuditPro works
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Five ways to capture evidence. One audit engine.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            AuditPro doesn&rsquo;t rely on self-reporting alone. It combines
            multiple evidence streams on every deal — so the data is as close to
            ground truth as you can get without being in the room.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <p className="text-2xl">🎙️</p>
              <h3 className="mt-3 text-base font-bold text-foreground">AI audio detection</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Listens to the conversation and auto-confirms steps — refreshment
                offered, feature explanation given, walkaround positions called out.
                The auditor can override, but the AI catches what humans miss.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <p className="text-2xl">📷</p>
              <h3 className="mt-3 text-base font-bold text-foreground">Photo evidence</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Vehicle photos, trade-in condition shots, buyer&rsquo;s order capture.
                Computer vision confirms signatures and OTD line items.
                Photos gate the next step — no skipping.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <p className="text-2xl">📍</p>
              <h3 className="mt-3 text-base font-bold text-foreground">GPS tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Test drive route matching — did the rep follow the prescribed route?
                How far? How long? Verified by GPS, not by the rep&rsquo;s word.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <p className="text-2xl">⏱️</p>
              <h3 className="mt-3 text-base font-bold text-foreground">Timestamps</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Time-to-pencil after the test drive. F&amp;I handover window.
                Key handover gap. AuditPro measures timing on the steps
                that matter most to closing.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <p className="text-2xl">✅</p>
              <h3 className="mt-3 text-base font-bold text-foreground">Guided checklist</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scripted prompts walk the auditor through each step.
                Yes/No questions with auto-detection where possible,
                manual entry where needed. Nothing gets skipped.
              </p>
            </div>
            <div className="rounded-xl border border-green/20 bg-green-light p-6 shadow-sm">
              <p className="text-2xl">🔗</p>
              <h3 className="mt-3 text-base font-bold text-green">Connects to your CRM</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Designed to pull appointments and deal data from your CRM
                and push audit results back — so the audit lives alongside
                the deal, not in a separate silo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road to Sale — the first audit */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The first audit, purpose-built
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            NADA&rsquo;s 7-step Road to the Sale. Ready to deploy.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            The Road to Sale audit is built on the framework your team was
            trained on — the same 7-step process NADA certifies across the
            country. Every audit maps to one of these steps, so your team sees
            exactly where the process broke down on a specific deal.
          </p>
          <ol className="mt-12 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <p className="text-base font-bold text-foreground">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mobile app walkthrough — scrollable carousel */}
      <section className="border-t border-border bg-accent-light px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            See it in action
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Each step is a screen. Each screen collects evidence.
          </h3>
          <p className="mt-3 text-base text-muted">
            Scroll to see the mobile audit app walking through a real deal.
          </p>
          <div className="mt-10 flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-24 lg:px-24">
            {mobileScreens.map((screen) => (
              <div
                key={screen.label}
                className="flex-shrink-0 snap-center"
                style={{ width: "280px" }}
              >
                <Image
                  src={screen.src}
                  alt={screen.label}
                  width={800}
                  height={900}
                  className="w-full rounded-2xl border border-border shadow-lg"
                />
                <p className="mt-3 text-sm font-bold text-accent">{screen.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Dashboard */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            From audits to action
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The BI dashboard turns audit data into coaching priorities.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Every audit feeds the manager dashboard. See which steps separate
            closed deals from walked deals. Identify which reps need coaching
            and on exactly which steps. Daily, weekly, or by rep.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <Image
                src="/images/auditpro-dashboard-weekly.png"
                alt="Weekly coaching priorities — compliance gap between closed and walked deals"
                width={1200}
                height={900}
                className="rounded-xl border border-border shadow-lg"
              />
              <p className="mt-3 text-sm font-medium text-muted">
                Weekly pattern — which steps separate closed deals from walked deals
              </p>
            </div>
            <div>
              <Image
                src="/images/auditpro-dashboard-matrix.png"
                alt="Rep matrix — per-rep step compliance color-coded"
                width={1200}
                height={900}
                className="rounded-xl border border-border shadow-lg"
              />
              <p className="mt-3 text-sm font-medium text-muted">
                Rep matrix — per-rep compliance, color-coded for instant coaching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Road to Sale — the engine can audit anything */}
      <section className="border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Beyond the Road to Sale
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Road to Sale is where you start. It&rsquo;s not where you stop.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              The Road to Sale audit is a specific application of the AuditPro
              engine — purpose-built and ready to deploy on day one. But the
              engine underneath can audit any process you define.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-accent">OEM readiness audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Lot standards, signage compliance, facility condition, Buyer&rsquo;s
                Guide placement — photo-based audits that keep you ready before
                the OEM shows up unannounced.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-accent">F&amp;I process audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Menu presentation compliance, product disclosure verification,
                timing from close to finance — the back half of the deal,
                audited with the same rigor as the front.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-accent">Service lane audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Advisor greeting, multi-point inspection, walkaround with the customer,
                video inspection delivery — the same accountability model,
                applied to fixed ops.
              </p>
            </div>
            <div className="rounded-xl border border-green/20 bg-green-light p-6 shadow-sm">
              <h3 className="text-base font-bold text-green">Your process, your audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Define the steps, define the evidence types, deploy the audit.
                If your dealership has a process worth enforcing, AuditPro
                can measure whether it&rsquo;s being followed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning — not your CRM */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AuditPro is not your CRM. And not your DMS.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-muted">Your CRM</p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Records that a lead came in and a deal was written.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-muted">Your DMS</p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Records the transaction — the inventory, the F&amp;I
                terms, the registration.
              </p>
            </div>
            <div className="rounded-xl border border-accent bg-accent-light p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">AuditPro</p>
              <p className="mt-2 text-base font-medium leading-relaxed text-foreground">
                Audits the human interaction in between — the part no
                software currently captures. And connects back to your CRM
                so the audit lives alongside the deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="border-t border-border bg-gradient-to-r from-accent to-accent-hover px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mystery shopping tells you what happened. Once a quarter. On a deal
            we picked.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/80">
            AuditPro runs five random deal audits every single day. Your team
            knows they&rsquo;re being measured. That changes behavior, not just
            reporting.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for US dealership leaders who believe process is what
            separates good stores from great ones.
          </h2>
          <div className="mt-12 space-y-8">
            <div className="rounded-lg border-l-4 border-accent bg-white p-8 shadow-sm">
              <p className="text-base font-bold text-foreground">
                General Sales Managers
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Who are tired of finding out after the deal is dead that a step
                got skipped.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green bg-white p-8 shadow-sm">
              <p className="text-base font-bold text-foreground">
                General Managers
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Running a store who want their processes audited daily, not
                judged quarterly.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-accent bg-white p-8 shadow-sm">
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

      {/* Final CTA */}
      <section className="border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24">
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
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-white shadow-md shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
