"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovementSectionProps {
  title: string;
  description: string;
  workshop_cta_text?: string;
  workshop_cta_link?: string;
  info_cta_text?: string;
  info_cta_link?: string;
}

export function MovementSection({
  title,
  description,
  workshop_cta_text,
  workshop_cta_link,
  info_cta_text,
  info_cta_link,
}: MovementSectionProps) {
  return (
    <section className="py-24 px-6 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading text-4xl lg:text-5xl text-white">
          {title}
        </h2>
        <p className="text-white/80 text-lg mt-6 font-body max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          {workshop_cta_text && workshop_cta_link && (
            <Link
              href={workshop_cta_link}
              className="bg-secondary text-primary font-subheading px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              {workshop_cta_text}
            </Link>
          )}
          {info_cta_text && info_cta_link && (
            <Link
              href={info_cta_link}
              className="border-2 border-white text-white font-subheading px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              {info_cta_text}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
