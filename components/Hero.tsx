"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface HeroSlide {
  hero_title: string;
  hero_description: string;
  hero_image?: { url: string; alt?: string } | string;
  primary_cta_text?: string;
  primary_cta_link?: string;
  secondary_cta_text?: string;
  secondary_cta_link?: string;
}

type HeroProps =
  | (HeroSlide & { slides?: undefined; livestream_url?: string })
  | { slides: HeroSlide[]; livestream_url?: string };

const AUTO_ADVANCE_MS = 7000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "40%" : "-40%",
    opacity: 0,
    scale: 1.08,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-40%" : "40%",
    opacity: 0,
    scale: 0.95,
  }),
};

const bgVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export function Hero(props: HeroProps) {
  const slides: HeroSlide[] = props.slides ?? [props as HeroSlide];
  const isCarousel = slides.length > 1;
  const livestream_url = props.livestream_url;

  const [[current, direction], setCurrent] = useState([0, 0]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isCarousel) return;
    timerRef.current = setTimeout(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, AUTO_ADVANCE_MS);
  }, [slides.length, isCarousel]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent([index, index > current ? 1 : -1]);
  };

  const slide = slides[current] ?? slides[0];
  if (!slide?.hero_title) return null;
  const imageSrc = typeof slide.hero_image === "string" ? slide.hero_image : slide.hero_image?.url;
  const imageAlt = typeof slide.hero_image === "string" ? slide.hero_title : (slide.hero_image?.alt || slide.hero_title);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${current}`}
          variants={bgVariants}
          initial={isCarousel ? "enter" : false}
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority={current === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-primary" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]" />

      {/* Slide content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* LEFT column - animated text */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${current}`}
              custom={direction}
              variants={isCarousel ? slideVariants : undefined}
              initial={isCarousel ? "enter" : { opacity: 0, y: 30 }}
              animate={isCarousel ? "center" : { opacity: 1, y: 0 }}
              exit={isCarousel ? "exit" : undefined}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-6"
            >
              <h1 className="font-heading text-white text-5xl lg:text-7xl leading-tight">
                {slide.hero_title.split(/\.\s*/).filter(Boolean).map((part, i, arr) => (
                  <span key={i}>
                    {part}{i < arr.length - 1 ? "." : slide.hero_title.endsWith(".") ? "." : ""}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-white/80 text-lg max-w-lg font-body">
                {slide.hero_description}
              </p>
              <div className="flex flex-wrap gap-4">
                {slide.primary_cta_text && slide.primary_cta_link && (
                  <Link
                    href={slide.primary_cta_link}
                    className="bg-secondary text-primary font-subheading px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    {slide.primary_cta_text}
                  </Link>
                )}
                {slide.secondary_cta_text && slide.secondary_cta_link && (
                  <Link
                    href={slide.secondary_cta_link}
                    className="border-2 border-white text-white font-subheading px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {slide.secondary_cta_text}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT column - video (only on first slide of carousel) */}
          <div className="hidden lg:block">
            <AnimatePresence>
              {(current === 0 || !isCarousel) && livestream_url && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
                >
                  <iframe
                    src={livestream_url}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dot navigation - only for carousel */}
      {isCarousel && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="group relative p-2"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[1]" />
    </section>
  );
}
