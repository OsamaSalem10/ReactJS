import { useState, useEffect } from "react";

export function useDarkMode(defaultTheme = "light") {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bs-theme") || defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
}
