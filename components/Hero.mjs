"use client";
import Image from "next/image";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });
  const controls = useAnimation();

  // Scroll animation for parallax
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, -50]); // background moves up to 50px

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [inView, controls]);

  return (
    <section className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: yPos }}>
        <Image
          src="/hero.jpg"
          alt="Hero - fashion consultation"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </motion.div>

      {/* Centered Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center"
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#800020] font-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Brand. Define Your Style.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-6 text-white font-bold drop-shadow-lg max-w-2xl font-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bespoke consultations for fashion brands and creatives — strategy, design
          and production guidance tailored for impact.
        </motion.p>

        {/* Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#booking"
            className="inline-block bg-[#800020] text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#800020] transition-colors duration-200 text-center"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
