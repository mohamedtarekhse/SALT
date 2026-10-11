import type { Metadata } from "next";
import "./globals.css";
import "@/components/sites/salt/salt.css";

export const metadata: Metadata = {
  title: "Home - Salt Productions",
  description:
    "When brands need to show up IRL, there\u2019s Salt \u2013 a global experiential agency like no other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
