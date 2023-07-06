import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "RyadDev",
    template: "%s | RyadDev",
  },
  description:
    "Soyez présent sur le web ! Vous êtes dirigeant d’une PME, artisan création site internet pas cher à partir de 2500 Dh création site web rabat",
  openGraph: {
    title: "creation site web rabat pas cher",
    description:
      "Création site web à Rabat, votre developper à Rabat, ✅ Meilleur prix pour la création de site web vitrine, e-commerce, portfolio, landing page à Rabat.",
    url: "https://ryaddev.vercel.app/",
    siteName: "ryaddev.com",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://ryaddev.vercel.app/",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-64ZG4DRSD3"
      ></Script>
      <Script id="google-analytics">
        {`   window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-64ZG4DRSD3');`}
      </Script>
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
