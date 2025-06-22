"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDown } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

interface SubLink {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  subLinks?: SubLink[];
}

const Header = () => {
  const pathname = usePathname();

  // Navigation items configuration with sub-links
  const navItems: NavItem[] = [
    {
      href: "/",
      label: "Home",
      subLinks: [
        { href: "/#about", label: "About Us" },
        { href: "/#services", label: "Services" },
        { href: "/#sustainability", label: "Sustainability" },
        { href: "/#timeline", label: "Timeline" },
        { href: "/#testimonials", label: "Testimonials" },
        { href: "/#analytics", label: "Analytics" },
        { href: "/#customers", label: "Customers" },
      ],
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/about-us",
      label: "About Us",
    },
    {
      href: "/career",
      label: "Careers",
    },
    {
      href: "/contact",
      label: "Contact Us",
    },
  ];

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Function to check if a sub-link is active
  const isActiveSubLink = (href: string) => {
    if (href.includes("#")) {
      const [path] = href.split("#");
      return pathname === path;
    }
    return pathname === href;
  };

  // Function to get link styles based on active state
  const getLinkStyles = (href: string, isSubLink = false) => {
    const baseStyles = isSubLink
      ? "block px-8 py-2 rounded transition-all duration-200 text-base font-medium"
      : "block px-5 py-2 rounded transition-all duration-200 font-bold";

    const activeStyles = "bg-second text-white";
    const inactiveStyles = "hover:bg-gray-100/10 hover:text-gray-200";

    const isActive = isSubLink ? isActiveSubLink(href) : isActiveRoute(href);

    return `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;
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
                <div key={item.href}>
                  {item.subLinks ? (
                    <Collapsible defaultOpen={isActiveRoute(item.href)}>
                      <div className="group">
                        <div className="flex items-center">
                          <SheetClose asChild className="flex-1">
                            <Link
                              href={item.href}
                              className={getLinkStyles(item.href)}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>

                          <CollapsibleTrigger asChild>
                            <button className="p-2 hover:bg-gray-100/10 rounded transition-all duration-200">
                              <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </button>
                          </CollapsibleTrigger>
                        </div>

                        <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1 data-[state=open]:slide-in-from-left-1">
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-second/30 pl-2">
                            {item.subLinks.map((subLink) => (
                              <SheetClose key={subLink.href} asChild>
                                <Link
                                  href={subLink.href}
                                  className="block px-3 py-2 rounded transition-all duration-200 text-base font-light"
                                >
                                  {subLink.label}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ) : (
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={getLinkStyles(item.href)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
};

export default Header;
