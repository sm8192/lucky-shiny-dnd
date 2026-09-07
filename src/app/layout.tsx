import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rulebook",
    default: "Rulebook",
  },
  description: "A complete reference for the rules, classes, spells, and monsters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <NavBar />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-stone-200 py-4 text-center text-xs text-stone-400 dark:border-stone-800">
          Rulebook — all content is original and for personal use only.
        </footer>
      </body>
    </html>
  );
}
