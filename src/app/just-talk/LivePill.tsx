"use client";

import { useEffect, useRef, useState } from "react";

// The pill cycles through a few phrases, typing each one out word-by-word the way
// the real app's live HUD does, then clearing and moving to the next.
const PHRASES = [
  "let's ship the release notes today",
  "reply to Priya about the Q3 numbers",
  "add a login screen with SSO and dark mode",
  "the best data would be the last quarter",
];

const WAVE_BARS = 9;

export default function LivePill() {
  const [text, setText] = useState("");
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: just show the last phrase, no animation.
    if (reduced.current) {
      setText(PHRASES[PHRASES.length - 1]);
      return;
    }

    let phrase = 0;
    let word = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const words = PHRASES[phrase].split(" ");
      if (word < words.length) {
        setText(words.slice(0, word + 1).join(" "));
        word += 1;
        timer = setTimeout(tick, 220 + Math.round(Math.abs(Math.sin(word)) * 140));
      } else {
        // Hold the finished phrase, then clear and advance.
        timer = setTimeout(() => {
          setText("");
          phrase = (phrase + 1) % PHRASES.length;
          word = 0;
          timer = setTimeout(tick, 500);
        }, 1600);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="jt-glow pointer-events-none absolute inset-0 -z-10 mx-auto blur-2xl"
        style={{
          maxWidth: "22rem",
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(232,72,63,0.45), rgba(230,180,80,0.25) 55%, transparent 75%)",
        }}
      />
      <div
        className="flex max-w-full items-center gap-3 rounded-full bg-neutral-900 px-6 py-4 shadow-2xl"
        style={{ border: "2px solid #E6B450" }}
      >
        <span className="flex items-center gap-[3px]" aria-hidden="true">
          {Array.from({ length: WAVE_BARS }).map((_, i) => (
            <span
              key={i}
              className="jt-wave-bar w-[3px] rounded-full"
              style={{
                height: "22px",
                backgroundColor: "#E8483F",
                animationDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </span>
        <span className="min-w-0 font-mono text-sm text-white/90">
          {text || <span className="text-white/40">just talk…</span>}
          <span className="jt-caret ml-0.5 inline-block text-white/70">|</span>
        </span>
      </div>
    </div>
  );
}
