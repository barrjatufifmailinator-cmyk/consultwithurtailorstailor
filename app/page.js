import Hero from "../components/Hero.mjs";
import Header from "../components/Header.mjs";
import About from "../components/About.mjs";
import Services from "../components/Services.mjs";
import Booking from "../components/Booking.mjs";
import AffiliateBrands from "../components/AffiliateBrands.mjs";
import Contact from "../components/Contact.mjs";
import Footer from "../components/Footer.mjs";

export default function Page() {
  return (
    <main className="font-sans bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Booking />
      <AffiliateBrands />
      <Contact /> {/* Let's Connect */}
      <Footer />
    </main>
  );
}
