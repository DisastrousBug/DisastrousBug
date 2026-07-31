import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
      <head>
        {googleAnalyticsId && <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}</Script>
        </>}
      </head>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
