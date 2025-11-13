"use client";
import { motion } from "framer-motion";

export default function AffiliateBrands() {
  const brands = [
    "DUABA SERWA", "CB ACADEMY", "LAXIRI", "RIVERMINDSTYLE", "OMETSEY", "ACCRA MALL FASHION FUND",
    "DMN-MOVENPICK", "FUNKY AFRICAN", "ANANSE AFRICA", "THE LAB", "DHUHA SHAARANI", "TASUNTI",
    "JOEY THE BRAND", "BLUECREST UNIVERSITY", "CAPSULE.ABJ"
  ];

  return (
    <section id="affiliatebrands" className="py-20 bg-white/95 text-black px-4 font-didot">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#800020] mb-12">
          Affiliate Brands
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#800020",
                color: "#fff",
                transition: { type: "spring", stiffness: 500, damping: 20 },
              }}
              className="border-2 border-[#800020] px-5 py-2 rounded-full text-black font-semibold bg-white cursor-pointer"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
