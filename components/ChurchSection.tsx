"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChurchSectionProps {
  title: string;
  description: string;
  image?: { url: string; alt?: string } | string;
  cta_text?: string;
  cta_link?: string;
}

export function ChurchSection({
  title,
  description,
  image,
  cta_text,
  cta_link,
}: ChurchSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      {image && (() => {
        const imgSrc = typeof image === "string" ? image : image.url;
        const imgAlt = typeof image === "string" ? title : (image.alt || title);
        return (
          <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
            <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
          </motion.div>
        );
      })()}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="font-heading text-4xl lg:text-6xl text-white">
          {title}
        </h2>
        <p className="text-white/80 text-lg mt-6 font-body">
          {description}
        </p>
        {cta_text && cta_link && (
          <Link
            href={cta_link}
            className="mt-8 inline-block bg-secondary text-primary font-subheading px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            {cta_text}
          </Link>
        )}
      </motion.div>
    </section>
  );
}
