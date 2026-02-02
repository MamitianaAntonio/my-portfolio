import { useEffect, useState } from "react";

// custom hook to manage theme (dark/light mode)
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("isDarkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};
