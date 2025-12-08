'use client'
import { useTheme } from './ThemeProvider';

export function Footer() {
  const { themeClasses } = useTheme();

  return (
    <footer className={`border-t ${themeClasses.border} mt-20 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className={`text-sm ${themeClasses.textMutedMore}`}>
          DSA Visualizer — Learn through visualization
        </p>
      </div>
    </footer>
  );
}

