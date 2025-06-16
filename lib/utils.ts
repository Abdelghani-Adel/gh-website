import { LANGUAGE_TOKEN_KEY } from "@/utils/constants";
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
      const { headers } = require("next/headers");

      const url = headers().get("x-url"); // custom header (set via middleware)
      const langFromQuery = url ? new URL(url).searchParams.get("lang") : null;

      const cookie = cookies().get(LANGUAGE_TOKEN_KEY)?.value;

      return langFromQuery || cookie || null;
    } catch (error) {
      console.error("Server error getting lang:", error);
      return null;
    }
  } else {
    // Client-side
    try {
      const langFromQuery = new URLSearchParams(window.location.search).get(
        "lang"
      );
      const cookie = getCookie(LANGUAGE_TOKEN_KEY);
      return langFromQuery || cookie || null;
    } catch (error) {
      console.error("Client error getting lang:", error);
      return null;
    }
  }
}
