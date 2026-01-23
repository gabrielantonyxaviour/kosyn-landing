import Image from "next/image";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import SecureDataNetwork from "@/components/SecureDataNetwork";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MovingBorderCard } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-black/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-text-right.png"
                alt="KOSYN"
                width={180}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <Link
              href="#book-demo"
              className="uppercase tracking-widest text-sm font-semibold px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black focus-ring"
            >
              Book Demo
            </Link>
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
                THE FUTURE
                <br />
                OF MEDICAL
                <br />
                <GlitchText />
              </h1>
              <p className="text-base md:text-lg mb-8 text-black/70 leading-relaxed uppercase">
                "STATE OF THE ART" AI FOR DOCTORS. COMPLETE DATA SOVEREIGNTY FOR PATIENTS. POWERED BY ZERO-KNOWLEDGE TECHNOLOGY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#book-demo"
                  className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black w-full sm:w-auto focus-ring"
                >
                  Book a Demo
                </Link>
                <Link
                  href="https://raxtech.fillout.com/t/kosyn-waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 border border-black w-full sm:w-auto focus-ring"
                >
                  Join Waitlist
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
                HEALTHCARE
                <br />
                HAS A
                <br />
                PROBLEM
              </h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-white/30 pl-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  DOCTORS ARE OVERWHELMED
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  HOURS SPENT ON DOCUMENTATION, INSURANCE CLAIMS, AND ADMINISTRATIVE TASKS STEAL TIME FROM PATIENT CARE.
                </p>
              </div>
              <div className="border-l-2 border-white/30 pl-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  PATIENT DATA IS VULNERABLE
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  CENTRALIZED SERVERS ARE PRIME TARGETS FOR HACKERS. ONE BREACH EXPOSES THOUSANDS OF SENSITIVE HEALTH RECORDS.
                </p>
              </div>
              <div className="border-l-2 border-white/30 pl-6">
                <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
                  TRUST IS BROKEN
                </h3>
                <p className="text-white/80 leading-relaxed uppercase">
                  PATIENTS HAVE NO CONTROL OVER WHO ACCESSES THEIR DATA. HISTORICAL DIAGNOSES CAN'T BE VERIFIED OR PROVEN.
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
              POWERED BY
              <br />
              <span className="text-gray-500">ZK & AI</span>
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
              ZERO-KNOWLEDGE LARGE LANGUAGE MODELS ENSURE EVERY CONVERSATION IS CRYPTOGRAPHICALLY PROVABLE
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
                    Zero-Knowledge Privacy
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    PATIENT DATA ENCRYPTED LOCALLY. ONLY THE PATIENT HOLDS THE KEY.
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
                    Embedded AI Assistant
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    AI THAT CONTROLS YOUR WORKFLOW AND LEARNS FROM YOUR PRACTICE.
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
                    Cryptographic Proof
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    VERIFIABLE PROOF OF EVERY DIAGNOSIS AND CONVERSATION.
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
                    Task Automation
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    AUTOMATIC SUMMARIES, CLAIMS, APPOINTMENTS <br/> & PRESCRIPTIONS.
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
                    Patient Data Control
                  </h3>
                </CardItem>
                <CardItem translateZ="40" className="w-full">
                  <p className="text-black/60 text-sm leading-relaxed uppercase text-center">
                    PATIENTS DECIDE WHO SEES THEIR DATA <br/> WITH GRANULAR CONTROLS.
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
              HOW IT WORKS
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
              EXPERIENCE THE SEAMLESS WORKFLOW DESIGNED FOR MODERN HEALTHCARE PROFESSIONALS
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
                  SELECT PATIENT&nbsp;& VIEW COMPLETE CONTEXT
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  CLICK ON A PATIENT TO INSTANTLY SEE THEIR FULL MEDICAL HISTORY, ACTIVE INSURANCE COVERAGE, AND PREVIOUS CONSULTATIONS. ALL DATA IS ENCRYPTED AND ONLY ACCESSIBLE WITH PATIENT PERMISSION.
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
                  START RECORDING CONSULTATION
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  BEGIN YOUR CONSULTATION AND THE AI AUTOMATICALLY RECORDS AND PROCESSES EVERYTHING THROUGH ZKLLM. HAVE NATURAL CONVERSATIONS WHILE THE SYSTEM CAPTURES EVERY DETAIL.
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
                  AI GENERATES CRYPTOGRAPHIC SUMMARY
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  THE ZKLLM PROCESSES THE CONVERSATION AND CREATES A COMPREHENSIVE SUMMARY WITH KEY POINTS, DIAGNOSIS, AND TREATMENT RECOMMENDATIONS. THIS SUMMARY IS CRYPTOGRAPHICALLY SIGNED FOR FUTURE VERIFICATION.
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
                  EMBEDDED AI HANDLES THE REST
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  THE AI ASSISTANT DOESN'T JUST CHAT, IT ACTIVELY UPDATES THE UI, GENERATES PRESCRIPTIONS, FILES INSURANCE CLAIMS, AND SCHEDULES FOLLOW-UPS. ALL YOU DO IS REVIEW AND APPROVE.
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
                  SHARE SECURELY WITH PATIENT
                </h3>
                <p className="text-black/70 leading-relaxed uppercase transition-all duration-300 group-hover:text-black/80">
                  THE PATIENT RECEIVES THE CONSULTATION SUMMARY IN THEIR MOBILE APP. THEY CAN REVEAL THIS TO OTHER DOCTORS, USE IT FOR LEGAL PURPOSES, OR KEEP IT PRIVATE. THE CRYPTOGRAPHIC PROOF ENSURES AUTHENTICITY.
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
              BUILT FOR
              <br />
              <span className="text-gray-500">TRUST&nbsp;& COMPLIANCE</span>
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
                  Zero-Trust Architecture
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  EVEN IF SERVERS ARE COMPROMISED, PATIENT DATA REMAINS ENCRYPTED AND INACCESSIBLE
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
                  HIPAA STANDARD<br/>Ready
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  DESIGNED FOR COMPLIANCE WITH HEALTHCARE PRIVACY REGULATIONS (CERTIFICATION IN PROGRESS)
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
                  GDPR <br/>Compliant
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  FULL PATIENT DATA SOVEREIGNTY WITH RIGHT TO ERASURE AND PORTABILITY
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
                  Real-Time Encryption
                </h3>
                <p className="text-black/60 text-sm uppercase leading-relaxed">
                  ALL COMMUNICATIONS ENCRYPTED END-TO-END WITH ZERO-KNOWLEDGE PROOFS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white scroll-mt-nav" id="book-demo">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
            EXPERIENCE
            THE FUTURE
          </h2>
          <p className="text-xl mb-8 text-white/80 uppercase">
            BOOK A PERSONALIZED DEMO AND SEE HOW KOSYN CAN TRANSFORM YOUR PRACTICE
          </p>
          <div className="space-y-4">
            <Link
              href="https://calendar.app.google/bH8d4V4nmDX5QuBMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 bg-white text-black hover:bg-white/90 transition-colors duration-300 border border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Schedule Demo Call
            </Link>
            <p className="text-sm text-white/60 uppercase tracking-wider">
              Pre-Launch&nbsp;• Limited Availability
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
                ZERO-KNOWLEDGE AI FOR MODERN <br/> HEALTHCARE
              </p>
            </div>
            <div>
              <h4 className="uppercase tracking-wider font-bold mb-4 text-sm">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li>
                  <Link href="#features" className="hover:text-black transition-colors focus-ring">
                    FEATURES
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-black transition-colors focus-ring">
                    HOW IT WORKS
                  </Link>
                </li>
                <li>
                  <Link href="#book-demo" className="hover:text-black transition-colors focus-ring">
                    BOOK DEMO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider font-bold mb-4 text-sm">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li>ABOUT</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/10 pt-8 text-center text-sm text-black/60">
            <p className="uppercase tracking-wider">
              ©&nbsp;2026 KOSYN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
