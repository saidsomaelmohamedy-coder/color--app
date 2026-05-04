"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-900 shadow-sm transition hover:scale-105 hover:bg-slate-50 dark:border-white/25 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
      aria-label="تبديل الوضع الليلي والنهاري"
    >
      {dark ? "🌙 ليلي" : "☀️ نهاري"}
    </button>
  );
}