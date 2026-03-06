"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroProps {
  hero_title: string;
  hero_description: string;
  hero_image?: { url: string; alt?: string } | string;
  livestream_url?: string;
  fallback_video_url?: string;
  primary_cta_text?: string;
  primary_cta_link?: string;
  secondary_cta_text?: string;
  secondary_cta_link?: string;
}

export function Hero({
  hero_title,
  hero_description,
  hero_image,
  livestream_url,
  fallback_video_url,
  primary_cta_text,
  primary_cta_link,
  secondary_cta_text,
  secondary_cta_link,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const videoUrl = livestream_url || fallback_video_url;
  const imageSrc = typeof hero_image === "string" ? hero_image : hero_image?.url;
  const imageAlt = typeof hero_image === "string" ? hero_title : (hero_image?.alt || hero_title);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-primary" />
        )}
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* LEFT column */}
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-white text-5xl lg:text-7xl leading-tight">
              {hero_title}
            </h1>
            <p className="text-white/80 text-lg max-w-lg font-body">
              {hero_description}
            </p>
            <div className="flex flex-wrap gap-4">
              {primary_cta_text && primary_cta_link && (
                <Link
                  href={primary_cta_link}
                  className="bg-secondary text-primary font-subheading px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  {primary_cta_text}
                </Link>
              )}
              {secondary_cta_text && secondary_cta_link && (
                <Link
                  href={secondary_cta_link}
                  className="border-2 border-white text-white font-subheading px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {secondary_cta_text}
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT column */}
          <div className="hidden lg:block">
            {videoUrl && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
