"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", href: "/" },
    { name: "Videos", href: "/#videos" },
    { name: "Termine", href: "/#termine" },
    { name: "Mitmachen", href: "/mitmachen" },
    { name: "Über uns", href: "/#ueber-uns" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-background/80 backdrop-blur-lg border-b border-card-border shadow-lg" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 p-1 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/Logo.png" 
                alt="Mariabrunn Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-white" : "text-white"}`}>
              Mariabrunn <span className="text-[#6DC0D2]">Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-[#6DC0D2] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6DC0D2] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/#termine" 
              className="bg-[#155277] hover:bg-[#6DC0D2] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-[#155277]/20 hover:shadow-[#6DC0D2]/40"
            >
              Gottesdienste
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-white hover:text-[#6DC0D2] transition-colors"
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
