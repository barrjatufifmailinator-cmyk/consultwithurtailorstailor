"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PaystackButton from "./PaystackButton.mjs";

export default function Booking() {
  const router = useRouter();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const bookings = [
    {
      title: "1-Hour Consultation",
      duration: "1 hour",
      price: 1000,
      calendly: "https://calendly.com/urtailorstailorhq/30min",
    },
    {
      title: "3-Hour Consultation",
      duration: "3 hours",
      price: 2500,
      calendly: "https://calendly.com/urtailorstailorhq/1-hour-meeting-clone",
    },
    {
      title: "Full-Day Consultation",
      duration: "8 hours",
      price: 5000,
      calendly: "https://calendly.com/urtailorstailorhq/1-hour-meeting-clone-1",
    },
  ];

  // Load Calendly script once
  useEffect(() => {
    const scriptId = "calendly-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  // Initialize Calendly modal and listen for booking events
  useEffect(() => {
    if (showCalendly && selectedBooking && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: selectedBooking.calendly,
        parentElement: document.querySelector(".calendly-inline-widget"),
        prefill: {},
        utm: {},
      });

      // Listen for booking completion
      window.addEventListener("message", (e) => {
        if (
          e.origin.includes("calendly.com") &&
          e.data.event &&
          e.data.event === "calendly.event_scheduled"
        ) {
          setShowCalendly(false);
          setShowPayment(true);
        }
      });
    }
  }, [showCalendly, selectedBooking]);

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
    setShowCalendly(true);
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    router.push("/payment/confirmation");
  };

  return (
    <section className="py-20 bg-white/95 text-black text-center px-4 font-didot">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#800020] mb-12">
          Book a Consultation
        </h2>

        {!showPayment && !showCalendly && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookings.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(128,0,32,0.25)" }}
                className="relative border-2 border-[#800020]/60 bg-white/95 rounded-2xl p-8 flex flex-col items-center justify-between shadow-md cursor-pointer overflow-hidden"
                onClick={() => handleBookingClick(slot)}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#800020]">
                  {slot.title}
                </h3>
                <p className="text-sm md:text-lg mb-1 text-black/80">{slot.duration}</p>
                <p className="text-lg md:text-xl font-bold mb-6 text-black">₵{slot.price}</p>
                <span className="inline-block bg-[#800020] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                  Book Now
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Calendly Modal */}
        {showCalendly && selectedBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-3xl h-[600px] relative p-4">
              <button
                className="absolute top-4 right-4 text-black font-bold text-xl"
                onClick={() => setShowCalendly(false)}
              >
                ✕
              </button>
              <div
                className="calendly-inline-widget w-full h-full"
                style={{ minWidth: "320px", height: "100%" }}
              ></div>
            </div>
          </div>
        )}

        {/* Payment Section */}
        {showPayment && selectedBooking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#800020]">
              Complete Your Payment
            </h3>
            <p className="text-lg mb-6">
              You are booking: <span className="font-semibold">{selectedBooking.title}</span>
            </p>
            <p className="text-lg mb-8">
              Amount: <span className="font-bold">₵{selectedBooking.price}</span>
            </p>

            <PaystackButton
              email="customer@example.com"
              amount={selectedBooking.price}
              onSuccess={handlePaymentSuccess}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
