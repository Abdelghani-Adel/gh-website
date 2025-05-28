"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items configuration
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/career", label: "Careers" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Function to get link styles based on active state
  const getLinkStyles = (href: string) => {
    const baseStyles = "block p-5 rounded transition-all duration-200";
    const activeStyles = "bg-second text-white";
    const inactiveStyles = "hover:bg-gray-100 hover:text-gray-800";

    return `${baseStyles} ${
      isActiveRoute(href) ? activeStyles : inactiveStyles
    }`;
  };

  return (
    <header
      className={`fixed z-20 w-full transition-all duration-150 ease-in-out ${
        isScrolled ? "bg-main" : ""
      }`}
    >
      <Sheet>
        <div className="max-w-6xl container mx-auto flex items-center justify-between p-5 relative z-20">
          <div className="flex items-center gap-2 text-white">
            <SheetTrigger asChild>
              <button>
                <GiHamburgerMenu className="text-3xl" />
              </button>
            </SheetTrigger>

            <Link href="/" className="relative block h-[50px] w-[100px]">
              <Image src="/logo.png" alt="Logo" fill />
            </Link>
          </div>

          <div>
            <button className="text-white border-2 border-white px-5 py-2 rounded-full text-xl cursor-pointer hover:bg-white hover:text-primary transition-colors duration-200">
              Careers
            </button>
          </div>

          <SheetContent side="left">
            <SheetHeader>
              <SheetClose asChild>
                <Link href="/" className="relative block h-[50px] w-[100px]">
                  <Image src="/logo.png" alt="Logo" fill />
                </Link>
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-col mt-10 space-y-4 text-xl font-bold">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link href={item.href} className={getLinkStyles(item.href)}>
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
};

export default Header;
