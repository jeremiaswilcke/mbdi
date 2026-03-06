"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Livestream", href: "/livestream" },
  { name: "Auf den Punkt", href: "/auf-den-punkt" },
  { name: "Bibel", href: "/bibel" },
  { name: "Kirche", href: "/kirche" },
  { name: "Mariabrunn Digital", href: "/mariabrunn-digital" },
  { name: "Mitmachen", href: "/mitmachen" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/Logo.png"
                alt="Mariabrunn Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={cn(
                "font-heading text-xl transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Mariabrunn Digital
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-subheading text-sm tracking-wide transition-colors hover:text-secondary",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-white"
                    : isScrolled
                    ? "bg-primary"
                    : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-primary"
                    : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-white"
                    : isScrolled
                    ? "bg-primary"
                    : "bg-white"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-2xl text-white hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
