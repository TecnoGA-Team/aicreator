import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design AI",
};

export default function JobDesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> {children}</>
  );
}
