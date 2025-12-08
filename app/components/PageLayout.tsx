'use client'
import { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';
import { Header } from './Header';
import { Footer } from './Footer';

export function PageLayout({ children }: { children: ReactNode }) {
  const { themeClasses } = useTheme();

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-200`}>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

