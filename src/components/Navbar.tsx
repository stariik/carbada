"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;

    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop overlay — rendered outside nav so it covers the whole screen */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 animate-fade-in md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <nav
        ref={navRef}
        className="sticky top-0 z-50 shadow-nav"
        style={{ background: "#1e3a8a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative h-10 w-40 md:h-12 md:w-48">
                <Image
                  src="/images/logo.png"
                  alt="Carbada ქარბადა"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink href="/">მთავარი</NavLink>
              <NavLink href="/contact">კონტაქტი</NavLink>
            </div>

            {/* Mobile menu button — minimum 44x44px touch target */}
            <button
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-md text-white
                         hover:bg-white/10 active:bg-white/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "მენიუს დახურვა" : "მენიუ"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu — slide-down animation */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="მობილური მენიუ"
          className={[
            "md:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ease-out",
            mobileOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
          style={{ background: "#1e3a8a" }}
        >
          <div className="px-4 py-3 flex flex-col gap-1 animate-slide-down">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>
              მთავარი
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMobileOpen(false)}>
              კონტაქტი
            </MobileNavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md
                 hover:bg-white/10 transition-all duration-200 tracking-wide"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center px-4 text-base font-medium text-white/90 hover:text-white
                 hover:bg-white/10 active:bg-white/20 rounded-md transition-colors"
      style={{ minHeight: "52px" }}
    >
      {children}
    </Link>
  );
}
