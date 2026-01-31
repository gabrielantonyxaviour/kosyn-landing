'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const painPointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      const points = painPointsRef.current?.children;
      if (points) {
        gsap.from(points, {
          x: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: painPointsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight leading-[0.9] text-balance">
            {t('problem.heading1')}
            <br />
            {t('problem.heading2')}
            <br />
            <span className="text-neutral-400">{t('problem.heading3')}</span>
          </h2>
        </div>

        <div ref={painPointsRef} className="grid md:grid-cols-3 gap-12">
          <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
            <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
              {t('problem.overwhelmed.title')}
            </h3>
            <p className="text-white/70 leading-relaxed uppercase text-sm">
              {t('problem.overwhelmed.description')}
            </p>
          </div>
          <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
            <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
              {t('problem.vulnerable.title')}
            </h3>
            <p className="text-white/70 leading-relaxed uppercase text-sm">
              {t('problem.vulnerable.description')}
            </p>
          </div>
          <div className="ltr:border-l-2 rtl:border-r-2 border-white/30 ltr:pl-6 rtl:pr-6">
            <h3 className="text-xl uppercase tracking-wider font-semibold mb-3">
              {t('problem.trust.title')}
            </h3>
            <p className="text-white/70 leading-relaxed uppercase text-sm">
              {t('problem.trust.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
