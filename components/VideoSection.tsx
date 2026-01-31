'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(videoRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight mb-4 leading-[0.9]">
          {t('video.heading1a')}<span className="text-neutral-400">{t('video.heading1b')}</span>{t('video.heading1c')}
          <br />
          {t('video.heading2')}
        </h2>
        <p className="text-white/60 uppercase tracking-wider text-sm mb-12">
          {t('video.subtitle')}
        </p>
        <div ref={videoRef}>
          <div className="aspect-video border border-white/20 bg-white/5 flex items-center justify-center">
            {/* Replace with: <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... /> */}
            <div className="flex flex-col items-center justify-center text-white/30">
              <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="uppercase tracking-widest text-sm">{t('video.placeholder')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
