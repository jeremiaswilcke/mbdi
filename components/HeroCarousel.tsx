"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { YouTubeVideoInfo } from "@/lib/youtube";
import { ChevronRight, Play, Camera } from "lucide-react";

interface HeroCarouselProps {
    liveStream: YouTubeVideoInfo | null;
    latestVod: YouTubeVideoInfo | null;
}

export function HeroCarousel({ liveStream, latestVod }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [];

    // Slide 1: YouTube Content (Live or VOD)
    if (liveStream) {
        slides.push({
            id: 'live',
            type: 'video' as const,
            badge: 'Live',
            title: liveStream.title,
            description: "Wir sind gerade live! Nimm jetzt am Livestream teil.",
            image: liveStream.thumbnailUrl,
            link: `https://youtube.com/watch?v=${liveStream.id}`,
            linkText: "Jetzt live ansehen",
            badgeColor: "bg-[#AF3F6C]",
            icon: <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        });
    } else if (latestVod) {
        slides.push({
            id: 'vod',
            type: 'video' as const,
            badge: 'Neuestes Video',
            title: latestVod.title,
            description: "Aus der Pfarr- und Wallfahrtskirche Mariabrunn.",
            image: latestVod.thumbnailUrl,
            link: `https://youtube.com/watch?v=${latestVod.id}`,
            linkText: "Video ansehen",
            badgeColor: "bg-[#155277]",
            icon: <Play size={14} className="fill-white" />
        });
    } else {
        // Fallback: church image
        slides.push({
            id: 'fallback',
            type: 'video' as const,
            badge: 'Kirche entdecken',
            title: "Pfarre Mariabrunn",
            description: "Entdecke unsere Videos, Predigten und Livestreams aus der Pfarr- und Wallfahrtskirche Mariabrunn.",
            image: "/images/hero-church.png",
            link: "https://www.youtube.com/@MariabrunnDigital",
            linkText: "Zum YouTube-Kanal",
            badgeColor: "bg-[#155277]",
            icon: <Play size={14} className="fill-white" />
        });
    }

    // Slide 2: Mitmachen CTA with streaming image
    slides.push({
        id: 'mitmachen',
        type: 'cta' as const,
        badge: 'Technikcrew',
        title: "Werde Teil unseres Teams",
        description: "Interesse an Kamera, Regie, Streamingtechnik oder Social Media? Unterstütze Mariabrunn Digital aktiv.",
        image: "/images/hero-streaming.png",
        link: "/mitmachen",
        linkText: "Mehr erfahren",
        badgeColor: "bg-[#BC8080]",
        icon: <Camera size={14} />
    });

    useEffect(() => {
        if (!isAutoPlaying || slides.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const handleDragEnd = (e: any, { offset }: any) => {
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
            className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#155277]/10 h-[400px] md:h-[520px]"
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
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        {currentSlide.image.startsWith("http") ? (
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-[#155277]/20 z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 pb-20">
                        <div className="max-w-3xl">
                            <div className="mb-4">
                                <span className={`inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/20 shadow-lg backdrop-blur-sm ${currentSlide.badgeColor}`}>
                                    {currentSlide.icon}
                                    {currentSlide.badge}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4 drop-shadow-md line-clamp-2 leading-tight">
                                {currentSlide.title}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl line-clamp-2">
                                {currentSlide.description}
                            </p>

                            {currentSlide.link.startsWith('http') ? (
                                <a
                                    href={currentSlide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-[#155277] hover:bg-[#6DC0D2] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-[#6DC0D2]/30"
                                >
                                    {currentSlide.linkText} <ChevronRight size={20} />
                                </a>
                            ) : (
                                <Link
                                    href={currentSlide.link}
                                    className="inline-flex items-center gap-2 bg-white text-[#155277] hover:bg-[#6DC0D2] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-[#6DC0D2]/30"
                                >
                                    {currentSlide.linkText} <ChevronRight size={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            {slides.length > 1 && (
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
                            aria-label={`Zu Slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
