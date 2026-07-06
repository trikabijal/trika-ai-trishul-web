"use client";

import { useEffect, useRef, useState } from "react";

// When it scrolls into view: the raw dictation types out, then the filler words
// strike through and the clean, polished line resolves underneath.
const RAW_TOKENS = [
  { t: "um " },
  { t: "so " },
  { t: "the the ", filler: true },
  { t: "best data would be " },
  { t: "like, you know, ", filler: true },
  { t: "the last quarter " },
  { t: "i think", filler: true },
];
const CLEAN = "The best data would be the last quarter, I think.";

export default function CleanupDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "raw" | "clean">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            if (reduced) {
              setPhase("clean");
            } else {
              setPhase("raw");
              setTimeout(() => setPhase("clean"), 1900);
            }
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2">
      {/* Raw */}
      <div className="rounded-lg border border-border bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">You say</p>
        <p className="mt-2 font-mono text-sm leading-relaxed text-muted">
          &ldquo;
          {RAW_TOKENS.map((tok, i) => (
            <span
              key={i}
              className="transition-all duration-500"
              style={{
                opacity: phase === "clean" && tok.filler ? 0.25 : 1,
                textDecoration:
                  phase === "clean" && tok.filler ? "line-through" : "none",
              }}
            >
              {tok.t}
            </span>
          ))}
          &rdquo;
        </p>
      </div>

      {/* Clean */}
      <div
        className="rounded-lg border border-accent bg-accent-light p-5 transition-all duration-700"
        style={{
          opacity: phase === "clean" ? 1 : 0.35,
          transform: phase === "clean" ? "none" : "translateY(6px)",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-accent">
          Just Talk types
        </p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
          {CLEAN}
        </p>
      </div>
    </div>
  );
}
