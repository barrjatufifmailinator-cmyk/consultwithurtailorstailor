"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PaystackButton from "./PaystackButton.mjs";

export default function Booking() {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // ONE Calendly link for all durations
  const CALENDLY_URL =
    "https://calendly.com/urtailorstailor/15min";

  const options = [
    {
      title: "1-Hour Consultation",
      duration: "1 hour",
      price: 1000,
    },
    {
      title: "3-Hour Consultation",
      duration: "3 hours",
      price: 2500,
    },
    {
      title: "Full-Day Consultation",
      duration: "8 hours",
      price: 5000,
    },
  ];

  /* Load Calendly script once */
  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  /* Initialize Calendly */
  useEffect(() => {
    if (showCalendly && window.Calendly) {
      const container = document.querySelector(".calendly-inline-widget");
      if (container) container.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: container,
      });

      const handleCalendlyEvent = (e) => {
        if (
          e.origin.includes("calendly.com") &&
          e.data?.event === "calendly.event_scheduled"
        ) {
          setShowCalendly(false);
          setShowPayment(true);
        }
      };

      window.addEventListener("message", handleCalendlyEvent);
      return () =>
        window.removeEventListener("message", handleCalendlyEvent);
    }
  }, [showCalendly]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCalendly(true);
  };

  const handlePaymentSuccess = () => {
    router.push("/payment/confirmation");
  };

  return (
    <section className="py-20 bg-white/95 text-black text-center px-4 font-didot">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-extrabold text-[#800020] mb-12">
          Book a Consultation
        </h2>

        {/* MAIN ENTRY */}
        {!showOptions && !showCalendly && !showPayment && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowOptions(true)}
            className="mx-auto max-w-md border-2 border-[#800020]/60 rounded-2xl p-10 shadow-md cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-[#800020] mb-4">
              Consultation Booking
            </h3>
            <p className="mb-6">Choose your preferred duration</p>
            <span className="inline-block bg-[#800020] text-white px-8 py-4 rounded-lg font-semibold">
              Select Duration
            </span>
          </motion.div>
        )}

        {/* DURATION OPTIONS */}
        {showOptions && !showCalendly && !showPayment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleOptionSelect(option)}
                className="border-2 border-[#800020]/60 rounded-2xl p-8 shadow-md cursor-pointer"
              >
                <h4 className="text-xl font-bold text-[#800020] mb-2">
                  {option.title}
                </h4>
                <p className="mb-2">{option.duration}</p>
                <p className="font-bold text-lg">₵{option.price}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CALENDLY MODAL */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-3xl h-[600px] relative p-4">
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 text-xl font-bold"
              >
                ✕
              </button>
              <div
                className="calendly-inline-widget w-full h-full"
                style={{ minWidth: "320px" }}
              />
            </div>
          </div>
        )}

        {/* PAYMENT */}
        {showPayment && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-[#800020] mb-4">
              Complete Payment
            </h3>
            <p className="mb-4">
              Booking: <strong>{selectedOption.title}</strong>
            </p>
            <p className="mb-8 text-lg font-bold">
              Amount: ₵{selectedOption.price}
            </p>

            <PaystackButton
              email="customer@example.com"
              amount={selectedOption.price}
              onSuccess={handlePaymentSuccess}
            />
          </motion.div>
        )}

      </div>
    </section>
  );
}
