import type { Metadata } from "next";
import LivePill from "./LivePill";
import Reveal from "./Reveal";
import CleanupDemo from "./CleanupDemo";

const DOWNLOAD_URL =
  "https://github.com/trikabijal/roadtosale/releases/download/just-talk-v1.0.0/Just-Talk.dmg";

export const metadata: Metadata = {
  title: "Just Talk — trika.ai",
  description:
    "Just Talk is on-device dictation for your Mac. Hold a key, speak, and clean text appears in any app — transcribed and polished entirely on your device. Nothing leaves your machine.",
};

const steps = [
  {
    n: "1",
    title: "Hold your key, talk",
    desc: "Press and hold your activation key anywhere — email, Slack, a doc, a code editor. A live pill shows your words as you speak.",
  },
  {
    n: "2",
    title: "Transcribed on-device",
    desc: "A Whisper-class model runs on your Mac's Neural Engine. Your voice never touches a server — no upload, no account, no wait for the network.",
  },
  {
    n: "3",
    title: "Cleaned up automatically",
    desc: "An on-device model strips the ums, false starts and filler, fixes punctuation and casing — and keeps every word you meant.",
  },
  {
    n: "4",
    title: "Pasted where you were typing",
    desc: "The finished text drops straight into whatever app you were in. Let go of the key and keep working.",
  },
];

const whyOnDevice = [
  {
    icon: "🔒",
    title: "Private by construction",
    desc: "Audio and transcript are processed on your machine and never sent anywhere. There is no cloud to leak — the privacy is architectural, not a policy promise.",
  },
  {
    icon: "✈️",
    title: "Works offline",
    desc: "On a plane, in a basement, on hotel wifi — dictation works with no connection, because there is nothing to connect to.",
  },
  {
    icon: "🌏",
    title: "Speaks how you speak",
    desc: "English, Hinglish, and Gujarati — code-switch mid-sentence. The on-device multilingual model was picked for exactly this, not just clean American English.",
  },
  {
    icon: "∞",
    title: "No per-word cost",
    desc: "Cloud dictation pays a vendor for every minute you speak. On-device costs nothing to run, so it never has to meter you.",
  },
];

const platforms = [
  { name: "macOS", status: "Available now", ready: true, note: "Apple Silicon Mac, menu-bar app." },
  { name: "iPhone / iPad", status: "In progress", ready: false, note: "System keyboard — dictate into any app." },
  { name: "Android", status: "In progress", ready: false, note: "Input method — on-device, multilingual." },
  { name: "Windows", status: "Planned", ready: false, note: "On-device on RTX/CUDA and CPU." },
];

export default function JustTalkPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-light via-white to-white px-6 pt-32 pb-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            On-device dictation
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Just talk. It&rsquo;s already typing.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Hold a key, speak, and clean text appears wherever your cursor is —
            transcribed and polished on your own Mac. Nothing is uploaded,
            nothing is stored on anyone else&rsquo;s server.
          </p>

          {/* Animated live pill — the product, moving */}
          <div className="mt-14">
            <LivePill />
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-white shadow-md shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Download for Mac
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-white px-8 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              How it works
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free · Apple Silicon · macOS&nbsp;14+ · signed &amp; notarized by Apple
          </p>
        </div>
      </section>

      {/* The thesis */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Most dictation apps send your voice to a server.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              The popular voice-to-text tools stream your microphone to the cloud,
              transcribe it there, and send text back. It works — until the wifi
              drops, or you stop to think about whose servers just heard your
              contract, your patient note, your unreleased idea.
            </p>
            <p>
              Just Talk was built the other way around. The model runs on your Mac.
              Your speech is transcribed and cleaned up locally and then it is gone —
              there is no account to create and no audio to delete, because none of it
              ever left the machine in front of you.
            </p>
            <p className="rounded-lg border-l-4 border-accent bg-accent-light px-6 py-4 font-semibold text-foreground">
              Your voice is yours. Just Talk keeps it that way.
            </p>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="scroll-mt-24 border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Hold. Talk. Done.
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-base font-bold text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why on-device */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why on-device
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Running on your machine isn&rsquo;t a limitation. It&rsquo;s the point.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyOnDevice.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-accent/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <p className="text-2xl">{f.icon}</p>
                  <h3 className="mt-3 text-base font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cleanup — animated before/after */}
      <section className="border-t border-border bg-surface px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Not just transcription
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              It writes down what you meant, not every &ldquo;um.&rdquo;
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Raw speech-to-text gives you the false starts, the repeated words,
              the &ldquo;you know&rdquo;s. Just Talk cleans that up on-device — filler
              removed, punctuation and casing fixed, sentences tidied — while
              guarding your actual content so a clean-up pass never quietly drops a
              clause you said.
            </p>
          </Reveal>
          <div className="mt-10">
            <CleanupDemo />
          </div>
        </div>
      </section>

      {/* Minimal permissions */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Asks for two permissions. Not one more.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              To type for you, Just Talk needs your microphone and macOS
              Accessibility — the same access a dictation tool has to have, and no
              more. No screen recording, no input monitoring, no analytics account.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
                <p className="text-2xl">🎙️</p>
                <h3 className="mt-3 text-base font-bold text-foreground">Microphone</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  To hear you while you hold the key. Nothing is recorded to disk
                  beyond the moment it takes to transcribe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-xl border border-accent/20 bg-white p-6 shadow-sm">
                <p className="text-2xl">⌨️</p>
                <h3 className="mt-3 text-base font-bold text-foreground">Accessibility</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  To place the finished text into the app you were typing in, and to
                  use your activation key from anywhere.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-t border-border bg-gradient-to-b from-surface to-accent-light px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Where it runs
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mac today. Your phone and PC next.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The same on-device engine is coming to the devices you type on most —
              each one keeping the work on the device, not in the cloud.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  className={`h-full rounded-xl border p-6 shadow-sm ${
                    p.ready ? "border-green/30 bg-green-light" : "border-border bg-white"
                  }`}
                >
                  <p className="text-base font-bold text-foreground">{p.name}</p>
                  <p
                    className={`mt-2 text-xs font-bold uppercase tracking-wider ${
                      p.ready ? "text-green" : "text-muted"
                    }`}
                  >
                    {p.status}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Requirements (Mac): Apple Silicon, 8&nbsp;GB memory, macOS&nbsp;14 or later.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-24 sm:px-12 lg:px-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Try Just Talk on your Mac.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Free to download. Open it, grant Microphone and Accessibility, and
            start talking. Your voice never leaves the machine.
          </p>
          <div className="mt-10">
            <a
              href={DOWNLOAD_URL}
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-white shadow-md shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Download for Mac
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Apple Silicon · macOS&nbsp;14+ · signed &amp; notarized by Apple
          </p>
        </Reveal>
      </section>
    </div>
  );
}
