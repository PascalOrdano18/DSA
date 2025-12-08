'use client'
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { PageLayout } from './PageLayout';

type TopicPageProps = {
  title: string;
  description: string;
};

export function TopicPage({ title, description }: TopicPageProps) {
  const { themeClasses } = useTheme();

  return (
    <PageLayout>
      <section>
        <div className="mb-8">
          <Link
            href="/"
            className={`text-sm mb-4 hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center gap-2 ${themeClasses.text}`}
          >
            ← Back to Topics
          </Link>
          <h2 className={`text-4xl font-bold mb-2 ${themeClasses.text}`}>
            {title}
          </h2>
          <p className={themeClasses.textMuted}>
            {description}
          </p>
        </div>
        <div className={`border-2 ${themeClasses.border} p-16 text-center ${themeClasses.bg}`}>
          <p className={`text-lg ${themeClasses.textMutedMore}`}>
            Coming soon. This section is under development.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

