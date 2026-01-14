import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/generals/Navbar";
import Footer from "@/components/generals/Footer";
import WhatsAppButton from "@/components/generals/WhatsAppButton";
import ClarityScript from "@/components/generals/ClarityScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Event & Experience Matching Platform | Sparkclub , Buenos Aires Argentina",
  description:
    "Corporate events platform. Nevenka our AI event planner connects you with certified suppliers to create budget-friendly experiences in just 10 minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ClarityScript />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
