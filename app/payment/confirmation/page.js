"use client";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 font-didot">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#800020] mb-6">
        Thank You!
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-black/80">
        Your booking has been confirmed. We look forward to connecting with you.
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-[#800020] text-white font-semibold px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-[#800020]"
      >
        Back to Home
      </button>
    </div>
  );
}
