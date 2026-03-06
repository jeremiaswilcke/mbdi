"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Area {
  title: string;
  description?: string;
  icon?: string;
}

interface TeamCTAProps {
  title: string;
  description: string;
  areas: Area[];
  cta_text?: string;
  cta_link?: string;
}

export function TeamCTA({
  title,
  description,
  areas,
  cta_text,
  cta_link,
}: TeamCTAProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="font-heading text-4xl text-primary">{title}</h2>
        <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-gray-50 text-center hover:shadow-lg transition-shadow"
          >
            {area.icon && (
              <div className="text-4xl mb-4">{area.icon}</div>
            )}
            <h3 className="font-subheading text-lg text-primary mt-4">
              {area.title}
            </h3>
            {area.description && (
              <p className="text-sm text-foreground/60 mt-2">
                {area.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {cta_text && cta_link && (
        <div className="mt-12 text-center">
          <Link
            href={cta_link}
            className="inline-block bg-primary text-white font-subheading px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {cta_text}
          </Link>
        </div>
      )}
    </section>
  );
}
