"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white">
      <div className="flex items-center justify-between p-5 relative z-20">
        <Link href="/" className="relative block h-[50px] w-[100px]">
          <Image src="/logo.png" alt="Logo" fill />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex ms-auto gap-10 text-lg font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="block md:hidden"
          aria-label="Toggle Menu"
        >
          <IoMdMenu className="text-2xl" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white text-black transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-10" : "max-h-0"
        } z-20`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-bold">
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/career" onClick={closeMenu}>
              Career
            </Link>
          </li>
          <li>
            <Link href="/about-us" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
