'use client'
import { useRef, useState } from 'react';
import { Graph } from './structures/graphs/GraphClass';
import { Node } from './structures/graphs/NodeClass';


export default function Home(){
    
    const graphRef = useRef(new Graph());    
    const [version, setVersion] = useState<number>(0);


    graphRef.current.addNode(new Node(1, 10, 100, 100));
    graphRef.current.addNode(new Node(2, 20, 200, 150));
    graphRef.current.addNode(new Node(3, 30, 400, 100));
    graphRef.current.addNode(new Node(4, 40, 100, 400));
    graphRef.current.addNode(new Node(5, 50, 200, 300));

    graphRef.current.addEdge(1, 2);
    graphRef.current.addEdge(2, 3);
    graphRef.current.addEdge(1, 3);    
    graphRef.current.addEdge(1, 4);    
    graphRef.current.addEdge(2, 5);    
    graphRef.current.addEdge(2, 3);    
    graphRef.current.addEdge(4, 5);    


    const handleAddNode = () => {
        graphRef.current.addNode(new Node(6,60, 200, 250))
        //graphRef.current.draw();
        setVersion(v => v + 1);

    }

     return (
        <div>
            Welcome to DSA
            <div className='bg-white w-full h-full'>
                { graphRef.current.draw() }
            </div>

            <div>
                <button 
                    className='bg-black border-2 border-white hover:bg-yellow-300 hover:text-black text-yellow-300 transition-all'
                    onClick={() => handleAddNode()}
                >
                    Add Node
                </button>
            </div>
        </div>
    );
}
