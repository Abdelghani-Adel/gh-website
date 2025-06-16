"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCookie, setCookie } from "@/lib/utils";
import { LANGUAGE_TOKEN_KEY } from "@/utils/constants";
import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  useEffect(() => {
    const savedLanguage = getCookie(LANGUAGE_TOKEN_KEY) ?? "en";
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    setCookie(LANGUAGE_TOKEN_KEY, newLanguage);
    window.location.reload();
  };

  if (!selectedLanguage) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[120px] border-second text-second">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <div className="flex items-center gap-2">
                <span>
                  <img src="/english.png" width={20} />
                </span>
                <span>English</span>
              </div>
            </SelectItem>

            <SelectItem value="de">
              <div className="flex items-center gap-2">
                <img src="/deutsch.png" width={20} />
                <span>Deutsch</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LanguageSelector;
