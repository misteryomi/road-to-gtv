import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Become the Next Endorsed UK Global Talent",
  description: "Join our community of tech professionals and learn how to present your achievements effectively for the Global Talent Visa application. Comprehensive guidance based on real experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className=" pt-16">
          {children}
        </div>

        <footer className="bg-black/90 text-gray-400 py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 Road to GTV. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="terms" className="hover:text-white">Terms</a>
                <a href="privacy" className="hover:text-white">Privacy</a>
                <a href="contact" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
