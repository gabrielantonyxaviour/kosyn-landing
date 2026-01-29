import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import GlitchText from "@/components/GlitchText";
import SecureDataNetwork from "@/components/SecureDataNetwork";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MovingBorderCard } from "@/components/ui/moving-border";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import PricingSection from "@/components/PricingSection";

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
                href="https://app.kosyn.ai/sign-up"
                className="uppercase tracking-widest text-sm font-semibold px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black focus-ring"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grain-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9]">
                {t('hero.title1')}
                <br />
                {t('hero.title2')}
                <br />
                <GlitchText />
              </h1>
              <p className="text-base md:text-lg mb-8 text-black/70 leading-relaxed uppercase">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://app.kosyn.ai/sign-up"
                  className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black w-full sm:w-auto focus-ring"
                >
                  {t('hero.getStartedButton')}
                </Link>
                <Link
                  href="https://app.kosyn.ai/sign-in"
                  className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 border border-black w-full sm:w-auto focus-ring"
                >
                  {t('hero.signInButton')}
                </Link>
              </div>
            </div>

            {/* Right: Hero Animation */}
            <div className="hidden lg:block relative h-[600px]">
              <SecureDataNetwork />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
                {t('problem.heading1')}
                <br />
                {t('problem.heading2')}
                <br />
                {t('problem.heading3')}
              </h2>
            </div>
            <div className="space-y-8">
              <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  {t('problem.overwhelmed.title')}
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  {t('problem.overwhelmed.description')}
                </p>
              </div>
              <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  {t('problem.vulnerable.title')}
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  {t('problem.vulnerable.description')}
                </p>
              </div>
              <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  {t('problem.trust.title')}
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  {t('problem.trust.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-nav" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
              {t('features.heading1')}
              <br />
              <span className="text-gray-500">{t('features.heading2')}</span>
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Feature 1 */}
            <CardContainer className="w-full">
              <CardBody className="border border-black/10 p-8 bg-white relative group/card w-full h-auto rounded-none">
                <CardItem translateZ="60" className="w-full flex justify-center mb-6">
                  <Image
                    src="/zk.png"
                    alt="Zero-Knowledge Privacy"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-xl uppercase tracking-wider font-bold mb-3 text-center">
                    {t('features.zkPrivacy.title')}
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    {t('features.zkPrivacy.description')}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Feature 2 */}
            <CardContainer className="w-full">
              <CardBody className="border border-black/10 p-8 bg-white relative group/card w-full h-auto rounded-none">
                <CardItem translateZ="60" className="w-full flex justify-center mb-6">
                  <Image
                    src="/ai.png"
                    alt="Embedded AI Assistant"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-xl uppercase tracking-wider font-bold mb-3 text-center">
                    {t('features.aiAssistant.title')}
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    {t('features.aiAssistant.description')}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Feature 3 */}
            <CardContainer className="w-full">
              <CardBody className="border border-black/10 p-8 bg-white relative group/card w-full h-auto rounded-none">
                <CardItem translateZ="60" className="w-full flex justify-center mb-6">
                  <Image
                    src="/cryptographic.png"
                    alt="Cryptographic Proof"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-xl uppercase tracking-wider font-bold mb-3 text-center">
                    {t('features.cryptoProof.title')}
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    {t('features.cryptoProof.description')}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <CardContainer className="w-full">
              <CardBody className="border border-black/10 p-8 bg-white relative group/card w-full h-auto rounded-none">
                <CardItem translateZ="60" className="w-full flex justify-center mb-6">
                  <Image
                    src="/automation.png"
                    alt="Task Automation"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-xl uppercase tracking-wider font-bold mb-3 text-center">
                    {t('features.automation.title')}
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    {t('features.automation.description')}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="w-full">
              <CardBody className="border border-black/10 p-8 bg-white relative group/card w-full h-auto rounded-none">
                <CardItem translateZ="60" className="w-full flex justify-center mb-6">
                  <Image
                    src="/patient.png"
                    alt="Patient Data Control"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-xl uppercase tracking-wider font-bold mb-3 text-center">
                    {t('features.patientControl.title')}
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    {t('features.patientControl.description')}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-nav" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
              {t('howItWorks.heading')}
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="group flex flex-col md:flex-row gap-8 items-start p-6 -mx-6 rounded-none border border-transparent hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-2xl font-bold">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl uppercase tracking-wider font-bold mb-4 transition-all duration-300 group-hover:text-black">
                  {t('howItWorks.steps.step1.title')}
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  {t('howItWorks.steps.step1.description')}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col md:flex-row gap-8 items-start p-6 -mx-6 rounded-none border border-transparent hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-2xl font-bold">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl uppercase tracking-wider font-bold mb-4 transition-all duration-300 group-hover:text-black">
                  {t('howItWorks.steps.step2.title')}
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  {t('howItWorks.steps.step2.description')}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col md:flex-row gap-8 items-start p-6 -mx-6 rounded-none border border-transparent hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-2xl font-bold">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl uppercase tracking-wider font-bold mb-4 transition-all duration-300 group-hover:text-black">
                  {t('howItWorks.steps.step3.title')}
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  {t('howItWorks.steps.step3.description')}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex flex-col md:flex-row gap-8 items-start p-6 -mx-6 rounded-none border border-transparent hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-2xl font-bold">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl uppercase tracking-wider font-bold mb-4 transition-all duration-300 group-hover:text-black">
                  {t('howItWorks.steps.step4.title')}
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  {t('howItWorks.steps.step4.description')}
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group flex flex-col md:flex-row gap-8 items-start p-6 -mx-6 rounded-none border border-transparent hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-2xl font-bold">05</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl uppercase tracking-wider font-bold mb-4 transition-all duration-300 group-hover:text-black">
                  {t('howItWorks.steps.step5.title')}
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  {t('howItWorks.steps.step5.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
              {t('trust.heading1')}
              <br />
              <span className="text-gray-500">{t('trust.heading2')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="relative text-center p-8 rounded-none border border-transparent hover:border-black transition-all duration-300 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}
            >
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-lg uppercase tracking-wider font-bold mb-3">
                  {t('trust.zeroTrust.title')}
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  {t('trust.zeroTrust.description')}
                </p>
              </div>
            </div>

            <div
              className="relative text-center p-8 rounded-none border border-transparent hover:border-black transition-all duration-300 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}
            >
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-lg uppercase tracking-wider font-bold mb-3">
                  {t('trust.hipaa.title')}
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  {t('trust.hipaa.description')}
                </p>
              </div>
            </div>

            <div
              className="relative text-center p-8 rounded-none border border-transparent hover:border-black transition-all duration-300 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}
            >
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-lg uppercase tracking-wider font-bold mb-3">
                  {t('trust.gdpr.title')}
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  {t('trust.gdpr.description')}
                </p>
              </div>
            </div>

            <div
              className="relative text-center p-8 rounded-none border border-transparent hover:border-black transition-all duration-300 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}
            >
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-lg uppercase tracking-wider font-bold mb-3">
                  {t('trust.encryption.title')}
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  {t('trust.encryption.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        currency={currency}
        monthlyPrice={monthlyPrice}
        yearlyPrice={yearlyPrice}
        yearlySavings={yearlySavings}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white scroll-mt-nav" id="get-started">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
            {t('cta.heading1')}
            <br />
            {t('cta.heading2')}
          </h2>
          <p className="text-xl mb-8 text-white/80 uppercase">
            {t('cta.subtitle')}
          </p>
          <div className="space-y-4">
            <Link
              href="https://app.kosyn.ai/sign-up"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 bg-white text-black hover:bg-white/90 transition-colors duration-300 border border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t('cta.button')}
            </Link>
            <p className="text-sm text-white/60 uppercase tracking-wider">
              {t('cta.availability')}
            </p>
          </div>
        </div>
      </section>

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
                  <Link href="#how-it-works" className="hover:text-black transition-colors focus-ring">
                    {t('footer.product.howItWorks')}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-black transition-colors focus-ring">
                    {t('footer.product.pricing')}
                  </Link>
                </li>
                <li>
                  <Link href="https://app.kosyn.ai/sign-up" className="hover:text-black transition-colors focus-ring">
                    {t('footer.product.getStarted')}
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
  );
}
