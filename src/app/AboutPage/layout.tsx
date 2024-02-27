import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AI ",
  description: "Aabout AI Creat",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> {children}</>
  );
}
