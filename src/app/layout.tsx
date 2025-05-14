import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400","500","600","700"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern studio",
  description: "Biuro nieruchomości, którego potrzebujesz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
      <link rel="icon" href="/Logo.svg" />
    </head>
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </>
  );
}
