"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSelector from "./LanguageSelector";
import { useEffect, useState } from "react";
import { getSectionData } from "@/utils/ApiService";

interface NavItem {
  href: string;
  label: string;
}

const Header = () => {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  // Fixed hrefs
  const fixedNavMap = {
    home: "/",
    aboutUs: "/about-us",
    services: "/services",
    career: "/career",
    contact: "/contact",
  };

  // Default JSON fallback
  const defaultJson = {
    navItems: [
      { key: "home", label: "Home" },
      { key: "aboutUs", label: "About Us" },
      { key: "services", label: "Services" },
      { key: "career", label: "Join our team" },
      { key: "contact", label: "Contact Us" },
    ],
  };

  const mergeItems = (
    apiItems: { key: string; label: string }[],
    fixedMap: Record<string, string>
  ): NavItem[] =>
    apiItems.map((item) => ({
      href: fixedMap[item.key],
      label: item.label,
    }));

  // Fetch navigation labels
  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const data = await getSectionData(30);
        console.log(data);
        setNavItems(mergeItems(data.navItems, fixedNavMap));
      } catch (err) {
        console.error("Error fetching navigation labels:", err);
        setNavItems(mergeItems(defaultJson.navItems, fixedNavMap));
      }
    };
    fetchLabels();
  }, []);

  const isActiveRoute = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const getLinkStyles = (href: string) =>
    `block px-5 py-2 rounded transition-all duration-200 font-bold ${
      isActiveRoute(href)
        ? "bg-second text-white"
        : "hover:bg-gray-100/10 hover:text-gray-200"
    }`;

  return (
    <header className="fixed h-24 z-20 top-0 w-screen transition-all duration-150 ease-in-out bg-white shadow-lg">
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

          <SheetContent
            side="left"
            className="bg-main border-main text-white overflow-y-auto"
          >
            <SheetHeader>
              <SheetClose asChild>
                <Link href="/" className="relative block h-[50px] w-[100px]">
                  <Image src="/logo_white.png" alt="Logo" fill />
                </Link>
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-col mt-10 space-y-2 text-xl">
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
