import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { Analytics } from "./analytics";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const buyMeACoffeeId = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://disastrousbug.com"),
  title: "Artyom Bondar — Senior PHP / Laravel Engineer",
  description: "Artyom Bondar is a Senior PHP and Laravel Engineer with 6+ years of experience building fast, dependable APIs and backend systems.",
  keywords: ["PHP developer", "Laravel developer", "Senior Backend Engineer", "PHP engineer", "Laravel API developer", "Kaliningrad"],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  verification: yandexVerification ? { yandex: yandexVerification } : {},
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", url: "/", siteName: "Artyom Bondar — Backend Engineer", locale: "en_US", title: "Artyom Bondar — Senior PHP / Laravel Engineer", description: "Backend systems that hold together.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Artyom Bondar — Senior PHP / Laravel Engineer" }] },
  twitter: { card: "summary_large_image", title: "Artyom Bondar — Senior PHP / Laravel Engineer", description: "Backend systems that hold together.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <Analytics measurementId={googleAnalyticsId} />
        {buyMeACoffeeId ? (
          <script
            async
            data-name="BMC-Widget"
            data-cfasync="false"
            data-id={buyMeACoffeeId}
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#79D6B5"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
