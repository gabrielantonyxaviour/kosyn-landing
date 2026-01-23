import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
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

export const metadata: Metadata = {
  title: "KOSYN - Zero-Knowledge AI Medical Platform | Healthcare Privacy & Automation",
  description: "KOSYN combines zkLLM technology with embedded AI to provide doctors with cryptographically provable consultations, automated workflows, and complete patient data sovereignty. Experience the future of private, secure healthcare.",
  keywords: ["zkLLM", "healthcare AI", "medical privacy", "zero-knowledge proofs", "doctor AI assistant", "patient data sovereignty", "HIPAA compliant", "medical automation", "healthcare technology", "encrypted health records"],
  authors: [{ name: "KOSYN" }],
  creator: "KOSYN",
  publisher: "KOSYN",
  metadataBase: new URL("https://kosyn.app"), // Update with your actual domain
  openGraph: {
    title: "KOSYN - Zero-Knowledge AI Medical Platform",
    description: "Transform healthcare with cryptographically provable consultations and embedded AI assistance",
    url: "https://kosyn.app",
    siteName: "KOSYN",
    images: [
      {
        url: "/logo-text-right.png",
        width: 1200,
        height: 630,
        alt: "KOSYN - Healthcare Privacy & AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOSYN - Zero-Knowledge AI Medical Platform",
    description: "Transform healthcare with cryptographically provable consultations and embedded AI assistance",
    images: ["/logo-text-right.png"],
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
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-no-text.png" />
        <link rel="preconnect" href="https://calendar.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
