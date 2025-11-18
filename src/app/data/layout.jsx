import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/generals/Footer";
import WhatsAppButton from "@/components/generals/WhatsAppButton";
import HeaderDataEventos from "@/components/data/eventos/HeaderDataEventos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Engagement Platform | Sparkclub , Buenos Aires Argentina",
  description: "Experiences that level up your team",
};

export default function Layout({ children }) {
  return (
    <section>
      <HeaderDataEventos />
      {children}
      <WhatsAppButton />
      <Footer />
    </section>
  );
}
