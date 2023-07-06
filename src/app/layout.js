import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryad Portfolio",
  description: "This is my Portfolio built using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

        {children}</body>
    </html>
  );
}
