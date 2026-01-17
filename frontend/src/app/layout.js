import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Syntecxhub",
  description: "Structured, project-based learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ClerkProvider must be the FIRST thing inside body */}
        <ClerkProvider>
          <Navbar />

          <main className="pt-20  min-h-screen">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
