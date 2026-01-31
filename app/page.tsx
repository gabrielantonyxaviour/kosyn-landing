import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import PricingSection from "@/components/PricingSection";
import ScrollProvider from "@/components/ScrollProvider";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesScroll from "@/components/FeaturesScroll";
import VideoSection from "@/components/VideoSection";
import PrivacySection from "@/components/PrivacySection";
import ComplianceSection from "@/components/ComplianceSection";
import CTASection from "@/components/CTASection";

export default async function Home() {
  const t = await getTranslations();
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country') || headersList.get('cf-ipcountry') || '';
  const isIndia = country === 'IN';
  const currency = isIndia ? '₹' : '$';
  const monthlyPrice = isIndia ? '1,500' : '15';
  const yearlyPrice = isIndia ? '15,000' : '150';
  const yearlySavings = isIndia ? '₹3,000' : '$30';

  return (
    <ScrollProvider>
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-black/10 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center ltr:space-x-3 rtl:space-x-reverse">
                <Image
                  src="/logo-text-right.png"
                  alt="KOSYN"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Link
                  href="https://calendar.app.google/MKWy9NcVKcVpDADH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-widest text-sm font-semibold px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black focus-ring"
                >
                  {t('nav.bookCall')}
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <HeroSection />
        <ProblemSection />
        <FeaturesScroll />
        <VideoSection />
        <PrivacySection />

        <PricingSection
          currency={currency}
          monthlyPrice={monthlyPrice}
          yearlyPrice={yearlyPrice}
          yearlySavings={yearlySavings}
        />

        <ComplianceSection />
        <CTASection />

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Image
                  src="/logo-text-bottom.png"
                  alt="KOSYN"
                  width={120}
                  height={60}
                  className="h-16 w-auto mb-4"
                />
                <p className="text-sm text-black/60 uppercase">
                  {t('footer.tagline')}
                </p>
              </div>
              <div>
                <h4 className="uppercase tracking-wider font-bold mb-4 text-sm">
                  {t('footer.product.title')}
                </h4>
                <ul className="space-y-2 text-sm text-black/60">
                  <li>
                    <Link href="#features" className="hover:text-black transition-colors focus-ring">
                      {t('footer.product.features')}
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="hover:text-black transition-colors focus-ring">
                      {t('footer.product.pricing')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://calendar.app.google/MKWy9NcVKcVpDADH6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors focus-ring"
                    >
                      {t('footer.product.bookCall')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="uppercase tracking-wider font-bold mb-4 text-sm">
                  {t('footer.company.title')}
                </h4>
                <ul className="space-y-2 text-sm text-black/60">
                  <li>{t('footer.company.about')}</li>
                  <li>{t('footer.company.privacy')}</li>
                  <li>{t('footer.company.terms')}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-black/10 pt-8 text-center text-sm text-black/60">
              <p className="uppercase tracking-wider">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </ScrollProvider>
  );
}
