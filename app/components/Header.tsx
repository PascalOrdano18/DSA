'use client'
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export function Header() {
  const { themeClasses, toggleTheme, isDarkTheme } = useTheme();

  return (
    <header className={`border-b ${themeClasses.border} sticky top-0 ${themeClasses.bg} z-50 transition-colors duration-200`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className={`text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}
          >
            DSA Visualizer
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/"
              className={`text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}
            >
              Topics
            </Link>
            <button className={`text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}>
              About
            </button>
            <button
              onClick={toggleTheme}
              className={`border-2 ${themeClasses.border} px-4 py-2 text-sm font-medium ${themeClasses.bg} ${themeClasses.text} ${themeClasses.hoverBg} ${themeClasses.hoverText} transition-all cursor-pointer`}
            >
              {isDarkTheme ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

