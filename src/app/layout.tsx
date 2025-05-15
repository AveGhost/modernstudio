import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation.component";
import Footer from "./components/footer/footer.component";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400","500","600","700"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
        className={`${montserrat.variable} ${cormorantGaramond.variable} ${inter.variable} antialiased`}
      >
        <div className="max-w-[1270px] mx-auto">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
    </>
  );
}
