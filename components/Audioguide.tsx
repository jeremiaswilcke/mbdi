"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Station {
  station_title: string;
  description?: string;
  audio_file?: string;
  image?: string;
}

interface AudioguideProps {
  stations: Station[];
}

export function Audioguide({ stations }: AudioguideProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl text-primary">Audioguide</h2>
        <p className="text-foreground/70 mt-4 text-lg font-body max-w-2xl mx-auto">
          Entdecke die Geschichte und Kunst unserer Kirche mit dem interaktiven Audioguide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stations.map((station, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100"
          >
            {station.image && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={station.image}
                  alt={station.station_title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="font-subheading text-lg text-primary">
                {station.station_title}
              </h3>
              {station.description && (
                <p className="font-body text-sm text-foreground/70 mt-2">
                  {station.description}
                </p>
              )}
              {station.audio_file && (
                <audio controls className="w-full mt-4" preload="none">
                  <source src={station.audio_file} />
                </audio>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
