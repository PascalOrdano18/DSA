'use client'
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export default function CodeSnippet({ 
  code, 
  language = 'javascript',
  showLineNumbers = true,
  title 
}: CodeSnippetProps) {
  const { themeClasses, isDarkTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');
  const maxLineNumberWidth = lines.length.toString().length;

  return (
    <div className={`rounded-lg overflow-hidden border ${themeClasses.border} shadow-lg`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2 ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'} border-b ${themeClasses.border}`}>
        <div className="flex items-center gap-3">
          {title && (
            <span className={`text-sm font-semibold ${themeClasses.text}`}>
              {title}
            </span>
          )}
          <span className={`text-xs px-2 py-1 rounded ${isDarkTheme ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-all ${
            copied
              ? `${isDarkTheme ? 'bg-green-600' : 'bg-green-500'} text-white`
              : `${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} ${themeClasses.text}`
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className={`relative overflow-x-auto ${isDarkTheme ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <pre className={`p-4 m-0 font-mono text-sm leading-relaxed ${themeClasses.text}`}>
          <code className="block">
            {lines.map((line, index) => (
              <div key={index} className="flex items-start hover:bg-opacity-50 hover:bg-gray-800/30 transition-colors">
                {showLineNumbers && (
                  <span 
                    className={`inline-block text-right pr-4 select-none ${themeClasses.textMutedMore}`}
                    style={{ minWidth: `${maxLineNumberWidth * 0.6}rem` }}
                  >
                    {index + 1}
                  </span>
                )}
                <span className="flex-1 whitespace-pre">{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
