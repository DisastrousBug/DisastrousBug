import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Artyom Bondar — Senior PHP / Laravel Engineer",
  description: "Senior PHP / Laravel Engineer building fast, dependable backend systems.",
  openGraph: { title: "Artyom Bondar — Senior PHP / Laravel Engineer", description: "Backend systems that hold together.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Artyom Bondar — Senior PHP / Laravel Engineer", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>;
}
