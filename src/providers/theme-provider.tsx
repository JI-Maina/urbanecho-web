import React, { useContext, useEffect, useMemo } from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import AppTheme, {
  createColorGetter,
  getColorCategory,
  getAllSemanticColors,
  LightTheme,
  DarkTheme,
  type ThemeMode,
  type AllSemanticColorPaths,
} from "../lib/theme";
import { GlobalStyles } from "@/lib/global-styles";

type Theme = ThemeMode;

type ThemeContextValue = {
  theme: Theme; // current effective theme
  toggleTheme: () => void; // user action -> locks to explicit choice
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  // Color utilities
  getColor: (colorPath: AllSemanticColorPaths) => string;
  getColorCategory: (
    category:
      | "content"
      | "background"
      | "border"
      | "surface"
      | "overlay"
      | "logo"
  ) => Record<string, string>;
  colors: Record<string, string>;
  themeObject: typeof LightTheme | typeof DarkTheme;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "theme";

// ---- Utils (SSR-safe) ----
function getStoredTheme(): Theme | null {
  try {
    if (typeof window === "undefined") return null;
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(resolved: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved; // native controls
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // If a stored theme exists, we’ll start locked to it. Otherwise we follow system.
  const stored = getStoredTheme();
  const [theme, setTheme] = React.useState<Theme>(
    stored ?? (getSystemPrefersDark() ? "dark" : "light")
  );
  const [followSystem, setFollowSystem] = React.useState<boolean>(!stored);

  // User action locks the theme (stop following system)
  const toggleTheme = () => {
    setFollowSystem(false);
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // Persist only explicit choices (lock state)
  useEffect(() => {
    try {
      if (!followSystem) localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // noop
    }
  }, [theme, followSystem]);

  // Reflect theme into DOM
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow system changes only while followSystem = true
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (followSystem) setTheme(e.matches ? "dark" : "light");
    };
    // ensure in-sync at mount
    if (followSystem) setTheme(mql.matches ? "dark" : "light");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [followSystem]);

  // Cross-tab sync: if another tab sets a theme, lock here too
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const v = e.newValue;
        if (v === "light" || v === "dark") {
          setFollowSystem(false);
          setTheme(v);
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(() => {
    const getColor = createColorGetter(theme);
    const colors = getAllSemanticColors(theme);
    const themeObject = theme === "light" ? LightTheme : DarkTheme;

    return {
      theme,
      toggleTheme,
      setTheme,
      getColor,
      getColorCategory: (category: Parameters<typeof getColorCategory>[0]) =>
        getColorCategory(category, theme),
      colors,
      themeObject,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <ScThemeProvider theme={AppTheme}>
        <GlobalStyles />
        {children}
      </ScThemeProvider>
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// Convenience hook for just getting colors
// eslint-disable-next-line react-refresh/only-export-components
export function useColors() {
  const { getColor, colors, getColorCategory } = useTheme();
  return { getColor, colors, getColorCategory };
}

// Hook for getting a specific color
// eslint-disable-next-line react-refresh/only-export-components
export function useColor(colorPath: AllSemanticColorPaths) {
  const { getColor } = useTheme();
  return getColor(colorPath);
}
