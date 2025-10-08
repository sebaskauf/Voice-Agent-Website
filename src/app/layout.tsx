import type { Metadata } from "next";
import { EB_Garamond, Sora } from "next/font/google";
import "./globals.css";
import PixelWave from "@/components/PixelWave";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OptimAIte - KI-Lösungen für die Zukunft",
  description: "Transformieren Sie Ihr Geschäft mit intelligenten KI-Agenten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${garamond.variable} ${sora.variable} antialiased`}
      >
        <PixelWave />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
