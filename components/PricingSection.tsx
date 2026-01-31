"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface PricingSectionProps {
  currency: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlySavings: string;
}

export default function PricingSection({
  currency,
  monthlyPrice,
  yearlyPrice,
  yearlySavings,
}: PricingSectionProps) {
  const t = useTranslations();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-nav relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-tight mb-6 leading-[0.9] text-balance">
            {t("pricing.heading1")}
            <br />
            <span className="text-neutral-500">{t("pricing.heading2")}</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto uppercase">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Blurry Coming Soon Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
            <span className="relative z-20 text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold uppercase tracking-widest text-black/80">
              Coming Soon
            </span>
          </div>

          {/* Toggle */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center border border-black/20 p-1">
              <button
                className="text-xs uppercase tracking-widest font-semibold px-6 py-2.5 bg-black text-white"
              >
                {t("pricing.monthly")}
              </button>
              <button
                className="text-xs uppercase tracking-widest font-semibold px-6 py-2.5 bg-transparent text-black/50"
              >
                {t("pricing.yearly")}
                {" "}
                <span className="text-[10px] text-black/40">
                  ({t("pricing.pro.save")} {yearlySavings})
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="border border-black/10 p-8 flex flex-col">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-2">
              {t("pricing.free.title")}
            </h3>
            <p className="text-4xl font-bold mb-1">{currency}0</p>
            <p className="text-sm text-black/60 uppercase mb-8">
              {t("pricing.free.period")}
            </p>
            <ul className="space-y-3 text-sm uppercase text-black/80 flex-1">
              {(["feature1", "feature2", "feature3", "feature4", "feature5"] as const).map(
                (key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="text-black font-bold mt-0.5">&#10003;</span>
                    {t(`pricing.free.${key}`)}
                  </li>
                )
              )}
            </ul>
            <Link
              href="https://app.kosyn.ai/sign-up"
              className="mt-8 block text-center uppercase tracking-widest text-sm font-semibold px-8 py-4 bg-white text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              {t("pricing.free.cta")}
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="border-2 border-black p-8 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs uppercase tracking-widest font-semibold px-4 py-1">
              {t("pricing.pro.badge")}
            </div>
            <h3 className="text-xl uppercase tracking-wider font-bold mb-2">
              {t("pricing.pro.title")}
            </h3>
            <p className="text-4xl font-bold mb-1">
              {currency}
              {isYearly ? yearlyPrice : monthlyPrice}
              <span className="text-lg font-normal text-black/60">
                /{isYearly ? t("pricing.pro.yearLabel") : t("pricing.pro.monthLabel")}
              </span>
            </p>
            <p className="text-sm text-black/60 uppercase mb-8">
              {isYearly
                ? `${t("pricing.pro.save")} ${yearlySavings} ${t("pricing.pro.yearLabel")}`
                : "\u00A0"}
            </p>
            <ul className="space-y-3 text-sm uppercase text-black/80 flex-1">
              {(
                ["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"] as const
              ).map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-black font-bold mt-0.5">&#10003;</span>
                  {t(`pricing.pro.${key}`)}
                </li>
              ))}
            </ul>
            <Link
              href="https://app.kosyn.ai/sign-up"
              className="mt-8 block text-center uppercase tracking-widest text-sm font-semibold px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              {t("pricing.pro.cta")}
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="border border-black/10 p-8 flex flex-col">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-2">
              {t("pricing.enterprise.title")}
            </h3>
            <p className="text-4xl font-bold mb-1">
              {t("pricing.enterprise.price")}
            </p>
            <p className="text-sm text-black/60 uppercase mb-8">
              {t("pricing.enterprise.period")}
            </p>
            <ul className="space-y-3 text-sm uppercase text-black/80 flex-1">
              {(
                ["feature1", "feature2", "feature3", "feature4", "feature5"] as const
              ).map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-black font-bold mt-0.5">&#10003;</span>
                  {t(`pricing.enterprise.${key}`)}
                </li>
              ))}
            </ul>
            <a
              href="mailto:contact@kosyn.ai?subject=Enterprise%20Inquiry"
              className="mt-8 block text-center uppercase tracking-widest text-sm font-semibold px-8 py-4 bg-white text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              {t("pricing.enterprise.cta")}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
