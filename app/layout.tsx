import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retail Structure — AI Agent Dashboard",
  description: "Obsidian Vault asosidagi interaktiv AI-Agent boshqaruv paneli",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased no-scrollbar`}
    >
      <body className="min-h-full flex flex-col no-scrollbar">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
