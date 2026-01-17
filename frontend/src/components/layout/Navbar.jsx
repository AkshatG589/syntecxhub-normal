"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  GraduationCap,
  Briefcase,
  BookOpen,
  Trophy,
} from "lucide-react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

/* ---------------- NAV CONFIG ---------------- */
const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Trainings", href: "/training", icon: GraduationCap },
  { label: "Internships", href: "/internships", icon: Briefcase },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Hackathons", href: "/hackathons", icon: Trophy },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* ================= FLOATING NAVBAR ================= */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
        <div
          className="
            pointer-events-auto
            flex items-center justify-between
            px-6 h-14
            w-[96%] max-w-7xl
            backdrop-blur-xl bg-white/80
            border border-gray-200
            rounded-xl shadow-sm
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/logo.png"
                alt="Syntecxhub"
                width={28}
                height={28}
                priority
              />
              <span className="font-semibold text-sm">Syntecxhub</span>
            </Link>

            {/* Divider */}
            <span className="hidden md:block text-gray-500">|</span>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4 text-sm">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`transition ${
                      active
                        ? "text-black font-medium"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <Link
                href="/sign-in"
                className="text-sm text-gray-600 hover:text-black"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-sm px-4 py-1.5 rounded-full bg-black text-white hover:bg-gray-900 transition"
              >
                Get started
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton />

                <div className="hidden lg:flex flex-col text-xs">
                  <span className="font-medium text-gray-800 truncate max-w-[160px]">
                    {user?.fullName}
                  </span>
                  <span className="text-gray-500 truncate max-w-[160px]">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </div>
            </SignedIn>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-700"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE BACKDROP ================= */}
      <div
        className={`
          fixed inset-0 z-50
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE SLIDER ================= */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-full w-80
          bg-white shadow-xl
          flex flex-col
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo.png"
              alt="Syntecxhub"
              width={28}
              height={28}
            />
            <span className="font-semibold">Syntecxhub</span>
          </div>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-6 space-y-2 text-sm">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                  ${
                    active
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer (USER INFO FIXED) */}
        <div className="p-6 border-t">
          <SignedOut>
            <div className="flex flex-col gap-3">
              <Link
                href="/sign-in"
                className="text-center py-2 rounded-md border"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-center py-2 rounded-md bg-black text-white"
              >
                Get started
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton />
              <div className="flex flex-col text-xs">
                <span className="font-medium text-gray-800 truncate max-w-[160px]">
                  {user?.fullName}
                </span>
                <span className="text-gray-500 truncate max-w-[160px]">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
          </SignedIn>
        </div>
      </aside>
    </>
  );
}
