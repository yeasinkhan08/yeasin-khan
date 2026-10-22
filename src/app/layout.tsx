import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yeasin Khan - Full Stack Developer Portfolio",
  description: "Personal portfolio of Yeasin Khan, a Full Stack Developer crafting modern, high-performance web applications from frontend to backend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-sans antialiased selection:bg-[#f15b3a] selection:text-white">
        <Navbar />
        <main className="flex-1 bg-black text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
