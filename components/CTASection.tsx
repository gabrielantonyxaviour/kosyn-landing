'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white" id="get-started">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
          {t('cta.heading1')}
          <br />
          {t('cta.heading2')}
        </h2>
        <p className="text-xl mb-10 text-white/70 uppercase">
          {t('cta.subtitle')}
        </p>
        <div className="space-y-4">
          <Link
            href="https://calendar.app.google/MKWy9NcVKcVpDADH6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 bg-white text-black hover:bg-white/90 transition-colors duration-300 border border-white focus-ring"
          >
            {t('cta.button')}
          </Link>
          <p className="text-sm text-white/50 uppercase tracking-wider">
            {t('cta.availability')}
          </p>
        </div>
      </div>
    </section>
  );
}
