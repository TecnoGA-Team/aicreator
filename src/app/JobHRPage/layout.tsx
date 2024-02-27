import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "HR AI",
};

export default function JobHRLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> {children}</>
  );
}
