'use client'
import { PageLayout } from '../components/PageLayout';
import { useTheme } from '../components/ThemeProvider';
import Link from 'next/link';

export default function AboutPage() {
    const { themeClasses } = useTheme();

    return (
        <PageLayout>
            <section className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight ${themeClasses.text}`}>
                        About This Project
                    </h1>
                    <div className={`h-1 w-24 ${themeClasses.bg === 'bg-white' ? 'bg-black' : 'bg-white'} mb-8`}></div>
                </div>

                {/* Main Content */}
                <div className="space-y-8 text-lg leading-relaxed">
                    <p className={`${themeClasses.text} text-xl`}>
                        We're two students from <span className="font-semibold">ITBA</span> (Instituto Tecnológico de Buenos Aires) who love computer science. 
                        But here's the thing—we didn't want to just grind LeetCode problems in isolation.
                    </p>

                    <p className={themeClasses.textMuted}>
                        We wanted something more. Something that would help us truly <em>understand</em> the algorithms and data structures 
                        we were learning, not just memorize solutions. So we built this.
                    </p>

                    <div className={`border-l-4 pl-6 py-4 my-8 ${themeClasses.border}`}>
                        <p className={`${themeClasses.text} italic text-lg`}>
                            "Learning isn't just about solving problems—it's about visualizing how things work, 
                            experimenting with different approaches, and building intuition through interaction."
                        </p>
                    </div>

                    <h2 className={`text-3xl font-bold mt-12 mb-6 ${themeClasses.text}`}>
                        Who This Is For
                    </h2>

                    <p className={themeClasses.textMuted}>
                        This platform is designed for students diving into:
                    </p>

                    <ul className={`list-disc list-inside space-y-3 ml-4 ${themeClasses.textMuted}`}>
                        <li><span className="font-medium">Matemática Discreta</span> — understanding the mathematical foundations</li>
                        <li><span className="font-medium">Imperative Programming</span> — mastering the fundamentals</li>
                        <li><span className="font-medium">Object-Oriented Programming</span> — building robust structures</li>
                        <li><span className="font-medium">Data Structures & Algorithms</span> — the core of computer science</li>
                    </ul>

                    <h2 className={`text-3xl font-bold mt-12 mb-6 ${themeClasses.text}`}>
                        Our Sources
                    </h2>

                    <p className={themeClasses.textMuted}>
                        We've drawn inspiration from:
                    </p>

                    <ul className={`list-disc list-inside space-y-3 ml-4 ${themeClasses.textMuted}`}>
                        <li>The classic <span className="font-medium">Introduction to Algorithms</span> textbook</li>
                        <li>Our coursework and lectures at <span className="font-medium">ITBA</span></li>
                        <li>Online resources and the broader CS community</li>
                    </ul>

                    <h2 className={`text-3xl font-bold mt-12 mb-6 ${themeClasses.text}`}>
                        We'd Love Your Feedback
                    </h2>

                    <p className={themeClasses.textMuted}>
                        This is a learning project, and we're constantly improving it. If you have suggestions, 
                        find bugs, or want to contribute ideas, we're all ears. After all, the best way to learn 
                        is by building, sharing, and iterating together.
                    </p>

                    <div className={`mt-12 p-6 rounded-lg border-2 ${themeClasses.border} ${themeClasses.bg}`}>
                        <p className={`${themeClasses.text} text-center`}>
                            <span className="font-semibold">Happy learning!</span> 🚀
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-16">
                    <Link 
                        href="/"
                        className={`inline-block px-6 py-3 border-2 ${themeClasses.border} ${themeClasses.bg} ${themeClasses.text} ${themeClasses.hoverBg} ${themeClasses.hoverText} transition-all cursor-pointer font-medium`}
                    >
                        ← Back to Topics
                    </Link>
                </div>
            </section>
        </PageLayout>
    );
}
