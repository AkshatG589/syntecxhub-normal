"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram,ArrowRight , Mail, Phone } from "lucide-react";
import { SignedOut } from "@clerk/nextjs";
import Btn from "@/components/ui/button/Btn";
import { subscribeToNewsletter } from "@/lib/api/newsletter/newsletter";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      await subscribeToNewsletter(email);
      setEmail("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Syntecxhub</h2>

          <p className="text-gray-400">Kanpur Nagar, Uttar Pradesh</p>

          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-gray-400 break-all">
              <Mail size={18} className="text-blue-400 shrink-0" />
              info@syntecxhub.com
            </p>

            <p className="flex items-center gap-2 text-gray-400">
              <Phone size={18} className="text-green-400 shrink-0" />
              +91 63937 80295
            </p>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white">
                  Training & Internship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white">
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* REFERENCES */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">
              Trusted References
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  NIC
                </a>
              </li>
              <li>
                <a
                  href="https://digitalindia.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Digital India
                </a>
              </li>
              <li>
                <a
                  href="https://www.meity.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  MeitY
                </a>
              </li>
              <li>
                <a
                  href="https://www.startupindia.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Startup India
                </a>
              </li>
              <li>
                <a
                  href="https://www.nicpet.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  NICPET
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER (SIGNED OUT ONLY) */}
        <SignedOut>
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Newsletter</h3>

            <p className="text-gray-400 mb-4 max-w-lg">
              Subscribe to receive updates, announcements, and future
              opportunities from Syntecxhub.
            </p>
<form
  onSubmit={handleSubscribe}
  className="flex flex-col sm:flex-row gap-3 max-w-md"
>
  {/* Input */}
  <div className="relative w-full">
    <Mail
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      disabled={loading}
      required
      className="
        w-full pl-10 pr-4 py-2
        rounded-lg
        bg-gray-800 text-white
        placeholder-gray-400
        border border-gray-700
        focus:outline-none
        focus:ring-2 focus:ring-gray-500
        transition
      "
    />
  </div>

  {/* Reusable Button */}
  <Btn
    type="submit"
    text="Subscribe"
    loadingText="Subscribing..."
    loading={loading}
    icon={ArrowRight}
    iconPosition="right"
    className="bg-white text-black hover:bg-gray-200"
  />
</form>

          </div>
        </SignedOut>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/share/16tJKXQbmN/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/syntecxhub/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="hover:text-blue-600 transition" />
            </a>
            <a
              href="https://www.instagram.com/syntecxhub.com_/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Syntecxhub. All rights reserved.
      </div>
    </footer>
  );
}
