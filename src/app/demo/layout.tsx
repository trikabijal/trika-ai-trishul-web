import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — Trika.ai",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
