"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import type { WWDHero } from "@/lib/api/wwd-client";

export function Hero({ data }: { data: WWDHero }) {
    if (!data) return null;

    const isLivestream = data.display_mode === "livestream" && data.livestream_url;

    // Fallback image logic if missing from WWD
    const bgImage = data.background_image?.url || (isLivestream ? "/images/hero-streaming.png" : "/images/hero-church.png");

    return (
        <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#155277]/10 h-[400px] md:h-[520px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt={data.background_image?.alt || data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-[#155277]/20 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 pb-20">
                    <div className="max-w-3xl">
                        {isLivestream && (
                            <div className="mb-4">
                                <span className={`inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/20 shadow-lg backdrop-blur-sm bg-[#AF3F6C]`}>
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    Live
                                </span>
                            </div>
                        )}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4 drop-shadow-md line-clamp-2 leading-tight">
                            {data.title}
                        </h2>
                        {data.subtitle && (
                            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl line-clamp-2">
                                {data.subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-4">
                            {data.primary_cta_link && data.primary_cta_text && (
                                <Link
                                    href={data.primary_cta_link}
                                    className="inline-flex items-center gap-2 bg-white text-[#145073] hover:bg-[#69AFD2] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-[#69AFD2]/30"
                                >
                                    {isLivestream ? <Play size={20} className="fill-[#145073] group-hover:fill-white" /> : null}
                                    {data.primary_cta_text} <ChevronRight size={20} />
                                </Link>
                            )}

                            {data.secondary_cta_link && data.secondary_cta_text && (
                                <Link
                                    href={data.secondary_cta_link}
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#145073] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl"
                                >
                                    {data.secondary_cta_text}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
