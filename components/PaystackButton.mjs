"use client";

import { useEffect } from "react";

export default function PaystackButton({ email, amount, onSuccess }) {
  // Convert amount to kobo for Paystack
  const amountInKobo = amount * 100;

  useEffect(() => {
    // Load Paystack script dynamically if not already loaded
    if (!document.getElementById("paystack-script")) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.id = "paystack-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePayment = () => {
    if (!window.PaystackPop) {
      alert("Paystack is not loaded yet. Please try again.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_f6d4d2ab1d7c60c12eddd02c2fa31738d8239785", // Your test public key
      email: email,
      amount: amountInKobo,
      currency: "GHS",
      callback: function (response) {
        if (onSuccess) onSuccess(response);
      },
      onClose: function () {
        alert("Payment was cancelled.");
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-[#800020] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a10030] transition-all duration-300 hover:scale-105"
    >
      Pay Now
    </button>
  );
}
