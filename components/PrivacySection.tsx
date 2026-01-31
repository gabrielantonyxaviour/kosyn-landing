'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const topRow = [
  { key: 'zkPrivacy', image: '/zk.png' },
  { key: 'embeddedAI', image: '/ai.png' },
  { key: 'cryptoProof', image: '/cryptographic.png' },
];

const bottomRow = [
  { key: 'taskAutomation', image: '/automation.png' },
  { key: 'dataControl', image: '/patient.png' },
];

export default function PrivacySection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      const cards = cardsRef.current?.querySelectorAll('.trust-card');
      if (cards) {
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (item: { key: string; image: string }) => (
    <div
      key={item.key}
      className="trust-card border border-black/10 p-8 hover:border-black/30 transition-colors duration-300 group"
    >
      <div className="relative w-full h-40 mb-6 flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.key}
          width={160}
          height={160}
          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <h3 className="text-2xl uppercase tracking-wider font-bold mb-4">
        {t(`trust.${item.key}.title`)}
      </h3>
      <p className="text-black/70 leading-relaxed uppercase text-sm">
        {t(`trust.${item.key}.description`)}
      </p>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight mb-6 leading-[0.9]">
            {t('trust.heading1')}
            <br />
            <span className="text-neutral-500">{t('trust.heading2')}</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
            {t('trust.subtitle')}
          </p>
        </div>

        <div ref={cardsRef}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {topRow.map(renderCard)}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {bottomRow.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
