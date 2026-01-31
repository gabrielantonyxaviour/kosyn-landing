'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    key: 'scribing',
    gif: '/features/scribing.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    key: 'soapNotes',
    gif: '/features/soap-notes.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    key: 'referralLetters',
    gif: '/features/referral-letters.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    key: 'dischargeLetters',
    gif: '/features/discharge-letters.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    key: 'medicalCoding',
    gif: '/features/medical-coding.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    key: 'multiSpecialty',
    gif: '/features/multi-specialty.gif',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function FeaturesScroll() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activatedRef = useRef<Set<number>>(new Set());
  const [, forceRender] = useState(0);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      const startOffset = window.innerWidth * 0.6;
      gsap.set(track, { x: startOffset });

      const totalScroll = track.scrollWidth - window.innerWidth + startOffset;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: gsap.to(track, {
          x: -(totalScroll - startOffset),
          ease: 'none',
        }),
        onUpdate: () => {
          if (activatedRef.current.size === features.length) return;

          const viewportWidth = window.innerWidth;
          const cards = cardRefs.current;
          let changed = false;

          cards.forEach((card, index) => {
            if (!card || activatedRef.current.has(index)) return;
            const rect = card.getBoundingClientRect();
            if (rect.right <= viewportWidth && rect.left >= 0) {
              activatedRef.current.add(index);
              changed = true;
            }
          });

          if (changed) {
            forceRender(n => n + 1);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isEnabled = (index: number) => activatedRef.current.has(index);

  return (
    <section ref={sectionRef} className="overflow-hidden" id="features">
      <div ref={headingRef} className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight mb-4 leading-[0.9]">
          {t('features.heading1')}
          <br />
          <span className="text-neutral-500">{t('features.heading2')}</span>{t('features.heading3')}
        </h2>
        <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
          {t('features.subtitle')}
        </p>
      </div>

      <div ref={trackRef} className="flex gap-8 px-8 items-center will-change-transform" style={{ width: 'max-content' }}>
        {features.map((feature, index) => (
          <div
            key={feature.key}
            ref={(el) => setCardRef(el, index)}
            className={`feature-card flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] h-[60vh] border flex flex-col bg-white group transition-all duration-700 ${
              isEnabled(index)
                ? 'border-black/10 hover:border-black opacity-100 scale-100'
                : 'border-black/5 opacity-30 scale-95 grayscale'
            }`}
          >
            <div className="relative w-full h-[75%] bg-gray-100 border-b border-black/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-black/20 z-10">
                {feature.icon}
              </div>
              <Image
                src={feature.gif}
                alt={feature.key}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                unoptimized
              />
            </div>

            <div className="p-4 md:p-6 flex flex-col justify-between flex-1 overflow-hidden">
              <div>
                <h3 className="text-lg md:text-xl uppercase tracking-wider font-bold mb-2">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-black/60 leading-relaxed uppercase text-sm md:text-base">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
              <div className="flex items-center gap-2 text-black/40 group-hover:text-black transition-colors">
                <span className="uppercase tracking-widest text-xs font-semibold">
                  {t(`features.${feature.key}.tag`)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
