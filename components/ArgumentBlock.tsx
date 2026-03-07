"use client";

import { motion } from "framer-motion";

interface Argument {
  title: string;
  content: string;
}

interface ArgumentBlockProps {
  arguments: Argument[];
  title?: string;
}

export function ArgumentBlock({ arguments: args, title }: ArgumentBlockProps) {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      {title && (
        <h2 className="font-heading text-4xl text-primary text-center mb-16">
          {title}
        </h2>
      )}
      <div className="space-y-16">
        {args.map((arg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col md:flex-row items-start gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="font-heading text-2xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-subheading text-xl text-primary mb-3">
                {arg.title}
              </h3>
              <div className="text-foreground/70 font-body leading-relaxed space-y-3">
                {arg.content.split("\n\n").map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
