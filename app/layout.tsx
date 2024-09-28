import type { Metadata } from "next";
import {Inter} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/main/Navbar";



const inter = Inter({subsets: ['latin']});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shrihari's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`} 
        // dark pirple bg
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
