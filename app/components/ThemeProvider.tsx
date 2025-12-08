'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  themeClasses: {
    bg: string;
    text: string;
    border: string;
    textMuted: string;
    textMutedMore: string;
    hoverBg: string;
    hoverText: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClasses = {
    bg: isDarkTheme ? 'bg-black' : 'bg-white',
    text: isDarkTheme ? 'text-white' : 'text-black',
    border: isDarkTheme ? 'border-white' : 'border-black',
    textMuted: isDarkTheme ? 'text-white/70' : 'text-black/70',
    textMutedMore: isDarkTheme ? 'text-white/50' : 'text-black/50',
    hoverBg: isDarkTheme ? 'hover:bg-white' : 'hover:bg-black',
    hoverText: isDarkTheme ? 'hover:text-black' : 'hover:text-white',
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

