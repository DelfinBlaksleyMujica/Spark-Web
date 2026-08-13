import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/generals/Navbar";
import Footer from "@/components/generals/Footer";
import WhatsAppButton from "@/components/generals/WhatsAppButton";
import ClarityScript from "@/components/generals/ClarityScripts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Sparkclub | Eventos y experiencias corporativas en minutos";
const siteDescription =
  "Nevenka, la IA de Sparkclub, diseña eventos y experiencias corporativas a medida con proveedores certificados en solo 10 minutos.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.sparkclub.xyz"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.sparkclub.xyz",
    siteName: "Sparkclub",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sparkclub",
  url: "https://www.sparkclub.xyz",
  logo: "https://www.sparkclub.xyz/images/Logos/Logo_SparkClub_Original.webp",
  sameAs: [
    "https://www.instagram.com/sparkclub.xyz",
    "https://www.linkedin.com/company/spark-latam",
    "https://x.com/SparkclubXYZ",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TN7MK86TX9"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TN7MK86TX9');
          `}
        </Script>
        <Navbar />
        {children}
        <ClarityScript />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
