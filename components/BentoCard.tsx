"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    href?: string;
    delay?: number;
    colorVariant?: "darkBlue" | "lightBlue" | "green" | "magenta" | "rose" | "anthracite" | "transparent";
    backgroundImage?: string;
}

export function BentoCard({
    children,
    className,
    href,
    delay = 0,
    colorVariant = "darkBlue",
    backgroundImage,
}: BentoCardProps) {

    const colorStyles = {
        darkBlue: "bg-[#155277]/5 border-[#155277]/10 hover:border-[#6DC0D2]/50 hover:shadow-[0_8px_30px_rgba(109,192,210,0.15)]",
        lightBlue: "bg-[#6DC0D2]/5 border-[#6DC0D2]/15 hover:border-[#6DC0D2]/40 hover:shadow-[0_8px_30px_rgba(109,192,210,0.2)]",
        green: "bg-[#90AD50]/5 border-[#90AD50]/15 hover:border-[#90AD50]/40 hover:shadow-[0_8px_30px_rgba(144,173,80,0.15)]",
        magenta: "bg-[#AF3F6C]/5 border-[#AF3F6C]/15 hover:border-[#AF3F6C]/40 hover:shadow-[0_8px_30px_rgba(175,63,108,0.15)]",
        rose: "bg-[#BC8080]/5 border-[#BC8080]/15 hover:border-[#BC8080]/40 hover:shadow-[0_8px_30px_rgba(188,128,128,0.15)]",
        anthracite: "bg-[#2D2D2D] border-[#2D2D2D]/20 hover:border-[#6DC0D2]/30 text-white hover:shadow-[0_8px_30px_rgba(45,45,45,0.3)]",
        transparent: "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10",
    };

    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(
                "relative rounded-3xl p-8 border overflow-hidden transition-all duration-500 h-full flex flex-col group/card",
                colorStyles[colorVariant],
                className
            )}
        >
            {/* Background Image with Zoom on Hover */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#155277]/90 via-[#155277]/50 to-[#155277]/20" />
                </div>
            )}

            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );

    if (href) {
        const isExternal = href.startsWith("http");
        if (isExternal) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#6DC0D2] rounded-3xl">
                    {cardContent}
                </a>
            );
        }
        return (
            <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#6DC0D2] rounded-3xl">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
