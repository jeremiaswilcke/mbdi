"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming we have a cn utility, if not we'll create it
import Link from "next/link";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    href?: string;
    delay?: number;
    colorVariant?: "darkBlue" | "lightBlue" | "green" | "magenta" | "rose" | "transparent";
}

export function BentoCard({
    children,
    className,
    href,
    delay = 0,
    colorVariant = "darkBlue"
}: BentoCardProps) {

    const colorStyles = {
        darkBlue: "bg-[#155277]/40 border-[#6DC0D2]/20 hover:border-[#6DC0D2]/50 hover:bg-[#155277]/60",
        lightBlue: "bg-[#6DC0D2]/20 border-[#6DC0D2]/40 hover:border-[#6DC0D2] hover:bg-[#6DC0D2]/30",
        green: "bg-[#90AD50]/20 border-[#90AD50]/40 hover:border-[#90AD50] hover:bg-[#90AD50]/30",
        magenta: "bg-[#AF3F6C]/20 border-[#AF3F6C]/40 hover:border-[#AF3F6C] hover:bg-[#AF3F6C]/30",
        rose: "bg-[#BC8080]/20 border-[#BC8080]/40 hover:border-[#BC8080] hover:bg-[#BC8080]/30",
        transparent: "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10",
    };

    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}
            className={cn(
                "relative rounded-3xl p-8 backdrop-blur-md border shadow-xl overflow-hidden transition-colors duration-300 h-full flex flex-col",
                colorStyles[colorVariant],
                className
            )}
        >
            {/* Subtle Glow Effect on Hover (managed by parent group class in tailwind if needed) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#6DC0D2] rounded-3xl">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
