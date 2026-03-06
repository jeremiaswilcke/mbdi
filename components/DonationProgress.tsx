"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DonationProgressProps {
  donation_title: string;
  donation_description: string;
  donation_goal: number;
  donation_current: number;
  donation_link?: string;
}

export function DonationProgress({
  donation_title,
  donation_description,
  donation_goal,
  donation_current,
  donation_link,
}: DonationProgressProps) {
  const percentage = Math.min((donation_current / donation_goal) * 100, 100);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl text-primary">
          {donation_title}
        </h2>
        <p className="text-foreground/70 mt-4 font-body">
          {donation_description}
        </p>

        <div className="mt-10">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-secondary h-full rounded-full"
            />
          </div>
          <div className="flex justify-between mt-3 text-sm font-body">
            <span className="text-primary font-subheading">
              {donation_current.toLocaleString("de-AT")} &euro;
            </span>
            <span className="text-foreground/60">
              {donation_goal.toLocaleString("de-AT")} &euro;
            </span>
          </div>
        </div>

        {donation_link && (
          <Link
            href={donation_link}
            className="mt-8 inline-block bg-primary text-white font-subheading px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Jetzt spenden
          </Link>
        )}
      </div>
    </section>
  );
}
