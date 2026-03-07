"use client";

import { motion } from "framer-motion";
import { FormContact } from "./FormContact";

interface ContactCTAProps {
  title?: string;
  description?: string;
  id?: string;
}

export function ContactCTA({
  title = "Personliches Gesprach",
  description = "Der erste Schritt ist oft der schwerste. Wir horen Ihnen zu -- unverbindlich und vertraulich.",
  id = "kontakt",
}: ContactCTAProps) {
  return (
    <section id={id} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12"
      >
        <h2 className="font-heading text-3xl text-primary text-center mb-4">
          {title}
        </h2>
        <p className="text-foreground/70 font-body text-center mb-10 max-w-lg mx-auto">
          {description}
        </p>
        <FormContact />
      </motion.div>
    </section>
  );
}
