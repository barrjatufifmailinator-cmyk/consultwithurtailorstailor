"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic blur effect based on scroll position
  const blurAmount = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(12px)"]);
  const opacity = useTransform(scrollY, [0, 300], [0.4, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backdropFilter: blurAmount,
        WebkitBackdropFilter: blurAmount,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        opacity,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand Name */}
        <motion.h1
          className="text-xl md:text-2xl font-semibold tracking-wide text-[#800020]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          URTAILORSTAILOR
        </motion.h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link
            href="#about"
            className={`transition-colors duration-300 ${isScrolled ? "text-[#800020]" : "text-white"}`}
          >
            About
          </Link>
          <Link
            href="#services"
            className={`transition-colors duration-300 ${isScrolled ? "text-[#800020]" : "text-white"}`}
          >
            Services
          </Link>
          <Link
            href="#booking"
            className={`transition-colors duration-300 ${isScrolled ? "text-[#800020]" : "text-white"}`}
          >
            Booking
          </Link>
          <Link
            href="#contact"
            className={`transition-colors duration-300 ${isScrolled ? "text-[#800020]" : "text-white"}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
