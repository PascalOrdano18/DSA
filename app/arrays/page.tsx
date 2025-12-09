'use client'
import BackToHome from '../components/BackToHome';
import CodeSnippet from '../components/CodeSnippet';
import { PageLayout } from '../components/PageLayout';
import { Array } from '../structures/arrays/ArrayClass';
import { useState, useRef, useEffect } from 'react';

export default function ArraysPage() {

    const [addValue, setAddValue] = useState<number | null>(null);
    const [len, setLen] = useState<number>(5);
    const [forceUpdate, setForceUpdate] = useState(0);

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

    return (
        <PageLayout>
            <section>
                <div className='mb-8'>
                    <BackToHome />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* Left Column - Array Visualization and Controls */}
                    <div className='flex flex-col gap-6'>
                        <div>
                            { array.draw() }
                        </div>
                        
                        <div className='flex gap-4 items-center'>
                            <input
                                type="number"
                                value={addValue ?? ''}
                                onChange={(e) => setAddValue(Number(e.target.value))}
                                placeholder="Valor"
                                className='px-4 py-2 border border-gray-300 rounded'
                            />
                            <button
                                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                                onClick={() => handleAdd()}
                            >
                                Agregar
                            </button>

                            <button onClick={() => {
                                array.populate();
                                setForceUpdate(v => v + 1);
                            }}>
                                Populate
                            </button> 
                            <button onClick={() => {
                                array.populateRandom();
                                setForceUpdate(v => v + 1);
                            }}>
                                Random Populate
                            </button> 
                        </div>
                    </div>

                    {/* Right Column - Code Snippet */}
                    <div className='flex flex-col'>
                        <CodeSnippet code={array.code()} />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

