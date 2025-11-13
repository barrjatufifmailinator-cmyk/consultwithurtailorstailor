import Header from "../components/Header.mjs";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Consult with UrTailorsTailor",
  description: "Fashion consulting, bookings and brand development by Joey Darko.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="scroll-smooth">
        <Header />
        {children}

        {/* ✅ Calendly script placed inside <body> */}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
      </body>
    </html>
  );
}
