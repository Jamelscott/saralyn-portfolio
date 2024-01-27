import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saralyn's Portfolio",
  description: "Displaying all of my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <link  rel="preconnect" href="https://fonts.googleapis.com" />
      <link  rel="preconnect" href="https://fonts.gstatic.com" />
      <link  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" /> */}
    </html>
  );
}
