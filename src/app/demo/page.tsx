"use client";

import Link from "next/link";

const CAL_URL = "https://cal.com/bijal-sanghavi-wexrce";

export default function DemoPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="px-6 pt-32 pb-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Book a demo of AuditPro.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            30 minutes. Real dealership scenarios. No slideware.
          </p>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <iframe
            src={CAL_URL}
            className="w-full rounded-md border border-border"
            style={{ minHeight: "700px" }}
            frameBorder="0"
            title="Book a demo with Trika.ai"
          />
        </div>
      </section>

      {/* Secondary Contact */}
      <section className="border-t border-border px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-base leading-relaxed text-muted">
            Prefer email?{" "}
            <a
              href="mailto:bijal@trika.ai"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              bijal@trika.ai
            </a>
          </p>
          <p className="text-base leading-relaxed text-muted">
            On LinkedIn?{" "}
            <a
              href="https://www.linkedin.com/in/bijal-sanghavi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              Bijal
            </a>
            {" / "}
            <a
              href="https://www.linkedin.com/in/teena-shah-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              Teena
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
