"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { YouTubeVideoInfo } from "@/lib/youtube";

// Using Lucide react icons (already installed in the project based on Navigation.tsx)
import { ChevronRight, Play, Camera } from "lucide-react";

interface HeroCarouselProps {
    liveStream: YouTubeVideoInfo | null;
    latestVod: YouTubeVideoInfo | null;
}

export function HeroCarousel({ liveStream, latestVod }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Determine slides based on YouTube data
    const slides = [];

    // Slide 1: YouTube Content (Live or VOD)
    if (liveStream) {
        slides.push({
            id: 'live',
            type: 'video',
            badge: 'Live Now',
            title: liveStream.title,
            description: "Wir sind gerade live! Nehme jetzt am Livestream teil.",
            image: liveStream.thumbnailUrl,
            link: `https://youtube.com/watch?v=${liveStream.id}`,
            linkText: "Jetzt live ansehen",
            badgeColor: "bg-[#AF3F6C]",
            icon: <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        });
    } else if (latestVod) {
        slides.push({
            id: 'vod',
            type: 'video',
            badge: 'Neuestes Video',
            title: latestVod.title,
            description: "Aus der Pfarr- und Wallfahrtskirche Mariabrunn.",
            image: latestVod.thumbnailUrl,
            link: `https://youtube.com/watch?v=${latestVod.id}`,
            linkText: "Video ansehen",
            badgeColor: "bg-[#155277]",
            icon: <Play size={14} className="fill-white" />
        });
    }

    // Slide 2: Mitmachen CTA (always present)
    slides.push({
        id: 'mitmachen',
        type: 'cta',
        badge: 'Technikcrew',
        title: "Werde Teil unseres Teams",
        description: "Interesse an Kamera, Regie, Streamingtechnik oder Social Media? Unterstütze Mariabrunn Digital aktiv mit.",
        image: "/Logo.png", // Fallback, we'll style this differently
        link: "/mitmachen",
        linkText: "Mehr Informationen",
        badgeColor: "bg-[#BC8080]",
        icon: <Camera size={14} />
    });

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    // Handlers for swipe
    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipe = offset.x;
        const threshold = 50;
        if (swipe < -threshold) {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setIsAutoPlaying(false);
        } else if (swipe > threshold) {
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAutoPlaying(false);
        }
    };

    if (slides.length === 0) return null;

    const currentSlide = slides[currentIndex];

    return (
        <div
            className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl bg-[#0f172a] h-[450px] md:h-[550px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                    {currentSlide.type === 'video' ? (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="object-cover w-full h-full opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent z-10" />
                        </div>
                    ) : (
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#155277] to-[#0f172a]">
                            <div className="absolute right-10 bottom-10 opacity-20 hidden md:block">
                                <Camera size={250} />
                            </div>
                        </div>
                    )}

                    <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 pb-20">
                        <div className="max-w-3xl">
                            <div className="mb-4">
                                <span className={`inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/20 shadow-lg ${currentSlide.badgeColor}`}>
                                    {currentSlide.icon}
                                    {currentSlide.badge}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 shadow-black drop-shadow-md line-clamp-2 leading-tight">
                                {currentSlide.title}
                            </h2>
                            <p className="text-xl text-slate-200 mb-8 max-w-2xl text-shadow-sm line-clamp-2 md:line-clamp-3">
                                {currentSlide.description}
                            </p>

                            {currentSlide.link.startsWith('http') ? (
                                <a
                                    href={currentSlide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-[#155277] hover:bg-[#6DC0D2] hover:text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-xl"
                                >
                                    {currentSlide.linkText} <ChevronRight size={20} />
                                </a>
                            ) : (
                                <Link
                                    href={currentSlide.link}
                                    className="inline-flex items-center gap-2 bg-white text-[#155277] hover:bg-[#6DC0D2] hover:text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-xl"
                                >
                                    {currentSlide.linkText} <ChevronRight size={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                : "bg-white/40 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
