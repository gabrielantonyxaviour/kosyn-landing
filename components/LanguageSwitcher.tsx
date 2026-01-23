"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { locales, languages, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLanguage = languages[locale];

  const handleLocaleChange = (newLocale: Locale) => {
    startTransition(() => {
      // Set cookie for locale preference
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      // Reload to apply the new locale
      window.location.reload();
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "uppercase tracking-widest text-sm font-semibold px-6 py-3",
          "bg-white text-black hover:bg-black hover:text-white",
          "transition-colors duration-300 border border-black",
          isPending && "opacity-50 cursor-not-allowed"
        )}
      >
        {currentLanguage.code}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className={cn(
              "absolute top-full mt-2 z-50 min-w-[140px]",
              "bg-white border border-black shadow-xl overflow-hidden",
              // Handle RTL positioning
              "ltr:right-0 rtl:left-0"
            )}
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                disabled={isPending || loc === locale}
                className={cn(
                  "w-full px-4 py-2.5 text-sm text-start flex items-center justify-between uppercase tracking-wider",
                  loc === locale
                    ? "bg-black text-white"
                    : "text-black hover:bg-black/10"
                )}
              >
                <span>{languages[loc].nativeName}</span>
                <span className="text-xs font-mono">
                  {languages[loc].code}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
