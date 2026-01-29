import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans_Arabic } from "next/font/google";
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

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "KOSYN - Zero-Knowledge AI Medical Platform | Healthcare Privacy & Automation",
  description: "KOSYN combines zkLLM technology with embedded AI to provide doctors with cryptographically provable consultations, automated workflows, and complete patient data sovereignty. Experience the future of private, secure healthcare.",
  keywords: ["zkLLM", "healthcare AI", "medical privacy", "zero-knowledge proofs", "doctor AI assistant", "patient data sovereignty", "HIPAA compliant", "medical automation", "healthcare technology", "encrypted health records"],
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
    title: "KOSYN - Zero-Knowledge AI Medical Platform",
    description: "Transform healthcare with cryptographically provable consultations and embedded AI assistance",
    url: "https://kosyn.app",
    siteName: "KOSYN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KOSYN - Zero-Knowledge AI Medical Platform for Healthcare Privacy & Automation",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOSYN - Zero-Knowledge AI Medical Platform",
    description: "Transform healthcare with cryptographically provable consultations and embedded AI assistance",
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
        description: 'Zero-knowledge AI medical platform providing cryptographically provable consultations and complete patient data sovereignty',
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
        description: 'Zero-Knowledge AI Medical Platform for Healthcare Privacy & Automation',
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
        description: 'zkLLM-powered medical platform with embedded AI assistant for doctors and complete data sovereignty for patients',
        featureList: [
          'Zero-knowledge consultations',
          'Cryptographic proof of diagnoses',
          'Embedded AI assistant',
          'Patient data sovereignty',
          'Automated medical documentation',
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
      <body className={`${inter.variable} ${bebasNeue.variable} ${notoSansArabic.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
