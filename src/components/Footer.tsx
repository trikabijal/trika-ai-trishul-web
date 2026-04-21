import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Left: brand + copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/images/trika-logo-transparent.png"
              alt="trika.ai"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span className="text-sm font-semibold text-foreground">
              trika.ai
            </span>
          </div>
          <span className="text-xs text-muted">
            &copy; 2026 trika.ai. All rights reserved.
          </span>
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:bijal@trika.ai"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            bijal@trika.ai
          </a>
          <a
            href="https://www.linkedin.com/in/bijal-sanghavi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Bijal
          </a>
          <a
            href="https://www.linkedin.com/in/teena-shah-in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Teena
          </a>
        </div>
      </div>
    </footer>
  );
}
