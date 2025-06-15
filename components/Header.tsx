"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const pathname = usePathname();

  // Navigation items configuration
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/career", label: "Careers" },
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
    const baseStyles = "block px-5 py-2 rounded transition-all duration-200";
    const activeStyles = "bg-second text-white";
    const inactiveStyles = "hover:bg-gray-100 hover:text-gray-800";

    return `${baseStyles} ${
      isActiveRoute(href) ? activeStyles : inactiveStyles
    }`;
  };

  return (
    <header
      className={`fixed h-24 z-20 w-screen transition-all duration-150 ease-in-out bg-white shadow-lg`}
    >
      <Sheet>
        <div className="max-w-7xl container mx-auto flex items-center justify-between p-5 relative z-20">
          <div className="flex items-center gap-2 text-white">
            <SheetTrigger asChild>
              <button className="text-second">
                <GiHamburgerMenu className="text-3xl" />
              </button>
            </SheetTrigger>

            <Link href="/" className="relative block h-[50px] w-[100px]">
              <Image src="/logo.png" alt="Logo" fill />
            </Link>
          </div>

          <LanguageSelector />

          <SheetContent side="left" className="bg-main border-main text-white">
            <SheetHeader>
              <SheetClose asChild>
                <Link href="/" className="relative block h-[50px] w-[100px]">
                  <Image src="/logo_white.png" alt="Logo" fill />
                </Link>
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-col mt-10 space-y-2 text-xl font-bold">
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
