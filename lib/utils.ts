import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Cookie helper functions
export const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export function getLangCookie(): string | null {
  if (typeof window === "undefined") {
    // Server-side
    try {
      const { cookies } = require("next/headers");
      const cookie = cookies().get("LTS_Language");
      if (!cookie?.value) return null;
      return cookie.value;
    } catch (error) {
      console.error("Error parsing cookie from server cookies:", error);
      return null;
    }
  } else {
    // Client-side
    try {
      const cookie = getCookie("LTS_Language");
      if (!cookie) return null;
      return cookie;
    } catch (error) {
      console.error("Error parsing user from client cookies:", error);
      return null;
    }
  }
}
