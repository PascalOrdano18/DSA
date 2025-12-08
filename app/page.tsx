'use client'
import Link from 'next/link';
import { useTheme } from './components/ThemeProvider';
import { PageLayout } from './components/PageLayout';
import { topics } from './topics';

export default function Home(){
    const { themeClasses, isDarkTheme } = useTheme();

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="mb-20">
                <h1 className={`text-6xl font-bold mb-4 tracking-tight ${themeClasses.text}`}>
                    Learn Data Structures<br />
                    & Algorithms
                </h1>
                <p className={`text-xl ${themeClasses.textMuted} max-w-2xl mt-6`}>
                    Interactive visualizations to help you understand complex algorithms and data structures. 
                    Explore, learn, and master computer science fundamentals.
                </p>
            </section>

            {/* Topics Grid */}
            <section>
                <h2 className={`text-3xl font-bold mb-8 ${themeClasses.text}`}>Explore Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            href={topic.path}
                            className={`border-2 ${themeClasses.border} p-6 text-left transition-all cursor-pointer group ${themeClasses.bg} ${themeClasses.text} ${
                                isDarkTheme 
                                    ? 'hover:bg-white hover:text-black' 
                                    : 'hover:bg-black hover:text-white'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${
                                isDarkTheme 
                                    ? 'group-hover:text-black' 
                                    : 'group-hover:text-white'
                            }`}>
                                {topic.name}
                            </h3>
                            <p className={`text-sm ${themeClasses.textMuted} ${
                                isDarkTheme 
                                    ? 'group-hover:text-black/70' 
                                    : 'group-hover:text-white/70'
                            }`}>
                                {topic.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
}
