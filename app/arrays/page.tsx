'use client'
import BackToHome from '../components/BackToHome';
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
                </div>

            </section>
        </PageLayout>
    )
}

