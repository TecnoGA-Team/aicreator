import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website AI",
};

export default function JobWebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> {children}</>
  );
}
