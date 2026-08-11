"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Laptop } from "lucide-react";

function subscribe() {
  return () => {};
}

function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!hydrated) {
    return (
      <div className="w-9 h-9 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)]" />
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Switch visual theme"
        aria-expanded={open}
        aria-haspopup="true"
        className="p-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 flex items-center justify-center"
      >
        {resolvedTheme === "dark" ? (
          <Moon className="w-4 h-4 text-sky-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl glass-panel p-1.5 border border-[var(--border-color)] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 bg-[var(--bg-surface)] text-[var(--text-primary)]">
          <button
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              theme === "light"
                ? "bg-blue-600 text-white"
                : "text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              theme === "dark"
                ? "bg-blue-600 text-white"
                : "text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>

          <button
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              theme === "system"
                ? "bg-blue-600 text-white"
                : "text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}
