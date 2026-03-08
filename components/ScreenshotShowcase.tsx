"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface UseCase {
  title: string;
  description: string;
  icon: string;
  screenshot?: { url: string; alt: string };
}

interface ScreenshotShowcaseProps {
  title?: string;
  subtitle?: string;
  useCases: UseCase[];
}

export function ScreenshotShowcase({
  title = "Isidor in Aktion",
  subtitle = "Klicken Sie auf einen Anwendungsfall, um den zugehörigen Screenshot zu sehen.",
  useCases,
}: ScreenshotShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  return (
    <section id="screenshots" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-4">
          {title}
        </h2>
        <p className="text-center text-foreground/60 font-body mb-16 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Desktop: side-by-side | Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Vertical use case list */}
          <div className="lg:w-2/5 flex flex-col gap-3">
            {useCases.map((uc, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border ${
                  i === activeIndex
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{uc.icon}</span>
                  <div>
                    <h3
                      className={`font-subheading text-base mb-1 ${
                        i === activeIndex ? "text-white" : "text-primary"
                      }`}
                    >
                      {uc.title}
                    </h3>
                    <p
                      className={`font-body text-sm leading-relaxed ${
                        i === activeIndex
                          ? "text-white/80"
                          : "text-foreground/60"
                      }`}
                    >
                      {uc.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Screenshot display area */}
          <div className="lg:w-3/5 relative min-h-[320px] md:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                {active?.screenshot?.url ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                    <Image
                      src={active.screenshot.url}
                      alt={active.screenshot.alt || active.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center text-center p-8">
                    <span className="text-5xl mb-4">{active?.icon}</span>
                    <p className="font-subheading text-lg text-primary mb-2">
                      {active?.title}
                    </p>
                    <p className="font-body text-sm text-foreground/50">
                      Screenshot wird über WordPress ergänzt.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
