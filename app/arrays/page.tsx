'use client'
import BackToHome from '../components/BackToHome';
import CodeSnippet from '../components/CodeSnippet';
import { PageLayout } from '../components/PageLayout';
import { Array } from '../structures/arrays/ArrayClass';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../components/ThemeProvider';

export default function ArraysPage() {

    const [addValue, setAddValue] = useState<number | null>(null);
    const [len, setLen] = useState<number>(5);
    const [forceUpdate, setForceUpdate] = useState(0);
    const { themeClasses, isDarkTheme } = useTheme();

    const ArrayRef = useRef(new Array(len));
    const array = ArrayRef.current;    

    useEffect(() => {
        array.populate();
        setForceUpdate(prev => prev + 1);
    }, []);

    const handleAdd = () => {
        if(addValue === null) return;
        const newLen = len + 1;
        setLen(newLen);
        array.setLength(newLen);
        array.setValue(len, addValue);
        setForceUpdate(prev => prev + 1);
        setAddValue(null);
    }


    const delValue = () => {
        array.deleteValue();
        setForceUpdate(v => v + 1);
    }

    return (
        <PageLayout>
            <section>
                <div className="mb-8">
                    <BackToHome />
                    <h2 className={`text-4xl font-bold mb-2 ${themeClasses.text}`}>Arrays</h2>
                    <p className={themeClasses.textMuted}>
                        Interactively visualize array operations like insertions and deletions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Array Visualization and Controls */}
                    <div className="flex flex-col gap-6">
                        <div
                            className={`border-2 ${themeClasses.border} p-6 ${isDarkTheme ? 'bg-black' : 'bg-white'} transition-colors duration-200`}
                            onClick={() => setForceUpdate(v => v + 1)}
                        >
                            { array.draw() }
                        </div>
                        
                        <div className="flex flex-wrap gap-4 items-center">
                            <input
                                type="number"
                                value={addValue ?? ''}
                                onChange={(e) => setAddValue(Number(e.target.value))}
                                placeholder="Value"
                                className={`px-4 py-2 rounded border-2 ${themeClasses.border} ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}
                            />
                            <button
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-4 py-2 rounded ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => handleAdd()}
                            >
                                Add
                            </button>

                            <button
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-4 py-2 rounded ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => {
                                    array.populate();
                                    setForceUpdate(v => v + 1);
                                }}
                            >
                                Populate
                            </button> 
                            <button
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-4 py-2 rounded ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => {
                                    array.populateRandom();
                                    setForceUpdate(v => v + 1);
                                }}
                            >
                                Random Populate
                            </button> 

                            <button
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-4 py-2 rounded ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => delValue()}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Code Snippet */}
                    <div className="flex flex-col">
                        <CodeSnippet 
                            code={(lang) => array.code(lang) || ''}
                            language="typescript"
                            availableLanguages={['typescript', 'C']}
                        />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

