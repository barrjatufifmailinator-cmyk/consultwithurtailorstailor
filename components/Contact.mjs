import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="letsconnect"
      className="py-20 px-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(128,0,32,0.95) 0%, rgba(160,50,50,0.72) 40%, rgba(245,240,230,0.98) 100%)",
        boxShadow:
          "0 20px 50px rgba(0,0,0,0.22), inset 0 -24px 48px rgba(255,255,255,0.04)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        WebkitFontSmoothing: "antialiased"
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
        <p className="mb-6 text-lg text-white/90">
          Reach out via social media or email for collaborations or inquiries.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/urtailorstailor.official"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/90 transition transform hover:scale-110 duration-300"
            aria-label="Instagram"
          >
            <Instagram size={28} className="text-white" />
          </a>

          <a
            href="mailto:Joeydarko3003@gmail.com"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/90 transition transform hover:scale-110 duration-300"
            aria-label="Email"
          >
            <Mail size={28} className="text-white" />
          </a>

          <a
            href="http://wa.link/icstz3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/90 transition transform hover:scale-110 duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={28} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}