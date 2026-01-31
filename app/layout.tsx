import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans_Arabic, Space_Grotesk, Syne, Outfit, Plus_Jakarta_Sans, Oswald, Anton } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { languages, type Locale } from "@/i18n/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "700", "800"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "KOSYN - AI Medical Scribing & Document Generation | Engineering the Future of Healthcare",
  description: "KOSYN provides AI-powered medical scribing, SOAP note generation, referral letters, discharge summaries, and medical coding for every specialty. Privacy-preserving, HIPAA ready.",
  keywords: ["medical scribing AI", "healthcare AI", "SOAP notes", "medical coding", "referral letters", "discharge summaries", "HIPAA ready", "clinical automation", "healthcare technology", "AI for doctors"],
  authors: [{ name: "KOSYN" }],
  creator: "KOSYN",
  publisher: "KOSYN",
  metadataBase: new URL("https://kosyn.app"),
  alternates: {
    canonical: "https://kosyn.app",
    languages: {
      "en": "https://kosyn.app",
      "ar": "https://kosyn.app",
      "x-default": "https://kosyn.app",
    },
  },
  openGraph: {
    title: "KOSYN - AI Medical Scribing & Clinical Automation",
    description: "AI-powered medical scribing, document generation, and clinical automation for every specialty.",
    url: "https://kosyn.app",
    siteName: "KOSYN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KOSYN - AI Medical Scribing & Clinical Automation for Healthcare",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOSYN - AI Medical Scribing & Clinical Automation",
    description: "AI-powered medical scribing, document generation, and clinical automation for every specialty.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#ffffff",
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale() as Locale;
  const messages = await getMessages();
  const dir = languages[locale]?.dir || 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kosyn.app/#organization',
        name: 'KOSYN',
        url: 'https://kosyn.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kosyn.app/logo-text-right.png',
        },
        description: 'AI-powered medical scribing and clinical automation platform for modern healthcare',
        foundingDate: '2026',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Sales',
          availableLanguage: ['en', 'ar'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kosyn.app/#website',
        url: 'https://kosyn.app',
        name: 'KOSYN',
        description: 'AI Medical Scribing & Clinical Automation for Healthcare',
        publisher: {
          '@id': 'https://kosyn.app/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'KOSYN',
        applicationCategory: 'HealthApplication',
        operatingSystem: ['Web', 'iOS', 'Android'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'AI-powered medical scribing, document generation, and clinical automation for doctors across all specialties',
        featureList: [
          'AI medical scribing',
          'SOAP note generation',
          'Referral and discharge letters',
          'Medical coding (ICD-10, CPT)',
          'Multi-specialty support',
        ],
      },
    ],
  };

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-no-text.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://calendar.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} ${notoSansArabic.variable} ${spaceGrotesk.variable} ${syne.variable} ${outfit.variable} ${plusJakarta.variable} ${oswald.variable} ${anton.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
