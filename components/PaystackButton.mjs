"use client";
import { useEffect, useState } from "react";

export default function PaystackButton({ email, amount, onSuccess }) {
  const publicKey = "pk_test_f6d4d2ab1d7c60c12eddd02c2fa31738d8239785";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!document.getElementById("paystack-script")) {
      const s = document.createElement("script");
      s.src = "https://js.paystack.co/v1/inline.js";
      s.id = "paystack-script";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const handleClick = () => {
    if (!window.PaystackPop) {
      alert("Paystack not loaded yet. Please try again in a moment.");
      return;
    }

    if (!email || !email.includes("@")) {
      alert("Please provide a valid email.");
      return;
    }

    setLoading(true);

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      currency: "GHS",
      callback(response) {
        setLoading(false);
        onSuccess(response);
      },
      onClose() {
        setLoading(false);
        alert("Payment was cancelled.");
      },
    });

    handler.openIframe();
  };

  return (
    <button onClick={handleClick} disabled={loading} className="bg-[#800020] text-white font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform duration-200 disabled:opacity-60">
      {loading ? "Processing..." : `Pay Now — ₵${amount}`}
    </button>
  );
}
