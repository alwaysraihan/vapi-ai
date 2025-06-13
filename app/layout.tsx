import type { Metadata } from "next";
import { dosis } from "@/fonts/font";
import "./globals.css";

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
        {children}
       
      </body>
    </html>
  );
}
