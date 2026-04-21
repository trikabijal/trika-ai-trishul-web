import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — trika.ai",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
