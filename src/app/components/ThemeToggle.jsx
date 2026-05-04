"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    }
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-black text-slate-900 shadow-sm transition hover:scale-105 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {dark ? "🌙 ليلي" : "☀️ نهاري"}
    </button>
  );
}