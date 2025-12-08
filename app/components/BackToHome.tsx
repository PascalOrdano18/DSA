import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function BackToHome(){
    const { themeClasses, isDarkTheme } = useTheme();
    return(
        <Link
            href="/"
            className={`text-sm mb-4 hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center gap-2 ${themeClasses.text}`}
        >
            ← Back to Topics
        </Link>       
    )
}
