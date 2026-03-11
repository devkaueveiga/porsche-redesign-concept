import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

// Using Oswald as an alternative to DIN Condensed 
// as Google Fonts 'DIN Condensed' is not standardly available, but Oswald gives a very similar tall/condensed bold luxury look.
const din = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-din",
});

export const metadata: Metadata = {
  title: "Porsche GT3 RS Concept",
  description: "Porsche Redesign Concept — Study project, not affiliated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${din.variable} font-sans antialiased overflow-x-hidden bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
