import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery AI",
  description: "Gallery AI Creat",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> {children}</>
  );
}
