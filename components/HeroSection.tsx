'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import GlitchText from './GlitchText';
import SecureDataNetwork from './SecureDataNetwork';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dnaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.5')
      .from(dnaRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, 0.2);

      // Parallax on DNA only
      gsap.to(dnaRef.current, {
        y: -40,
        scale: 1.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grain-overlay min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div ref={headingRef} className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight leading-[0.9]">
                {t('hero.title1')}
                <br />
                {t('hero.title2')}
              </h1>
              <div className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight leading-none text-neutral-500 pb-4">
                <GlitchText />
              </div>
            </div>
            <p
              ref={subtitleRef}
              className="text-sm md:text-base mb-8 text-black/70 leading-relaxed uppercase max-w-xl"
            >
              {t('hero.subtitle')}
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendar.app.google/MKWy9NcVKcVpDADH6"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-black text-white hover:bg-black/90 transition-colors duration-300 border border-black w-full sm:w-auto text-center focus-ring"
              >
                {t('hero.bookCallButton')}
              </Link>
              <Link
                href="https://app.kosyn.ai/sign-in"
                className="uppercase tracking-widest text-sm font-semibold px-10 py-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 border border-black w-full sm:w-auto text-center focus-ring"
              >
                {t('hero.signInButton')}
              </Link>
            </div>
          </div>

          <div ref={dnaRef} className="hidden lg:block relative h-[600px]">
            <SecureDataNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}
