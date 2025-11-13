"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Personal Styling",
      description: "Tailored wardrobe consultations to elevate your personal brand and confidence.",
    },
    {
      title: "Brand Strategy",
      description: "Develop a cohesive fashion brand identity aligned with your vision and market.",
    },
    {
      title: "Design Consultation",
      description: "Expert guidance on design concepts, fabrics, and production processes.",
    },
    {
      title: "Production Management",
      description: "Full oversight from concept to delivery — quality assurance at every stage.",
    },
    {
      title: "Business Coaching",
      description: "Build capacity in fashion entrepreneurship, pricing, and market positioning.",
    },
    {
      title: "Trend & Market Analysis",
      description: "Stay ahead with insights on emerging trends and competitive landscape.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white/95 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#800020] mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#800020] hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,32,0.3)" }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#800020] mb-4">
                {service.title}
              </h3>
              <p className="text-black/80 text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
