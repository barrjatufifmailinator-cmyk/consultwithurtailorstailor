import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 bg-white text-black" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 w-full">
          <Image
            src="/joey.jpg"
            alt="Joey - Fashion Consultant"
            width={1200}
            height={800}
            priority
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#800020]">
            About Me
          </h2>

          <p className="text-base md:text-lg mb-4">
            Hi, I'm Joey. I help fashion brands and individuals elevate their style,
            build their brand identity, and achieve their creative vision. From consultation to full production, I guide you every step of the way.
          </p>

          <p className="text-base md:text-lg">
            With over a decade and a half of hands-on experience in the fashion industry, Joey Darko — a fashion designer, creative director, and fashion business coach — has a passion for building capacity across all sectors of the industry.
          </p>
        </div>
      </div>
    </section>
  );
}