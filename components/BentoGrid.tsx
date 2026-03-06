"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bentoSizeClasses } from "@/lib/design-tokens";
import Image from "next/image";
import Link from "next/link";

interface BentoCard {
  title: string;
  description?: string;
  image?: { url: string; alt?: string } | string;
  link?: string;
  size: "small" | "medium" | "large";
}

interface BentoGridProps {
  cards: BentoCard[];
}

export function BentoGrid({ cards }: BentoGridProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const sizeClass = cn(
            bentoSizeClasses[card.size],
            card.size === "large" && "min-h-[400px]"
          );

          const cardContent = (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-2xl group cursor-pointer",
                sizeClass,
                card.image ? "min-h-[280px]" : "bg-gray-50 p-8"
              )}
            >
              {card.image && (() => {
                const imgSrc = typeof card.image === "string" ? card.image : card.image.url;
                const imgAlt = typeof card.image === "string" ? card.title : (card.image.alt || card.title);
                return (
                  <>
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </>
                );
              })()}

              <div
                className={cn(
                  "relative z-10 flex flex-col justify-end h-full",
                  card.image && "p-6"
                )}
              >
                <h3
                  className={cn(
                    "font-heading text-xl",
                    card.image ? "text-white" : "text-primary"
                  )}
                >
                  {card.title}
                </h3>
                {card.description && (
                  <p
                    className={cn(
                      "text-sm mt-2",
                      card.image ? "text-white/70" : "text-foreground/60"
                    )}
                  >
                    {card.description}
                  </p>
                )}
              </div>
            </motion.div>
          );

          if (card.link) {
            return (
              <Link key={index} href={card.link} className={cn("block", sizeClass)}>
                {cardContent}
              </Link>
            );
          }

          return <div key={index} className={sizeClass}>{cardContent}</div>;
        })}
      </div>
    </section>
  );
}
