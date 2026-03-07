"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PathwayCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  index: number;
}

export function PathwayCard({ title, description, href, icon, index }: PathwayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        href={href}
        className="group block p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 h-full"
      >
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="font-subheading text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/60 font-body text-sm leading-relaxed mb-6">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-primary font-subheading text-sm group-hover:text-secondary transition-colors">
          Mehr erfahren
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
