import type { Metadata } from "next";
import { dosis } from "@/fonts/font";
import "./globals.css";
import Navbar from "@/features/shared/navbar/navbar";
import Footer from "@/features/shared/footer/footer";
import VapiAI from "./VapiAI";

export const metadata: Metadata = {
  title: "Ring2Poll",
  description: "Ring2Poll",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
          
        {/* Vapi Voice Assistant */}
        <VapiAI
          autoStart={false}
         />
      </body>
    </html>
  );
}
