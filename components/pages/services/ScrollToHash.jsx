"use client";
import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // delay for async content
    }
  }, []);

  return null;
};

export default ScrollToHash;
